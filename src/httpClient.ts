import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://sy17pmj3tk.execute-api.us-east-2.amazonaws.com',
  timeout: 10000
});
