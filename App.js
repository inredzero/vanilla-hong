import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
<<<<<<< HEAD
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
=======
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </SafeAreaView>
>>>>>>> 5895af8 (SearchFeed image finish)
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})
