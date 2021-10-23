import React, { useContext, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ProductItem from './ProductItem';
import ProductContext from '../hooks/productContext';

export default function ProductListScreen({ navigation }: RootTabScreenProps<'TabProduct'>) {
  const { state } = useContext(ProductContext);

  useEffect(() => {
    state.products = products;
  }, [state.products]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem item={item}/>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    alignContent: "space-between",
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
});

export const products = [
  {
    id: 1,
    name: 'The Book Thief',
    author: 'Markus Zusak',
    isFavorite: false,
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg'
  },
  {
    id: 2,
    name: 'Sapiens',
    author: 'Yuval Noah Harari',
    isFavorite: false,
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271.jpg'
  },
  {
    id: 3,
    name: 'Crime and Punishment',
    author: 'Fyodor Dostoyevsky',
    isFavorite: false,
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1382846449l/7144.jpg'
  },
  {
    id: 4,
    name: 'No Longer Human',
    author: 'Osamu Dazai',
    isFavorite: false,
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1422638843l/194746.jpg'
  },
  {
    id: 5,
    name: 'Atomic Habits',
    author: 'James Clear',
    isFavorite: false,
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg'
  },
  {
    id: 7,
    name: 'Dune',
    author: 'Frank Herbert',
    isFavorite: false,
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434908555l/234225._SY475_.jpg'
  },
  {
    id: 8,
    name: 'Atlas Shrugged',
    author: 'Ayn Rand',
    isFavorite: false,
    imgUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405868167l/662.jpg'
  }
]
