import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (
    <RepositoryItem item={item} singleRepository={false} />
  );

export const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
    
    return (
    <FlatList
    data={repositoryNodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={renderItem}
    />
    );
  };

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
  };


export default RepositoryList;