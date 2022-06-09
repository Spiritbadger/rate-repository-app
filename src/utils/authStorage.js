import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const rawToken = await AsyncStorage.getItem(
      `${this.namespace}:token`,
    );

    return rawToken ? JSON.parse(rawToken) : null;
  }

  async setAccessToken(accessToken) {
    const newToken = accessToken;

    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(newToken),
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;