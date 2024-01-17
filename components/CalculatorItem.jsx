import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import buttonMinus from "../assets/buttonMinus.png";
import buttonPlus from "../assets/buttonPlus.png";
import { Slider } from "@react-native-assets/slider";

const CalculatorItem = ({
  value,
  onDecrease,
  onIncrease,
  onSlideChange,
  minValue,
  maxValue,
  step,
  rangeText,
}) => {
  return (
    <View style={styles.calculatorItem}>
      <View style={styles.calculatorButtonSide}>
        <TouchableOpacity style={styles.button} onPress={onDecrease}>
          <Image source={buttonMinus} />
        </TouchableOpacity>
        <Text style={styles.rangeText}>{rangeText.min}</Text>
      </View>
      <Text style={styles.amountText}>{value}</Text>
      <View style={styles.calculatorButtonSide}>
        <Text style={styles.rangeText}>{rangeText.max}</Text>
        <TouchableOpacity style={styles.button} onPress={onIncrease}>
          <Image source={buttonPlus} />
        </TouchableOpacity>
      </View>

      <Slider
        value={(value - minValue) / (maxValue - minValue)}
        style={styles.slider}
        thumbTintColor="#071526"
        thumbSize={20}
        outboundColor="black"
        inboundColor="grey"
        onValueChange={(sliderValue) =>
          onSlideChange(
            Math.round(sliderValue * (maxValue - minValue) + minValue)
          )
        }
        minimumTrackTintColor="#071526"
        maximumTrackTintColor="#B7B7B7"
        step={step}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorItem: {
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
  calculatorButtonSide: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
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
});

export default CalculatorItem;
