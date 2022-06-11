import { ScrollView, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import useMe from '../hooks/useMe';

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

  const { userInfo } = useMe();

  if (userInfo) {
    const logoutText = `Sign out (${userInfo.username})`
    return (
      <View>
      <ScrollView horizontal style={styles.navigation}>
      <AppBarTab style={styles.naviLink} linkTo='/' linkText='Repositories'/>
      <AppBarTab style={styles.naviLink} linkTo='signout' linkText={logoutText} />
      </ScrollView>
  </View>
  );
  }
  
  else {
    return (
      <View>
      <ScrollView horizontal style={styles.navigation}>
      <AppBarTab style={styles.naviLink} linkTo='/' linkText='Repositories'/>
      <AppBarTab style={styles.naviLink} linkTo='signin' linkText='Sign in' />
      </ScrollView>
  </View>
  );
  }

};

export default AppBar;