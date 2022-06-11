import { View, Pressable } from 'react-native';
import Text from './Text';

const SignOutButton = ({linkText}) => {

    const logOut = () => {
        console.log('LOG OUT PRESSED')
    };
        return <View>
        <Pressable onPress={logOut}><Text color="appBar" fontSize="appBar" fontWeight="bold">{linkText}</Text></Pressable>
    </View>
    
        };

export default SignOutButton;