import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

const MyFlatListComponent = ({ sampleArr }) => {
  const Item = ({ item, index }) => {
    return (
      <View styles={styles.itemWrapper}>
        <Text style={styles.text}>
          {index} {item}
        </Text>
      </View>
    );
  };
  const renderItem = ({ index, item }) => {
    return <Item index={index} item={item} />;
  };
  const HeaderComponent = () => {
    return <Text>Sample Sorted Array</Text>;
  };
  return (
    <FlatList
      ListHeaderComponent={HeaderComponent}
      ListHeaderComponentStyle={styles.header}
      // numColumns={3}
      horizontal={false}
      data={sampleArr}
      renderItem={renderItem}
      keyExtractor={(item) => item.index}
      showVerticalScrollBar={false}
    />
  );
};

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    flex: 1
  },
  header: {
    padding: 20,
    backgroundColor: "green",
    fontSize: "1.5rem"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "0.5em",
    textAlign: "center",
    backgroundColor: "#1B95E0"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  itemWrapper: {
    alignItems: "center"
  }
});

export default MyFlatListComponent;
