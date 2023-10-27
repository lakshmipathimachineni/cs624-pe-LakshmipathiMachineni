import React from 'react';
import { View, StyleSheet } from 'react-native';
import CourseList from './components/CourseList';

export default function App() {
  return (
    <View style={styles.container}>
      <CourseList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
