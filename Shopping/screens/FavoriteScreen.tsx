import React, { useContext } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import FavoriteItem from './FavoriteItem';
import ProductContext from '../hooks/productContext';

export default function FavoriteScreen({ navigation }: RootTabScreenProps<'TabFavorite'>) {
  const { state } = useContext(ProductContext);

  return (
    <View
      style={{
        flex: 1
      }}>
      {state.favoriteItems.length !== 0 ? (
        <FlatList
          data={state.favoriteItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <FavoriteItem item={item} />
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyMessage}>Your Favorite is empty :'(</Text>
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
  emptyContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyMessage: {
    fontSize: 16
  }
});
