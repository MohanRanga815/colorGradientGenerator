// Write your code here
import {ListItems, DirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, clickGradientItem} = props
  const {displayText, value} = gradientDirectionDetails

  const onClickGradientItem = () => {
    clickGradientItem(value)
  }

  return (
    <ListItems>
      <DirectionItem
        isActive={isActive}
        type="button"
        onClick={onClickGradientItem}
      >
        {displayText}
      </DirectionItem>
    </ListItems>
  )
}
export default GradientDirectionItem
