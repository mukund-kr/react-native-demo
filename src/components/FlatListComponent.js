import React from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";

const FlatListComponent = ({ data }) => {
  console.log(data);
  const Item = ({ name }) => {
    return (
      <View style={styles.itemStyle}>
        <Text style={styles.textStyle}>{name}</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return <Item name={item.id} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtracter={(item) => item.index}
        ListHeaderComponent={() => (
          <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>Items List</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  textStyle: {
    padding: 20
  },
  headerStyle: {
    backgroundColor: "aqua",
    marginTop: 30
  },
  itemStyle: {
    backgroundColor: "teal",
    marginTop: 30
  }
});
