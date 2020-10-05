import styled from 'styled-components/macro';
interface IProps{
  [PropsName:string]:any
}

export const FooterContainer = styled.section`
  position:relative;
  width: 70%;
  margin: 0 auto
`

export const Column = styled.div`
  display:flex;
  flex-direction: column;
  text-align: right;
`

export const Row = styled.div`
  display:grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill,minmax(230px,1fr))
`

export const Link = styled.a`
  text-decoration: none;
  color:#757575;
  font-size: 18px;
  padding-bottom:10px;
`