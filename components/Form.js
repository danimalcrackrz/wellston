import React from "react"
import { useForm } from "react-hook-form"

const Form = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <span className='form-title'>Contact Us</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder='Full Name' />
        <input {...register("email")} placeholder='Email' />
        <input {...register("phone")} placeholder='Phone' />
        <input
          {...register("message")}
          placeholder='Message'
          className='form-message'
        />
        <input type='submit' className='form-submit' />
      </form>
    </div>
  )
}

export default Form
