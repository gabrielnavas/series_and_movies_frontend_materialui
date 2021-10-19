import { validateEmail } from '../../shared/utils/validation'
import { Inputs } from '../hooks/useForm'

const ValidateInputUsecase = (inputs: Inputs): Inputs => {
  const errors = {} as Inputs

  if (!validateEmail(inputs.email)) {
    errors.email = 'Email está inválido'
  }
  if (inputs.password.length < 2) {
    errors.password = 'Deve ter mais que 2 caracteres'
  }
  if (inputs.password.length >= 70) {
    errors.password = 'Muito grande'
  }
  return errors
}

export default ValidateInputUsecase
