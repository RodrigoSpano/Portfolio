import { extendTheme } from "@chakra-ui/react";

const themes = extendTheme({
  components:{
    Text:{
      variants:{
        'nav':{
          color: 'gray.200',
          fontSize: '2xl',
          cursor: 'pointer',
          transition:'all ease 0.3s',
          _hover:{
            color: 'yellow.400',
            fontSize:'3xl'
          }
        }
      }
    }
  }
})

export default themes