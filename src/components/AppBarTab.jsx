import { View } from 'react-native';
import Text from './Text';
import { Link } from "react-router-native";
import SignOutButton from './SignOutButton';

const AppBarTab = ( {linkTo, linkText}) => {

    if (linkTo === 'signout') {
        return <View>
            <SignOutButton linkText={linkText}/>
        </View>
    }
   else {
        return <View>
        <Link to={linkTo}><Text color="appBar" fontSize="appBar" fontWeight="bold">{linkText}</Text></Link>
    </View>
    }
    
        };

export default AppBarTab;