import styled from "styled-components/macro"
interface IProps {
  direction:any,
  [PropsName:string]:any
}
export const Container =  styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column
`
export const Main = styled.div<IProps>`
  position: relative;
  display: flex;
  flex-direction: ${({direction})=>direction};
  width:50%;
  justify-content: space-between;
  @media (max-width:900px) {
    flex-direction: column
  }
`
export const Pane = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const Title = styled.h2`
  font-size: 16px;
`
export const SubTitle = styled.p`
  font-size: 14px;
`
export const Img = styled.img`
  max-width:100%;
  height:auto
`