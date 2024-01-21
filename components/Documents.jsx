import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Documents = ({}) => {
  const [isChecked1, setChecked1] = React.useState(false);
  const [isChecked2, setChecked2] = React.useState(false);

  const handleCheckbox1Press = () => {
    setChecked1(!isChecked1);
  };

  const handleCheckbox2Press = () => {
    setChecked2(!isChecked2);
  };
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

      <View style={styles.checkBox}>
      <BouncyCheckbox
        size={10}
        fillColor="red"
        unfillColor='#D5E1E8'
        text="Я ознакомлен(а) и согласен(а) с Договором присоединения по предоставлению микрокредита и Заявлением о предоставлении микрокредита, а также с вышеперечисленным согласиями и обязательствами."
        textStyle={{ fontSize: 8, fontWeight: '400', color: '#071526', letterSpacing: 0.15, textDecorationLine: 'none' }}
        onPress={handleCheckbox1Press}
        innerIconStyle={isChecked1 ? { display: 'none' } : {borderWidth: 0}}
      />
      <BouncyCheckbox
        size={10}
        style={{ marginTop: 20 }}
        fillColor="red"
        unfillColor='#D5E1E8'
        text="У меня есть электронная цифровая подпись"
        iconStyle={{ borderColor: "red" }}
        textStyle={{ fontSize: 8, fontWeight: '400', color: '#071526', letterSpacing: 0.15, textDecorationLine: 'none' }}
        onPress={handleCheckbox2Press}
        innerIconStyle={isChecked2 ? { display: 'none' } : {borderWidth: 0}}
      />
  
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
    marginTop: 20,
    marginBottom: 20
  },
  documentItem: {
    color: '#8FADBF',
    fontSize: 13,

    fontWeight: '400',

    letterSpacing: 0.15,
    textDecorationLine: 'underline',
  },
  checkBox: {
    display: 'flex',
    width: '100%',
    minHeight: 50,
    // backgroundColor: 'grey'
  }
});

export default Documents;
