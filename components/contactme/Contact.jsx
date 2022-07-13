import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import Mailme from './Mailme'

function Contact() {
  return (
    <Stack id='contact' minH='100vh' alignItems='center' justifyContent='center' userSelect='none'>
      <Heading as='h2' color='orange.400' fontFamily='Teko, sans-serif' fontSize='6xl'>contact me</Heading>
      <Mailme />
    </Stack>
  )
}

export default Contact