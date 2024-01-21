import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const InputCard = ({ children, image, title }) => {
  return (
    <View style={styles.inputCard}>
      <View style={styles.cardHeader}>
        <Image source={image}></Image>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <View style={styles.contentBlock}>
        {children}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  inputCard: {
    display: "flex",
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',
    gap: 20,
    marginBottom: 30
  },
  cardTitle: {
    maxWidth : 220,
    color: '#071526',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.15
  },
  contentBlock: {
    display: 'flex',
    gap: 15
  }
});

export default InputCard;
