import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Accelerometer } from 'expo';

export default class App extends React.Component {
  state = {
    accelerometerX: 0
  };

  componentDidMount() {
    this.addAccelerometer();
  };

  addAccelerometer = () => {
    Accelerometer.addListener(accelerometer => {
      this.setState({ accelerometerX: accelerometer.x })
    })
  }

  render() {
    let { accelerometerX } = this.state;

    return (
      <TouchableOpacity>
        <View style={{ position: 'absolute', top: 300, left: accelerometerX * 100 }}>
          <Image
            source={require('./assets/iori.gif')}
          />
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({

});
