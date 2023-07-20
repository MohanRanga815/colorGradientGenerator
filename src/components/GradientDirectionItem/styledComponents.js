// Style your elements here
import styled from 'styled-components/macro'

export const ListItems = styled.li`
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const DirectionItem = styled.button`
  text-align: center;
  margin-left: 20px;

  background-color: #ffffff;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 6px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
