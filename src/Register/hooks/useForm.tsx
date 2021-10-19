import { useEffect, useState } from 'react'
import { useFormik, FormikErrors } from 'formik'
import { getUrls } from '../../config/url'
import Router from 'next/router'

export type Inputs = {
  name: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
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
    onSubmit: async values => {
      async function __fetch () {
        const payload = {
          first_name: values.name,
          last_name: values.lastName,
          email: values.email,
          password: values.password,
          password_confirmation: values.passwordConfirmation
        }
        const url = `${getUrls().api.url}/api/user`
        console.log(url, payload)

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
          setGlobalErrors(['Usuário já existe com esse email, tente outro.'])
        }
        if (statusCode === 201) {
          Router.push(getUrls().pages.login)
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
