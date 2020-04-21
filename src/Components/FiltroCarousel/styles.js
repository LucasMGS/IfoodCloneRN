import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 43, 
        width: '100%',
        alignItems: 'center',
        margin: 2,
    },
    filtroView: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        borderRadius: 4,
        margin: 4,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    filtroText: {
        padding: 8,
        paddingRight: 5,
        color: '#8c8c8c',
        fontSize: 14,
        fontWeight: '600'
    },
    icon: {
        paddingRight: 9,
    }
});

export default styles;