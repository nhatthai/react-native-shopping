import React, { useContext, useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';
import { Text } from '../components/Themed';
import ProductContext from '../hooks/productContext';
import {ADD_FAVORITE_LIST, ADD_TO_CART, REMOVE_FAVORITE_LIST} from '../hooks/productReducer';
import Separator from '../components/Separator';

export default function ProductItem(props: any) {
  const { state, dispatch } = useContext(ProductContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteColor, setFavoriteColor] = useState("");

  useEffect(() => {
    if (state.isDarkMode) {
      if (props.item.isFavorite) {
        setFavoriteColor("red");
      } else {
        setFavoriteColor("white");
      }
    } else {
      if (props.item.isFavorite) {
        setFavoriteColor("red");
      } else {
        setFavoriteColor("black");
      }
    }
  }, [state.isDarkMode, props.item.isFavorite])

  function addItemToCart(item: any) {
    dispatch({ type: ADD_TO_CART, payload: item });
  }

  function addOrRemoveItemToFavorite(item: any) {
    if (!isFavorite) {
      item.isFavorite = true;
      dispatch({ type: ADD_FAVORITE_LIST, payload: item });
    } else {
      item.isFavorite = false;
      dispatch({ type: REMOVE_FAVORITE_LIST, payload: item });
    }
  }

  return (
    <View>
      <View style={styles.row} >
        <View style={{flexDirection: "column"}}>
          <Image source={{ uri: props.item.imgUrl }} style={styles.thumbnail} />
        </View>
        <View style={styles.itemMetaContainer}>
          <View style={styles.buttonFavorite}>
            <TouchableOpacity onPress={() => addOrRemoveItemToFavorite(props.item)}>
              <MaterialIcons name="favorite-border" size={20} color={favoriteColor} style={styles.favorite}/>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.textTitle} numberOfLines={1}>
              {props.item.name}
            </Text>
            <Text style={styles.textBrand}>{props.item.author}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => addItemToCart(props.item)}
              style={styles.button}>
              <Text style={styles.buttonText}>Add Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Separator />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    margin: 10
  },
  thumbnail: {
    width: 100,
    height: 150
  },
  favorite: {
    marginLeft: 30
  },
  itemMetaContainer: {
    padding: 5,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  buttonFavorite: {
    position: 'absolute',
    top: -70,
    left: 230
  },
  textTitle: {
    position: 'absolute',
    top: -60,
    left: 10,
    fontSize: 14,
    fontWeight: '200'
  },
  textBrand: {
    position: 'absolute',
    top: -40,
    left: 10,
    fontSize: 12,
    fontWeight: '100'
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
  buttonContainer: {
    position: 'absolute',
    top: -10,
    left: 10
  }
});
