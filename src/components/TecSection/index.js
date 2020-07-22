import React from 'react';
import Tec from '../Tec';
import { Container,Wrapper } from './styles';


function TecSection() {
  return <Container>
      <Wrapper className="d-flex flex-md-row flex-sm-column">
         <Tec Title="" body=""/>
         <Tec Title="" body=""/>
         <Tec Title="" body=""/>
      </Wrapper>
  </Container>;
}

export default TecSection;