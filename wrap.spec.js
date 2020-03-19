const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  const input = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."
  const output = `Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.`

  it('Returns correct string if string was provided', () => {
    expect(wrap(input, 20)).to.equal(output);
  });

});

