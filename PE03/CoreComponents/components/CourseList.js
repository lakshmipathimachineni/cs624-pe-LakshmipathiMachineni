import React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const coreCourses = [
  "CS 504 Software Engineering",
  "CS 506 Programming for Computing",
  "CS 519 Cloud Computing Overview",
  "CS 533 Computer Architecture",
  "CS 547 Secure Systems and Programs",
  "CS 622 Discrete Math and Algorithms for Computing",
  "DS 510 Artificial Intelligence for Data Science",
  "DS 620 Machine Learning & Deep Learning",
];

const depthOfStudyCourses = [
  "CS 624 Full-Stack Development - Mobile App",
  "CS 628 Full-Stack Development - Web App",
];

const capstoneCourse = "I have not decided yet";

const CourseList = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <TextInput placeholder="Enter your favorite course" style={styles.input} defaultValue="Your Favorite Course" />
      </View>

      <Text style={styles.courseTitle}>Core Courses:</Text>
      {coreCourses.map((course, index) => (
        <Text style={styles.courseItem} key={index}>
          {course}
        </Text>
      ))}

      <Text style={styles.courseTitle}>Depth of Study Courses:</Text>
      {depthOfStudyCourses.map((course, index) => (
        <Text style={styles.courseItem} key={index}>
          {course}
        </Text>
      ))}

      <Text style={styles.courseTitle}>Capstone Course:</Text>
      <Text style={styles.courseItem}>{capstoneCourse}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'maroon', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  courseItem: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default CourseList;
