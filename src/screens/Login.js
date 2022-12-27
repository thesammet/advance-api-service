import React, { useContext, useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native'
import { AuthContext } from '../context/Auth';
import { TOKEN } from "@env"

export default Login = () => {
    const { addToken, removeToken, token } = useContext(AuthContext);
    const login = () => {
        //TODO: Login with a test user
        addToken(TOKEN)
    }
    const register = () => {
        //TODO: Register a test user
        addToken(TOKEN)
    }
    useEffect(() => {
        token && removeToken()
    })
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