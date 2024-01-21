import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import mfoLogo from '../assets/mfoLogo.png'
import Carousel from '../components/Carousel';
import Calculator from '../components/Calculator';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import CategorySelector from '../components/CustomSelector';
import arrowLeft from '../assets/arrowLeft.png'
import redDept from '../assets/redDept.png'
import grayDept from '../assets/grayDept.png'

import { Slider, styled } from 'tamagui'
import Documents from '../components/Documents';
const CustomSliderTrack = styled(Slider.Track, {
  backgroundColor: 'red',
})


const CreditApplication = () => {
  const navigation = useNavigation()
  const route = useRoute();

  const handlePress = () => {
    navigation.goBack();
  };

  const handleRequestBtnPress = () => {
    navigation.navigate('CreditConfirmation', {
      // Ваши параметры
      paramName1: "amount",
      paramName2: "days",
      // Добавьте все необходимые параметры
    });
  };
  

  const { paramName1, paramName2 } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentBlock}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={arrowLeft} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Заявка на микрокредит</Text>
        </View> 

        {/* <View style={styles.calculatorBlock}>
          <Calculator/>
        </View> */}

        <View style={styles.deptAmountLabels}>
          <View style={styles.deptItem}>
            <Image source={redDept}></Image>
            <Text style={styles.deptText}>Вы берете:</Text>
            <Text style={styles.deptValue}>105 000 тнг</Text>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.deptItem}>
            <Image source={grayDept}></Image>
            <Text style={styles.deptText}>Сумма к возврату:</Text>
            <Text style={styles.deptValue}>125 000 тнг</Text>
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