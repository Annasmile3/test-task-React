import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 50px;
  border: 1px solid #DDD;
  font-family: "Gill Sans", sans-serif;
  @media (max-width: 500px) {
    padding: 0 15px;
  }
`

export default function Layout(props: any) {
  return (
    <Wrapper>
      <Header/>
      {props.children}
    </Wrapper>
  )
}