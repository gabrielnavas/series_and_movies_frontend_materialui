import {
  Grid,
  Alert
} from '@mui/material'
import { useEffect } from 'react'

type Props = {
  messages: string[]
}

const MessagesForm = ({ messages }: Props) => {
  useEffect(() => {}, [messages])

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      style={{ padding: 16, alignItems: 'flex-end' }}>
      <Grid item xs={12} lg={12}>
        {
          messages.map((message, index) => (
            <Alert
              key={index}
              severity="error"
              style={{ marginBottom: '5px' }}>
              {message}
            </Alert>
          ))
        }
      </Grid>
    </Grid>
  )
}

export default MessagesForm
