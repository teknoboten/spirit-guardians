// import { useFormik } from 'formik';
// import * as Yup from 'yup';

import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Register = () => (
  <div className="mb-5">
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formik) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button
            className="rounded-lg w-full px-4 py-2 bg-burgundy text-white disabled:bg-opacity-65"
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

// const Register = () => (
//   <div>
//     <h1>Sign Up</h1>
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//       }}
//       onSubmit={async (values) => {
//         await new Promise((r) => setTimeout(r, 500));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       <Form>
//         <label htmlFor="firstName">First Name</label>
//         <Field id="firstName" name="firstName" placeholder="Jane" />

//         <label htmlFor="lastName">Last Name</label>
//         <Field id="lastName" name="lastName" placeholder="Doe" />

//         <label htmlFor="email">Email</label>
//         <Field
//           id="email"
//           name="email"
//           placeholder="jane@acme.com"
//           type="email"
//         />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   </div>
// );

// const Register = () => {
//   const formik = useFormik({
//     initialValues: {},
//     validationSchema: Yup.object().shape({
//       name: Yup.string()
//         .min(2, 'Name is too short')
//         .required('Name is required'),
//     }),
//     onSubmit: async (values) => {
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div className="mb-5">
//         <h2 className="py-8 font-semibold text-2xl">Participant Information</h2>
//         <input
//           placeholder="Full Name"
//           type="text"
//           id="name"
//           className="px-3 py-2 border border-gray-300 w-full rounded-lg"
//           {...formik.getFieldProps('name')}
//         />
//         {/* {formik.errors.name ? (
//           <div className="mt-1 text-red-600">{formik.errors.name}</div>
//         ) : null} */}
//       </div>

//       <button
//         className="rounded-lg w-full px-4 py-2 bg-green-600 text-white disabled:bg-opacity-65"
//         type="submit"
//         disabled={formik.isSubmitting}
//       >
//         {formik.isSubmitting ? 'Loading' : 'Submit'}
//       </button>
//     </form>
//   );
// };

export default Register;
