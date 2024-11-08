import { Flex, Heading, Box, Text, Button, Spacer, HStack, useToast, Avatar } from "@chakra-ui/react"

export default function Navbar() {

  const toast = useToast()
  const showToast = () => {
    toast({
      title: 'Logged out', 
      description : 'Successfully logged out',
      duration : 5000,
      isClosable : true,
      status : 'success', 
      position : 'top'
  })
  }
  return (
    <Flex as="nav" p="10px" mb="60px"  alignItems="center">
      <Heading as="h1" fontSize="1.5em">Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing="20px"> 
        <Avatar name = 'mario' src="/img/mario.png" />
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple" onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>
  )
}
