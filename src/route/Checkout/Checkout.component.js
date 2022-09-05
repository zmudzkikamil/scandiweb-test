import ContentWrapper from 'SourceComponent/ContentWrapper/ContentWrapper.component'
import {Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component';
import ProgressBar from './ProgressBar';
export class Checkout extends SourceCheckout {
    render() {
        return (
            <main block="Checkout">
                <ProgressBar checkoutStep={this.props.checkoutStep}/>
              <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}
export default Checkout;