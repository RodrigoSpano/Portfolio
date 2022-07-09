import { Stack } from '@chakra-ui/react'
import React from 'react'
import Skills from './Skills'
import Me from './Me'

function About() {
  return (
    <Stack minH='100vh' w='100vw' bgColor='gray.900' direction={{base: 'column', md:'row'}} alignItems='center' justifyContent='space-around' wrap='wrap' gap={{base: 10,md:5}} p={10}>
      <Skills />
      <Me />
    </Stack>
  )
}

export default About