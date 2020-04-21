import React from 'react';
import { View, Text, ScrollView,Image,TouchableOpacity } from 'react-native';
import styles from './styles';

export default function LastRestaurantsCarousel() {
    const lastRestaurants = [
        {
            imageURL: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/a28df111-2141-4a7d-8817-365b04f0f39f/201909302358_lSqA_.jpeg',
            name: 'Tio Bák - Alto da Glória'
        },
        {
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMJrxzr7hjyNsUIDRgQN2N497Mhc-6gFdKutjVCZUZ3OFcKWbf&usqp=CAU',
            name: 'Habib\'s - Flamboyant'
        },
        {
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgISaweSb18U5xQtZhzUPBZ4toxdm7lYoJ6f4XbRBOseLlfbTK&usqp=CAU',
            name: 'Fast Açaí - Alto da Glória'
        },
    ];
  return (
    <View style={styles.container}>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {lastRestaurants.map((rest,index) => (
                <TouchableOpacity key={index} style={styles.scrollContainer}>
                    <View style={styles.restImageView}>
                        <Image style={styles.image} source={{uri: rest.imageURL}}/>
                    </View>
                    <View style={styles.restNameView}>
                        <Text style={styles.restName}>{rest.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
  );
}
