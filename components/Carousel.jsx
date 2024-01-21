import { StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import promoBack from "../assets/promoBack.png";
import smallPromo from "../assets/smallPromo.png";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    image: promoBack,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    image: smallPromo,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    image: smallPromo,
  },
];

const Carousel = () => {
  return (
    <FlatList
      data={DATA}
      horizontal
      style={styles.carousel}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => {
        const cardStyle =
          index === 0
            ? { ...styles.card, width: 170 }
            : { ...styles.card, width: 125 };

        return (
          <TouchableOpacity style={cardStyle} activeOpacity={1}>
            {/* <Text>{item.title}</Text> */}
            <Image source={item.image} style={styles.image}></Image>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  carousel: {
    display: "flex",
    flexDirection: "row",
  },
  card: {
    display: "flex",
    width: 170,
    height: 100,
    marginRight: 10,
    borderRadius: 20,
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
});

export default Carousel;
