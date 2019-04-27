# Electron-Typescript-React-Boilerplate

Boilerplate with simple and enough configurations to kick-start my projects.

It took some time to configure electron and typescript to work together, so just thought I'd share my own take on it.

## Developmenet
run
```
yarn dev
```
to start developing.


## Building
run
```
yarn electron-pack
```

to build into an electron application.
built files are found in electron-dist

## Testing
run
```
yarn test
```

## TODO
  - minify css in production
  - do tree shaking
  - currently disabling some errors while testing using jest and enzyme. somehow it doesn't seem to be reading @types/jest

