import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    touchable: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
    },
    items: {
        alignItems: 'center',
    },
    text: {
        paddingTop: 3,
        fontSize: 11
    }
});

export default styles;