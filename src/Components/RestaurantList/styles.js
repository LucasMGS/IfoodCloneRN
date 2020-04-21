import { StyleSheet,Dimensions } from 'react-native';
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        marginTop: 13,
        height: 365,
    },
    flatListContainer: {
        flexDirection: 'row',
        width: '98%',
        height: 120,
        paddingLeft: 10,
        borderWidth: 0.5,
        borderColor: '#cccccc',
        alignItems: 'center',
        marginBottom: 16,
        marginLeft: 5,
    },
    imageView: {
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100
    },  
    restImage: {
        width: 65,
        height: 65,
        borderRadius: 35
    },
    restName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    restDescView: {
        marginLeft: 10,
        height: 80,
        alignItems: 'flex-start',
        width: '100%',
        justifyContent: 'space-between'
    },
    restFeatures: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStar: {
        paddingRight: 3
    },
    restDescription: {
        color: '#8c8c8c',
        fontSize: 14
    },
    restRatingView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    restRatingText: {
        color: '#e6b800',
        fontSize: 16
    },
    restBottomDesc: {
        flexDirection: 'row'
    },
});

export default styles;