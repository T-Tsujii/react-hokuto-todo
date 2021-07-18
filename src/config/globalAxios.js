import axios from 'axios';

const globalAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
  responseType: 'json',
});

const errorHandling = (error) => {
  if (error.response) {
    alert(`${error.response.status}: ${error.response.statusText}`);
  } else {
    alert('通信に失敗しました。インターネットの接続をご確認下さい。');
  }
};

export { globalAxios, errorHandling };
