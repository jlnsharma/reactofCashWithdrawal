import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balanceRupees: 2000}

  withdrawAmount = value => {
    this.setState(prevState => ({
      balanceRupees: prevState.balanceRupees - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balanceRupees} = this.state

    return (
      <div className="main">
        <div className="card">
          <div className="name-card">
            <p className="icon">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-cont">
            <p className="balance-desc">Your Balance</p>
            <div>
              <p className="amount">{balanceRupees}</p>
              <p className="amount-desc">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-desc">Withdraw</p>
          <p className="balance-desc">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-cont">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                amountDetails={each}
                withdrawAmount={this.withdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
