import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import arrowLeft from '../assets/arrowLeft.png'
import { useNavigation } from '@react-navigation/native';
import MobileInput from "../components/MobileInput";
import CustomInput from "../components/CustomInput";
import redDept from '../assets/redDept.png'
import grayDept from '../assets/grayDept.png'
import { useRoute } from '@react-navigation/native';

const CreditConfirmation = ({}) => {
  const navigation = useNavigation()
  const route = useRoute();
  const { paramName1, paramName2 } = route.params;
  const [timer, setTimer] = useState(100); 
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  const handlePress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(intervalId);
          setIsTimerExpired(true); // Устанавливаем флаг по истечении времени
          // Дополнительные действия после завершения таймера
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId); // Очищаем интервал при размонтировании компонента
  }, []);

  const resetTime = () => {
    setTimer(100);
    setIsTimerExpired(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentBlock}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={handlePress}>
              <Image source={arrowLeft} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Подтвердите заявку</Text>
          </View> 

          <View style={styles.conditions}>
            <Text style={styles.conditionsTitle}>Условия микрокредита</Text>
            <View style={styles.deptAmountLabels}>
              <View style={styles.deptItem}>
                <Image source={redDept}></Image>
                <Text style={styles.deptText}>Вы берете:</Text>
                <Text style={styles.deptValue}>{paramName1} тнг</Text>
              </View>
              <View style={styles.dividerLine}/>
              <View style={styles.deptItem}>
                <Image source={grayDept}></Image>
                <Text style={styles.deptText}>Сумма к возврату:</Text>
                <Text style={styles.deptValue}>{paramName2} тнг</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.informationText}>Для получения микрокредита и подтверждения вашего согласия введите код из SMS</Text>

            <Text style={styles.smsSubtitle}>Введите код из смс</Text>
          </View>

        
          <MobileInput/>
          

          <View>
            <Text style={styles.resetTitle}>Повторно выслать пин-код</Text>
            {!isTimerExpired ? (
              <>
                <Text style={styles.timerText}>{timer}</Text>
              </>
            ) : (
              <TouchableOpacity onPress={resetTime}>
                <Text style={styles.resetTitle}>Повторно выслать пин-код</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.submitBtnStack}>
          <TouchableOpacity style={styles.acceptBtn}>
            <Text style={styles.acceptBtnText}>Согласен</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelBtnText}>Отмена</Text>
          </TouchableOpacity>
        </View>

        {/* <CustomInput/> */}


      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#FBFBFC'
  },
  contentBlock: {
    display: 'flex',
    // justifyContent: 'space-between',
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
  conditionsTitle: {
    color: '#071526',
    marginBottom: 30,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.15
  },
  conditions: {
    display: 'flex',
    padding: 20,
    width: '100%',
    marginBottom: 50,
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
  headerText: {
    color: '#071526',
    marginLeft: 25,
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.15
  },
  dividerLine: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E9EAEA',
  },
  deptItem: {
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',
    gap: 10,
  },
  deptText: {
    color: '#071526',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.15
  },
  deptValue: {
    color: '#071526',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.15
  },
  deptAmountLabels: {
    gap: 10,
  },
  informationText: {
    color: '#7A7D7D',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.15,
    marginBottom: 30
  },
  smsSubtitle: {
    color: '#7A7D7D',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.15,
    marginBottom: 10
  },
  resetTitle: {
    color: '#B7B7B7',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0.15,
    marginBottom: 5
  },
  timerText: {
    color: '#8FADBF',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.15
  },
  submitBtnStack: {
    display: 'flex',
    minHeight: 100,
    width: '100%',
    marginTop: 100,
    marginBottom: 50,
    // backgroundColor: 'red'
  },
  acceptBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: 50,
    backgroundColor: '#263440',
    borderRadius: 15
  },
  acceptBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.15
  },
  cancelBtn: {
    width: '30%',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20
  },
  cancelBtnText: {
    color: '#8FADBF',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.15
  }
  
});

export default CreditConfirmation;
