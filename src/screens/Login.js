import React, { useContext } from 'react';
import { TouchableOpacity, Text, View } from 'react-native'
import { AuthContext } from '../context/Auth';

export default Login = () => {
    const { addToken } = useContext(AuthContext);
    const login = () => {
        addToken('Bearer test')
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
                onPress={login}
                activeOpacity={.8}
                style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 32 }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}