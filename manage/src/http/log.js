import instance from './base'

export function login(data){
  return instance.post('/login',data);
}

export function logout(token){
  return instance.post('/logout',token)
}