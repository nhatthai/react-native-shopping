/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabProduct: {
            screens: {
              ProductListScreen: 'Products',
            },
          },
          TabFavorite: {
            screens: {
              TabFavoriteScreen: 'Favorite',
            },
          },
          TabCart: {
            screens: {
              TabCartScreen: 'Cart',
            },
          },
          TabAccount: {
            screens: {
              TabAccountScreen: 'Account',
            },
          }
        },
      },
      Buy: 'buy',
      Profile: 'profile',
      Settings: 'settings',
      NotFound: '*',
    },
  },
};

export default linking;
