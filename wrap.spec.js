const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns correct string if string was provided', () => {
    const input = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."
    const output = `Lorem ipsum dolor\n
    sit eu amet, elit na\n
    magna sem amet nulla\n
    vel purus ac ligula.`
    expect(wrap(input, 20)).to.equal(output);
  });

});

