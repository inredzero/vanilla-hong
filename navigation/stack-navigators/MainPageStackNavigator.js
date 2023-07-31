import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ListFeed from '../../component/ListFeed';

const Stack = createStackNavigator();


const MainPageStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
<<<<<<< HEAD
            headerShown: false,
=======
            headerShown: true,
>>>>>>> 5895af8 (SearchFeed image finish)
        }}>
            <Stack.Screen name="Vanilla" component={ListFeed} />
        </Stack.Navigator>
    )
}

export default MainPageStackNavigator

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden',
    },
})