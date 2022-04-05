import instance from "./service";
import Cookie from 'js-cookie';

const Users = (state) => {
    return instance.post('email/register', state)
}
const login = (state) => {
    console.log('auth service ', state)
    return instance.post('email/login', state)
        .then(data => {
            console.log(data)
            Cookie.set('token', data.data.token)
        }).catch(err => console.log(err))
}
const getUser = () => {
    return instance.get('me')
}

const authService = {
    Users,
    login,
    getUser
}

export default authService;

