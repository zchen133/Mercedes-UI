import React, { Component } from 'react';
import { AppRegistry,StyleSheet, Text, View, ImageBackground, Image,Animated,TouchableOpacity } from 'react-native';
import { ScreenOrientation } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class initialization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeValue: new Animated.Value(0)
        }
      }
      componentWillMount(){
        this.animatedValue = new Animated.Value(0);
        //this.fadeValue =  new Animated.Value(0)
      }
    
      componentDidMount() {
        Animated.timing(this.animatedValue, {
          toValue: 150,
          duration: 1500
        }).start();
        Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: 1500
          }).start();
      }
      Drone = () =>{

      }
      maps = () =>{
          
    }
    setting = () =>{
          
    }
 render(){
    const interpolateColor = this.animatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: ['rgb(0,0,0)', 'rgb(34, 40, 49)']
      })

    return (
        <View style = {styles.container}>
        
        <Animated.View style={{alignItems: 'center',justifyContent: 'center',height:"100%",width:"100%",backgroundColor:interpolateColor}}>
            
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.Drone}>
        <Animated.View
          style={{
            
            opacity: this.state.fadeValue,
            height: 120,
            width: 120,
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 12,
            backgroundColor: "#ffffff",
            alignItems: 'center',
            justifyContent: "center"
          }}
        >
          <Image
            source={require('../assets/drone_icon.png')}
            style={{width:"90%",height:"90%",borderRadius: 12}}
            >
        </Image>
        </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.maps}>
        <Animated.View
          style={{
            opacity: this.state.fadeValue,
            height: 120,
            width: 120,
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 12,
            backgroundColor: "#ffffff",
            alignItems: 'center',
            justifyContent: "center"
          }} 
        >
          <Image
            source={require('../assets/map_icon.png')}
            style={{width:"90%",height:"90%",borderRadius: 12}}
            >
        </Image> 
        </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.setting}>
        <Animated.View
          style={{
            opacity: this.state.fadeValue,
            height: 120,
            width: 120,
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 12,
            backgroundColor: "#ffffff",
            alignItems: 'center',
            justifyContent: "center"
          }}
        >
         <Image
            source={require('../assets/setting_icon.png')}
            style={{width:"90%",height:"90%",borderRadius: 12}}
            >
        </Image>
        </Animated.View>
        </TouchableOpacity>
        </View>

        <Text style={{color:'white',fontSize:23,position:'absolute',top:"90%",fontFamily:'serif'}}>Mercedes-Benz</Text>

        </Animated.View>
        
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
AppRegistry.registerComponent('animatedbasic', () => animatedbasic);