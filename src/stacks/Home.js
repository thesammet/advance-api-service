import { createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PostPage from '../screens/PostPage';
import Auth from '../stacks/Auth';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Auth"
                component={Auth}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PostPage"
                component={PostPage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
export default HomeStack;