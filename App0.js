
import React, { Component } from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from 'react-navigation';
import Home from './src/screens/containers/home';
import NewDetail from './src/news/containers/newDetail';
import About from './src/screens/containers/about';
import Profile from './src/screens/containers/profile';
import Lucky from './src/screens/containers/lucky';
import Movie from './src/movie/containers/movie';
import {
  Text
} from 'react-native';


const Main = createStackNavigator(
  {
    Home: { screen: Home },
    NewDetail: { screen: NewDetail },
  },
  {
    navigationOptions: {
      //header: Header,
    },
    cardStyle: {
      backgroundColor: 'white'
    }
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        //tabBarIcon: <Icon icon="🏠"/>,
      }
    },
    About: {
      screen: About
    },
    Lucky: {
      screen: Lucky
    },
    Profile: {
      screen: Profile
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#65a721'
    }
  }
)



const WithModal = createStackNavigator(
  {
    Main: {
      screen: TabNavigator
    },
    Movie: Movie,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white'
    },
    navigationOptions: {
      gesturesEnabled: true,
    }
  }
)
/*
const DrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: WithModal,
      navigationOptions: {
        title: 'Inicio',
        //drawerIcon: <Icon icon="🏠" />
      }
    },
    Sobre: {
      screen: About
    },
    Home: { screen: Home },
    NewDetail: { screen: NewDetail },
  },
  {
    drawerWidth: 200,
    drawerBackgroundColor: '#f6f6f6',
    contentOptions: {
      activeBackgroundColor: '#7aba2f',
      activeTintColor: 'white',
      inactiveTintColor: '#828282',
      inactiveBackgroundColor: 'white',
      itemStyle: {
        borderBottomWidth: .5,
        borderBottomColor: 'rgba(0,0,0,.5)'
      },
      labelStyle: {
        marginHorizontal: 0,
      },
      iconContainerStyle: {
        marginHorizontal: 5,
      }
    }
  }
)

const SwitchNavigator = createSwitchNavigator(
  {
    App: DrawerNavigator,
    //Login: Login,
    //Loading: Loading,
  },
  {
    initialRouteName: 'Loading',
  }
)*/

export default TabNavigator;
