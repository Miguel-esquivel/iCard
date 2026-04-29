import React from 'react';
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from '../../../api/user';
import  "./LoginForm.scss";

export function LoginForm()   {   
       const formik = useFormik({
          initialValues: intialValues(),  
          validationSchema: Yup.object(validationSchema()),
          onSubmit: async (formValue) =>{
            try {              
                 const response = await loginApi(formValue);
                 const { access } = response;
                 console.log(access);
            } catch (error) {
              console.log("Error en el login");
              console.error(error);
          }   
        },
        });

  return (
    <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
          <Form.Input 
          name="email" 
          placeholder="Correo electrónico" 
          autoComplete="email"
          value={formik.values.email} 
          onChange={formik.handleChange} 
          error={formik.touched.email && formik.errors.email? { content: formik.errors.email }: null}
          />
          <Form.Input 
          name="password" 
          placeholder="Contraseña" 
          autoComplete="current-password"
          type="password"
          value={formik.values.password} 
          onChange={formik.handleChange} 
          error={formik.touched.password && formik.errors.password? { content: formik.errors.password }: null}
          />
          <Button type="submit" content="Iniciar sesión" primary fluid/>
    </Form>
  );
}

function intialValues() {
    return {
        email: "",
        password: "",
    };
  }

  function validationSchema() {
    return {
        email: Yup.string().email("Correo inválido").required("El correo es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria"),
    };
  }