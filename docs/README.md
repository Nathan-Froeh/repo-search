# Getting Started

1) Clone or Fork the repo

2) cd into `repo-search`

3) run terminal command ```npm i```

4) Run terminal command ```npm start``` to run the app, a new browser window should pop up at url `http://localhost:3000/repo-search/`

App is also deployed to [GitHub Pages](https://nathan-froeh.github.io/repo-search/)


## Required api call documentation

[GitHub documentation](https://docs.github.com/en/rest/reference/search#search-repositories)

API call `https://api.github.com/search/repositories`

## Acceptance Criteria

- [x] Search Input to search GitHub
- [x] Display a list of search results from `https://api.github.com/search/repositories`
- [x] Sort search results
- [x] Filter search results (the api call specified does not have a language parameter available so if 30 items come back but only 2 have the language you are looking for, you will only see 2 items)
- [x] Repo detail page, selecting a repo from the list will take you to a repo detail page
- [x] Responsive design, tested on iPhoneX, iPad, iPadPro, laptop, large computer monitor


## Implementation Criteria

- [x] Built with React
- [x] App has 2 pages `http://localhost:3000/` for search, and `http://localhost:3000/repo/:id` for repo detail
- [x] App is responsive
- [x] App is using JavaScript, I currently work in Angular which requires Typescript so I figured I would try JS


## Bonus

- [ ] Tests
- [ ] Pagination (this is the next thing I would add to make the searching more useful and user friendly)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
