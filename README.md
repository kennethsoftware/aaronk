# Node Express, Vanilla JavaScript Boilerplate to get up and running quickly!
Simple boilerplate using Node, Express and set up to use some vanilla JavaScript on the frontend with an environment ready webpack 2 config

## Why?
Whenever I start new projects I always spend time messing around getting things set up so thought instead if I keep this updated I've always got a good place to start! Feel free to fork / edit and make your own implementations, it's just a basis for how I like to start off smaller monorepo projects and freelance work.

## Setting up
Make sure node `7.6.0` is installed to take advantage of that sweet async await goodness! (Obviously this doesn't utilise that in its current form but the idea being that once you begin fleshing it out with your own project you can take advantage of it)

After forking / cloning the repository locally run the following:

```
npm install
npm start
```

Then navigate to `localhost:3000` and check out the blank page in all its glory (with added sweet console.log).

## Development
Currently utilises watch mode in webpack and nodemon so any changes you make will automatically be built / updated on both the front and backend! In its current form this does require nodemon to be installed globally but this will likely change when I can be bothered to change it.

To get set up in dev mode run the following in one terminal window:
```
npm run hot
```

And in another one simultaenously:
```
npm run dev
```

And that's it! Watch as webpack updates the build and nodemon watches the backend as you make changes and create glorious projects!

