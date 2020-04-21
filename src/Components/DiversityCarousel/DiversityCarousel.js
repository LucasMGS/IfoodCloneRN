import React from 'react';
import { View,ScrollView,Text,Image } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DiversityCarousel() {
  const diversity = [
      {
        id: 1,
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIXmYfTNGgbmsj7A8Qjg4oc4Ab_OdGP2CJbtWpji22qsXPhjOw&usqp=CAU',
        title: 'Mercado',          
      },
      {
        id: 2,
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-pGQPS19dXG9-115m5ezTlOXtT11iBtBlaRbUdomSwTIXxNWa&usqp=CAU',
        title: 'Promoções'
      },
      {
        id: 3,
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOJIcJZXEcq1d_WWfQaGnEq760DTcQsV_Fc77NEBVvr1vSxryC&usqp=CAU',
        title: 'Brasileira'
      },
      {
        id: 4,
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW72Ryuk70Mvmk0h3dDhGzwUyFKask7BFcH5r7w4ccTP3eHEyM&usqp=CAU',
        title: 'Saudável'
      },
  ];

  return (
    <View style={{height: 142, width: '100%'}}>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {diversity.map((diversity,index) => (
                <View style={styles.diversityView} key={index}>
                    <TouchableOpacity>
                        <Image 
                            style={styles.image}
                            source={{uri: diversity.imageURL}}
                        />
                        <Text style={styles.text}>{diversity.title}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    </View>
  );
}
