import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

  const useMe = () => {
    const { data, error, loading } = useQuery(GET_ME, {
      fetchPolicy: 'cache-and-network',
    });

    if(loading) {
      return { data }
    }

    if (error) {
      console.log(error)
    }
    
    const userInfo = data.me
    return { userInfo }
    
  };
  

export default useMe;