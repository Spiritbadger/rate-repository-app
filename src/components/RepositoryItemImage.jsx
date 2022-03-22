
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.paddings.medium,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: theme.edges.softEdges,
  },
});

const RepositoryItemImage = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: uri,
        }}
      />
    </View>
  );
}

export default RepositoryItemImage;