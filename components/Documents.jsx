import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";


const Documents = ({}) => {
  return (
    <View style={styles.documentsBlock}>
      <Text style={styles.mainTitle}>Документы</Text>

      <Text style={styles.description}>Для продолжения оформления микрокредита, пожалуйста, ознакомьтесь со следующими документами</Text>

      <View style={styles.documentsStack}>
        <Text style={styles.documentItem}>Заявление о предоставлению микрокредита</Text>
        <Text style={styles.documentItem}>Анкета заемщика</Text>
        <Text style={styles.documentItem}>Согласие для кредитных бюро и ЦРТР</Text>
        <Text style={styles.documentItem}>Согласие на обработку персональных данных</Text>
      </View>

      <View>

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  documentsBlock: {
    width: '100%',
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 15,
    paddingTop: 23,
    paddingBottom: 23,
    minHeight: 300,
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
  mainTitle: {
    color: '#071526',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.15,
    marginBottom: 27
  },
  description: {
    color: '#7A7D7D',
    fontSize: 8,
    fontWeight: 400,
    letterSpacing: 0.15
  },
  documentsStack: {
    display: 'flex',
    gap: 20,
    marginTop: 20
  },
  documentItem: {
    color: '#8FADBF',
    fontSize: 13,

    fontWeight: '400',

    letterSpacing: 0.15,
    textDecorationLine: 'underline',
  }
});

export default Documents;
