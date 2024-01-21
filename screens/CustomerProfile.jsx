import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import arrowLeft from '../assets/arrowLeft.png'
import { useNavigation } from '@react-navigation/native';
import InputCard from '../entities/InputCard';
import cardProfile from '../assets/cardProfile.png'
import cardLocation from '../assets/cardLocation.png'
import cardUdv from '../assets/cardUdv.png'
import cardIncome from '../assets/cardIncome.png'
import CustomInput from '../components/CustomInput';

const CustomerProfile = () => {
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
          <Text style={styles.headerText}>Анкета клиента</Text>
        </View> 
        <View style={styles.cardBlock}>
          <InputCard image={cardProfile} title={'Контактная информация'}>
            <View>
              <Text style={styles.contactLabel}>Мобильный телефон</Text>
              <Text style={styles.contactValue}>+ 7 771 *** *5 35</Text>
            </View>
            <View>
              <Text style={styles.contactLabel}>Почта</Text>
              <Text style={styles.contactValue}>name@e-mail.kz</Text>
            </View>
          </InputCard>
          <InputCard image={cardUdv} title={'Данные из удостоверения личности'}>
             <CustomInput title={'Фамилия'}/>
             <CustomInput title={'Имя'}/>
             <CustomInput title={'Отчество'}/>
           
          </InputCard>
          <InputCard image={cardLocation} title={'Адрес'}>
             <CustomInput title={'Регион регистрации'}/>
             <CustomInput title={'Адрес регистрации'}/>
             <CustomInput title={'Регион проживания'}/>
             <CustomInput title={'Фактический адрес проживания'}/>
             <CustomInput title={'Время проживания по текущему адресу'}/>
             <CustomInput title={'Домашний телефон'}/>
          </InputCard>
          <InputCard image={cardIncome} title={'Доходы'}>
            <CustomInput title={'Образование'}/>
            <CustomInput title={'Занятость'}/>
            <CustomInput title={'Занимаемая должность'}/>
            <CustomInput title={'Работодатель'}/>
            <CustomInput title={'Вид деятельности'}/>
            <CustomInput title={'Рабочий телефон'}/>
            <CustomInput title={'Добавочный'}/>
            <CustomInput title={'Официальная заработная плата в месяц, тнг'}/>
            <CustomInput title={'Средний ежемесячный доход помимо заработной платы, тнг'}/>
          </InputCard>

          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitText}>Сохранить</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFC',
  },
  contentBlock: {
    display: 'flex',
    // justifyContent: 'space-between',
    width: '100%',
    minHeight: 600,
    // backgroundColor: '#FBFBFC',
    paddingLeft: 20,
    paddingRight: 20,
    // marginBottom: 50
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
  contactLabel: {
    color: '#7A7D7D',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.15,
    marginBottom: 10
  },
  contactValue: {
    color: '#071526',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.15
  },
  cardBlock: {
    display: 'flex',
    gap: 40,
    marginBottom: 50
  },
  submitBtn: {
    width: 306,
    minHeight: 50,
    backgroundColor: '#071526',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 40
  },
  submitText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.15
  }
  
});

export default CustomerProfile;