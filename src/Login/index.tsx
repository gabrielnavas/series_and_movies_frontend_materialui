import Form from './components/Form'

import Router from 'next/router'
import { useEffect } from 'react'

import { getUrls } from '../config/url'
import { isLoggedIn } from '../shared/usecases/AuthenticationManager'

const RegisterPage = () => {
  useEffect(() => {
    if (isLoggedIn()) {
      Router.replace(getUrls().pages.main)
    }
  }, [])

  return <Form />
}

export default RegisterPage
