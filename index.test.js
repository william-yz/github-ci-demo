const add = require('./index')

describe(
  'test', () => {
    it('add', () => {
      expect(add(1,1)).toEqual(2)
    })
  }
)