import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Avatar({image}){
  return(
    <View style={avatarStyles.container}>
      <Image source={{ uri: image }}  style={avatarStyles.image} />
    </View>
  )
}

const avatarStyles=StyleSheet.create({
  container:{
    marginBottom:20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
  },
  image:{
    borderRadius:999,
    height:100,
    width:100
  }
})