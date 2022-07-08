import { Stack } from '@chakra-ui/react'
import React from 'react'
import Curriculum from './Curriculum'
import Me from './Me'

function About() {
  return (
    <Stack h='100vh' bgColor='gray.800' direction='row' alignItems='center' justifycontent='center'>
      <Curriculum />
      <Me />
    </Stack>
  )
}

export default About