import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth';
import HomeStack from '../stacks/Home';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import AuthStack from '../stacks/Auth';

export default function Navigation() {
    const { token } = useContext(AuthContext);
    return (
        <>
            <NavigationContainer ref={navigationRef}>
                {token ? <HomeStack /> : <AuthStack />}
            </NavigationContainer>

        </>
    )
}