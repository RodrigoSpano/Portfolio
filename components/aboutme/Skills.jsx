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
        x:-30,
        transition:{type:'spring', bounce: 0.5, duration: 1, delay:0.2}
      })
    }
    if(!inView){
      animation.start({x:'-30vw'})
    }
  }, [inView])

  let skillsArr = [
    {name: 'html', thumb: '/assets/htmlLogo.png'},
    {name: 'css', thumb: '/assets/cssLogo.jpeg'},
    {name: 'tailwindCss', thumb: '/assets/tailwindcss.png'},
    {name: 'javascript', thumb: '/assets/jsLogo.png'},
    {name: 'typescript', thumb: '/assets/tsLogo.png'},
    {name: 'react', thumb: '/assets/reactLogo.png'},
    {name: 'redux', thumb: '/assets/reduxLogo.png'},
    {name: 'next', thumb: '/assets/nextLogo.png'},
    {name: 'nodeJs', thumb: '/assets/node.png'},
    {name: 'mongoDB', thumb: '/assets/mongodb.png'},
    {name: 'jest', thumb: '/assets/jestLogo.png'},
    {name: 'git', thumb: '/assets/gitLogo.jpg'},

  ]

  return (
    <motion.div ref={ref} animate={animation}>
      <Stack h='xl' minW='xs' justifyContent='center' gap={5} userSelect='none'>
        <Heading as='h2' color='orange.400' fontFamily='Teko, sans-serif' fontSize='5xl' textAlign='center' >
          Skills
        </Heading>
        <Stack px={10} gap={{md:5}} wrap='wrap' minW={{base:'md',md:'lg'}} maxH={{base:'sm', md:'md'}} alignItems='center' justifyContent='center'>
          {
            skillsArr.map((el) => (
              <SkillsCard name={el.name} img={el.thumb} key={Math.random()} />
            ))
          }

        </Stack>
      </Stack>
    </motion.div>
  )
}

export default Skills;