import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons/';
import styles from './styles';

export default function UserAddress() {
    return(
        <View style={styles.addressView}>
            <Text style={styles.addressText}>901 Chapala St,Santa Barbara,93106 </Text>
            <Feather style={styles.icon} name='chevron-down' size={14} color={'red'}/>
        </View>
    )
}