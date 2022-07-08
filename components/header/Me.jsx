import { Box, Heading, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import Typewriter from 'typewriter-effect'


function Me() {
  return (
    <Stack overflow='hidden' py={20} fontFamily='Comfortaa, cursive' minH='50vh'  >
      <motion.div transition={{duration:2}} animate={{ y: [0,300], x:[0, 300] }} initial={true} >
        <Heading as='h3' fontSize='md' color='gray.200' pl={1}>Hi, I am</Heading>
        <Heading as='h1' fontSize='6xl' color='orange.400' fontFamily='Secular One, sans-serif'>Rodrigo Spano</Heading>
        <Box color='gray.100'>
          <Typewriter
            options={{
              strings: ['Front End Developer'],
              autoStart: true,
              loop: true,
            }}/>
        </Box>

      </motion.div>
    </Stack>
  )
}

export default Me