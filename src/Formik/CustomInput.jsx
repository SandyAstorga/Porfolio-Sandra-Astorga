/* eslint-disable react/prop-types */
import { ErrorMessage, useField } from "formik";
import { InputText } from 'primereact/inputtext';

export const CustomInput = ({ ...props }) => {
    const [field] = useField(props);

    return (
        <div className="d-flex flex-column">
            <InputText {...field}  {...props} className="form-input"/>
            <ErrorMessage name={props.name} component='span' className="alert-span" />
        </div>
    )
}