import React, { useContext } from 'react';
import { StyleSheet,  FlatList } from 'react-native';
import Separator from '../components/Separator';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import CartItem from './CartItem';
import ProductContext from '../hooks/productContext';

export default function CartScreen({ navigation }: RootTabScreenProps<'TabCart'>) {
  const { state } = useContext(ProductContext);

  return (
    <View
      style={{
        flex: 1
      }}>
      {state.cartItems.length !== 0 ? (
        <FlatList
          data={state.cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <CartItem item={item} />
            )
          }}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Your cart is empty :'(</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 16
  }
});