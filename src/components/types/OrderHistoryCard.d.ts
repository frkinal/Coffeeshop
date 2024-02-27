import {CartItem} from '@components/types';
export interface OrderHistoryCard {
  navigationHandler: any;
  CartList: Array<CartItem>;
  CartListPrice: string;
  OrderDate: string;
}
