---
title: Why we switched to Apollo after an year of Relay
date: "2019-12-28"
spoiler: "Spoiler: Relay is not well documented"
---
GraphQL adoption is growing. Expect to see product teams gradually migrating RESTful endpoints to GraphQL
For us frontend folk it means working out best practices and the right stack for the job.
Case in point: what GQL client should you use? The product team I'm on went with **Relay** but eventually switched to **Apollo**.
Here's why:

### TL;DR: Documentation (and lack thereof)
Starting out we had the go-to frontend stack, React + Redux. We needed a GQL client in the mix to make these new, fancy
"GQL requests". You don't actually need a new module for this. GQL requests are still just **HTTP POST**s
so you could write your own client, make calls from a Redux action etc.

Technically you can, in practice you're not going to reinvent the wheel. You want a client module that does it all out of the box.

There's [a few clients](https://graphql.org/code/#javascript-1) available but the big ones
are **Relay** and **Apollo**. We went with the Facebook-developed Relay without much research. It made sense:
we use Facebook's React and that comes with excellent docs, regular updates etc.
Seems reasonable to expect the same level of support for Relay and good integration between Relay and React.

We stuck with Relay for an year or so before switching to Apollo. We gave it a fair shot but
in that time it became clear Relay does **NOT** enjoy the same support as React (are you reading this, Facebook?).

Bear in mind (🐻) some of this stuff is possibly already resolved. There are signs of activity: Relay's had 5 (!) [major releases](https://relay.dev/en/versions) in 2019, mostly
in the last few months. Regardless and in no particular order here's some issues that were uncovered:

## Relay is opinionated
Relay has ideas about how your GQL schema should be structured and how to do pagination. These are not actually
part of the GQL standard. One example would be their [pagination spec](https://relay.dev/graphql/connections.htm#).
That spec forced additional syncing with our Backend guys and I would prefer that Backend engineers
don't have to concern themselves with our choice of tech on the frontend.

Or how about the way Relay insists your schema's root node should be **Viewer**. Not a big deal but for a while I assumed it was part of the core
GQL spec. I got funny looks when discussing with engineers unfamiliar with Relay.

## The Relay Compiler step is a pain
As taken from their docs:
> Relay uses the Relay Compiler to convert graphql literals into generated files that live alongside your source files.
> A query like the following:
...
> Will cause a generated file to appear in ./__generated__/MyComponent.graphql, with both runtime artifacts (which help to read and write from the Relay Store) and Flow types to help you write type-safe code.

Here's what that means in practice. Say you just wrote a component like so:
```javascript
export default class MyComponent extends React.Component {
  render() {
    return (
      <QueryRenderer
        query={graphql`
          query UserQuery {
            viewer {
              id
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          return <div>User ID: {props.viewer.id}</div>;
        }}
      />
    );
  }
}
```

Before you can actually run this as part of your app, you need to run a "**compilation**" script step
generating an artifact under **./__generated__/MyComponent.graphql**. You have to remember build and track these **graphql** files
every time you tweak GQL queries. (I suppose you could add a compilation step to your CI environment).

At the time we again just assumed that's how GQL works: it needs to be "compiled".

At one point we upgraded to Relay 5.0.0 and the compilation wouldn't run anymore due to outdated dependencies.
We literally couldn't update or add GQL queries for a while. Annoying.

All of this is Relay-specific. I remember my work buddy excitedly asking me "**You mean we don't have compile queries anymore !?!...**"
after switching to Apollo. With Apollo (and probably all other GQL clients) you can run queries without extra steps.

## Relay is not well documented
At some point might have to configure a paginated query on the frontend. As with most things, Relay has opinions here. Their pagination uses a "PaginatedContainer"
component and expects you to configure it. It's not intuitive.

Now look at [their docs](https://relay.dev/docs/en/pagination-container.htm) on the subject.
You get a list of arguments and some code samples lacking much context. And that's it. You're on your own. Don't expect to find much info elsewhere (Stackoverflow etc) either.

I was stuck on pagination for a while. In the end I found a working example on GitHub and reverse engineered it. My teammates reported similar experiences. Annoying.

## Relay is catered towards Facebook's needs
At one point I needed bi-directional pagination. The **pageInfo** object (part of Relay's pagination spec) is supposed to tell if you can page forward/back from the current page.
>PageInfo must contain fields hasPreviousPage and hasNextPage, both of which return non‐null booleans.
> It must also contain fields startCursor and endCursor, both of which return non‐null opaque strings.

Sounds good but turns out **hasNextPage** only returns correct results when you're paginating forward. If you paginate back **hasNextPage** will always be "false" by design.
In other words: Relay pagination was only really meant for endless scrolling (i.e. the kind of pagination that Facebook does).
I ended up implementing a client-side state to keep track of page numbers when **hasNextPage** / **hasPreviousPage** should have been doing it for me.

## Relay is not well supported
Did I mention how we upgraded to Relay 5.0.0 and the (integral) compilation script stopped working?

## Lack of support for React hooks
Relay doesn't support React hooks, you have to use a component. Using hooks is nicer as you don't
pollute your JSX with non-UI components.

Sample component with Relay's QueryRenderer Component
```javascript
export default class MyComponent extends React.Component {
  render() {
    return (
      <QueryRenderer
        query={graphql`
          query UserQuery {
            viewer {
              id
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          return <div>User ID: {props.viewer.id}</div>;
        }}
      />
    );
  }
}
```

With Apollo hooks:
```javascript
const MyComponent = props => {
  const { loading, error, data } = useQuery(
    `query UserQuery {
            viewer {
              id
            }
          }
        `
  )
  return <div>User ID: {data.viewer.id}</div>
}
```

(Apollo still supports a Query component for Class components.)

This one is weird to me. Relay is a React-only client and both of these things are controlled by Facebook. Could they not just release hook
support right along with the actual hooks release in React?

They might be adding hook support now: Relay 8.0.0's [release notes](https://github.com/facebook/relay/releases/tag/v8.0.0)
mentions "useMutation" under "experimental" for example. But why the delay?

## Migrating to Apollo is easy
This deserves a dedicated post but in a nutshell migrating to Apollo was easy. The
data returned by both clients is identical. The migration was mostly yanking out the Relay Query component and replacing it with an Apollo hook.
If your GQL Schema is setup for Relay pagination it can still work with Apollo as described [here](https://www.apollographql.com/docs/react/data/pagination/#relay-style-cursor-pagination).

## Conclusion
Apollo is easier to use and better documented than Relay. Relay was developed to be what
Facebook needs it to be. Open-sourcing it feels like an afterthought.
