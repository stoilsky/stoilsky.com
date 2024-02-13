---
title: How to write a debounce function in JavaScript with ES6 and arrow functions
date: "2020-12-18"
spoiler: "A guide to writing your own debouncing implementation in JavaScript with ES6"
---

# What is debonuce?

The term comes from electrical engineering apparently. When you flip a switch
to close a circut (like a light switch), two pieces of metal come together.
It's not instant - the pieces will "bounce" slightly, making contact and separating rapidly a few times before settling.
The result is burst of state changes before settling on the final, "closed" state (Ever notice lights flickering when you turn them on?).
Debouncing corrects for this by ignoring rapid state changes. It's a way of saying to your light switch
"Only act on a state change signal if no other state change signals have occured very recently".

# So what's debonucing in software?

A similar bouncing behaviour occurs when you type on a keyboard for instance. You want to
type "teramisu" for example. "Teramisu" is the final state, but you go through a sequence of inputs to reach it.
It starts at "t" and then becomes "te", then "ter" and so on.

If this typing triggers a search, to save resources you might say to your search field
"Only start a search operation for the current input if the user hasn't typed any new characters within the last 500 miliseconds".
With that you've debounced the search.

# How do we write a debounce function JavaScript?

Let's say you have an input that calls a function **search(inputValue)** as you type into it.
We'll write a "debounce" function that takes our **search** as a parameter and returns a new function that wraps it.
The new function will start a timer (setTimeout) that gets cleared (clearTimeout) on every call
unless given sufficent time to finsh and calls **search**: 

```javascript
const debounce = (func, wait) => {
  let timeout
  return (...params) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func(params)
    }, wait)
  }
}
```

Now we can create a debounced version of **search(query)** like so:

```javascript
const debouncedSearch = debounce(search, 500);
```

If we now use **debouncedSearch** for our input event - it will only trigger after the user stops
typing for 500ms.
