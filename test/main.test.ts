import {expect, test} from 'bun:test'

const {default: timon} = await import('#src/main.ts')

test('should run', () => {
  const result = timon()
  expect(result).toBe('timon') // TODO Test actual functionality
})
