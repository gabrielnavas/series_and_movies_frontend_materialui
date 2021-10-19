export type User = {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  createdAt: Date
}

export type UserToken = {
  user: User,
  token: string
}

const LOCAL_STORAGE_USER_AUTH = 'LOCAL_STORAGE_USER_AUTH'

export const setUserAuth = (params: UserToken): void => {
  localStorage.setItem(LOCAL_STORAGE_USER_AUTH, JSON.stringify(params))
}

export const getUserAuth = (): UserToken | null => {
  const data = localStorage.getItem(LOCAL_STORAGE_USER_AUTH)
  if (data === null) {
    return null
  }
  const userToken = JSON.parse(data) as UserToken
  return userToken
}

export const isLoggedIn = (): boolean => getUserAuth() !== null
