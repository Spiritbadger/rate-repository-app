import { ScrollView, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.backGroundColors.appBar,
        padding: 10
    },
  naviLink: {
    flexGrow: 1
  },
});

const AppBar = () => {
    return (
        <View>
        <ScrollView horizontal style={styles.navigation}>
        <AppBarTab style={styles.naviLink} linkTo='/' linkText='Repositories'/>
        <AppBarTab style={styles.naviLink} linkTo='signin' linkText='Sign in' />
        </ScrollView>
    </View>
    );
};

export default AppBar;