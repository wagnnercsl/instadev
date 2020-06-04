const URL = 'https://5e7d0266a917d70016684219.mockapi.io/api/v1/';

export async function getUsers(params) {
    const response = await fetch(`${URL}/users`);
    const users = await response.json();
    return users;
}