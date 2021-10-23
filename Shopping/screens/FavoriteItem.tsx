import React, { useContext } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import { View, Text } from '../components/Themed';
import ProductContext from '../hooks/productContext';
import {REMOVE_FAVORITE_LIST, ADD_TO_CART} from '../hooks/productReducer';
import Separator from '../components/Separator';

export default function FavoriteItem(props: any) {
  const { dispatch } = useContext(ProductContext);

  function removeItemFromFavoriteList(item: any) {
    dispatch({ type: REMOVE_FAVORITE_LIST, payload: item });
  }

  function addItemToCart(item: any) {
    dispatch({ type: ADD_TO_CART, payload: item });
  }

  return (
    <View>
      <View style={styles.itemContainer}>
        <View style={{flexDirection: "column"}}>
          <Image source={{ uri: props.item.imgUrl }} style={styles.thumbnail} />
        </View>

        <View style={styles.itemMetaContainer}>
          <Text style={styles.textTitle} numberOfLines={1}>
            {props.item.name}
          </Text>
          <Text style={styles.textAuthor}>{props.item.author}</Text>

          <View style={styles.buttonAddCart}>
            <TouchableOpacity
              onPress={() => addItemToCart(props.item)}
              style={styles.button}>
              <Text style={styles.buttonText}>Add Cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.favorite}>
          <TouchableOpacity onPress={() => removeItemFromFavoriteList(props.item)}>
            <MaterialIcons name="favorite" size={20} color="red"/>
          </TouchableOpacity>
        </View>
      </View>

      <Separator />
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: 'row',
    margin: 10
  },
  thumbnail: {
    width: 100,
    height: 150
  },
  favorite: {
    position: 'absolute',
    right: 20,
    top: 5,
    flexDirection: 'column'
  },
  itemMetaContainer: {
    padding: 5,
    paddingLeft: 10,
    flexDirection: 'column'
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '400'
  },
  textAuthor: {
    fontSize: 12,
    fontWeight: '200'
  },
  buttonAddCart: {
    position: 'absolute',
    top: 60,
    left: 10
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#24a0ed',
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
});
