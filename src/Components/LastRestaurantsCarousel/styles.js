import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 90, 
        width: '98%',
        margin: 5,
        alignItems: 'flex-start',
        padding: 6,
    },
    scrollContainer: {
        height: '100%',
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#cccccc',
        alignItems: 'center',
        marginRight: 13,
        borderRadius: 5
    },
    restImageView: {
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        borderRightWidth: 0.5,
        borderRightColor: '#cccccc'
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 50
    },
    restNameView: {
        alignItems: 'flex-start',
        height: '100%',
        justifyContent: 'center',
    },
    restName: {
        paddingLeft: 10,
        paddingRight: 12,
        fontSize: 15
    }
});

export default styles;