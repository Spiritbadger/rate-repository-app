import { View } from 'react-native';
import Text from './Text';
import { Link } from "react-router-native";


const AppBarTab = ( {linkTo, linkText}) => {
    return <View>
            <Link to={linkTo}><Text color="appBar" fontSize="appBar" fontWeight="bold">{linkText}</Text></Link>
        </View>
        };

export default AppBarTab;