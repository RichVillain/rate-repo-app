import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.backgroundColor.primary,
        alignItems: 'flex-end',
        maxHeight: 100
    },
});

const AppBar = () => {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <AppBarTab tab={'Repositories'} />
          <AppBarTab tab={'Sign In'} />
        </ScrollView>
      </View>
    );
};

export default AppBar;