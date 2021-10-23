import React, { useContext, useEffect, useState } from 'react';
import { Switch, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ProductContext from '../hooks/productContext';
import Separator from '../components/Separator';
import { SET_DARK_MODE } from '../hooks/productReducer';

export default function SettingScreen({ navigation }: RootTabScreenProps<'TabAccount'>) {
  const [switchValue, setSwitchValue] = useState(false);
  const { state, dispatch } = useContext(ProductContext);

  const toggleSwitch = (value) => {
    //To handle switch toggle
    setSwitchValue(value);

    //State changes according to
    dispatch({ type: SET_DARK_MODE, payload: value });
  };

  useEffect(() => {
    setSwitchValue(state.isDarkMode);
  }, [state.isDarkMode]);

  return (
    <View style={styles.container}>
      <View style={styles.settingContainer}>
        <View style={styles.item}>
          <Text>Dark Mode</Text>
        </View>
        <View style={styles.item}>
          <Switch
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </View>
      </View>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  settingContainer: {
    flexDirection: "row",
    height: 50,
  },
  item: {
    flex: 1,
    fontSize: 18,
    padding: 20,
    fontWeight: 'bold',
    flexDirection: 'column'
  },
});
