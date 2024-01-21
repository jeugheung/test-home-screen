import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

const MobileInput = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      {/* <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Показать значение</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // marginTop: 30,
    marginBottom: 20
  },
  codeFieldRoot: {
    gap: 10,
    alignItems: 'center',
    height: 60,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5, // для Android
  },
  cellRoot: {
    width: 18,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'rgba(143, 173, 191, 1)',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: 'rgba(38, 52, 64, 1)',
    borderBottomWidth: 2,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MobileInput;
