import { Badge, Flex, Heading, Image, Link, Stack } from '@chakra-ui/react'
import {v4 as uuid} from 'uuid'
import { BsGithub } from 'react-icons/bs'
import {motion} from 'framer-motion'

function ProjectCard(props) {
  return (
    <Stack w={{base:'xs',md:'sm'}} h={{base:'xs',md:'sm'}} bgColor='gray.600' borderRadius={20} p={5}  justifyContent='center' >
      <Image src={props.src} alt={props.name} borderRadius={10} />
      <Flex direction='row' alignItems='center' gap={2} >
        <Heading as='h2' color='gray.300' textTransform='capitalize' fontFamily='Teko, sans-serif' >{props.name}</Heading>
        <Link href={props.gh} isExternal color='gray.300' fontSize='20px' cursor='pointer'>
          <motion.div whileHover={{ scale: 1.4 }}>
            <BsGithub/>
          </motion.div>
        </Link>
      </Flex>
      <Flex gap={2}>
        {props.technology.map( el => (<Badge fontSize={{base:'x-small', md:'xs'}} colorScheme='orange' key={uuid()} >{el}</Badge>))}
      </Flex>
      <Link href={props.link} isExternal bgColor='orange.400' borderRadius={5} p={2} w={{base:'50px',md:'70px'}} fontSize={{base:'sm',md:'xl'}} textAlign='center' alignSelf='end' fontFamily='Teko, sans-serif' > Visit</Link>
    </Stack>
  )
}

export default ProjectCard