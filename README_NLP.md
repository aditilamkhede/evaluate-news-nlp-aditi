# Natural language processing (NLP)

## Table of Contents

1. Client
  * Pages(src/client/views)
    - index.html
  * Styles (src/client/styles)
    - base.scss
    - footer.scss
    - form.scss
    - header.scss
    - resets.scss
  * js (src/client/js)
    - formHandler.js
    - validate.js
2. Server
  * index.js (srever/express js)
3. Test scripts with Jest (__test__)
  * index.test.js
  * validate.test.js
4. Configurations
  * webpack configuraton files
    - .babelrc
    - babel.config.js
    - webpack.dev.js
    - webpack.prod.js
  * Others
    - .env
    - jest.config.js
    - package.json
    - Procfile
5. Deployment



## Natural language processing (NLP)
Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.

We have build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. This project uses Aylien API to determine various attributes of an article or blog post.

This project is implemented using following:
- Webpack
- Sass styles
- Webpack Loaders and Plugins
- Service workers
- Used APIs and created requests to external urls


This project demonstrates following functionalities:
 - Validates URL entered in URL field.
 - Display error message if URL is invalid.
 - If url is valid, Aylien API will return response with "title", "author" and "image" of the article
 - As Service Workers is added in the project, which will allow offline access of the app.

## Pages
  * Index.html
    Main page, which has form to input and submit data, displays error message, results and has all of the UI Code.

## Styles
Stylesheets for NLP project.
  * base.scss
    Contains common or basic styles for page. Also contains media queries.
  * footer.scss
    Contains styles for footer of the page.
  - form.scss
    Contains styles for form and it's control on the page.
  - header.scss
    Contains styles for header of the page.
  - resets.scss

- Added media queries and  in base.scss stylesheet.
- Added menu__link__active class, to activate/highlight menu links when on section of a pge.
- Added hideNav class to hide Navigation Bar and updated Page__header class for smooth transition from show/hide navigation bar.
- Added css class topButton and css for button id(#topBtn) for "Scroll To Top" functionality.

## app.js
Javascript file which contains, event listeners and various javascript functions for Landing Page project.

- Added event listener for "DOMContentLoaded" which call function "createNavigationMenu" to create navigation menu.
- Added event listener for scrolling which calls function "scrollSection".
- Added function "menuLinkOnClick" for menu link click, scroll to appropriate section.
- Added function "scrollTopClick" for "ScrollToTop" button click, which scrolls to top of the page when clicked.
- Added function "isCloseToViewPort" which checks if a section is closeset to the viewport.
- Added function "activeSection" which adds active class when closeset to the top of the viewport.
- Added function "activeLink" which activates/highlights appropriates links when scrolled to a section.
- Added function "isNotScrolling" which checks if scrolling has stopped and hides Navigation bar.
