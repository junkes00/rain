import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const signUpSchema = z
  .object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    email: z.email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })

export function useSignUpController() {
  const defaultValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    watch,
    getValues,
    control,
  } = useForm({
    defaultValues,
    resolver: zodResolver(signUpSchema),
    reValidateMode: 'onBlur',
  })

  function onSubmit(data: any) {
    console.log(data)
  }

  return {
    errors,
    control,
    register,
    handleSubmit: handleSubmit(onSubmit),
    setError,
    reset,
    watch,
    getValues,
  }
}
