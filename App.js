import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, Switch, StyleSheet,TextInput, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      inputTextValue:""
    }
  }
  onChange = (value)=>{
    console.warn(`El switch cambiara a ${value}`)
    this.setState({switchValue: value})
  }
  onPressLearnMore () {
    console.warn("Presionaste un boton")
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={()=>{}}
          value={"test"}
          placeholder="useless placeholder"
        />
        <Switch
          onValueChange={()=>{this.onChange(!this.state.switchValue)}}
          value={this.state.switchValue}
        />
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
