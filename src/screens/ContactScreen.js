import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator,
  FlatList,
  Image
} from 'react-native';
import { getDelayedResponse } from '../services/restServices';

const ContactScreen = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const result = await getDelayedResponse();
    setData(result.data.data);
    setLoading(false);
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const Item = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri: item.avatar }} style={styles.image} />
        <View styles={styles.itemWrapper}>
          <Text style={styles.text}>Id: {item.id}</Text>
          <Text style={styles.text}>fname: {item.first_name}</Text>
          <Text style={styles.text}>email: {item.email}</Text>
        </View>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight style={styles.touchable} onPress={getData}>
        <View>
          <Text
            style={{
              color: 'white',
              textTransform: 'uppercase',
              fontWeight: 500,
              textAlign: 'center'
            }}
          >
            Delayed Response
          </Text>
        </View>
      </TouchableHighlight>
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <Text style={styles.header}>Contact Details:</Text>
          )}
          horizontal={false}
          data={data}
          numColumns={2}
          keyExtracter={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: 'white' }}></View>
          )}
        />
      </View>
      {loading && <ActivityIndicator size="large" color="blue" />}
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  itemWrapper: {
    backgroundColor: 'beige',
    margin: 10,
    padding: 20,
    alignItems: 'center'
  },
  image: {
    height: 120,
    width: 120,
    padding: 10
    // tintColor: 'beige'
  },
  touchable: {
    backgroundColor: 'dodgerblue',
    margin: 50,
    padding: 10,
    fontSize: 16
  },
  text: {
    backgroundColor: 'white',
    fontSize: 14,
    padding: 10,
    borderColor: 'dodgerblue',
    borderWidth: 2
  },
  header: {
    backgroundColor: 'dodgerblue',
    margin: 10,
    padding: 10,
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
    textTransform: 'capitalize'
  }
});
