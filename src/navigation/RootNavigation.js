import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()
export function navigationPush(screenName) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(screenName);
    }
}