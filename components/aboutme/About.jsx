import { Stack } from '@chakra-ui/react'
import React from 'react'
import Skills from './Skills'
import Me from './Me'

function About() {
  return (
    <Stack id='about' minH='100vh' w='100vw' bgColor='gray.900' direction={{base: 'column', '2xl':'row'}} alignItems={{base:'start', sm:'center'}} justifyContent='space-around' wrap='wrap' gap={{base: 10,md:5}} p={10}>
      <Skills />
      <Me />
    </Stack>
  )
}

export default About