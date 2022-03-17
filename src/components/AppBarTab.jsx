import { Pressable } from 'react-native';
import Text from './Text';

const onPressFunction = () => {
    console.log('Pressed');
}

const AppBarTab = () => {
    return <Pressable onPress={onPressFunction}>
            <Text color="appBar" fontSize="appBar" fontWeight="bold">Repositories</Text>
        </Pressable>
        };

export default AppBarTab;