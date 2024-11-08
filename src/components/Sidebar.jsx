import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { BiCalendar, BiPencil } from "react-icons/bi";
import { FiAtSign } from "react-icons/fi";
import { TbEditCircleOff } from "react-icons/tb";
import { NavLink } from "react-router-dom";


export default function Sidebar() {
  return (
    <div>
      <List color = "white" fontSize="1.2em" spacing={4}>
        <ListItem>
            <NavLink to="/"> 
            <ListIcon as={BiCalendar} color="white" />
                Dashboard
            </NavLink>
        </ListItem>
    
        <ListItem>
            <NavLink to="/create"> 
            <ListIcon as={BiPencil} color="white" />
                New Tasks
            </NavLink>
        </ListItem>
    
        <ListItem>
            <ListIcon as={FiAtSign} color="white" />
            <NavLink to="/profile"> 
                Profile
            </NavLink>
        </ListItem>
      </List>
    </div>
  )
}
