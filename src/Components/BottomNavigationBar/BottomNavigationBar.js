import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import { EvilIcons, Foundation, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export default function BottomNavigationBar() {
  return (
    <View style={styles.container}>
          <TouchableOpacity style={styles.touchable}>
            <View style={styles.items}>
              <MaterialCommunityIcons name='home-minus' size={23} />
              <Text style={styles.text}>Início</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchable}>
            <View style={styles.items}>
              <EvilIcons name='search' size={23} />
              <Text style={styles.text}>Busca</Text>
            </View>
          </TouchableOpacity> 

          <TouchableOpacity style={styles.touchable}>
            <View style={styles.items}>
              <Foundation name='list' size={23} />
              <Text style={styles.text}>Pedidos</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchable}>
            <View style={styles.items}>
              <FontAwesome name='user-o' size={23} />
              <Text style={styles.text}>Perfil</Text>
            </View>
          </TouchableOpacity>   
    </View>
  );
}
