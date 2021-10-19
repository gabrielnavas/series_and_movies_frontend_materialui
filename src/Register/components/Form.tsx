import {
  Grid,
  Paper
} from '@mui/material'

import styled from 'styled-components'

import AppBar from '../../shared/AppBar'

import Buttons from './Buttons'
import Inputs from './Inputs'
import Title from './Title'
import MessagesForm from './MessagesForm'

import useForm from '../hooks/useForm'

const Container = styled.div`
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const FormStyled = styled.form`
  margin: 16px;
  max-width: 600px;
`

const Form = () => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    globalErrors,
    isLoading
  } = useForm()

  return (
    <Container>
      <AppBar />
      <Content>
        <FormStyled onSubmit={handleSubmit}>
          <Paper style={{ padding: 10, margin: 7 }} elevation={3}>
            <Title />
            <Grid container spacing={2} >
              <Inputs
                values={values}
                errors={errors}
                handleChange={handleChange} />
              <MessagesForm messages={globalErrors} />
              <Buttons isLoading={isLoading} />
            </Grid>
          </Paper>
        </FormStyled>
      </Content>
    </Container>
  )
}

export default Form
