import React from "react"
import { Link } from "gatsby"
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { MdMenu } from "react-icons/md"
import {
  Container,
  Wrapper,
  Title,
  ButtonToggle,
  ResponsiveElements,
} from "./styles"

function Menu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleNav = () => setIsOpen(!isOpen)

  return (
    <Container expand="md" color="light">
      <Wrapper className="container">
        <Title mr-auto href="/">
          Gatsby
        </Title>
        <ButtonToggle onClick={toggleNav} className="mr-2">
          <MdMenu />
        </ButtonToggle>
        <ResponsiveElements isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/constact">Contacts</NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle caret nav>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Link</DropdownItem>
                <DropdownItem>Link</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Link</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </ResponsiveElements>
      </Wrapper>
    </Container>
  )
}

export default Menu
