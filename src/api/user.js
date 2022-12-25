import APIService from '../service/apiConfig';

export default async function getUsers() {
    try {
        const users = await APIService.get('/users');
        console.log(users)
        return users
    } catch (error) {
        console.log("error message: " + error)
        return { error: true, error }
    }
}