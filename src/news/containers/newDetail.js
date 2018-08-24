import React, { Component } from 'react';
import { WebView } from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
  Title
 } from 'native-base';

export default class NewDetail extends Component {

render() {
  console.disableYellowBox = true;


  const new_detail = this.props.navigation.getParam('new_detail','_blank');
    return (
      <WebView
      source={{uri: new_detail}}
      style={{marginTop: 1}}
    />
    );
  }
}
