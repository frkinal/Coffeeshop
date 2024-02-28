import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';

import type {
  HomeBottomTabParamList,
  DetailsStackParamList,
  PaymentStackParamList,
} from '@navigators/types';

export type HomeBottomTabParamList = {
  Tab: NavigatorScreenParams<PromotionsBottomTabParamList>;
  Details: NavigatorScreenParams<DetailsStackParamList>;
  Payment: NavigatorScreenParams<PaymentStackParamList>;
};

export type HomeBottomTabNavigationProp =
  BottomTabNavigationProp<HomeBottomTabParamList>;
