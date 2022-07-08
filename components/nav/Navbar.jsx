import { Stack } from '@chakra-ui/react'
import React from 'react'
import DrawerNav from './Drawer'

function Navbar() {
  return (
    <Stack w='100vw' h='60px' justifyContent='flex-end' direction='row' p={2}>
      <DrawerNav />
    </Stack>
  )
}

export default Navbar