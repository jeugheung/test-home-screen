import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import mfoLogo from '../assets/mfoLogo.png'
import Carousel from '../components/Carousel';
import Calculator from '../components/Calculator';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentBlock}>
        <View style={styles.header}>
          <Image source={mfoLogo}></Image>
          <TouchableOpacity style={styles.languageChanger}>
            <Text>RU</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.carouselBlock}>
          <Text style={styles.carouselLabel}>Акции</Text>
          <Carousel/>
        </View>
        <View style={styles.calculatorBlock}>
          <Calculator/>
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
  header: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
  },
  languageChanger: {
    display: 'flex',
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.17,
    shadowRadius: 10,
    elevation: 3, // For Android
  },
  carouselBlock: {
    display: 'flex',
    width: '100%',
    marginTop: 30,
    paddingLeft: 20,
    marginBottom: 65
  },
  carouselLabel: {
    color: '#071526',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.15,
    marginBottom: 20
  },
  calculatorBlock: {
    display: 'flex',
    width: '100%',
    minHeight: 300,
  }
});

export default HomePage;