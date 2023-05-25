# Restaurant Website

This is a project I built for The Odin Project Javascript course. The goal was to create a website JS modules and bundle them together with webpack (first time using webpack in a project).

All the HTML is produced via JS modules. There are separate modules for each tab (Home, Menu, and Contact).

So, when a user clicks on a tab in the nav bar, the page content is generated from that tab's corresponding JS module.

There is also an initial module to load the navigation bar, footer, and homepage content (by calling loadHome() from the home.js module) when the site is first loaded.

Live demo: https://grntco.github.io/restaurant-site/
