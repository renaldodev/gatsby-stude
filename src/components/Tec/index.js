import React from 'react';

import { Container,Header,Body,Text ,Avatar,Title} from './styles';

function Tec({title,body}) {
  return <Container>
    <Body>
      <Avatar/>
      <Title>Bootstrap</Title>
      <Text>This is a wider card with supporting text below as a natural lead-in to additional </Text>
    </Body>
  </Container>
  ;
}

export default Tec;