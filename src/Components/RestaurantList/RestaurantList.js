import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default function RestaurantList() {
  const restaurants = [
    {
      id: 1,
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwhureyS2Eit__lcJrpbn_9bvhEw2w5f619TascLRfmJji57Hx&usqp=CAU',
      name: 'Outback - Flamboyant Shopping',
      rating: '4,9',
      type: 'Lanches',
      distance: '0,5 km',
      time: '23-33 min',
      deliveryTax: 'R$ 3,99'
    },
    {
      id: 2,
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMJrxzr7hjyNsUIDRgQN2N497Mhc-6gFdKutjVCZUZ3OFcKWbf&usqp=CAU',
      name: 'Habib\'s - Flamboyant',
      rating: '4,9',
      type: 'Lanches',
      distance: '0,6 km',
      time: '28-38 min',
      deliveryTax: 'R$ 8,90'
    },
    {
      id: 3,
      imageURL: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/c0f057d7-345b-442c-966a-fbadd0f71c3a/201908091217_SrBt_i.jpg',
      name: 'Bendita Feijuca',
      rating: '4,7',
      type: 'Brasileira',
      distance: '0,6 km',
      time: '65-75 min',
      deliveryTax: 'R$ 8,00'
    },
    {
      id: 4,
      imageURL: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/201908291454_a1c6028c-8c42-42d4-87c2-15f63b0a58e8.JPG',
      name: 'Bendita Feijuca',
      rating: '4,6',
      type: 'Doces & Bolos',
      distance: '0,9 km',
      time: '11-21 min',
      deliveryTax: 'Grátis'
    },
    {
      id: 5,
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgISaweSb18U5xQtZhzUPBZ4toxdm7lYoJ6f4XbRBOseLlfbTK&usqp=CAU',
      name: 'Fast Açaí - Alto da Glória',
      rating: '4,8',
      type: 'Açaí',
      distance: '0,1 km',
      time: '11-21 min',
      deliveryTax: 'Grátis'
    },
];
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        keyExtractor={(_,index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(

        <TouchableOpacity style={styles.flatListContainer}>
          <View style={styles.imageView}>
            <Image style={styles.restImage} source={{uri: item.imageURL}}/>
          </View>

            <View style={styles.restDescView}>
              <Text style={styles.restName}>{item.name}</Text>              
              <View style={styles.restFeatures}>
                <View style={styles.restRatingView}> 
                  <Feather style={[styles.iconStar, styles.restRatingText]} name='star' size={15}/>
                  <Text style={[styles.restDescription, styles.restRatingText]}>{item.rating}</Text>
                </View>
                <Text style={styles.restDescription}> ∙ {item.type} ∙ </Text>
                <Text style={styles.restDescription}>{item.distance}</Text>
              </View>

              <View style={styles.restBottomDesc}>
                <Text style={styles.restDescription}>{item.time} ∙ </Text>
                {item.deliveryTax != 'Grátis' ? <Text style={styles.restDescription}>{item.deliveryTax}</Text> :
                <Text style={[styles.restDescription,{color:'green'}]}>{item.deliveryTax}</Text>}                
              </View>
            </View>
        </TouchableOpacity>
        )}
      >
      </FlatList>
    </View>
  );
}
