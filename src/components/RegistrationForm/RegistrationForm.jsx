import { Formik, Form, Field, ErrorMessage } from 'formik';

import './RegistrationForm.css';

function RegistrationForm({ hideModal }) {
    return (
        <div className="registration">
            <h3 className="registration__title">Register</h3>
            <Formik
                initialValues={{ email: '', password: '', secondname: '', firstname: '', thirdname: '', birthdate: '' }}
                validate={values => {
                    const errors = {};
                    const requredFieldsNames = ['email', 'password', 'secondname', 'firstname', 'thirdname', 'birthdate'];
                    if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if (values.password.length < 6) {
                        errors.password = 'Password should be 6 or more characters';
                    }

                    requredFieldsNames.forEach(fieldName => {
                        if (!values[fieldName]) {
                            errors[fieldName] = 'Required';
                        }
                    });

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        hideModal();
                    }, 1000);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="registration__form">
                        <Field type="text" name="secondname" placeholder="secondname" className="registration__field" />
                        <ErrorMessage name="secondname" component="div" className="registration__error-message" />
                        <Field type="text" name="firstname" placeholder="firstname" className="registration__field" />
                        <ErrorMessage name="firstname" component="div" className="registration__error-message" />
                        <Field type="text" name="thirdname" placeholder="thirdname" className="registration__field" />
                        <ErrorMessage name="thirdname" component="div" className="registration__error-message" />
                        <Field type="date" name="birthdate" className="registration__field" />
                        <ErrorMessage name="birthdate" component="div" className="registration__error-message" />
                        <Field type="email" name="email" placeholder="email" className="registration__field" />
                        <ErrorMessage name="email" component="div" className="registration__error-message" />
                        <Field type="password" name="password" placeholder="password" className="registration__field" />
                        <ErrorMessage name="password" component="div" className="registration__error-message" />
                        <button type="submit" disabled={isSubmitting} className="registration__submit-btn">
                            Submit
                        </button>
                        {isSubmitting && <div>Отправка данных...</div>}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegistrationForm;