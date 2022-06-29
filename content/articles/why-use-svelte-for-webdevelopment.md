+++
title = "Why use Svelte for your next frontend application"
description = "Perhaps there are too many javascript frameworks out there, but I think that you ought to give svelte a chance! Here's why:"

date = "2022-06-28"
+++

## What makes Svelte different

Svelte, in contrast with the most popular frontend frameworks out there, makes use of an internal compiler to generate optimal vanilla javascript. It doesn't rely on a virtual DOM and it's boilerplate-free!

Svelte components look and feel robust. Everything is inside a single .svelte file, including styles, markup and javascript code. This may seem ugly at first, but you certainly get used to it. It's straight to the point without any fancy wrappers and code snippets that you are forced to repeat all over your code!

Styles are scoped by default and you are provided with a wide variety of powerful syntactic sugar (coming from the compiler) that can boost your productivity significantly.

```html
<script>
    let isActivated = false

    // Will result to an immediate dom change
    // No useState needed!
    function doSomething() {
        isActivated = !isActivated
    }
</script>

<div>
    <button on:click={doSomething}>Click me please!</button>
  
    <!-- Compiler magic -->
    {#if isActivated}
        <p>This is a small parapgraph</p>
    {/if}
</div>
```

## Fascinating built-in support

### State Management

You don't need to plug in any heavy and complex library (i.e. redux) to manage your global state across your components, it's all built-in! Everything is provided by the `` svelte/store `` package. To retrieve information from a store, use the dollar sign prefix.

```js
// textStore.js file, somewhere on the root of your application
import { writable } from "svelte/store"

export const textStore = writable({
  username: "Pioyi",
  message: "I don't know what to put here",
})
```

```html
<!-- Inside any component -->

<script>
  import { textStore } from "stores/textStore.js"

  // Updating the store
  textStore.update(old => ...)
<script>

<h1>{ $textStore.username }</h1>
<p>{ $textStore.message }</p>
```

### Animations and transitions

You will also find out that svelte makes working with animations extremely easy! Just import `` svelte/transition `` and polish your application in minutes! I'm not going to get into any of the details, but you can find everything at the [official svelte website](https://svelte.dev/)


### Final Notes 

Having said all that, you should probably feel like giving svelte a try. 

The community is growing rapidly and svelte has been recognized as one of the most loved frontend frameworks out there. Remember that bundle size is an important part of your application! Make decisions with performance in mind and avoid bloating your websites. The industry standard is NOT always the best solution.



