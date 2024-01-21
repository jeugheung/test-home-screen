import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

import CalculatorItem from "./CalculatorItem";
import { useNavigation } from '@react-navigation/native';

const Calculator = () => {
  const navigation = useNavigation()
  const [amount, setAmount] = useState(50000); // Начальная сумма 50,000
  const [days, setDays] = useState(3);

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

  const handleRequestBtnPress = () => {
    navigation.navigate('CreditApplication', {
      // Ваши параметры
      paramName1: amount,
      paramName2: days,
      // Добавьте все необходимые параметры
    });
  };

  return (
    <View style={styles.calculatorBlock}>
      <Text style={styles.mainTitle}>Калькулятор</Text>
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
      <TouchableOpacity
        style={styles.requestBtn}
        onPress={handleRequestBtnPress}
      >
        <Text style={styles.reqestText}>Оформить микрокредит</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorBlock: {
    display: "flex",
    width: "100%",
    minHeight: 150,
    paddingLeft: 20,
    paddingRight: 20,
  },
  mainTitle: {
    color: "#071526",
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.15
  },
  carouselItem: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    minHeight: 70,
    backgroundColor: "#FFF",
    marginTop: 17,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3, // For Android
  },
  amountText: {
    color: "#071526",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.15,
  },
  rangeText: {
    color: "#7A7D7D",
    fontSize: 8,
    fontWeight: "400",
  },
  slider: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    width: 320,
    left: 22,
    height: 10,
  },
  requestBtn: {
    display: "flex",
    width: 306,
    height: 50,
    backgroundColor: "#263440",
    marginTop: 27,
    alignSelf: "center",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  reqestText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.15,
  },
});

export default Calculator;
