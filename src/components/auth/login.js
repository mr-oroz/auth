import React from 'react';
import {useForm} from "react-hook-form";
import authService from "../../server/aut-service";

const Login = (props) => {
    const {handleSubmit, register, formState: {errors}, reset} = useForm();

    const onSubmit = async (state) => {
        const data = {
            email: state.email,
            password: state.password
        }
        await authService.login(data).then(data => {
            props.login()
            reset()
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'login'}>
            <input
                {...register('email',
                    {required: true})}
                type="email"/>
            {errors.email && <span>not symbols</span>}
            <input
                {...register('password', {
                    required: true,
                    minLength: {
                        value: 8,
                        message: 'min 8 symbols'
                    }
                })}
                type="password"/>
            {errors.password && <span>{errors.password.message}</span>}
            <input type="submit"/>
        </form>
    );
};

export default Login;