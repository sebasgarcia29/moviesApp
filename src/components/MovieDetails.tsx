/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CurrencyFormatter from 'currency-formatter';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>

        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-o" size={16} color="grey" />
          <Text> {movieFull.vote_average} </Text>
          <Text style={{ marginLeft: 5 }}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* History */}

        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
          Historia
           </Text>

        <Text style={{ fontSize: 16, textAlign: 'justify' }}>
          {movieFull.overview}
        </Text>


        {/* Presupuesto */}

        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
          Presupuesto
           </Text>

        <Text style={{ fontSize: 18, textAlign: 'justify' }}>
          {CurrencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>

        {/* Casting */}
        <View style={{ marginTop: 10, marginBottom: 100 }}>
          <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
            Actores
           </Text>

          <FlatList
            data={cast}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CastItem actor={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, height: 70}}
          />

        </View>


      </View>
    </>
  );
};
