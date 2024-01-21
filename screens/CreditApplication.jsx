import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import CalculatorItem from '../components/CalculatorItem';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import CategorySelector from '../components/CustomSelector';
import arrowLeft from '../assets/arrowLeft.png'
import redDept from '../assets/redDept.png'
import grayDept from '../assets/grayDept.png'

import Documents from '../components/Documents';


const CreditApplication = () => {
  const navigation = useNavigation()
  const route = useRoute();
  const { paramName1, paramName2 } = route.params;
  const [amount, setAmount] = useState(paramName1); // Начальная сумма 50,000
  const [days, setDays] = useState(paramName2);

  const increaseAmount = () => {
    if (amount < 150000) {
      setAmount(amount + 500);
    }
  };

  const decreaseAmount = () => {
    if (amount > 50000) {
      setAmount(amount - 500);
    }
  };

  const increaseDays = () => {
    if (days < 90) {
      setDays(days + 1);
    }
  };

  const decreaseDays = () => {
    if (days > 3) {
      setDays(days - 1);
    }
  };

  const handlePress = () => {
    navigation.goBack();
  };

  const handleRequestBtnPress = () => {
    navigation.navigate('CreditConfirmation', {
      // Ваши параметры
      paramName1: amount,
      paramName2: (amount * 1.2).toFixed(0),
      // Добавьте все необходимые параметры
    });
  };
  

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentBlock}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={arrowLeft} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Заявка на микрокредит</Text>
        </View> 

        <View style={styles.calculatorBlock}>
          <Text style={styles.calculatorText}>Выберите условия</Text>
          <CalculatorItem
            value={amount}
            onDecrease={decreaseAmount}
            onIncrease={increaseAmount}
            onSlideChange={setAmount}
            minValue={50000}
            maxValue={150000}
            step={1 / ((150000 - 50000) / 500)}
            rangeText={{ min: "50 000 тнг", max: "150 000 тнг" }}
          />
          <CalculatorItem
            value={days}
            onDecrease={decreaseDays}
            onIncrease={increaseDays}
            onSlideChange={setDays}
            minValue={3}
            maxValue={90}
            step={1 / (90 - 3)}
            rangeText={{ min: "3 дня", max: "90 дней" }}
          />
        </View>

        <View style={styles.deptAmountLabels}>
          <View style={styles.deptItem}>
            <Image source={redDept}></Image>
            <Text style={styles.deptText}>Вы берете:</Text>
            <Text style={styles.deptValue}>{amount} тнг</Text>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.deptItem}>
            <Image source={grayDept}></Image>
            <Text style={styles.deptText}>Сумма к возврату:</Text>
            <Text style={styles.deptValue}>{(amount * 1.2).toFixed(0)} тнг</Text>
          </View>
        </View>

        <View>
          <Text style={styles.subtitle}>Цель получения микрокредита</Text>
          <CategorySelector/>
        </View>

        <Documents/>

        <TouchableOpacity style={styles.sendReq} onPress={handleRequestBtnPress}>
          <Text style={styles.sendReqText}>Отправить заявку</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFC',
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
  calculatorBlock: {
    display: 'flex',
    width: '100%',
    minHeight: 200,
    // backgroundColor: 'gray',
    marginBottom: 55
  },
  calculatorText: {
    color: '#071526',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.15
  },
  subtitle: {
    color: '#071526',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.15,
    marginBottom: 20
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
    // backgroundColor: 'red',
    gap: 10,
    marginBottom: 52
  },
  sendReq: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(38, 52, 64, 1)',
    minHeight: 50,
    width: 306,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 50
  },
  sendReqText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.15,
  }
  
});

export default CreditApplication;