import { Heading, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SkillsCard from './SkillsCard';

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
      <Stack h='xl' minW='xs' justifyContent='center' gap={5}>
        <Heading as='h2' color='orange.400' fontFamily='Teko, sans-serif' fontSize='5xl' textAlign='center' >
          Skills
        </Heading>
        <Stack gap={5} wrap='wrap' minW='lg' maxH={{base:'lg', md:'md'}} alignItems='center' justifyContent='center'>
          <SkillsCard name={'Html'} img='/assets/htmlLogo.png' />
          <SkillsCard name={'Css'} img='/assets/cssLogo.jpeg' />
          <SkillsCard name={'Sass'} img='/assets/sassLogo.jpeg' />
          <SkillsCard name={'Javascript'} img='/assets/jsLogo.png' />
          <SkillsCard name={'React'} img='/assets/reactLogo.png' />
          <SkillsCard name={'Redux'} img='/assets/reduxLogo.png' />
          <SkillsCard name={'Next.Js'} img='/assets/nextLogo.png' />
          <SkillsCard name={'Chakra-UI'} img='/assets/chakraLogo.png' />
          <SkillsCard name={'Git'} img='/assets/gitLogo.jpg' />

        </Stack>
      </Stack>
    </motion.div>
  )
}

export default Skills;