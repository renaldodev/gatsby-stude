import styled from 'styled-components';
import {Card,CardBody,CardText,CardHeader} from 'reactstrap'
import {FaBootstrap} from 'react-icons/fa'
export const Container = styled(Card)`
  
`;

export const Title=styled.strong`
  font-size:14px;
`
export const Header=styled(CardHeader)``;
export const Body=styled(CardBody)``;
export const Text=styled(CardText)``;

export const Avatar =styled(FaBootstrap)`
    max-width:200px;
    max-height:200px;
    border-radius:50%;
`

