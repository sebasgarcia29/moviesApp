import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/core';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  const navigation = useNavigation();

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <TouchableOpacity
      style={{ ...styles.container, height, width }}
      activeOpacity={0.6}
      onPress={() => navigation.navigate('DetailScreen', movie)}
    >
      <View style={styles.shadow}>
        <Image
          source={{ uri }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 420,
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  shadow: {
    flex: 1,
    shadowColor: '#000',
    borderRadius: 18,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
