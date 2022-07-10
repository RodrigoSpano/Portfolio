import { Heading, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Skills() {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        x:0,
        transition:{type:'spring', bounce: 0.3, duration: 1, delay:0.2}
      })
    }
    if(!inView){
      animation.start({x:'-30vw'})
    }
  }, [inView])

  return (
    <motion.div ref={ref} animate={animation}>
      <Stack h='xl' w='xs'>
        <Heading as='h2' color='orange.400' fontFamily='Teko, sans-serif' fontSize='5xl' textAlign='center' >
          Skills
        </Heading>
      </Stack>
    </motion.div>
  )
}

export default Skills;