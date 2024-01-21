import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";


const CustomInput = ({}) => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.inputBlock}>
      <Text>
        Фамилия <Text style={styles.asterisk}>*</Text>
      </Text>
      <TextInput
        selectionColor={'#8FADBF'}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        // placeholder="useless placeholder"
      
      />
    </View>
  )
};

const styles = StyleSheet.create({
  inputBlock: {
    width: '100%',
    minHeight: 60,
    padding: 20,
    backgroundColor :'white'
    // backgroundColor: "gray"
  },
  input: {
    backgroundColor: 'white',
    marginTop: 10,
    minHeight: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#E9EAEA',
    // caretColor: 'red',
    color :'#071526',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.15
  },
  asterisk: {
    color: 'red', // Set the color of the asterisk to red
  }
});

export default CustomInput;
