import React, { useContext } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import { Text } from '../components/Themed';
import Separator from '../components/Separator';
import ProductContext from '../hooks/productContext';
import {REMOVE_FROM_CART} from '../hooks/productReducer';

export default function CartItem(props: any) {
  const { dispatch } = useContext(ProductContext);

  function removeItemFromCart(item: any) {
    dispatch({ type: REMOVE_FROM_CART, payload: item });
  }

  return (
    <View>
      <View style={styles.itemContainer}>
        <Image source={{ uri: props.item.imgUrl }} style={styles.thumbnail} />
        <View style={styles.itemMetaContainer}>
          <Text style={styles.textTitle} numberOfLines={1}>
            {props.item.name}
          </Text>
          <Text style={styles.textAuthor}>{props.item.author}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => removeItemFromCart(props.item)}
              style={styles.button}>
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Separator />
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10
  },
  thumbnail: {
    width: 100,
    height: 150
  },
  itemMetaContainer: {
    padding: 5,
    paddingLeft: 10
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '400'
  },
  textAuthor: {
    fontSize: 12,
    fontWeight: '200'
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#ff333390',
    padding: 5
  },
  buttonText: {
    fontSize: 12,
    color: '#fff'
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 16
  }
})
