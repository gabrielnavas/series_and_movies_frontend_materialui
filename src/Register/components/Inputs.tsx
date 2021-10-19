import { ChangeEvent } from 'react'

import {
  Grid,
  TextField
} from '@mui/material'

import {
  Inputs,
  ErrorsInputs
} from '../hooks/useForm'

type Props = {
  values: Inputs
  errors: ErrorsInputs
  handleChange: (e: ChangeEvent<any>) => void
}

const Form = (props: Props) => {
  return (
    <>
      <Grid item xs={10} lg={5}>
        <TextField
          id="name"
          error={!!props.errors.name}
          helperText={props.errors.name}
          value={props.values.name}
          fullWidth
          onChange={props.handleChange}
          label="Primeiro nome"
          variant="standard" />
      </Grid>
      <Grid item xs={10} lg={5}>
        <TextField
          id="lastName"
          error={!!props.errors.lastName}
          helperText={props.errors.lastName}
          value={props.values.lastName}
          fullWidth
          onChange={props.handleChange}
          label="Sobrenome"
          variant="standard" />
      </Grid>
      <Grid item xs={10}>
        <TextField
          id="email"
          error={!!props.errors.email}
          helperText={props.errors.email}
          value={props.values.email}
          fullWidth
          onChange={props.handleChange}
          type='email'
          label="Email"
          variant="standard" />
      </Grid>
      <Grid
        container
        spacing={2}
        style={{ padding: 16 }}>
        <Grid item xs={9} lg={5}>
          <TextField
            id="password"
            error={!!props.errors.password}
            helperText={props.errors.password}
            value={props.values.password}
            fullWidth
            onChange={props.handleChange}
            label="Senha"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </Grid>
        <Grid item xs={9} lg={5}>
          <TextField
            id="passwordConfirmation"
            error={!!props.errors.passwordConfirmation}
            helperText={props.errors.passwordConfirmation}
            value={props.values.passwordConfirmation}
            fullWidth
            onChange={props.handleChange}
            label="Confirmação de senha"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Form
