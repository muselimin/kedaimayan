import React, { Component } from 'react';
import { Container,
   Header,
   Grid,
   Col,
   Row, Text, Item, Input, Content, Form
  } from 'native-base';
import {StatusBar, Image, StyleSheet, Dimensions, ScrollView, ImageBackground, TextInput, View, TouchableOpacity} from 'react-native';
import axios from 'axios';

class HomeKedai extends Component{
    constructor(props){
        super(props);
        this.state={
            tableNumber: '',
            data: []
        }
    }
    render(){
        return(
            <View style={styles.container}>
              <StatusBar backgroundColor='#2ecc71' barStyle="light-content" />
             
                <Text style={styles.texttitle}>Kedaimayan</Text>
                <Text style={styles.textregister}>Masukan Nomor Meja</Text>
                <TextInput keyboardType={"number-pad"} placeholder="Nomor Meja" style={styles.input} onChangeText={(tableNumber) => this.setState({tableNumber: tableNumber})} value={this.state.tableNumber}/>
                
                <TouchableOpacity style={styles.buttoncontainer} onPress={()=> {
               if(this.state.tableNumber === 0){
                   alert('Masukan Nomor Meja');
               }else{
               
                axios.post(`https://belajar-backend-master.herokuapp.com/api/v1/transaction`,{
                    'tableNumber': this.state.tableNumber
                } )
                .then(res =>{
                  const data = res.data;
                  this.setState({data});
                  console.log(data);
                  
                  if(this.state.data.Transactions.tableNumber!=null){
                    this.props.navigation.navigate('ListMenu', {tableNumber: this.state.data.Transactions.tableNumber, idTransaction: data.Transactions.id});
                    
                  }
                 
                  
                })
               }
            }
               }>
           <Text style={styles.buttontext} >Submit</Text>
           </TouchableOpacity>
          
          
              </View>
        )
    }
}
export default HomeKedai;
const styles = {
    container : {
        padding : 20,
        flex : 1,
        justifyContent : 'center',
        alignItems : 'stretch',
        backgroundColor : '#2ecc71'
    },
    input : {
        paddingLeft : 20,
        borderRadius : 50,
        height : 50,
        fontSize : 25,
        backgroundColor : 'white',
        borderColor : '#2ecc71',
        borderWidth : 1,
        marginBottom : 20,
        color : 'black',
        textAlign: 'center'
        
    },
    buttoncontainer : {
        height : 50,
        borderRadius : 50,
        backgroundColor : 'white',
        paddingVertical : 10,
        justifyContent : 'center'
    },
    buttontext : {
        textAlign : 'center',
        color : '#2ecc71',
        fontSize : 20
    },
    textregister:{
        textAlign : 'center',
        color : '#f7f7f7f7',
        fontSize : 20,
        marginTop : 10,
        marginBottom : 20
    },
    texttitle:{
        textAlign : 'center',
        color : '#f7f7f7',
        fontSize : 35,
        marginBottom : 20
    }
}