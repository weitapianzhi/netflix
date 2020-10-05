import React from "react";
import Footer from "../conponments/Footer";
export default function FooterContainer():JSX.Element{
  return (
    <Footer.Container>
        <Footer.Row>
          <>
            <Footer.Column>
              <>
                <Footer.Link href="#">
                  <>Hello Centre</>
                </Footer.Link>
                <Footer.Link href="#">
                  <>Jobs</>
                </Footer.Link>
                <Footer.Link href="#">
                  <>Terms Of Use</>
                </Footer.Link>
                <Footer.Link href="#">
                  <>Contact Us</>
                </Footer.Link>
              </>
            </Footer.Column>
            <Footer.Column>
              <>
                <Footer.Link href="#">
                  <>Hello Centre</>
                </Footer.Link>
                <Footer.Link href="#">
                  <>Jobs</>
                </Footer.Link>
                <Footer.Link href="#">
                  <>Terms Of Use</>
                </Footer.Link>
                <Footer.Link href="#">
                  <>Contact Us</>
                </Footer.Link>
              </>
            </Footer.Column>
          </>
        </Footer.Row>
    </Footer.Container>
  )
} 