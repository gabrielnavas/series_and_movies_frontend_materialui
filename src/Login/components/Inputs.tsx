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
      <Grid item xs={10} lg={10}>
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
      <Grid item xs={10} lg={10}>
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
    </>
  )
}

export default Form
