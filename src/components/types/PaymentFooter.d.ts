interface PriceProps {
  price: string;
  currency: string;
}
export interface PaymentFooter {
  price: PriceProps;
  buttonPressHandler: any;
  buttonTitle: string;
}
