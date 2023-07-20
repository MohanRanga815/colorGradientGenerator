// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  text-align: center;
`

export const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
`
export const ParaDirection = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: #ffffff;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
export const ColorPicker = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const CustomColorPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ColorValue = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-left: 10px;
  color: #ffffff;
`
export const CustomColorInput = styled.input`
  width: 60px;
  background-color: transparent;
  height: 40px;
`

export const GenerateButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #00c9b7;
  padding: 6px;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
`
