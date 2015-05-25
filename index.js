"use strict";

// Math behind: http://www.seomoz.org/img/upload/reddit_cf_algorithm.png
// Reference: https://github.com/reddit/reddit/blob/master/r2/r2/lib/db/_sorts.pyx#L27-L57

module.exports = function hot_ranking(ups, downs, date) {
  var upvotes = ups || 0;
  var downvotes = downs || 0;
  var score = upvotes - downvotes;
  var order, sign, seconds, rank;

  if( toString.call(date) !== "[object Date]" ){
    throw new Error("You must pass a valid date object");
  }
  
  order = Math.log10( Math.max( Math.abs(score), 1) );
  sign = score > 0 ? 1 :
         score < 0 ? -1 :
         0 ;
  seconds = epochSeconds(date) - 1134028003;
  rank = sign * order + seconds / 45000;
  return rank.toPrecision(11);
};

var epochSeconds = function epochSeconds(date) {
  return (date.getTime() - new Date(1970,1,1).getTime()) / 1000;
};