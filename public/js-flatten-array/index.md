---
title: Flatten an array in JavaScript - stream of consciousness whiteboarding
date: "2020-04-04"
spoiler: "My real-time thought process as I whiteboard flattening arrays in Javascript to an empty room..."
---
I was recently asked to whiteboard my own "flat" function turning a nested array into a flat array (as opposed to using **Array.prototype.flat()** outlined in **ECMAScript® 2019**).
After initial excitement ("**This is going to be easy! It's just a recursion, right!?!**") I embarrassingly
failed to get to a working solution.

It was a painful experience where I allowed nerves and self-doubt to take the better of me. So for this blog post I did something weird.
Below you will find my stream of consciousness solution. This is literally my unedited thought process as I was solving this task alone in total silence. I've just fixed the typos
and added some spacing to make it read better.

It's rambling, it gets personal and more than a little embarrassing. Am I publishing this as self-therapy? Idunno, maybe. It might help someone struggling 
with the same stuff I guess. Anyway...

# The task

Write a flat function that takes an array like this:
> [1, 3, 5, [8, 9, [11, 12] ] ]

and return a flat array like this: 
> [1, 3, 5, 8, 9, 11, 12];

# Unedited stream of consciousness solution starting now:

It might be easier to think about this if we wrote that array "vertically":
```javascript
const arr = [
   1, 3, 5, 
  [
    8, 9, 
      [
      11 ,12
      ]
  ]
]
```

You can now see this is broken down into three distinct levels. We need a 
function that will go into each level and perform the exact same set of actions.
What actions are those? Let's start by simply printing the numbers. So for the 
first level we'd expect to see 1, 3, 5 printed. This is the first level. 
But we know we may have more levels, it's a nested structure, it could go deeper.
How many levels are there in total? We don't know. We don't know how many times
we're going to have to perform the same printing operation. To complicate matters
further we have to assume we might go deeper in a middle of a count. 

What do I mean? We might have:
> [1, 2, [3, 4], 5, 6]

So we're on a level, we go down deeper, perform the routine, then go back to the
previous level and carry on with the previous routine. So we need a bit of logic
that will detect the level change, go into the next level, perform the routine and
go back to the previous routine from there. This is a recursion but I'm still 
having a bit of trouble quite visualizing it in my mind. Let me start simple,
I'll just write code to print the numbers in one level. In other words I'm 
just printing the numbers in an array.

```javascript
const arr = [1, 2, 3];

arr.forEach(i => { console.log(i); })
```

Embarrassingly while witting this bit my mind froze and wouldn't let me recall
how **forEach** works. So I had to go and look it up on MDN. While there I discover
there's already a **Flatten an array** example right on the **Array.prototype.forEach**. 
This is upsetting as it feels like it's diminishing my potential accomplishment. It seems
flattening arrays is a basic thing people do and surely I'm some sort of idiot if I have to think
about it this hard. 

I now have to work hard to regain my focus. Honestly if this was a real
weatherboarding session in front of people I'd be in full panic mode at this point. I'm just 
writing down stuff in silence right now and it's still overwhelming... OK, ok... focus...

So this prints an array: 
```javascript
const arr = [1, 2, 3];
arr.forEach(i => { console.log(i); })
```

What if there was a nested array in there too:
> [1, 2, [3, 4], 5]

Now we need to go into that level and print it in the same way. So first we need code to 
detect the level change.

