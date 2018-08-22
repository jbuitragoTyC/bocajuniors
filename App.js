
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
import Home2 from './src/screens/containers/home2';
import {
  Text
} from 'react-native';


const Main = createStackNavigator(
  {
    Home: { screen: Home },
    Home2: { screen: Home2 },
    NewDetail: { screen: NewDetail },
    About: {  screen: About },
  },

  {
    initialRouteName: 'Home2',
    navigationOptions: {
      title: 'TyC Sports',
      headerTitleAllowFontScaling: true,
      headerStyle: {
        backgroundColor: '#003984',
        textAlign: 'center'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //fontWeight: 'bold'
      },
      //headerBackground : 'blue',
      //headerBackTitle: 'Atras',
      gesturesEnabled: true,
      //headerBackImage: <Text>{`<=`}</Text>,
      // header: <Text style={{color: 'white'}}>esto es un header</Text>,
    },
    initialRouteKey: 'home2',
    initialRouteParams: {
      nombre: 'Jorge Buitrago'
    },
    // headerMode: float screen none
    // headerMode: 'screen',
    // mode: modal card
    mode: 'card',
    cardStyle: {
      borderWidth: 0,
      //backgroundColor: '#003984'
    }
  }
);

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
    }/*,
    Lucky: {
      screen: Lucky
    }*/,
    Profile: {
      screen: Profile
    }
  },
  {
    tabBarOptions: {
    //  activeTintColor: 'white',
    //  activeBackgroundColor: '#65a721'
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

const DrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: WithModal,
      navigationOptions: {
        title: 'Inicio',
        //drawerIcon: <Icon icon="🏠" />
      }
    } ,
    About: {
        screen: About
    },
    Movie: {
      screen: Movie
    },
    Home2: {
      screen: Home2
    }
  },
  {
    //drawerWidth: 200,
    //drawerBackgroundColor: '#f6f6f6',
    contentOptions: {
      //activeBackgroundColor: '#7aba2f',
      //activeTintColor: 'white',
      //inactiveTintColor: '#828282',
      //.inactiveBackgroundColor: 'white',
      itemStyle: {
        //borderBottomWidth: .5,
        //borderBottomColor: 'rgba(0,0,0,.5)'
      },
      labelStyle: {
        //marginHorizontal: 0,
      },
      iconContainerStyle: {
        //marginHorizontal: 5,
      }
    }
  }
)

const SwitchNavigator = createSwitchNavigator(
  {
    Home: Home,
    App: DrawerNavigator,
    //Login: Login,
    //Loading: Loading,
  },
  {
    initialRouteName: 'App',
  }
)

export default SwitchNavigator;
