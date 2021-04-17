/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

const DetailScreen = ({ route, navigation }: Props) => {

  // const movie = route.params as Movie;
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


  const { cast, isLoading, movieFull } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{ uri }}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}> {movie.original_title} </Text>
        <Text style={styles.title}> {movie.title} </Text>
      </View>

      {
        isLoading ? <ActivityIndicator size={30} color="grey" style={{ marginTop: 20 }} />
          : <MovieDetails movieFull={movieFull!} cast={cast} />
      }

      {/* Boton para regresar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
        <Icon name="arrow-circle-left" size={40} color="white" />
      </TouchableOpacity>


    </ScrollView>
  );
};

const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    borderRadius: 18,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    left: 10,
    ...Platform.select({
      ios: {
        top: 40,
      },
      android: {
        top: 30,
      },
    }),
  },
});

export default DetailScreen;
