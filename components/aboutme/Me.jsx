import { BsDownload } from 'react-icons/bs'
import { Avatar, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'

function Me() {
  return (
    <Stack w='xl'>
      <Heading as='h2' textAlign='center' fontFamily='Teko, sans-serif, cursive' color='orange.400' fontSize='6xl' >About me</Heading>
      
      <Stack p={5} borderRadius={20} bgColor='gray.900' boxShadow='0px 0px 22px -3px rgba(0,0,0,0.8)' >
        <Flex justifyContent='center' alignItems='center' gap={5}>
          <Avatar name='Rodrigo Spano' src='https://bit.ly/ryan-florence' size='xl' />
          <Link href='/cv.pdf' download color='orange.300' border='1px solid orange' p={2} borderRadius={10} display='flex' gap={1} alignItems='center' flexDirection='row' _hover={{color:'orange.400'}}  >
            <Text>Download CV</Text>
            <BsDownload />
          </Link>
        </Flex>
        <Heading as='h2' color='gray.100' fontFamily='Comfortaa, cursive' textAlign='center' >
          Rodrigo Spano
        </Heading>
        <Text color='gray.300' lineHeight={2} fontFamily='Comfortaa, cursive' fontSize='sm'>
          lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu 
        </Text>

      </Stack>

    </Stack>
  )
}

export default Me