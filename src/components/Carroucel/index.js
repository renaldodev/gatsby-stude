import React from "react"
import PropTypes from "prop-types"
import { Container } from "./styles"

function Carroucel({ items, ...rest }) {
  return <Container items={items} {...rest} />
}

Carroucel.propTypes = {
  item: PropTypes.array.isRequired,
}

export default Carroucel
