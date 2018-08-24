
import React,{Component} from 'react';
import {
    View,
    Text,
    Dimensions
} from 'react-native';

import LocalImage from '../../image/components/localImage';

const window = Dimensions.get('window');

let aspectRatio = window.Width / window.Height;

export default class New extends Component {
    constructor(props) {
        super(props);

        Dimensions.addEventListener("change", (e) => { this.setState(e.window); });
    }
    /*Dimensions.addEventListener('change', (e) => {
      const { width, height } = e.window;
      this.setState({width, height});
    })*/
    render() {
      let item = this.props.item;
    let i = this.props.i;
    let list="";
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LocalImage
                source={{uri:  item.media_group[0].media_item[0].src}}

              />
            </View>
        )
    }// end of render
};
