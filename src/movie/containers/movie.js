import React, { Component} from 'react';
import Video from 'react-native-video';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Text, View } from 'native-base';
import {StyleSheet} from 'react-native';



export default class App extends React.Component {
  render() {
    const { width } = Dimensions.get('window');

    return (
      <View style={styles.container}>
	<Text style={{ textAlign: 'center' }}> React Native Video </Text>
	<Video
	  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          shouldPlay
	  resizeMode="cover"
	  style={{ width, height: 300 }}
	/>
      </View>
    );
  }

}


/*export default class Movie extends Component {


  render() {
    const { width } = Dimensions.get('window');

    return (
      <View >
            <Text>Inicio</Text>
              <Video
                source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'"}}
                shouldPlay
         	      resizeMode="cover"
                style={StyleSheet.absoluteFill }
                shouldPlay
           	   resizeMode="cover"
           	   style={{ width, height: 300 }}
           	  />
              />
              <Text>Fin</Text>

              </View>
    );
  }
}
*/
