import instance from "./service";

const Users = (state) => {
    return instance.post('email/register', state).then(data => console.log(data))
}


const authService = {
    Users,
}

export default authService;

