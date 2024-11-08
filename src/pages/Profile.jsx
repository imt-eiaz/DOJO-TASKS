
import { 
  Tabs, 
  TabList, 
  Tab, 
  TabPanels, 
  TabPanel, 
  List, 
  ListItem, 
  ListIcon 
} from '@chakra-ui/react'
import { CgCircleci } from "react-icons/cg"
import { CiWarning } from "react-icons/ci"
import { MdEmail } from "react-icons/md"
import { PiChairThin } from "react-icons/pi"
import { SiDatabricks } from "react-icons/si"

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" variant="enclosed" colorScheme="purple">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Account Info</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Task History</Tab>
      </TabList>

      <TabPanels py="10px">
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={MdEmail} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={PiChairThin} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={SiDatabricks} />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CgCircleci} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CgCircleci} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CiWarning} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CgCircleci} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CiWarning} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CgCircleci} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
