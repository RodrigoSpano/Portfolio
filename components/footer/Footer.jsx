import { Link, Stack } from '@chakra-ui/react'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <Stack h='50px' w='100vw' alignItems='center' justifyContent='center' direction='row' color='gray.200' fontSize='xl'>
      <Link href='https://github.com/RodrigoSpano' isExternal>
        <BsGithub />
      </Link>
      <Link href='https://www.linkedin.com/in/rodrigospano/' isExternal>
        <BsLinkedin />
      </Link>
    </Stack>
  )
}

export default Footer