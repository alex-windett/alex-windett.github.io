---
layout: default

layout: post
title:  "Inheriting and Re&#8209;writing with React"
date:   2016-07-12
---

Its been a while since I've written a post, but thats because I've nosed dived in to inheriting an external project, learning React and Redux and implementing both. While at first I felt a sense of apprehension, I have now passed through the phase of frustration of learning something new and come out the other side with a solid understanding of React, Redux and Flux (I started working with React and Flux, then moved to React and Redux) - and a functional app.

What I can say for sure is how much I love React and Redux. Once you get your head around the slightly complex set up of a Store, the reducers and the action creators with Redux, it is a joy to work with. A globally accessible store with Redux - amazing. Writing HTML in JavaScript - awesome. Using Webpack - incredible. Access to all ES6 and even ES7 features - damn cool.

But first, inheriting someone else, and lets be honest, smelly code, was the first hurdle to get around. There was inline CSS, there was very (very) unnecessary inline JS, modules that didn't make sense and somewhat frustratingly of all, not be minified, concatenated or optimised with a build tool. Initially I refactored where I could - creating SCSS modules, moving everything into Webpack (as I knew React was to come) and removing inline scripts into files to be concatenated.

As the projected had been re-designed into a very UX focus project with what was described as an account "Dashboard", where everything is accessible from one page, I decided to take on a JavaScript framework. However, it only needed to act as the MV in the MVC pattern so narrowed down to React, Backbone and Knockout. Having tried all of the, I found an immense interest and appeal of React because of its ease of use and wide documentation. I am know 5 weeks in and am deploying new features in weekly sprints, with the complete app being finished by the start of August.

Having worked closely with a backend developer, we have / are transforming a Laravel site from a group of static pages into a single page where the user has access to all areas of their account within one page.
