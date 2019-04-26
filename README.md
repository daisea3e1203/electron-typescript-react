# Electron-React-Typescript-Boilerplate

## TODO
  - minify css in production
  - do tree shaking (reference webpack's documentation)
  - currently diabling some errors while testing using jest. somehow it doesn't seem to be reading @types/jest

## Developmenet
run
```
yarn watch
```
then
```
yarn start
```
to start developing.


## Building
run
```
yarn electron-pack
```
to build into an electron application.
built files are thrown into electron-dist
