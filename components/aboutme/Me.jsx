import { BsDownload } from 'react-icons/bs'
import { Avatar, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { HiLocationMarker } from 'react-icons/hi'

function Me() {

  const { ref, inView } = useInView()
  const animation = useAnimation()

  useEffect( () => {
    if(inView){
      animation.start({
        x:0,
        transition: { type:'spring' ,delay: 0.2, duration: 1 , bounce: 0.5 }
      })
    }
    if(!inView){
      animation.start({ x: '30vw'})
    }
  }, [inView] )

  return (
    <motion.div animate={animation}>
      <Stack ref={ref} w={{base:'sm',md:'lg'}} px={10} userSelect='none' >
        <Heading as='h2' textAlign='center' fontFamily='Teko, sans-serif, cursive' color='orange.400' fontSize='6xl' >About me</Heading>
        
        <Stack p={5} borderRadius={20} bgColor='gray.900' boxShadow='0px 0px 22px -3px rgba(0,0,0,0.8)' >

          <Flex justifyContent='center' alignItems='center' gap={5}>
            <Avatar name='Rodrigo Spano' src='/assets/foto.jpeg' size='xl' />
            <Flex direction='column' gap={2} justifyContent='center'>
              <Stack color='gray.500' flexDirection='row' alignItems='center' gap={1} >
                <HiLocationMarker />
                <Text fontSize='sm'>Buenos Aires, Argentina</Text>
              </Stack>

              <Link href='/assets/cv.pdf' download color='orange.300' border='1px solid orange' p={2} borderRadius={10} display='flex' gap={1} alignItems='center' justifyContent='center' flexDirection='row' _hover={{color:'orange.400'}}  >
                <Text>Download CV</Text>
                <BsDownload />
              </Link>
            </Flex>
          </Flex>

          <Heading as='h2' color='gray.100' fontFamily='Comfortaa, cursive' textAlign='center' fontSize={{base:'xl',md:'3xl'}} >
            Rodrigo Spano
          </Heading>
          <Text color='gray.400' lineHeight={{md:2}} fontFamily='Comfortaa, cursive' fontSize={{base:'xs',md:'sm'}}>
          I am a Front-End Developer but I am also studying Back-End to be able to be Fullstack MERN (Mongo, Express, React, Node). Since I was very young I have been passionate about technology, always wanting to learn more and improve my knowledge in order to improve myself every day and give the best of myself.
          My goal is to be part of a development team and be able to grow professionally
          </Text>

        </Stack>

      </Stack>
    </motion.div>
  )
}

export default Me