/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;


  return (
    <View style={styles.container}>

      { actor.profile_path ? (
        <Image
          source={{ uri }}
          style={styles.image}
        />
      ) : (
        <Icon name="user-tie" size={40} color="grey" />
      )}


      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {actor.name}
        </Text>
        <Text style={{ fontSize: 18, opacity: 0.7 }}>
          {actor.character}
        </Text>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    height: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginLeft: 20,
    paddingRight: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
