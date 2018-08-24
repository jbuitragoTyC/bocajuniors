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
  Title
 } from 'native-base';

import { Image, Dimensions } from 'react-native';

export default class New extends Component {
  constructor(props)
  {
    super(props);

  }

  render(){
    let item = this.props.item;
    return(
        <Text>

          <Text>{item.title}</Text>
        </Text>

    );
  }

  {/*
  render() {
    let item = this.props.item;
    let i = this.props.i;
    let list="";
    if (item.extensions.is_highlight) {
      return (
        <ListItem  onPress={() => this.props.navigation.navigate('NewDetail')}>
        <Body>
        <Image source={require('../../../assets/image/armani_862x485.jpg')} style={{height: 200, width: null, flex: 1}}/>
        <Text>{item.title}</Text>
        </Body>
        </ListItem>
      );
    } else {
      return (
        <ListItem thumbnail onPress={() => this.props.navigation.navigate('NewDetail',{new_detail: item.link.href })}>
        <Left>
            <Thumbnail square  source={require('../../../assets/image/armani_862x485.jpg')} />
          </Left>
          <Body>
            <Text>{item.title}</Text>
          </Body>
          <Right>
            <Button transparent>

            </Button>
          </Right>
        </ListItem>
      );
    }

  }*/}
}
