import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {  //can use destructuring to replace (props) with ({ navigation })
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
        title='Go to Components Demo'
        onPress={() => props.navigation.navigate('Components')}/>  
        <Button 
        title='Go to List Demo'
        onPress={() => props.navigation.navigate('List')}/>
        <Button 
        title='Go to Image screen'
        onPress={() => props.navigation.navigate('Image')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
