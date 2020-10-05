import React from "react";
import Accordion from "../conponments/Accordion";
import faqsList from "../fixtures/faqs.json";
export default function AccordionContainer(): JSX.Element {
  return (
    <Accordion.Container>
      <Accordion.Title>
        Frequently Asked Questions
      </Accordion.Title>
      <Accordion.Body>
        {
          faqsList.map(i => {
            return (
              <Accordion.Item key={i.id}>
                <Accordion.ItemTitle>
                  {
                    i.header
                  }
                </Accordion.ItemTitle>
                <Accordion.ItemBody>
                  {
                    i.body
                  }
                </Accordion.ItemBody>
              </Accordion.Item>
            )
          })
        }
      </Accordion.Body>
    </Accordion.Container>
  )
}