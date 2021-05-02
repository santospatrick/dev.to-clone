# Dev.to Clone
> Dev.to blog clone made with Next.js + Firebase for studying purposes

## Setup

1. Duplicate `.env.example` to `.env.local` fulfilling variables as needed

2. Install dependencies, turn on Firebase emulators and Next.js dev server
```bash
yarn
yarn emulators
# another terminal tab
yarn devemulators
```

## Features
- [x] [Next.js](http://nextjs.com/)
- [x] [Typescript](typescriptlang.org)
- [x] [Firebase](https://firebase.google.com/)
- [x] [react-firebase-hooks](https://github.com/csfrequency/react-firebase-hooks)
- [x] [Chakra-UI](https://chakra-ui.com/)

## Scripts

#### `yarn emulators`
Runs Firebase emulators at `http://localhost:4000` (mandatory in local development)

#### `yarn dev`
Runs development environment locally at `http://localhost:3000`

#### `yarn build`
Builds project to `.next` folder

#### `yarn start`
Runs production environment (make sure to run `yarn build` first)