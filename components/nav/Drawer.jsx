import React, { useRef } from 'react'
import { Link, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'

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
          <DrawerCloseButton color='white' bgColor='gray.900' w={10} _hover={{bg: 'gray.900'}} />
          <DrawerBody py='20' userSelect='none' > 

            <Stack direction='column' alignItems='center' justifyContent='center' pt={20} gap={5} fontFamily='comfortaa, cursive' >
              <Text variant='nav'>about me</Text>
              <Text variant='nav'>projects</Text>
              <Text variant='nav'>skills</Text>
              <Text variant='nav'>contact me</Text>
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