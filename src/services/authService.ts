import axios from 'axios';
import qs from 'qs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encode as btoa } from 'base-64';
import Navigator from '../navigation/RootNavigator'

const TOKEN_KEY = 'storepay_token';

export async function loginStorepay(username: string, password: string) {
  const clientId = 'public';
  const clientSecret = 'public_secret';
  try {
    const auth = btoa(`${clientId}:${clientSecret}`);
    const res = await axios.post(
      'https://api.storepay.global/oauth/token',
      qs.stringify({
        grant_type: 'password',
        scope: 'public',
        username,
        password,
        device_name: 'Android',
        device_id: 'abc-123',
      }),
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    const token = res.data.access_token;
    console.log(token, 'token');
    await AsyncStorage.setItem(TOKEN_KEY, token);
    return token;
  } catch (error: any) {
    console.error('[Login] Axios error:', error);
    throw new Error('Сүлжээний алдаа. Дахин оролдоно уу.');
  }
}

export async function getToken() {
  return await AsyncStorage.getItem(TOKEN_KEY);
}

export async function logout() {
  await AsyncStorage.removeItem(TOKEN_KEY);
  Navigator.navigate('Login');
}
