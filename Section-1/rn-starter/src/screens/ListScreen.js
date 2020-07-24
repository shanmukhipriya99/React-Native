import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', Age: 20 },
        {name: 'Friend #2', Age: 20 },
        {name: 'Friend #3', Age: 20 },
        {name: 'Friend #4', Age: 20 },
        {name: 'Friend #5', Age: 20 },
        {name: 'Friend #6', Age: 20 },
        {name: 'Friend #7', Age: 20 },
        {name: 'Friend #8', Age: 20 },
        {name: 'Friend #9', Age: 20 }
    ]
    return (
        <FlatList 
            // horizontal    // boolean value to scroll horizontally
            // showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}  //A better way of assigning keys compared to hard-coding 
            data={friends} 
            renderItem={({ item }) => {   // (element) returns{item: {name: 'Friend#1'}, index: 0 } Therefore: use ({item}) directly
                return <Text style={styles.textStyle}>{item.name}- Age {item.Age}</Text>    // ({item}) returns {name: 'Friend #1'}
            }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;