/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Formik, Form } from "formik";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { CustomInput } from "../../Formik/CustomInput.jsx";
import { formValidations } from "../../Validations/formValidations.js";
import { CustomTextArea } from "../../Formik/CustomTextArea.jsx";

export const FormMessage = () => {

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const handleSubmit = async (values, actions) => {
        console.log(values);

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                },
                import.meta.env.VITE_EMAILJS_USER_ID
            );
            console.log(result)

            Swal.fire("Mensaje Enviado!", "Gracias", "success");
            actions.resetForm();

        } catch (error) {
            console.error('Error al enviar el correo:', error);
            Swal.fire("Error", "No se pudo enviar el mensaje. Por favor, intenta nuevamente más tarde.", "error");
        }
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={formValidations}
            >
                {(formik) => (
                    <Form>
                        <div className='field mb-3'>
                            <CustomInput
                                name='name'
                                placeholder='NOMBRE'
                            />
                        </div>
                        <div className='field mb-3'>
                            <CustomInput
                                name='email'
                                placeholder='EMAIL: name@example.com'
                            />
                        </div>
                        <div className='field mb-3'>
                            <CustomTextArea
                                name='message'
                                placeholder='MENSAJE'
                            />
                        </div>
                        <div className='field'>
                            <button type='submit' className="submit">Enviar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}