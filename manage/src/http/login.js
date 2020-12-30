import instance from './base'

export function login(){
  instance.get('/login')
}