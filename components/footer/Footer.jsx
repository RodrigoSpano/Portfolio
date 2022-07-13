import { Link, Stack } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <Stack h='50px' w='100vw' alignItems='center' justifyContent='center' direction='row' color='gray.200' fontSize='xl'>
      <motion.div whileHover={{ scale: 1.5 }}>
        <Link href='https://github.com/RodrigoSpano' isExternal>
          <BsGithub />
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.5 }}>
        <Link href='https://www.linkedin.com/in/rodrigospano/' isExternal>
          <BsLinkedin />
        </Link>
      </motion.div>
    </Stack>
  )
}

export default Footer