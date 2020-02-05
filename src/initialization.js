import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { ScreenOrientation } from 'expo';

export default class initialization extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isAnimationOver: false
        };
      }
      componentDidMount(){
          setTimeout(()=>{
              this.setState({isAnimationOver:true});
          },1000*3)
      }
      navToMenu = () =>{
        this.props.navigation.navigate('menu');
      }
    
    
 render(){
    return (
        <View style = {styles.container}>
        <Image
            source={require('../assets/logo.gif')}
            style={{width:500,height:500}}
            >
        </Image>
        {this.state.isAnimationOver&&this.navToMenu()}
        
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});