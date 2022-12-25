import React, { useContext } from 'react';
import { TouchableOpacity, Text, View } from 'react-native'
import { AuthContext } from '../context/Auth';

export default Login = () => {
    const { addToken } = useContext(AuthContext);
    const login = () => {
        //TODO: login with test user
    }
    const register = () => {
        //TODO: register with test user
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
                onPress={login}
                activeOpacity={.8}
                style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 32 }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={register}
                activeOpacity={.8}
                style={{ alignSelf: 'center' }}>
                <Text style={{
                    fontSize: 32,
                    marginTop: 16
                }}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}