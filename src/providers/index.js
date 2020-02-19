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

function takeError(error) {
  // Request made and server responded
  if(error.response) return error.response
  // Request made and response wasn't received
  else if(error.request) return error.request
  // Something happened and triggered an Error
  else return error.message
}

export async function authenticate(data, errorFunction) {
  try {
    return await axios.post(buildPoint('authenticate'), data)
  } catch (error) {
    errorFunction(takeError(error));
  }
}

export async function createUser(data, errorFunction) {
  try {
    return await axios.post(buildPoint('users'), data)
  } catch (error) {
    console.log(error.response);
    errorFunction(takeError(error));
  }
}

export async function getUser() {
  try {
    return await axios.get(buildPoint('users'), header())
  } catch (error) {
    console.error(error);
  }
}

export async function getCategory(id) {
  try {
    return await axios.get(buildPoint(`users/${id}/category`), header());
  } catch (error) {
    console.error(error);
  }
}

export async function updateUser(id, data, errorFunction) {
  try {
    return await axios.put(buildPoint(`users/${id}`), data, header());
  } catch (error) {
    console.log(error);
  }
}
