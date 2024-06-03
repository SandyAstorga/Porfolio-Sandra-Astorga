/* eslint-disable react/prop-types */
import { ErrorMessage, useField } from "formik";

export const CustomTextArea = ({ ...props }) => {
    const [field] = useField(props);

    return (
        <div className="d-flex flex-column">
            <textarea {...field}  {...props} className="form-text-area form-input"/>
            <ErrorMessage name={props.name} component='span' className="alert-span" />
        </div>
    )
}