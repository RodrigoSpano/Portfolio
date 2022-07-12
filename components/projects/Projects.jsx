import { Heading, Stack } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer';
import {v4 as uuid} from 'uuid'
import ProjectCard from './ProjectCard';
import DB from './projectsDB'

function Projects() {
  const [width, setWidth] = useState(0);
  const carousel = useRef()

  useEffect( () => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[] )

  const { ref, inView} = useInView();
  const animation = useAnimation();

  useEffect( () => {
    if(inView){
      animation.start({
        x:0,
        transition:{ type:'spring',delay:0.3, duration: 1, bounce: 0.5}
      })
    }
    if(!inView){
      animation.start({x: '-50vw'})
    }
  }, [inView])

  return (
    <motion.div ref={ref} animate={animation} >
      <Stack id='projects' minH='100vh' alignItems='center' justifyContent='center' userSelect='none' gap={10}>
        <Heading as='h2' textTransform='uppercase' color='orange.400' fontFamily='Teko, sans-serif' fontSize='6xl' >Projects</Heading>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}} >
          <motion.div
            drag='x'
            dragConstraints={{right: 0, left: -width}}
            className='inner-carousel' >
            {
              DB.map( proj => {
                return (
                  <motion.div key={uuid()}>
                    <ProjectCard name={proj.name} src={proj.src} link={proj.link} technology={proj.technology} gh={proj.gh} />
                  </motion.div>
                );
              } )
            }
          </motion.div>
        </motion.div>
      </Stack>
    </motion.div>
    )
}

export default Projects