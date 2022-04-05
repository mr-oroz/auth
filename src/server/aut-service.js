import instance from "./service";

const Users = (state) => {
    return instance.post('email/register', state)
}
const login = (state) => {
    return instance.post('email/login', state)
}

const authService = {
    Users,
    login
}

export default authService;

