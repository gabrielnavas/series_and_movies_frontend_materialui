import { validateEmail } from '../../shared/utils/validation'
import { Inputs } from '../hooks/useForm'

const ValidateInputUsecase = (inputs: Inputs): Inputs => {
  const errors = {} as Inputs
  if (inputs.name.length < 2) {
    errors.name = 'Deve ter mais que 2 caracteres'
  }
  if (inputs.name.length >= 70) {
    errors.name = 'Muito grande'
  }
  if (inputs.lastName.length < 2) {
    errors.lastName = 'Deve ter mais que 2 caracteres'
  }
  if (inputs.lastName.length >= 70) {
    errors.lastName = 'Muito grande'
  }
  if (!validateEmail(inputs.email)) {
    errors.email = 'Email está inválido'
  }
  if (inputs.password.length < 2) {
    errors.password = 'Deve ter mais que 2 caracteres'
  }
  if (inputs.password.length >= 70) {
    errors.password = 'Muito grande'
  }
  if (inputs.passwordConfirmation.length < 2) {
    errors.passwordConfirmation = 'Deve ter mais que 2 caracteres'
  }
  if (inputs.password !== inputs.passwordConfirmation) {
    errors.password = 'Senhas estão diferentes.'
    errors.passwordConfirmation = 'Senhas estão diferentes.'
  }
  return errors
}

export default ValidateInputUsecase
