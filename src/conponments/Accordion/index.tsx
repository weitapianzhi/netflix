import React, {
  useState, useContext, createContext
} from "react";
import { Main, Container, Body, Title, Item, ItemTitle, ItemBody, Img } from "./styles";
interface IContext {
  toggleShow: boolean,
  setToggleShow: any
}
interface IProps {
  children?: any,
  [PropsName: string]: any
}
const toggleContext = createContext<IContext>({
  toggleShow: false,
  setToggleShow: null
});
export default function Accordion({ children }: IProps): JSX.Element {
  return (
    <Main>
      {
        children
      }
    </Main>
  )
}

Accordion.Container = function AccordionContainer({ children }: IProps): JSX.Element {
  return (
    <Container>
      {
        children
      }
    </Container>
  )
}

Accordion.Body = function ({ children }: IProps): JSX.Element {
  return (
    <Body>
      {
        children
      }
    </Body>
  )
}

Accordion.Title = function ({ children }: IProps): JSX.Element {
  return (
    <Title>
      {
        children
      }
    </Title>
  )
}

Accordion.Item = function AccordionItem({ children }: IProps): JSX.Element {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <toggleContext.Provider value={{ toggleShow, setToggleShow }}>
      {
        <Item>{children}</Item>
      }
    </toggleContext.Provider>
  )
}

Accordion.ItemTitle = function AccordionItemTitle({ children }: IProps): JSX.Element {
  const { toggleShow, setToggleShow } = useContext(toggleContext)
  return (
    <ItemTitle onClick={() => setToggleShow(!toggleShow)}>
      {
        children
      }
      {
        toggleShow ? (
          <Accordion.Img src="/images/icons/close-slim.png"></Accordion.Img>
        ) : (
            <Accordion.Img src="/images/icons/add.png"></Accordion.Img>
          )
      }
    </ItemTitle>
  )
}

Accordion.ItemBody = function AccordionItemBody({ children }: IProps): JSX.Element {
  const { toggleShow } = useContext(toggleContext)
  return (
    <>
      {
        toggleShow ? (<ItemBody>{children}</ItemBody>) : null
      }
    </>
  )
}

Accordion.Img = function AccordionImg({ children, src }: IProps): JSX.Element {
  return (
    <Img src={src}>
      {
        children
      }
    </Img>
  )
}
