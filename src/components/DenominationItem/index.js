import './index.css'

const DenominationItem = props => {
  const {amountDetails, withdrawAmount} = props
  const {value} = amountDetails

  const onWithdrawAmount = () => {
    withdrawAmount(value)
  }
  return (
    <li>
      <button type="button" className="btn" onClick={onWithdrawAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
