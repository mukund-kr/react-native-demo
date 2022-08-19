import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import ContactScreen from './screens/ContactScreen';
const App = () => {
  // const arrData = Array.from("cabdefghijklmonpqrstuvwxyz").sort();

  return (
    <SafeAreaView style={styles.app}>
      <ContactScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500,
    flex: 1
  }
});

export default App;
