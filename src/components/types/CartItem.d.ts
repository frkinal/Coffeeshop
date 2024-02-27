import {ImageProps} from 'react-native';
import {PricesProps} from '@components/types';
export interface CartItem {
  id: string;
  name: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  roasted: string;
  prices: Array<PricesProps>;
  type: string;
  incrementCartItemQuantityHandler: (id: string, size: string) => void;
  decrementCartItemQuantityHandler: (id: string, size: string) => void;
}
