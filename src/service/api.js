const URL = 'https://5e7d0266a917d70016684219.mockapi.io/api/v1';

export async function getUsers(params) {
    const response = await fetch(`${URL}/users`);
    const users = await response.json();
    return users;
}

export async function getUserProfile(username) {
    const response = await fetch(`${URL}/users/${username}`);
    const data = await response.json();
    console.log(data);
    return data;
}

export async function getUserPosts(userid) {
    const response = await fetch(`${URL}/users/${userid}/posts`);
    const data = await response.json();
    console.log(data);
    return data;
}

export async function getUserStories(username) {
    const response = await fetch(`${URL}/users/${username}`);
    const data = await response.json();

    return data;
}

export async function getStories(params) {
    const response = await fetch(`${URL}/stories`);
    const data = await response.json();

    return data;
}