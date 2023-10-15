import { NextPage } from 'next'
import RootLayout from '../app/layout'
import { ChakraProvider, Box, Button } from '@chakra-ui/react'

const Page: NextPage = () => {
  return (
    <RootLayout>
      <ChakraProvider>
        <Box mb={3}>
          <h1>Hello, Home page!</h1>
        </Box>

        <Box mb={3}>
          <Button>OK</Button>
        </Box>
      </ChakraProvider>
    </RootLayout>
  )
}

export default Page
