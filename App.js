import React, {Component} from 'react';
import {Text, TextInput,  View, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import { Provider } from 'react-redux';
import store from './src/_redux/store';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeKedai from './src/components/homeKedai';
import ListMenu from './src/components/listMenu';
import Invoice from './src/components/invoice';

const RootNavigation = createAppContainer(createStackNavigator({
    HomeKedai: {
        screen :  HomeKedai,
        navigationOptions: {
            headerTransparent: true
        }
    },
    ListMenu : {
        screen: ListMenu,
        navigationOptions:{
            header: null
        }
    },
    Invoice : {
        screen: Invoice,
        navigationOptions:{
            header: null
        }
    }


    
}));
const App = () => {
    return (
      <Provider store={store}>
        <RootNavigation/>
      </Provider>
    )
  }
  export default App;