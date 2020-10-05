import styled from 'styled-components/macro';
export const Container = styled.section`
  position: relative;
  margin: 0 auto;
  padding-top: 40px;
  width: 60%;
`

export const Main = styled.div`
  display: flex;
  flex-direction: row;
`

export const Body = styled.div`
  width: 100%;
`

export const Title = styled.h1`
  text-align: center;
`

export const Item = styled.div`
  position: relative;
  background: #424242;
  margin-bottom: 10px;
`

export const ItemTitle = styled.div`
  padding: 10px 0 10px 5px;
  border-bottom: 1px solid #000;
`

export const ItemBody = styled.div`
  padding: 10px 5px;
  white-space: pre-line;
  word-break: keep-all;
`

export const Img = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  max-width: 16px;
  filter: brightness(0) invert(1);
  height: auto;
`

