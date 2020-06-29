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
  * index.js (server/express js)
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

## Client

### Pages
  * Index.html
    Main page, which has form to input and submit data, displays error message, results and has all of the UI Code.

### Styles
Stylesheets for NLP project.
  * base.scss
    Contains common or basic styles for page. Also contains media queries.
  * footer.scss
    Contains styles for footer of the page.
  - form.scss
    Contains styles for form and it's control on the page.
  - header.scssc
    Contains styles for header of the page.
  - resets.scss

- Added media queries and styling for base page in base.scss stylesheet.
- Added footer class in footer.scss.
- Added navItem class and logo class for header in header.scss.

### js
Javascript file which contains, event listeners and various javascript functions for Natural language processing (NLP) project.
  * formHandler.js
    - Added handleSubmit function which get called on click event of submit button and we prevent default click inside this event. It contains call to validate url function and function which makes async call to api.
    - Added function postnlpdata which makes async call to api and when it's successful it returns a promise with api result data and we update the UI on the successful request.
    - Added function "updateUI" for to update UI when we receive data from API.
  * validate.js
    - Added function validateURL to validate url.

## Server
  * index.js
    - It contains express server implementation for the app. It contains get, post request to API.
## Test scripts with Jest (__test__)
  * index.test.js
    - Contains tests cases for formHandler.js functions, such as test case for post request to API.
  * validate.test.js
    - Contains test case for valudate.js, cuch as test case for validateURL function.
## Configurations
### webpack configuraton files
  Below are Webcak configuration files which contain configuration related to webpack and also to use jest for testing.
  * .babelrc
  * babel.config.js
  * webpack.dev.js
  * webpack.prod.js
### Others
  * .env
  * jest.config.js
  * package.json
  * Procfile
## Deployment
  Please navigate to the root folder of the application to test application in dev or prod environment and to run jest test script.
  * Development
    To deploy and test application in development mode run following command.
    npm run build-dev
  * Production
    To deploy and test application in production mode run following command.
    npm run build-prod
    npm run start
  * Heroku
    Application is also deployed on Heroku. Heroku url is:
    https://evaluate-news-nlp-aditi.herokuapp.com/
  * Testing with jest
    To run test cases use following command:
    npm run test
