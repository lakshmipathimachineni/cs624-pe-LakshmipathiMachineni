 // https://www.geeksforgeeks.org/introduction-react-native/ 
 // chatgpt
 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: Your Name</Text>
      <Text style={styles.text}>Degree Program: Your Degree Program</Text>
      <Text style={styles.text}>School: Your School</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
