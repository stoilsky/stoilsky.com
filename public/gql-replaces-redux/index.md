---
title: "How GraphQL makes Redux obsolete"
date: '2020-01-05'
spoiler: "Let's building a Star Wars app with RESTful Redux, then GraphQL and compare."
---
**Redux** is meant to be your single source of truth by storing your app's state in a single, central
location and provides a standardized toolset to access and update it. **GraphQL** on the other hand gives you an easy way
to explore the operations available via your API and allows for requesting exact, granular bits of
data you might need from it.

At a glance they solve different problems. So why would the ability to make more precise data
requests eliminate the need to store stuff centrally? Let's use both to build an app and see. Que the music...

# Star Wars: The Rise of GraphQL
A long time ago in a galaxy far, far away... imagine we're in the middle of building a big, complex Star Wars fan app.
In fact imagine we're working on two versions side-by-side: one with **REST + React + Redux** stack and the other with **GraphQL + React**.
We'll call them **sw-redux** and **sw-gql** respectively.

> **sw-redux**: Star Wars fan app using RESTful API + React + Redux

> **sw-gql**: Star Wars fan app using GraphQL API + Apollo GQL + React

Apollo is currently my choice of frontend GraphQL client as explained in [Why we switched to Apollo after an year of Relay](http://localhost:8000/relay-to-apollo-gql-switch/).
But that's not really relevant for what we'll be doing - the code samples should work the same way with other clients (more or less).

Today's mission is to build a simple list of all the Star Wars movies along with their release dates.
This will be an encapsulated component that we will reuse multiple times throughout our app. It might look
something like this:

> * A New Hope 1977-05-25
> * Attack of the Clones 2002-05-16
> * The Phantom Menace 1999-05-19
> * Revenge of the Sith 2005-05-19
> * Return of the Jedi 1983-05-25
> * The Empire Strikes Back 1980-05-17
> * The Force Awakens 2015-12-11

Let's call this **FilmList**. The data **FilmList** will consume, a list of movie objects, might also be needed elsewhere by other parts of the app.
As in: is should probably be available to other components in some sort of a state. We'll implement this component separately
in both apps, and compare the steps we're taking. Then we make an informed decisions as to which feels better: redux of graphql.
Make sense?

**sw-rest** is powered by the amazing [**swapi**](https://swapi.co/):
> The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible
data source for all the data from the Star Wars canon universe!

So **swapi** is a [open-source](https://github.com/phalt/swapi) RESTful API with Star Wars data,
publicly hosted for testing purposes. There's also a [GraphQL version](https://graphql.org/swapi-graphql/) of it
([sourced here](https://github.com/graphql/swapi-graphql)) and we'll use that for **sw-gql**.

Swapi-graphql's README states it's:
> "A wrapper around SWAPI built using GraphQL".

The "wrapping" of a GQL API brings up an interesting point actually: GraphQL is not a brand new server tech that you need to configure and deploy from scratch. Rather it's mostly a spec that
defines how the logic and data you already have in place is exposed. Your server architecture won't need to be rewritten and
you could (and should) gradually transition to GraphQL with both REST and GraphQL living side by side for a time.

Know we have a REST and GraphQL APIs returning the same set of data. Let's get started on that **FilmList** component. Remember:
we're jumping in the middle of the project. Boilerplate like setting up the Redux provider/GraphQL client is already setup and I won't
be covering it. We're only concerned with the new code we need to add to each of the app versions to implement the **FilmList** component.
First let's create the list itself:

```javascript
import React from 'react'

const FilmsList = ({films}) => (
  <ul>
    {films.map((film, i) =>
      <li key={i}>{film.title} {film.release_date}</li>
    )}
  </ul>
)

export default FilmsList
```

Just a simple React functional component that accepts an array of objects with the fields **title** and **release_date**. Next we have to get data for it. Let's look at the APIs.

## GraphQL APIs don't need documentation
For **sw-redux** we research the API docs. This takes some time but we finally determine the endpoint to list the films is https://swapi.co/api/films/?format=json.

For **sw-gql** it's easier because navigating to https://graphql.org/swapi-graphql/ in your browser brings up a GraphQL explorer allowing you to see the entire schema and test
ways to query it. Try it now. See? - it's a major advantage of GraphQL - the entire API is easily explorable in a standardized way that doesn't require you to manually update a list (like you would if, say, you're adding them
to Postman).

## Redux is boilerplate hell
We know where the data is, and I assume you're familiar with Redux's action/reducer approach so let's jump right in.
**sw-redux** will need actions to initiate fetching the data
and also to track when fetching starts and ends. It takes a while but we write it:
```javascript
export const REQUEST_FILMS = 'REQUEST_FILMS'
export const RECEIVE_FILMS = 'RECEIVE_FILMS'

export const requestFilms = () => ({
  type: REQUEST_FILMS
})

export const receiveFilms = (json) => ({
  type: RECEIVE_FILMS,
  films: json.results.map(child => ({title: child.title, release_date: child.release_date})),
})

export const fetchFilms = () => dispatch => {
  dispatch(requestFilms())
  return fetch(`https://swapi.co/api/films/?format=json`)
    .then(response => response.json())
    .then(json => dispatch(receiveFilms(json)))
}
```
This code lives under **/actions**

Next we need reducers to actually store what we've retrieved. Again it takes a bit but we write it:
```javascript
import { combineReducers } from 'redux'
import {
  REQUEST_FILMS, RECEIVE_FILMS
} from '../actions'

const film = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_FILMS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_FILMS:
      return {
        ...state,
        isFetching: false,
        items: action.films,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  film
})

export default rootReducer
```
Alright, about 50 lines of code later we have the toolset to get our data to the state.
All we have to do now is setup a component that connects to the store, list the data it needs from the store,
calls the action to fetch it and finally passes it down to the **FilmsList** component we wrote. We'll call the new component **Home**:
```javascript
import React, { useEffect } from 'react';
import FilmsList from './FilmsList';
import { fetchFilms } from '../actions';
import { connect } from 'react-redux';

const Home = ({films, isFetching, dispatch}) => {

  useEffect(() => {
    dispatch(fetchFilms())
  }, [dispatch]);

  return isFetching ? <h2>Loading...</h2> : <FilmsList films={films}/>
}

const mapStateToProps = ({film}) => {
  const {
    isFetching,
    items: films,
  } = film || {
    isFetching: true,
    items: []
  }
  return {
    films,
    isFetching,
  }
}

export default connect(mapStateToProps)(Home)
```
It only took 30 more lines of code... Counting lines of code is a bad way of evaluating tools
but I seriously got frustrated just setting up the sample for this blog post. So far we wrote about 100 lines of code, if the industry
average is 15 to 50 bugs per 1000 lines of code, you can expect to have added 1 - 5 bugs to your app, your only crime trying to get
some trivial data loaded. It's easy, for example, to misspell a field name when it has to be consistent across 3 different files.
Having related logic live across different files like that slows down development. And it's so much worse in a "real" codebase where you
might have 100s of complex reducers and actions and additional abstractions like selectors.

## GraphQL allows all related logic to live in the same component.
Let's get the data for **sw-gql**. First we write the query. A query is a string listing the data we need back from a GraphQL API. In our case this would be
```javascript
{
  allFilms {
    films {
      title
      releaseDate
    }
  }
}
```

This translates to "get me a list of all the films and for each one give me its title and releaseDate". Once we have the query,
we give it to our GraphQL client which in turn returns the result as ```{ loading, data, error }``` object which will re-render
out component when, for example, **loading** becomes **false**. This is what **Home** will look like in **sw-gql**:
```javascript
import React from 'react';
import FilmsList from './FilmsList';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const query = gql`
{
  allFilms {
    films {
      title
      releaseDate
    }
  }
}
`;

const Home = props => {
  const {loading, error, data} = useQuery(query);
  return loading ? <h2>Loading...</h2> : <FilmsList films={data && data.allFilms.films}/>
}

export default Home;
```
Note: here I'm using the Apollo GraphQL client in a functional component, it might look a bit different depending on what you use.
But generally this code from **sw-gql** is the equivalent of the component + reducers + actions spread across 3 files we wrote for **sw-redux**.
It does the same thing but it's more concise and easier to change. Shooting yourself in the foot suddenly becomes less likely.

Let's consider unit testing **Home**. Technically it's easier in **sw-redux** as all you need to do is pass props to the component.
In **sw-gql** you have to mock the gql request. More work. But the thing is once you've united tested **Home** in **sw-gql** you've covered 100% of its logic. With **sw-redux** you need to unit test
the reducers and actions separately.
## GraphQL gets only the data it needs
Notice how in **sw-gql** we listed the exact fields we need for the films. This is what we got back in the request:
```javascript
{
   "title": "A New Hope",
   "releaseDate": "1977-05-25"
}
```

If you look at the request in **sw-redux**, it gets way more stuff for each movie:
```javascript
{
   "title": "A New Hope",
   "episode_id": 4,
   "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
   "director": "George Lucas",
   "producer": "Gary Kurtz, Rick McCallum",
   "release_date": "1977-05-25",
   "created": "2014-12-10T14:23:31.880000Z",
   "edited": "2015-04-11T09:46:52.774897Z",
   "url": "https://swapi.co/api/films/1/"
}
```
This is wasteful. REST requests, with their their lack of precisions, will be bigger and harder to process and debug.

## Redux will make you reload data unnecessarily

Redux makes you manually manage your data. Something needs to initialize it before it's used.
In practice you might reload the same data in a bunch of components just to make sure you have the data you need when you needed it.
You'll probably end up requesting the same data needlessly. Imagine using multiple instances of the component we wrote in **sw-redux**.
It will request the full set of movie data every time. This is wasteful.

## GraphQL also comes with a store
Not so with GQL. It will depend on your specific GQL client configuration but caching is a big part of GQL.
In the context of our Star Wars app this might mean that only a single component has to get the data once
and then all components that need it can instantly access it from the cache. We get this out of the box.
We don't need to write anything, no reducers, no actions, no "exists" checks. Generally with GQL you're requesting less data and never duplicating your requests.

But also you have control when you needed it - you can flush the cache, manually update it, opt not to use it etc.
It's like boilerplate-free Redux store that stays out of your way until you need it.

## Conclusion
I hope you now understand how switching from **RESTful Redux** to **GraphQL** will speed up your
development, make your code less buggy and make your app more performant.








