import { StatusBar } from 'expo-status-bar';
import React, { useReducer, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import ProductContext from './hooks/productContext';
import { productReducer, productState } from './hooks/productReducer';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [state, dispatch] = useReducer(productReducer, productState);
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    if(state.isDarkMode) {
      setColorScheme("dark");
    }
    else {
      setColorScheme("light");
    }
  }, [state.isDarkMode])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ProductContext.Provider value={{ state, dispatch }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </ProductContext.Provider>
      </SafeAreaProvider>
    );
  }
}
