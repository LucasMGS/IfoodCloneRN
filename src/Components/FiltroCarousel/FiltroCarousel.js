import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

// import { Container } from './styles';

export default function FiltroCarousel() {
  const filtros = [
      {
          title: 'Filtros',
          icon: "md-list",
      },
      {
          title: 'Ordenar',
          icon: 'ios-arrow-down',
      },
      {
          title: 'Entrega grátis',
          icon: '',
      },
      {
          title: 'Distância',
          icon: '',
      },
      {
          title: 'Entrega iFood',
          icon: ''
      },
      {
        title: 'Super Restaurante',
        icon: ''
    },
    ];
  return (
    <View style={styles.container}>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        >
            {filtros.map((filtro,index) => (
                <TouchableOpacity key = {index}>
                    <View style={styles.filtroView}>
                        <Text style={styles.filtroText}>{filtro.title}</Text>
                        {filtro.icon.length > 0 ? 
                        <Ionicons name={filtro.icon} style={styles.icon} size={14} /> 
                        : null}
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
  );
}
