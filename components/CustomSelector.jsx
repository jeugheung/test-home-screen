import React, { useState, useRef } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, StyleSheet,Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import menuDots from '../assets/menuDots.png'

const CategorySelector = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    'Помощь родственникам / друзьям',
    'Погашение другого микрокредита',
    'Развитие бизнеса / товарооборот',
    'На образование',
    'Лечение / Здоровье',
    'Ремонт недвижимости',
    'Бытовая / Цифровая техника',
    'Покупка / Ремонт авто',
    'Иное',
    'Пополнение оборотных средств'
  ];

  const buttonRef = useRef(null);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    setModalVisible(false);
    // Дополнительная логика при выборе категории
  };

  const getButtonPosition = () => {
    if (buttonRef.current) {
      buttonRef.current.measureInWindow((x, y, width, height) => {
        setButtonPosition({ x, y, width, height });
      });
    }
  };



  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        />
        <View
          style={[
            styles.modalContent,
            { top: buttonPosition.y },
          ]}
        >
          <TouchableOpacity
            ref={buttonRef}
            activeOpacity={1}
            onPress={() => {
              setModalVisible(false);
              getButtonPosition();
              setSelectedCategory(null)
            }}
          >
            <View style={styles.categoryBlock2}>
              <Text style={styles.categoryText}>Выберите значение</Text>
              <Image source={menuDots}></Image>
            </View>
          </TouchableOpacity>
          <FlatList
            data={categories}
            style={styles.flatList}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => handleCategoryPress(item)}
              >
                <Text style={styles.categoryText2}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>

      <TouchableOpacity
        ref={buttonRef}
        onPress={() => {
          setModalVisible(true);
          getButtonPosition();
        }}
        style={styles.menuBlock}
        activeOpacity={1}
      >
        <View style={styles.categoryBlock}>
          <Text style={[styles.categoryText, { color: selectedCategory ? '#000' : '#7A7D7D' }]}>
            {selectedCategory ?? 'Выберите значение'}
          </Text>
          <Image source={menuDots}></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBlock: {
    width: '100%',
    
  },  
  categoryBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    // width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    // borderRadius: 8,
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
  categoryBlock2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    // width: '100%',
    // padding: 16,
    // backgroundColor: 'red',
    borderTopLeftRadius: 15, // Убираем радиус углов
    borderTopRightRadius: 15, // Убираем радиус углов
    // borderRadius: 8,
    // borderRadius: 15,
    // backgroundColor: '#FFF',
  },
  categoryText: {
    color: '#7A7D7D', // Цвет текста
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.15, 
    
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    left: 20, // Отступ слева
    right: 20, // Отступ справа
    backgroundColor: '#FFF',
    borderTopLeftRadius: 15, // Убираем радиус углов
    borderTopRightRadius: 15, // Убираем радиус углов
    borderBottomLeftRadius: 15, // Убираем радиус углов
    borderBottomRightRadius: 15, // Убираем радиус углов
    // padding: 16,

  },
  flatList: {
    backgroundColor: '#FFF',
    paddingTop: 20,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 15, // Убираем радиус углов
    borderBottomRightRadius: 15, // Убираем радиус углов
  },
  categoryItem: {
    // backgroundColor: 'red',
    marginBottom: 20
  },
  categoryText2: {
    letterSpacing: 0.15, 
    fontSize: 14,
    fontWeight: '400',
    color: '#071526',
  }
});

export default CategorySelector; 