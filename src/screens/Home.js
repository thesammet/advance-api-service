import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import getUsers from '../api/user'
import { AuthContext } from '../context/Auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default function Home() {
    const { removeToken } = useContext(AuthContext);

    const removeTokenMethod = () => {
        removeToken('token')
    }

    useEffect(() => {
        getUsers()
    })

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={removeTokenMethod}
                activeOpacity={.8}
                style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 32 }}>Remove Token</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}