(As i'm writing the code): We want to print after the check, we don't want to print an array,
we only want to print a number. So the check has to come first. OK, I'll just put an **if**.
So what am I actually checking for here? I'm checking if it's a number or not. But then 
it would only work for arrays with numbers. Ok, so I'm checking if it's an array then? 
What would my friend think about this blog... FOCUS! 

OK, checking if it's an array but 
an array is really just an object so I could just do **typeof** and look for object.
But, but... I know there's built-in things to check in JS if something is an array or not.
That would probably better as then, potentially, our flat function could work for all kinds of
values, not just primitives. That's good... smart. It will also probably read better. I'm 
getting excited about this! OK, I'm gonna go for it, gonna google "check is array js". 

Here we go!.. **Array.isArray()** Beautiful. I can put that in my **if** now: 
**if (Array.isArray(i))**. 

So now what? If it's an array, perform the routine for it.
What's the routine? It's this function I'm writing. What function? Oh *hit. I didn't actually
put it in a function. So I have to put it in a function. We'll call it flat but what about
parameters? I guess just the array, right? The javascript **flat** doesn't take params,
you just call it right on your array. So the array is all we need. That's got to be it.
OK, so a function **flat(arr)** and just put all our code in there. Did I mention I don't
have any code completion as I'm writing this. Even simple things like that feel scary.

Ok, focus, focus... I got the function, I got the if. If the function is my routine I just
have to perform it on each level. I already said that. So now I know when an array member 
is actually an array in its own right. So just give it to the function again. That's how 
recursions work! OK, so let's just add **flat(i)** in the if.

```javascript
const arr = [1, 2, [3, 4], 5];

const flat = arr => {
  arr.forEach(i => {
    if (Array.isArray(i)) {
      flat(i)  
    }
    console.log(i); 
  })
}
```

OK, so I wrote this code block and it feels like it might just work and print the flat structure
we're looking for. I'm tempted to just try and run it. But I know from experience I more 
than likely got it wrong. Let's double check. How do we double check? I'll go through the simple
example in my head, imagining what happens at each step. OK, so starting at **1**...
Oh, I'll actually write down **flat([1, 2, [3, 4], 5])** - we do have to write the function
after all. Here:
```javascript
const arr = [1, 2, [3, 4], 5];

const flat = arr => {
  arr.forEach(i => {
    if (Array.isArray(i)) {
      flat(i)  
    }
    console.log(i); 
  })
}

flat([1, 2, [3, 4], 5]);
```

Actually I should be able to just paste that in my Chrome console and have it work, right?
But I still haven't double-checked it. OK, ok, let's start over at **1**...
Oh, wow I think I discovered a bug. I'm checking if it's an array and going into it,
but I'm still printing it after. You get it, you guys? You either want to print or go into
the current item, you don't want to do both. So we want to add an **if/else**:
```javascript
const arr = [1, 2, [3, 4], 5];

const flat = arr => {
  arr.forEach(i => {
    if (Array.isArray(i)) {
      flat(i)  
    } else {
      console.log(i); 
    }
  })
}

flat([1, 2, [3, 4], 5]);
```

I really had to fight back the urge to just declare the thing "done" before. It took all my
mental power to say "you know you should double-check, you usually get it wrong". Anyway,
let me start over with the double-checking starting at **1**... I'm getting a little 
exhausted thinking about this. I think it should work but I kind of just want to get it over
with at this point. That's probably not a good attitude, you work until the job is done and
all that but this is using up a lot of my mental energy, it's almost physically painful.

OK, focus... eyes on the prize... Should I be calling **flat()** with a **this**? Like so:
**this.flat()**? I don't think so.. that's just when you define it as **function flat** right?
Because then it's a member of the current object rather than a variable? Or something like that?
I probably don't need to be thinking about that now. 

Alright, I'll just try it. As soon as I wrote down "i'll just try it" a dreadful feeling comes over me. 
I'm anticipating the failure. OK, the one thing I have to do is NOT panic when it doesn't work. I think I'm probably not an
idiot. If it doesn't work it's because I missed something small. A detail. Could happen to anyone right?
It doesn't instantly confirm I'm some sort of an ape and this solution is nonsense. Right? RIGHT?
Ok, ok.. I'll try it.. 

Here we go... putting it in the console... it prints:
> 1 
> 2
> 3
> 4
> 5

I think that's what was supposed to happen right? Yeah, I think so. Actually, there you go, that 
was my mistake - I should have outlined the expected result of that call before testing. But it's the
right result. Let's fight back the urge to declare this solved and outline another "test case". 

How about **[1, [2, 3, [4,5], 6, 7, [8, 9]], 10, 11]** ? 

Even designing these test cases is not trivial. I think the 
flat version of that last example should be the sequence 1 -> 11. But I wouldn't be surprised if I got the order wrong.
Let's feed it to our function, see what's printed:

Actually... before I did that, I just realized in our previous code sample we defined the source array as a 
variable, but then we passed the same array as an object literal anyway. Not really an error but I'm not exactly
proud of it. Anyway back to testing this:

OK, it did print the sequence 1 -> 11. I think this probably works. Let's take it one step further.
Let's have it actually build an array rather than simple printing. OK, I'll have to think again. If it's building
an array, it means it has to return an array, right? Not necessarily but probably better, yes. So I need to return
a value I guess. I'm not exactly sure how to do that. I'll write down how I want to use it first, maybe that
will help me think? 
```javascript
const arr = [1, 2, [3, 4], 5];
const flatArray = flat(arr);
```

OK, I like that. New array, simple, clean. Functional programing. No mutating of existing objects. How do  we
accommodate it in our function though? I guess instead of printing the array items, we have to push them to 
a new array. Where does this array come from? It could be outside the function. That would be easy but not pretty.
It would be like our whole function is a side effect. So we need a new array that lives inside our function,
remains constant throughout the iterations, and is returned at the end. I think that could be a second parameter
with a default value of an empty array. But it's a bit difficult to reason about. 

How about this? :
```javascript
const arr = [1, 2, [3, 4], 5];

const flat = (arr, newArr = []) => {
  arr.forEach(i => {
    if (Array.isArray(i)) {
      flat(i, newArr)  
    } else {
      newArr.push(i); 
    }
  })
}

const flatArray = flat(arr);
```

I've done stuff like this before, I think it might work. Let's double check as usual. Let's just go over the
example in our head... Two seconds in I realize I'm not actually returning **newArr**. Sigh. I knew something 
was wrong if I wrote it down this fast. Let's see about returning it then....
```javascript
const arr = [1, 2, [3, 4], 5];

const flat = (arr, newArr = []) => {
  arr.forEach(i => {
    if (Array.isArray(i)) {
      flat(i, newArr)  
    } else {
      newArr.push(i); 
    }
  })
  return newArr;
}

const flatArray = flat(arr);
```
I just put **return newArr** at the end of the function there. Will that work? I'm not returning the wrong object
which sometimes happens. So off to a good start. Let's go thorough the logic in our head...
OK, I'm worried about going "deep": **flat(i, newArr)**. I'm ignoring the return value in that case
but is that bad? **newArr** should still be getting updated, it's an object, thus passed to functions by
reference. Or should we do this where we explicitly assign it?
```javascript
const arr = [1, 2, [3, 4], 5];

const flat = (arr, newArr = []) => {
  arr.forEach(i => {
    if (Array.isArray(i)) {
      newArr = flat(i, newArr)  
    } else {
      newArr.push(i); 
    }
  })
  return newArr;
}

const flatArray = flat(arr);
```
It's quite hard to reason about but I think those two do the same thing. I'll test the first vacation. It seems to work
> flatArray
>
> (5) [1, 2, 3, 4, 5]

Now let's test the second variation with the explicit return:
> flatArray
>
> (5) [1, 2, 3, 4, 5] 

Yep, same thing. OK, that makes sense. I'm already editing the object by reference, what does it matter
if I return and assigned it again? The reference hasn't changed... I guess you would need the return for
primitives. Anyway... Let's try it with the complex example and declare this "solved" if this works:
> flat([1, [2, 3, [4,5], 6, 7, [8, 9]], 10, 11]);
>
> (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

Looks good. We could come up with a lot more test cases and stuff like that. This would be more performant 
with a for loop etc. I'm honestly too tired to even think about any of that stuff anymore. All of this
just took me maybe 2 hours, haven't kept exact time but it was a lot more than any reasonable whiteboarding 
session, I think. I got to a working solution at least, better than nothing.

