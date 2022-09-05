import React, { Component } from 'react'
import './Checkout.extension.style'
export class ProgressBar extends Component {
  render() {
    return (
      <div className="progressbar__container">
        <div className="progressbar__line_box">
            <div className={`${'progressbar__line'} ${'progressbar__activated'}`}/>
        </div>
        <div className={`${'progressbar__checkbox'} ${'progressbar__activated'}`}>
            <div>{this.props.checkoutStep === 'SHIPPING_STEP' ? 1 : '✓'}</div>
            <p className='step_info'>Shipping</p>
        </div> 
        <div className="progressbar__line_box_short">
            <div className={`${'progressbar__line_short'} ${this.props.checkoutStep !== 'SHIPPING_STEP' && 'progressbar__activated'}`}/>
        </div>
        <div className={`${'progressbar__checkbox'} ${this.props.checkoutStep !== 'SHIPPING_STEP' && 'progressbar__activated'}`}>
            <div>{this.props.checkoutStep === 'DETAILS_STEP' ? '✓' : '2'}</div>
            <p className='step_info'>Review & Payments</p>
        </div>
        <div className='progressbar__line_box'>
            <div className={`${'progressbar__line'} ${this.props.checkoutStep === 'DETAILS_STEP' && 'progressbar__activated'}`}/>
        </div>
        </div>
    )
  }
}
export default ProgressBar;