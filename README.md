# React Pokemon List

Get to know your Pokemon: learn types, evolutions and much more.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Clone the repo to your machine

```
git clone https://github.com/kleyu/reactPokemon.git
```

CD into the folder

```
cd reactPokemon
```

Install dependencies

```
npm i
```

## Deployment

Start the json-server first with:

```
npm run start-server
```

While the server is running, in another terminal run:

```
npm start
```

Go to http://localhost:3000 if not already redirected

## Running the tests

Type in terminal:

```
npm test
```

~~For now there are only included snapshot tests with enzyme, couldn't figure out **yet** how to deal with redux and stateful components (also low-key wanted to try [react-testing-library](https://github.com/kentcdodds/react-testing-library), maybe another time)~~

[react-testing-library](https://github.com/kentcdodds/react-testing-library) is live!

## Built With

- [React](https://github.com/facebook/react) - Dynamic UI, Component logic etc.
- [Redux](https://github.com/reduxjs/redux) - Global state management
- [Bootstrap](https://github.com/twbs/bootstrap) - Styling
- [Redux-thunk](https://github.com/reduxjs/redux-thunk) - Redux middleware for asynchronous action creator
- [json-server](https://github.com/typicode/json-server) - Locally hosted JSON server
- [Pokedex](https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json) - JSON pokedex DB

## Acknowledgments

- Shout out to [Zaven](https://zaven.co/) for an awesome idea for an app which made me wanna play Pokemon again
  ![alt text](http://www.emuinfo.pl/info/screeny/3/35195%5B6%5D.png "Pokemon Fire Red ")
