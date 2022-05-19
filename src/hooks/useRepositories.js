//import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
//import Constants from 'expo-constants';
import { GET_REPOSITORIES } from '../graphql/queries';

//Fetch API implementation
/*
const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    // Replace the IP address part with your own IP address!
    const response = await fetch(Constants.manifest.extra.fetchApiUri);
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};
*/

// GraphQL implementation
  const useRepositories = () => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
    });

    if(loading) {
      return { data }
    }

    if (error) {
      console.log(error)
    }
    
    const repositories = data.repositories
    return { repositories }
    
  };
  




export default useRepositories;