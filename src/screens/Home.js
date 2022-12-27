import React, { useEffect, useContext, useState } from 'react'
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, FlatList } from 'react-native'
import { AuthContext } from '../context/Auth';
import APIService from '../service/apiConfig';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    mealBox: {
        alignSelf: 'center',
        marginVertical: 8
    }
})

export default function Home() {
    const { removeToken } = useContext(AuthContext);
    const [data, setData] = useState([])


    const removeTokenMethod = () => {
        removeToken('token')
    }

    async function getFood() {
        try {
            const response = await APIService.get('/food');
            return setData(response.data.data)
        } catch (error) {
            //TODO: Toast message
            return { error: true, error }
        }
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.mealBox}>
                <Text> {item.meal.date} </Text>
                <Text> like count: {item.meal.likeCount} </Text>
                <Text> dislike count: {item.meal.dislikeCount} </Text>
            </View>
        );
    };

    useEffect(() => {
        getFood()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
            />
            <TouchableOpacity
                onPress={removeTokenMethod}
                activeOpacity={.8}
                style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 32 }}>Remove Token</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}