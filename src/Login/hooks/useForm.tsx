import { useEffect, useState } from 'react'
import { useFormik, FormikErrors } from 'formik'

import { getUrls } from '../../config/url'
import Router from 'next/router'
import ValidateInputUsecase from '../usecase/ValidationInputs'
import * as AuthenticationManager from '../../shared/usecases/AuthenticationManager'

export type Inputs = {
  email: string
  password: string
}

export type ErrorsInputs = FormikErrors<Inputs>

const initValues = () => ({
  name: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: ''
}) as Inputs

const useForm = () => {
  const [globalErrors, setGlobalErrors] = useState([] as string[])
  const [isLoading, setIsloading] = useState(false)

  const formik = useFormik<Inputs>({
    initialValues: initValues(),
    validate: ValidateInputUsecase,
    onSubmit: async values => {
      async function __fetch () {
        const payload = {
          email: values.email,
          password: values.password
        }
        const url = `${getUrls().api.url}/api/user/login`

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })

        const statusCode = response.status
        setIsloading(false)

        if (statusCode === 400) {
          setGlobalErrors(['Email ou senha incorretos.'])
        }
        if (statusCode === 201) {
          const { user, token } = await response.json()
          AuthenticationManager.setUserAuth({
            user: {
              id: user.id,
              firstName: user.first_name,
              lastName: user.last_name,
              email: user.email,
              createdAt: user.created_at
            },
            token
          })
          Router.push(getUrls().pages.main)
        }
      }
      setIsloading(true)
      __fetch()
    }
  })

  useEffect(() => {}, [formik.values, globalErrors])

  return {
    handleChange: formik.handleChange,
    handleSubmit: formik.handleSubmit,
    values: formik.values,
    errors: formik.errors,
    globalErrors: globalErrors,
    isLoading
  }
}

export default useForm
