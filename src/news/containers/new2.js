import React, { Component } from 'react';
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
  Title,
  Card,
  CardItem
 } from 'native-base';

import { Image, Dimensions } from 'react-native';


import LocalImage from '../../image/components/localImage';

export default class New extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    let item = this.props.item;
    let i = this.props.i;
    let list="";
    return (

    <LocalImage
      source={{uri:  item.media_group[0].media_item[0].src}}
      originalWidth={50}
      originalHeight={50}
    />
      );
  }

}
