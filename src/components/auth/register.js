import React from 'react';
import {useForm} from "react-hook-form";
import authService from "../../server/aut-service";
import {toast, ToastContainer} from 'react-toastify';

const Register = () => {
    const {register, formState: {errors}, reset, handleSubmit} = useForm();

    const onSubmit = async (state) => {
        console.log('state', state)
        const data = {
            email: state.email,
            password: state.password,
            firstName: state.firstName,
            lastName: state.lastName
        }
      await authService.Users(data)
            .then(data => {
                reset()
                console.log(data)
                toast.success('успешно')
            })
            .catch(err => {
                toast.warning('такой емайл есть!')
            })
    }

    return (
        <form
            className={'register'}
            onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("email", {required: true})}
                placeholder={'email'}
                type="email"/>
            {errors.email && <span>{'не пустой'}</span>}
            <input
                {...register('password',
                    {
                        required: 'не пустой',
                        minLength: {
                            value: 8,
                            message: 'minimum 8 symvols'
                        }
                    }
                )}
                placeholder={'password'}
                type="password"/>
            {errors.password && <span>{errors.password.message}</span>}
            <input
                {...register('firstName',
                    {required: 'не пустой'}
                )}
                placeholder={'firstName'}
                type="text"/>
            {errors.firstName && <span>{errors.firstName}</span>}
            <input
                {...register('lastName',
                    {required: 'не пустой'}
                )}
                placeholder={'lastName'}
                type="text"/>
            {errors.lastName && <span>{errors.lastName}</span>}
            <button type={'submit'}>register</button>
            <ToastContainer/>
        </form>
    );
};

export default Register;