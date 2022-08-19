import React, { useState } from 'react';
import {
  Button,
  TextInput,
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import {
  getUser,
  createUser,
  updateUser,
  deleteUser
} from '../services/restServices';

const HomeScreen = () => {
  const [user, setUser] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="user"
        onChangeText={(value) => setUser(value)}
        defaultValue={user}
        onSubmitEditing={(value) => setUser(value.nativeEvent.text)}
        textAlign="left"
      ></TextInput>
      <Text style={styles.text}>Hello {user}</Text>
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Button title="Create" onPress={createUser} />
        </View>
        <View style={styles.button}>
          <Button title="Read" onPress={getUser} />
        </View>

        <View style={styles.button}>
          <Button title="Update" onPress={updateUser} />
        </View>
        <View style={styles.button}>
          <Button title="Delete" onPress={deleteUser} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignSelf: 'flex-end'
  },
  buttonWrapper: {
    margin: 20,
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  button: {
    margin: 10
  },
  touchable: {
    backgroundColor: 'dodgerblue',
    margin: 20,
    padding: 10
  },
  textInput: {
    margin: 10,
    padding: 10,
    backgroundColor: 'skyblue'
  },
  text: {
    margin: 20,
    padding: 10,
    backgroundColor: 'beige',
    textAlign: 'center'
  }
});
