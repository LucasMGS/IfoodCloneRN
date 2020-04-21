import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Carousel } from './src/Components/Carousel/Carousel';
import UserAddress from './src/Components/UserAddress/UserAddress';
import FiltroCarousel from './src/Components/FiltroCarousel/FiltroCarousel';
import DiversityCarousel from './src/Components/DiversityCarousel/DiversityCarousel';
import RestaurantList from './src/Components/RestaurantList/RestaurantList';
import LastRestaurantsCarousel from './src/Components/LastRestaurantsCarousel/LastRestaurantsCarousel';
import BottomNavigationBar from './src/Components/BottomNavigationBar/BottomNavigationBar';

export default function App() {
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <View style={{margin: 3, paddingRight: 4}}>
          <UserAddress />
          <DiversityCarousel />
          <Text style={styles.title}>Últimos restaurantes</Text>
          <LastRestaurantsCarousel />
          <Text style={styles.title}>Restaurantes</Text>
          <FiltroCarousel />
          <RestaurantList />
          <BottomNavigationBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: '600',
    marginLeft: 10,
    color: '#262626'

  }
});