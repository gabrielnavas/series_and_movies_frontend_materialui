import {
  Grid,
  Link
} from '@mui/material'

import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'

import { getUrls } from '../../config/url'

const urls = getUrls()

type Props = {
  isLoading: boolean
}

const Form = ({ isLoading }: Props) => {
  return (
    <Grid
      container
      spacing={2}
      style={{ padding: '16px 16px 16px 36px', alignItems: 'flex-end' }}>
      <Grid item xs={10} lg={4}>
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          type='submit'
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Logar
        </LoadingButton>
      </Grid>
      <Grid item >
        {
          !isLoading && (
            <Link href={urls.pages.register} variant="body2">
              Ainda não sou cadastrado
            </Link>
          )
        }
      </Grid>
    </Grid>
  )
}

export default Form
