# FunEdu - an education repository


## Gallery
<p align-items="center">
<img width="480px" src="./screenshots/homePAGE.png"/><img width="480px" src="./screenshots/booksPAGE.png"/>
<img width="250px" src="./screenshots/mobileFriendly.png"/><img width="500px" src="./screenshots/homePAGEfilled.png"/>
<img width="480px" src="./screenshots/qnaPAGE.png"/><img width="480px" src="./screenshots/resultsPAGE.png"/>
</p>

## Host React app on GitHub pages
`After linking you app to a github repo simply follow:`
### Install the gh-pages package as a _dev-dependency_ of the app.
In your app directory type:\
```
npm install gh-pages --save-dev
```

### Add some properties to the app's _package.json_ file.
At the top-level (i.e. inside package.json > right before/after/**in the same block as** the `"name"`) add the following:\
```
"homepage": "http://usrname.github.io/repo-name"
```
`usrname` name is your user-name at GitHub\
`repo-name` is the repository name that we are going to host on GitHub pages.

### In the existing scripts property, add a deploy property:
```
"scripts": {
  //...
  "deploy": "gh-pages -d build"
}
```

### Now run the following command:
```
npm run build
npm run deploy
```
And you are done now your react app will be hosted on GitHub pages !

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser,\
or [http://localhost:3000](http://192.168.1.57:3000) to view it in the browser on your local network.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

