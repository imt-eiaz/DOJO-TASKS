import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { BiPencil } from "react-icons/bi";
import { BsEye, BsPencil } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {

  const tasks = useLoaderData()

  return (
    <SimpleGrid  columns={4} spacing={10} minChildWidth={300}>
      {tasks && tasks.map( task => (
        <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white" >
          <CardHeader>
            <Flex gap={5}>
              <Box w="50px" h="50px">
                <Avatar src={task.img} />
                </Box>
              <Box>
                <Heading as="h3" size="sm">{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
              </Flex>            
          </CardHeader>
          <CardBody color="gray.500">
            <Text>{task.description}</Text>
          </CardBody>

          <Divider borderColor="gray.300"></Divider>

          <CardFooter>
          <HStack>
            <Button variant="ghost" leftIcon={<BsEye />}> Watch</Button>
            <Button variant="ghost" leftIcon={<BsPencil />}>Comment</Button>
          </HStack>
          </CardFooter>
        </Card>
))}


    </SimpleGrid>
  )
}

export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks')

  return res.json()

}
