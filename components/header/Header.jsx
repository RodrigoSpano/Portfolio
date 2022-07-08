import { Box, Heading, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import Typewriter from 'typewriter-effect'


function Header() {
  return (
    <Stack overflow='hidden' minH='60vh' alignItems='center' justifyContent='center' >

      <Stack>
        <motion.div transition={{ duration: 3 }} initial={{x: '-100vw'}} animate={{ x: 0}}>
          <Heading as='h3' fontFamily='Comfortaa, cursive' fontSize='md' color='gray.200' pl={1}>Hi, I am</Heading>
        </motion.div>

        <motion.div transition={{ duration: 3}} initial={{x: '100vw'}} animate={{ x: 0 }} >
          <Heading as='h1' fontSize='7xl' color='orange.400' fontFamily='Secular One, sans-serif'>Rodrigo Spano</Heading>
        </motion.div>

        <Box color='gray.100' fontFamily='Comfortaa, cursive' >
          <Typewriter
            options={{
              strings: ['Front End Developer'],
              autoStart: true,
              loop: true,
            }}/>
        </Box>
      </Stack>

    </Stack>
    
  )
}
export default Header;