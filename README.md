# Reddit Hot Ranking Algorithm [![Build Status](https://travis-ci.org/ialex/hot-ranking.svg?branch=master)](https://travis-ci.org/ialex/hot-ranking)

Calculates score of and item based on reddit hot ranking algorithm.

## For Science behind read
[http://amix.dk/blog/post/19588](http://amix.dk/blog/post/19588)

## Install

```
npm install hot-ranking
```

## USAGE

**`hot(upvotes, downvotes, date)`**

```
// Load library
var hot = require("hot-ranking");

// Calculate hotness for an item
console.log( hot(5660, 0, new Date(2015, 5, 23, 0, 55)) ); // => 6633.4438609

```

## Test

```
npm test
```

License MIT
