import React, { Component } from 'react';
import {
  Body,
  Container,
  Content,
  Header,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Title
 } from 'native-base';
import { FlatList, ActivityIndicator, View  } from 'react-native';

//import data from '../../../api/boca.json';

import New2 from '../../news/containers/new2';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true,
                  dataSource: null
                }
  }

  componentDidMount(){
    return fetch('http://www.tycsports.com/boca-juniors/aplicaster/index.json')
      .then((response) => response.json())
      .then((responseJson) => {

        //console.log() ;

        this.setState({
            isLoading: false,
            dataSource: responseJson
          });


      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

      if(this.state.isLoading){
        return(
          <View >
            <ActivityIndicator/>
          </View>
        )
       }
       //console.log(this.state.dataSource);


      return(
        <Container>
        <Content>
        <List>
        {this.state.dataSource.entry.map((item, i) => {
            return (

              <New2 item={item} key={i} {...this.props} />
            )
        })}
        </List>
        </Content>
        </Container>
      );


}

}
