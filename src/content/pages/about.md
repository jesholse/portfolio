---
title: About this page
---

This page is made with Astro.js, Tailwind css, view transitions API, pushed to GitHub and deployed automatically with Netlify.

**Astro** is a web framework. Currently Astro is on version 3.2.x. On version 3.0.0 astro was the first major web framework to implement view transition API, thus all animations between pages on this site use the view transition API. This view transition API isn't yet supported by Firefox.

**Tailwind** is a CSS framework used to develop web designs without writting you own code, thus increasing the speed of developing.

**View transition API** is used between pages. If two elements on different pages share the same transition-name they'll interact with each other. Thus, if element X is located 100 pixels from the top on page one and if element Y is located 300 pixels from the top on page two and if and only if both share the same transition-name, a page swap will make the element slide from place to place, that is up and down. The element will never leave the page but the content can change within the element and the element itself can change shape.

New projects will be added locally in /src/content/projects as .md files. The name of .md file will turn into the slug of that particular project.Thus naming the file 'My Project.md' will lead to a new project on the entry point corresponding to the slug, in this case /projects/my-project


