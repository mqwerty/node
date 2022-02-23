import main from '../src/main'

describe('main', () => {
  it('success', () => {
    expect(main()).resolves.toStrictEqual('Hello')
  })
})
