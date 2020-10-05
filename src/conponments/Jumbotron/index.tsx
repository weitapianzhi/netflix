import React from "react";
import { Main,Container,Pane,Title,SubTitle,Img } from "./styles";
interface IProps {
  children?: any,
  [PropsName:string]:any
}
export default function Jumbotron({ children,direction }: IProps): JSX.Element {
  return (
    <Main direction={direction}>
      {
        children
      }
    </Main>
  )
}

Jumbotron.Container = function ({ children }: IProps): JSX.Element {
  return (
    <Container>
      {
        children
      }
    </Container>
  )
}

Jumbotron.Pane = function ({ children }: IProps): JSX.Element {
  return (
    <Pane>
      {
        children
      }
    </Pane>
  )
}

Jumbotron.Title = function ({ children }: IProps): JSX.Element {
  return (
    <Title>
      {
        children
      }
    </Title>
  )
}
Jumbotron.SubTitle = function ({ children }: IProps): JSX.Element {
  return (
    <SubTitle>
      {
        children ? children : <></>
      }
    </SubTitle>
  )
}

Jumbotron.Image = function ({ src }: IProps): JSX.Element {
  return (
    <Img src={src}>

    </Img>
  )
}