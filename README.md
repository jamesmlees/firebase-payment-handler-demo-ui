# Dummy Payment Ui

A dummy ui, interacting with firebase, implemented as part of a test project.
Utilising (needlessly) [vue.js](https://vuejs.org/).

## Installation
Run `yarn install` and `npm install` depending on package manager preference. 
Run `npm run serve` to kick things off. Default port is 3456, changeable with
env var `PORT`.

### Environment Variables
The firebase config json `public/firebase-config.js` should be populated. A db
ref should be entered in script.js too. There's a hardcoded 'dummy product' in
reality this would be replaced with a reference to a firebase path.

