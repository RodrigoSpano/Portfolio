import { Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Contact() {
  return (
    <Stack id='contact' minH='80vh' alignItems='center' justifyContent='center' userSelect='none'>
      <Heading as='h2' color='orange.400' fontFamily='Teko, sans-serif' fontSize='6xl'>contact me</Heading>
      <Stack>
        <Text textColor='gray.200'>Contact to me if you have a Job Offer or want me to be part of a project</Text>
        <Text textAlign='center' textColor='gray.200'>Email: rorrospano17@gmail.com</Text>
      </Stack>
    </Stack>
  )
}

export default Contact