import {instance} from './api';

export const authenticateLogin = async (user) => {
    try {
        console.log(user);
        return await instance.post("/login", {...user})
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await instance.post("/signup", user)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}

