import React, { Component} from 'react';
import Video from 'react-native-video';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Text, View } from 'native-base';
import {StyleSheet , Dimensions} from 'react-native';


var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default class App extends React.Component {
  render() {
    const { width } = Dimensions.get('window');

    return (
      <View>
      <Text>Video</Text>
      <Video source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}   // Can be a URL or a local file.
             ref={(ref) => {
               this.player = ref
             }}                                      // Store reference
             onBuffer={this.onBuffer}                // Callback when remote video is buffering
             onEnd={this.onEnd}                      // Callback when playback finishes
             onError={this.videoError}               // Callback when video cannot be loaded
             

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
