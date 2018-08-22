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
    if (item.extensions.is_highlight) {
      return (
        <ListItem  onPress={() => this.props.navigation.navigate('NewDetail')}>
        <Body>

        <LocalImage
          source={{uri: item.media_group[0].media_item[0].src}}
          originalWidth={null}
          originalHeight={null}
          />
        {/*<Image source={{uri: item.media_group[0].media_item[0].src}} style={{height: 200, width: null, flex: 1}}/>
        <Text>{item.title}</Text>*/}
        </Body>
        </ListItem>
      );
    } else {
      return (
        <ListItem thumbnail onPress={() => this.props.navigation.navigate('NewDetail',{new_detail: item.link.href })}>
        <Left>
            <Thumbnail square  source={{uri: item.media_group[0].media_item[0].src}} />
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

  }


}
