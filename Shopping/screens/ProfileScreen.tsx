import React  from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ProfileInformation from './ProfileInformation';

const data = {
  userid: 566,
  name: 'Nhat Thai',
  username: 'NhatThai',
  profileUrl:'https://avatars.githubusercontent.com/u/3013273?s=400&u=5313d80fa31a6e63463528b31cff4cae6c6df665&v=4',
  bio:`Hey! 😁 I'm a full stack developer. 🌍
  I love building client side and backend side of applications - be it web or mobile 🌟
  I am learning ReactJS and React Native ❤`,
  stats: {
    followers: 17,
    following: 28,
    projects: 12
  }
}

export default function ProfileScreen() {

  return(
    <ScrollView style={styles.container}>
      <ProfileInformation data={data}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical:30,
    marginHorizontal:20
  }
})