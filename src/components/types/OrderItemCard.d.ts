import {ImageProps} from 'react-native';
import {PricesProps} from '@components/types';
export interface OrderItemCard {
  type: string;
  name: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  prices: Array<PricesProps>;
  ItemPrice: string;
}
