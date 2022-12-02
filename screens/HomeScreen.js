import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';
import AppHeader from '../components/AppHeader';

class HomeScreen extends React.Component {

  goToBuzzerScreen =(buzzerColor) =>{
    this.props.navigation.navigate('BuzzerScreen',{color:buzzerColor});
  }

  render() {
    return (
      <View>
      <AppHeader/>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:"green"}]}
        onPress={()=>this.goToBuzzerScreen("green")}>
        <Text
          style={styles.buttonText}>
          Team 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:"orange"}]}
        onPress={()=>this.goToBuzzerScreen("orange")}>
        <Text
          style={styles.buttonText}>
          Team 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:"red"}]}
        onPress={()=>this.goToBuzzerScreen("red")}>
        <Text
          style={styles.buttonText}>
          Team 3
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:"lightblue"}]}
        onPress={()=>this.goToBuzzerScreen("lightblue")}>
        <Text
          style={styles.buttonText}>
          Team 4
        </Text>
      </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    marginLeft: 20,
    borderWidth: 5,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 75,
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default HomeScreen;