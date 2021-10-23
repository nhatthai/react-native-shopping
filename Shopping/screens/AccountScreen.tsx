import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Separator from '../components/Separator';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function AccountScreen({ navigation }: RootTabScreenProps<'TabAccount'>) {
  function goToProfile() {
    navigation.navigate('Profile');
  }

  function goToSettings() {
    navigation.navigate('Settings');
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => goToProfile()}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.item}>
        <TouchableOpacity onPress={() => goToSettings()} >
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    fontSize: 18,
    textAlign: 'left',
    padding: 15,
    height: 50,
  }
});