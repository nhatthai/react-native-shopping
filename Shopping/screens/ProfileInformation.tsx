import React from 'react';
import { StyleSheet } from 'react-native';
import Avatar from './Avatar';
import { Text, View } from '../components/Themed';

export default function ProfileInformation({data}){
  return(
    <View style={profileInfoStyles.container}>
      <Avatar image={data?.profileUrl}/>
      <Text style={profileInfoStyles.username}>{data?.username}</Text>
      <Text style={profileInfoStyles.name}>{data?.name}</Text>
      <Text style={profileInfoStyles.bio}>
            {data?.bio}
      </Text>
      <View style={profileInfoStyles.details}>
        <View>
          <Text style={profileInfoStyles.detailsHeading}>Followers</Text>
          <Text style={{textAlign:'center'}}>{data?.stats?.followers}</Text>
        </View>
        <View style={{marginHorizontal:20}}>
          <Text style={profileInfoStyles.detailsHeading}>Following</Text>
          <Text style={{textAlign:'center'}}>{data?.stats?.following}</Text>
        </View>
        <View>
          <Text style={profileInfoStyles.detailsHeading}>Projects</Text>
          <Text style={{textAlign:'center'}}>{data?.stats?.projects}</Text>
        </View>
      </View>
    </View>
  )
}

const profileInfoStyles=StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 25
  },
  username:{
    fontSize:20,
    fontWeight:'700'
  },
  name:{
    marginVertical:5,
    fontSize:16
  },
  bio:{
    paddingHorizontal:20,
    textAlign:'center',
    fontSize:14
  },
  details:{
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  detailsHeading:{
    fontSize:16,
    fontWeight:'700'
  }
})