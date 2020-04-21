import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native'
import { setLightEstimationEnabled } from 'expo/build/AR';

const DEVICE_WIDTH = Dimensions.get('window').width;
class Carousel extends React.Component {
    scrollRef = React.createRef();
    images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5v2Pdo6ETTEzHXad0z5eO67z9RROIb5acb2Hxc0OsTxoTh82H&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLu37r7Lzrs6aJj04wlcosYp9c-JW3EkCLq6KqZOT8qV3I89Yz&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPK3vjqCV9dZUdYlBHb5OEsUG94kyjh80v0VC0gH3wP3nI5zwa&usqp=CAU'
    ];  
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        }
    }
    componentDidMount = () => {
        setInterval(() => {
            this.setState(previousState => ({
                selectedIndex: previousState.selectedIndex === this.images.length - 1 ? 0 : previousState.selectedIndex + 1
                }),
                () => {
                    this.scrollRef.current.scrollTo({
                        animated: true,
                        y: 0,
                        x: DEVICE_WIDTH * this.state.selectedIndex
                    })
                })
        }, 1000);
        
    }

    setSelectedIndex = (event) => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({selectedIndex});
    }

    render(){
        const { selectedIndex } = this.state;
              
        return(
            <View style={{height: '100%', width: '100%'}}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.scrollRef}
                >
                    {this.images.map(image => (

                        <Image 
                            style={styles.carouselImage}
                            key={image}
                            source={{uri: image}}
                        />
                    ))}
                </ScrollView>

                <View style={styles.circlesView}>
                        {this.images.map((image,index) => (
                            <View 
                            key={index}
                            style={[styles.whiteCircles,{opacity: index === selectedIndex ? 1 : 0.5}]} />
                        ))}                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    carouselImage: {
        width: DEVICE_WIDTH,
        height: '100%'
    },
    circlesView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 10,
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
    },
    whiteCircles: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#fff',
        margin: 5
    }
})

export {Carousel}