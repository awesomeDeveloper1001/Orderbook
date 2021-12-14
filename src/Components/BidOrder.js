import React from 'react';
import AbstractOrder from './AbstractOrder';

class BidOrder extends AbstractOrder {

  render() {
    return (
      <tr className="bid fill-bid" style={{backgroundSize: this.getPercentage() + "% 100%"}}>
        <td>
          {this.props.cumulative}
        </td>
        <td>{this.props.quantity}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default BidOrder;
