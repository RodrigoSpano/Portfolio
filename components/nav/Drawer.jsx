import React, { useRef } from 'react'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'
import { CgMenuRight } from 'react-icons/cg'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

function DrawerNav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} variant='unstyled' color='gray.100' fontSize='3xl' >
        <CgMenuRight />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor='#17192341' borderLeftRadius={20}>
          <DrawerCloseButton color='white' bgColor='gray.900' w={10} p={5} m={5} _hover={{bg: 'gray.900'}} />
          <DrawerBody py='20' userSelect='none' > 

            <Stack direction='column' alignItems='center' justifyContent='center' pt={20} gap={5} fontFamily='comfortaa, cursive' >

            <motion.div whileHover={{ scale: 1.3 }}>
                <Link to='home' smooth={true} duration={500}>
                  <Text variant='nav'>Home</Text>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.3 }}>
                <Link to='about' smooth={true} duration={500}>
                  <Text variant='nav'>About me</Text>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <Link to='projects' smooth={true} duration={500} >
                  <Text variant='nav'>Projects</Text>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <Link to='contact' smooth={true} duration={500} >
                  <Text variant='nav'>Contact me</Text>
                </Link>
              </motion.div>
            </Stack>

          </DrawerBody>
          <DrawerFooter userSelect='none' >

            <Stack direction='row' mx='auto'>
              <Link href={'https://www.linkedin.com/in/rodrigospano/'} isExternal >
                <Stack direction='row' color='gray.100' bgColor='blue.600' px={5} borderRadius={5} alignItems='center' cursor='pointer' >
                  <BsLinkedin />
                  <Text >Linkedin</Text>
                </Stack>
              </Link>
              <Link href={'https://github.com/RodrigoSpano'} isExternal >
                <Stack direction='row' alignItems='center' bgColor='gray.700' color='gray.100' px={5} borderRadius={5} cursor='pointer' >
                  <BsGithub />
                  <Text>Github</Text>
                </Stack>
              </Link>
            </Stack>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerNav