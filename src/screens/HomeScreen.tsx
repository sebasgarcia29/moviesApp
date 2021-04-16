/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

  const { isLoading, peliculasEnCine } = useMovies();

  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="blue" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>

        <View style={{ height: 440 }}>
          <Carousel
            data={peliculasEnCine}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.6}
          />
        </View>

        <HorizontalSlider title="En cine" movies={peliculasEnCine} />

      </View>
    </ScrollView>
  );
};

export default HomeScreen;
