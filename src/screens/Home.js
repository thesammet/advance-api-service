import React, { useEffect, useContext, useState } from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native'
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
    },
    postPageButton: {
        backgroundColor: 'yellow',
        marginVertical: 8,
        padding: 8,
        alignSelf: 'center'
    },
    centerAlign: {
        alignSelf: 'center'
    }
})

export default function Home({ navigation }) {
    const { removeToken } = useContext(AuthContext);
    const [data, setData] = useState([])


    const removeTokenMethod = () => {
        removeToken('token')
    }

    async function getFood() {
        try {
            const response = await APIService.post(
                '/register',
                JSON.stringify({
                    "data": ""
                }))
            return setData(response.data)
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
                keyExtractor={(item) => item.meal._id}
            />
            <View>
                <TouchableOpacity
                    onPress={navigation.navigate('PostPage')}
                    activeOpacity={.8}
                    style={styles.postPageButton}>
                    <Text style={{ fontSize: 32 }}>Post Page</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={removeTokenMethod}
                    activeOpacity={.8}
                    style={styles.centerAlign}>
                    <Text style={{ fontSize: 32 }}>Remove Token</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}