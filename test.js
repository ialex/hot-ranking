"use strict";

var expect = require("chai").expect;
var hot = require("./index");


describe("Ranking algorithm", function() {

  it("Must throw if date is invalid", function() {
    expect( function(){ hot( 0, 1, "invalid Date" ) } ).to.throw("You must pass a valid date object");
  });

  it("Returns hot score for an item", function() {
    expect( hot( 3593, 0, new Date(2015, 5, 23, 8 - 8, 55) ) ).to.be.a.Number;
  });

  it("Must return the items ordered properly", function() {
    var inputs = [
      [3593, 0, new Date(2015, 5, 23, 8 - 8, 55)],
      [3956, 0, new Date(2015, 5, 23, 8 - 6, 55)],
      [5101, 0, new Date(2015, 5, 23, 8 - 8, 55)],
      [2957, 0, new Date(2015, 5, 23, 8 - 5, 55)],
      [5281, 0, new Date(2015, 5, 23, 8 - 4, 55)],
      [5660, 0, new Date(2015, 5, 23, 8 - 2, 55)]
    ];

    var outcome = [ 5660, 5281, 3956, 2957, 5101, 3593 ];
    
    var ranked = inputs.map(function (values) {
      return {
        points: values[0],
        rank: hot.apply(null, values)
      };
    });

    ranked = ranked.sort(function(curr, prev) {
      return curr.rank - prev.rank;
    }).reverse();

    expect(ranked[0].points).to.be.equal(outcome[0]);
    expect(ranked[1].points).to.be.equal(outcome[1]);
    expect(ranked[2].points).to.be.equal(outcome[2]);
    expect(ranked[3].points).to.be.equal(outcome[3]);
    expect(ranked[4].points).to.be.equal(outcome[4]);
    expect(ranked[5].points).to.be.equal(outcome[5]);
  });
});