/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { MoviePoster } from './MoviePoster';


interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{ ...styles.container, height: (title) ? 260 : 220 }}>

      {title && (<Text style={styles.titleSlider}>{title}</Text>)}
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MoviePoster
            movie={item}
            width={140}
            height={200}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,
  },
  titleSlider: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
