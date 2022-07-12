
import { chakra, Input, Button, Stack, Text, Textarea } from '@chakra-ui/react'
import React, { useState, useRef } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'

const textSchema = Yup.object().shape({
  text: Yup.string().min(20, 'muy corto').required('required')
})

function Mailme() {
  const form = useRef()
  const [sent, setSent] = useState(false)


  return (
    <Formik
      initialValues={{
        name:'',
        email:'',
        text:'',
      }}
      validate={(values) => {
        let errors = {}

        if(!values.name){
          errors.name = 'escribi un nombre valido'
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
          errors.name = 'el nombre solo puede tener letras y espacios'
        }

        if(!values.email){
          errors.email = 'escribe un mail valido'
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
          errors.email = 'el correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
        }
        return errors;
      }}
      validationSchema={textSchema}

      onSubmit={(values, {resetForm}) => {
        resetForm()
        setSent( true )
        setTimeout(() => setSent( false ), 5000)
        emailjs.sendForm('service_k9rhp8t','template_vz4op46',form.current,'Dy08KZjDfWS2Bmb7W')
        .then((res) => console.log(res.text), err => console.log(err))
        values = initialValues
      }}  
    >
      {( {values, handleSubmit, handleChange, handleBlur, errors, touched} ) => (
        <chakra.form ref={form} display='flex' flexDirection='column' gap={5} onSubmit={handleSubmit} color='gray.100'>
          <Stack>
            <label htmlFor='name' >Name</label>
            <Input name='name' id='name' type='text' placeholder='write ur name' value={values.name} onChange={handleChange} onBlur={handleBlur} color='gray.100' />
            {touched.name && errors.name && <Text color='red.400'>{errors.name}</Text>}
          </Stack>
          <Stack>
            <label htmlFor='email'>Email</label>
            <Input name='email' type='email' id='email' placeholder='email@example.com' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
            {touched.email && errors.email && <Text color='red.400'>{errors.email}</Text>}
          </Stack>
          <Stack>
            <label htmlFor='text' >Text</label>
            <Textarea name='text' type='Textarea' id='text' placeholder='write here..' value={values.text} onChange={handleChange} onBlur={handleBlur} />
            {touched.text && errors.text && <Text color='red.400'>{errors.text}</Text>}
          </Stack>
          <Button type='submit' bgColor='orange' _hover={{color:'black', bg:'gray.300'}} >send</Button>
          {sent && <Text textAlign='center' color='green.400'>enviado exitosamente!</Text>}
        </chakra.form> 
        )}
    </Formik>
  )
}

export default Mailme