import axios from 'axios';

const URL = 'https://bodymass-challange.herokuapp.com'

function buildPoint(str) {
  return `${URL}/${str}`;
}

function getToken() {
  return localStorage.getItem('token') || '';
}

function header() {
  return { headers: { 'Authorization': getToken() }  }
}

export async function authenticate(data) {
  try {
    return await axios.post(buildPoint('authenticate'), data)
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(data) {
  try {
    return await axios.post(buildPoint('users'), data)
  } catch (error) {
    console.error(error);
  }
}

export async function getUser() {
  try {
    return await axios.get(buildPoint('users'), header())
  } catch (error) {
    console.error(error);
  }
}
