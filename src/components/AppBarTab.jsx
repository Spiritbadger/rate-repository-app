import { View, Pressable } from 'react-native';
import Text from './Text';
import { Link } from "react-router-native";
//import SignOutButton from './SignOutButton';
import useSignOut from '../hooks/useSignOut';

const AppBarTab = ( {linkTo, linkText}) => {

    const [signOut] = useSignOut();

  const onSubmit = async () => {
   
    try {
      await signOut();
    } catch (e) {
      console.log(e);
    }
  };
    
    if (linkTo === 'signout') {
        return <View>
            <Pressable onPress={onSubmit}><Text color="appBar" fontSize="appBar" fontWeight="bold">{linkText}</Text></Pressable>
        </View>
    }
   else {
        return <View>
        <Link to={linkTo}><Text color="appBar" fontSize="appBar" fontWeight="bold">{linkText}</Text></Link>
    </View>
    }
    
        };

export default AppBarTab;