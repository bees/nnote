![nnote logo](https://raw.githubusercontent.com/bees/nnote/master/nnote.png)

# nnote

> A notes pwa

This is a selfish project. I generally love evernote but I hate its formatting
options. There are countless notes apps but none of them do exactly what I
want. This is also an opportunity for me to play around with some frontend code
as I've been doing backend heavy work for my job.

### Project goals:
core functionality:
- [x] markdown driven notes (GFM for todo-list functionality)
- [ ] offline-first pwa
- [x] driven off of pouch/couch for a sane syncing mechanism
- [ ] tagging system + full text search

TODOS:
- [ ] ci/cd
- [ ] coverage reports

### Project notes: 
I am heavily using CSS grid layout because it is fantastic and I
am likely going to be my only user.
[caniuse](http://caniuse.com/css-grid/embed)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
