import styled from "styled-components"
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from "reactstrap"
export const Container = styled(Navbar)``

export const Wrapper = styled.div``

export const Title = styled(NavbarBrand)`
 color: hsla(0, 0%, 0%, 0.8);
  font-size: 22px;
  font-weight: bold;
`

export const ButtonToggle = styled(NavbarToggler)`
  svg {
    fill:  hsla(0, 0%, 0%, 0.8);
  }
`

export const ResponsiveElements = styled(Collapse)``
