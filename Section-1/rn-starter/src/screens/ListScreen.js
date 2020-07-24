import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1'},
        {name: 'Friend #2'},
        {name: 'Friend #3'},
        {name: 'Friend #4'},
        {name: 'Friend #5'},
        {name: 'Friend #6'},
        {name: 'Friend #7'},
        {name: 'Friend #8'},
        {name: 'Friend #9'}
    ]
    return (
        <FlatList 
            keyExtractor={friend => friend.name}  //A better way of assigning keys compared to hard-coding 
            data={friends} 
            renderItem={({ item }) => {   // (element) returns{item: {name: 'Friend#1'}, index: 0 } Therefore: use ({item}) directly
                return <Text style={styles.textStyle}>{item.name}</Text>    // ({item}) returns {name: 'Friend #1'}
            }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;