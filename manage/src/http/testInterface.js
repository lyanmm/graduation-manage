import instance from './base'

export function testInterface(data) {
  return instance.post('/test', data)
}