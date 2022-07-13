import { Stack } from '@chakra-ui/react'
import React from 'react'
import DrawerNav from './Drawer'

function Sidebar() {
  return (
    <Stack w='100vw' h='60px' justifyContent='flex-end' direction='row' p={5} position='fixed' zIndex={99} >
      <DrawerNav />
    </Stack>
  )
}

export default Sidebar