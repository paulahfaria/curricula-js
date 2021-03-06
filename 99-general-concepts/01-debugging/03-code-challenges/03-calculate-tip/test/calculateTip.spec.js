
const Assert = require('chai').assert;
const calculateTip = require('../solution/calculateTip');

describe('calculateTip()', function() {
  it('debería regresar 15, para (100)', function() {
    Assert.deepEqual(calculateTip(100), 15);
  });

  it('debería regresar 4.5, para (30)', function() {
    Assert.deepEqual(calculateTip(30), 4.5);
  });

  it('debería regresar 0, para (0)', function() {
    Assert.deepEqual(calculateTip(0), 0);
  });

  it('debería regresar 7.5, para (50)', function() {
    Assert.deepEqual(calculateTip(50), 7.5);
  });
});
