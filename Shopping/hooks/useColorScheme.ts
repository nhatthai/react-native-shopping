import { useContext, useEffect, useState } from 'react';
import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';
import ProductContext from './productContext';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  const { state } = useContext(ProductContext);
  const [color, setColor] = useState("light");

  useEffect(() => {
    if(state.isDarkMode) {
      setColor("dark");
    } else {
      setColor("light");
    }
  })

  return color as NonNullable<ColorSchemeName>;
}
