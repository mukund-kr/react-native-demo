import axios from 'axios';
const baseURL = 'https://reqres.in';

export async function getUser() {
  try {
    const response = await axios.get(`${baseURL}/api/users/1`);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getDelayedResponse() {
  try {
    const response = await axios.get(`${baseURL}/api/users?delay=2`);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getUsers = async () => {
  const configObj = {
    url: `${baseURL}/api/users?page=1`,
    method: 'get'
  };
  const response = await axios.get(configObj.url);
  console.log(response.data);
  return response;
};

export const createUser = async () => {
  const body = {
    name: 'morpheus',
    job: 'leader'
  };
  const configObj = {
    url: `${baseURL}/api/users`,
    method: 'post',
    data: body
  };
  const response = await axios(configObj);
  console.log(`Status : ${response.status}`);
  console.log(response.data);
  return response;
};

export const updateUser = async () => {
  const body = {
    name: 'morp',
    job: 'leader'
  };
  const configObj = {
    url: `${baseURL}/api/users/2`,
    method: 'put',
    data: body
  };

  const response = await axios(configObj);
  console.log(`Status : ${response.status}`);
  console.log(response.data);
};

export const deleteUser = async () => {
  const configObj = {
    url: `${'baseURL'}/api/users/2`,
    method: 'delete'
  };
  const response = await axios(configObj);
  console.log(`Status: ${response.status}`);
  console.log(response.data);
  return response;
};
