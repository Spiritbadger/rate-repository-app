import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories {
  repositories {
    totalCount
    edges {
      node {
        id
        ownerName
        name
        ownerAvatarUrl
        fullName
        language
        description
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
      }
    }
  }
}
`;

export const GET_ME = gql`
{
  me {
    id
    username
  }
}
`;