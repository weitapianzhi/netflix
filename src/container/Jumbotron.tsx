import React from "react";
import Jumbotron from "../conponments/Jumbotron";
import jumboList from "../fixtures/jumbo.json";
export default function JumbotronContainer ():JSX.Element{
  return (
    <Jumbotron.Container>
    {
      jumboList.map(item=>{
        return (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>
                  {item.title}
              </Jumbotron.Title>
              <Jumbotron.SubTitle>
                  {item.subTitle}
              </Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image}>
              </Jumbotron.Image>
            </Jumbotron.Pane>
          </Jumbotron>
        )
      })
    }
    </Jumbotron.Container>
  )
}