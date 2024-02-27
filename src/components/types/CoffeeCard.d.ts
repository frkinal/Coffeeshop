import {PricesProps} from '@components/types';
export interface CoffeeCard {
  id: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: ImageProps;
  imagelink_portrait?: ImageProps;
  name: string;
  description?: string;
  special_ingredient: string;
  average_rating: number;
  price: any;
  buttonPressHandler: any;
  ingredients?: string;
  ratings_count?: string;
  favorite?: boolean;
  type?: string;
}
export interface CoffeeCardActionProps {
  id: string;
  index: number;
  name: string;
  roasted: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  type: string;
  prices: Array<PricesProps>;
}
