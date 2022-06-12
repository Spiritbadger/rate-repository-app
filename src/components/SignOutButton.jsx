import { View, Pressable } from 'react-native';
import Text from './Text';
import useSignOut from '../hooks/useSignOut';

const SignOutButton = ({linkText}) => {

    const [signOut] = useSignOut();

    const onSubmit = async () => {
     
      try {
        await signOut();
      } catch (e) {
        console.log(e);
      }
    };
          return <View>
              <Pressable onPress={onSubmit}><Text color="appBar" fontSize="appBar" fontWeight="bold">{linkText}</Text></Pressable>
          </View>
      
          };

export default SignOutButton;