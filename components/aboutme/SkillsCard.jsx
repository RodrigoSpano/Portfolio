import { Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'

function SkillsCard(props) {
  return (
    <Stack w={{base:'150px',md:'200px'}} h='50px' borderRadius={20} bg='gray.700' justifyContent='start' direction='row' alignItems='center' p={2} userSelect='none' boxShadow='0px 0px 22px -3px rgba(0,0,0,0.8)'  >
      <Image src={props.img} alt='technology image' boxSize='40px' borderRadius={10} objectFit='cover' />
      <Heading as='h2' fontSize={{base:'sm',md:'xl'}} pt={5} fontFamily='Comfortaa, cursive' textTransform='uppercase' color='gray.800' >{props.name}</Heading>
    </Stack>
  )
}

export default SkillsCard