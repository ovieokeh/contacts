# contacts

Build a contacts list app. You can view more details of a contact by clicking on the contact name.

[View the hosted version here.](https://my-contacts-f2741.firebaseapp.com/)

## Tech Stack

- React - UI Library
- Less - Styling
- [Cypress](https://www.cypress.io/) - E2E Testing
- [React Tabs](https://github.com/reactjs/react-tabs) - For Tabs
- [Parceljs](https://parceljs.org/) - Transpiling & Bundling
- [Firebase](https://firebase.google.com/) - Hosting

## Run the app

To run the app,

- clone this repo by running `git clone https://github.com/ovieokeh/contacts.git`
- install the dependencies by running `yarn install`
- start the app by running `yarn dev`

To build and deploy the app to Firebase, run `yarn deploy`. Note that you will have to setup Firebase yourself.

## Run E2E tests

There are some E2E tests to assert the correct functionality of the app. You can run these tests in a Cypress window or headless mode.

To run in a Cypress window, run `yarn cy:open` and click on `ui_spec.js` to run the tests

To run in headless mode, run `yarn cy:run`

NOTE that the development server needs to be running for your tests to pass. Start the dev server first by running `yarn dev` before running any tests.
