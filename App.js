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
  onChange = (value) => {
    console.warn(`El switch cambiara a ${value}`)
    this.setState({switchValue: value})
  }
  onChangeText = (value)=>{
    this.setState({inputTextValue: value})
  }
  onPressLearnMore = () => {
    console.warn(`Escribiste: ${this.state.inputTextValue}`)
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={value => this.onChangeText(value)}
          value={this.state.inputTextValue}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
