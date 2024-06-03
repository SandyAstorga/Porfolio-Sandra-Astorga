import * as Yup from 'yup';

export const formValidations = Yup.object().shape({
    name: Yup.string()
        .required('El nombre es requerido'),

    email: Yup.string()
        .email('Correo invalido')
        .required('El correo es requerido'),

    message: Yup.string()
        .required('El mensaje es requerido')
});
