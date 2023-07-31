import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
<<<<<<< HEAD
=======
import ListFeed from '../../component/SearchFeed';
import SearchFeed from '../../component/SearchFeed';

>>>>>>> 5895af8 (SearchFeed image finish)

const Stack = createStackNavigator()

const Search = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Search screen!</Text>
  </View>
)

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
<<<<<<< HEAD
      <Stack.Screen name="searchStack" component={Search} />
=======
      <Stack.Screen name="searchStack" component={SearchFeed} />
>>>>>>> 5895af8 (SearchFeed image finish)
    </Stack.Navigator>
  )
}

<<<<<<< HEAD
export default SearchStackNavigator
=======
export default SearchStackNavigator

>>>>>>> 5895af8 (SearchFeed image finish)
