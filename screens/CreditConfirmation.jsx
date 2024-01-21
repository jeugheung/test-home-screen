import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import arrowLeft from '../assets/arrowLeft.png'
import { useNavigation } from '@react-navigation/native';
import MobileInput from "../components/MobileInput";
import CustomInput from "../components/CustomInput";

const CreditConfirmation = ({}) => {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.goBack();
  };



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentBlock}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={arrowLeft} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Подтвердите заявку</Text>
        </View> 

        <View style={styles.conditions}>

        </View>

        <View>
          <Text>Для получения микрокредита и подтверждения вашего согласия введите код из SMS</Text>

          <Text>Введите код из смс</Text>
        </View>

      
        <MobileInput/>
        

        <View>
          <Text>Повторно выслать пин-код</Text>
          
        </View>

        <CustomInput/>


      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    display: 'flex',
    
  },
  contentBlock: {
    display: 'flex',
    width: '100%',
    minHeight: 600,
    backgroundColor: '#FBFBFC',
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    minHeight: 40,
    marginTop: 20,
    marginBottom: 50
  },
  headerText: {
    color: '#071526',
    marginLeft: 25,
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.15
  },
  conditions: {
    display: 'flex',
    width: '100%',
    minHeight: 158,
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
  }
 
});

export default CreditConfirmation;
