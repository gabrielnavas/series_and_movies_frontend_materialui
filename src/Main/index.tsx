import Router from 'next/router'
import { useEffect } from 'react'

import { getUrls } from '../config/url'
import { isLoggedIn } from '../shared/usecases/AuthenticationManager'

const Main = () => {
  useEffect(() => {
    if (!isLoggedIn()) {
      Router.replace(getUrls().pages.login)
    }
  }, [])

  return <h1>logado</h1>
}

export default Main
