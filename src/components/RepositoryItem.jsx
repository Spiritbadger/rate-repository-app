import { View, StyleSheet, Pressable  } from 'react-native';
import RepositoryItemImage from './RepositoryItemImage';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexBasis: '100%',
    backgroundColor: 'white',
    padding: 10,
  },
  flexItemOnePerRow1: {
    flexBasis: '20%',
    padding: 3,
  },
  flexItemOnePerRow2: {
    flexBasis: '80%',
    padding: 3,
  },
  lexItemOnePerRow3: {
    flexBasis: '100%',
    padding: 5,
  },
  flexItemFourPerRow: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '25%',
    padding: 3,
    alignItems: 'center',
  },
  bigButton: {
    backgroundColor: '#0165d4',
    padding: 12,
    margin: 5,
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15
  }
});

const thousandFormatter = (num) => {
  if (num > 999) {
    return (num/1000).toFixed(1) + 'k';
  }
  else {
    return num;
  }
};

//const singleRepository = true;

const handlePress = () => {
  console.log('Github pressed')
}

const GitHubButton = () => {
  return (
    <View style={styles.lexItemOnePerRow3}>
      <Pressable onPress={handlePress} style={styles.bigButton}>
      <Text style={styles.buttonText}>Open in GitHub</Text>
      </Pressable>
    </View>
   
  )
}

const RepositoryItem = ({ item, singleRepository }) => {
    return (
      <View testID="repositoryItem" style={styles.flexContainer}>

        <View style={styles.flexItemOnePerRow1}>
        <RepositoryItemImage uri={item.ownerAvatarUrl}/>
        </View>

        <View style={styles.flexItemOnePerRow2}>
        <Text fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
        <Text color='textSecondary'>{item.description}</Text>
        <Text color='language' background='language'>{item.language}</Text>
        </View>

        <View style={styles.flexItemFourPerRow}>
        <Text fontWeight='bold'>{thousandFormatter(item.stargazersCount)}</Text>
        </View>
        
        <View style={styles.flexItemFourPerRow}>
        <Text fontWeight='bold'>{thousandFormatter(item.forksCount)}</Text>
        </View>

        <View style={styles.flexItemFourPerRow}>
        <Text fontWeight='bold'>{thousandFormatter(item.reviewCount)}</Text>
        </View>
        
        <View style={styles.flexItemFourPerRow}>
        <Text fontWeight='bold'>{thousandFormatter(item.ratingAverage)}</Text>
        </View>

        <View style={styles.flexItemFourPerRow}>
        <Text color='textSecondary'>Stars</Text>
        </View>
        
        <View style={styles.flexItemFourPerRow}>
        <Text color='textSecondary'>Forks</Text>
        </View>

        <View style={styles.flexItemFourPerRow}>
        <Text color='textSecondary'>Reviews</Text>
        </View>
        
        <View style={styles.flexItemFourPerRow}>
        <Text color='textSecondary'>Rating</Text>
        </View>

        {singleRepository && <GitHubButton/>}
  
      </View>
    );
  };
  
  export default RepositoryItem;