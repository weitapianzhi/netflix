import React from "react";
import { FooterContainer, Row, Column, Link } from "./styles";
interface IProps {
  children?: React.ReactElement;
  [PropsName: string]: any
}
export default function Footer({ children }: IProps) {
  return (
    <>
      {
        children
      }
    </>
  )
}

Footer.Container = function ({ children }: IProps): JSX.Element {
  return (
    <FooterContainer>
      {
        children
      }
    </FooterContainer>
  )
}

Footer.Row = function ({ children }: IProps): JSX.Element {
  return (
    <Row>
      {
        children
      }
    </Row>
  )
}

Footer.Column = function ({ children }: IProps): JSX.Element {
  return (
    <Column>
      {
        children
      }
    </Column>
  )
}

Footer.Link = function ({ children,href }: IProps): JSX.Element {
  return (
    <Link href={href}>
      {
        children
      }
    </Link>
  )
}