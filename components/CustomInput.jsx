import React from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform,StyleSheet } from "react-native";

const CustomInput = ({title}) => {
  const [text, onChangeText] = React.useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.inputBlock}>
        <Text style={styles.inputLabel}>
          {title} <Text style={styles.asterisk}>*</Text>
        </Text>
        <TextInput
          selectionColor={'#8FADBF'}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          // placeholder="useless placeholder"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputBlock: {
    width: '100%',
    minHeight: 50,
    
    backgroundColor : '#FFF'
    // backgroundColor: "gray"
  },
  input: {
    backgroundColor: 'white',
    marginTop: 10,
    minHeight: 30,
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
  },
  inputLabel: {
    color: '#7A7D7D',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.15
  }
});

export default CustomInput;
