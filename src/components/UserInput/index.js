import {UserInputItem, UserEnterDetails} from './styledComponents'

const UserInput = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails

  return (
    <UserInputItem>
      <UserEnterDetails>
        {userEnteredText} : {textLength}
      </UserEnterDetails>
    </UserInputItem>
  )
}
export default UserInput
