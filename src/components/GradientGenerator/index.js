import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  ResponseContainer,
  Heading,
  ParaDirection,
  GradientDirectionList,
  ColorPicker,
  ColorPickerContainer,
  CustomColorPickerContainer,
  ColorValue,
  CustomColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    isDirectionActive: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerate = () => {
    const {fromColor, toColor, isDirectionActive} = this.state
    this.setState({
      gradientValue: `to ${isDirectionActive}, ${fromColor}, ${toColor}`,
    })
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  clickGradientItem = direction => {
    this.setState({isDirectionActive: direction})
  }

  render() {
    const {fromColor, toColor, isDirectionActive, gradientValue} = this.state
    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponseContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <ParaDirection>Choose Direction</ParaDirection>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                clickGradientItem={this.clickGradientItem}
                isActive={isDirectionActive === eachDirection.value}
              />
            ))}
          </GradientDirectionList>
          <ColorPicker>Pick the Colors</ColorPicker>
          <ColorPickerContainer>
            <CustomColorPickerContainer>
              <ColorValue>{fromColor}</ColorValue>
              <CustomColorInput
                type="color"
                onChange={this.onChangeFromColor}
                value={fromColor}
              />
            </CustomColorPickerContainer>
            <CustomColorPickerContainer>
              <ColorValue>{toColor}</ColorValue>
              <CustomColorInput
                type="color"
                onChange={this.onChangeToColor}
                value={toColor}
              />
            </CustomColorPickerContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </ResponseContainer>
      </GradientContainer>
    )
  }
}
export default GradientGenerator
