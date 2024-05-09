import React, { useRef } from 'react';
import SignaturePad from 'react-signature-canvas';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router'; // Import useRouter for navigation

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  birthDate: Yup.date().required('Birth Date is required').nullable(),
  pronouns: Yup.string(),
  street: Yup.string().required('Street is required'),
  city: Yup.string().required('City is required'),
  guardianName: Yup.string().required('Guardian name is required'),
  dateSigned: Yup.date().required('Date signed is required').nullable(),
  photoConsent: Yup.string(),
  signature: Yup.string().required('Signature is required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  birthDate: '',
  pronouns: '',
  street: '',
  city: '',
  guardianName: '',
  dateSigned: '',
  photoConsent: '',
  signature: '',
};

const Register = () => {
  const sigPad = useRef(null);
  const router = useRouter(); // Use useRouter hook for navigation

  const clearSignature = () => {
    sigPad.current.clear();
  };

  return (
    <div className="mb-5 p-4 mx-auto bg-white rounded-lg">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          console.log('Submitting Form', values);
          actions.setSubmitting(true);
          try {
            const response = await fetch('/api/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });

            if (!response.ok) {
              throw new Error('Network response was not OK');
            }

            router.push('/thanks');
          } catch (error) {
            console.error('submission error:', error);
            alert('failed to submit form');
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <Form className="space-y-4">
            <div>
              <h3 className="text-l font-bold text-gray-700 mb-6">
                Participant Information
              </h3>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="Kristen"
                className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.firstName && formik.touched.firstName
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />

              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <Field
                id="lastName"
                name="lastName"
                placeholder="Applebees"
                className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.lastName && formik.touched.lastName
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                placeholder="kristin@arrowwoodgames.com"
                type="email"
                className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.email && formik.touched.email
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="birthDate"
                className="block text-sm font-medium text-gray-700"
              >
                Birth Date
              </label>
              <Field
                id="birthDate"
                name="birthDate"
                type="date"
                className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.birthDate && formik.touched.birthDate
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              <ErrorMessage
                name="birthDate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="pronouns"
                className="block text-sm font-medium text-gray-700"
              >
                Pronouns
              </label>
              <Field
                id="pronouns"
                name="pronouns"
                placeholder="(optional)"
                className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.pronouns && formik.touched.pronouns
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              <ErrorMessage
                name="pronouns"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <Field
                id="street"
                name="street"
                placeholder="51234 Rhum & Eigg Drive"
                className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.street && formik.touched.street
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              <ErrorMessage
                name="street"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <Field
                id="city"
                name="city"
                placeholder="Squamish, BC"
                className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.city && formik.touched.city
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div id="photoConsent-section" className="rounded-md py-2">
              <h3 className="text-l font-bold text-gray-700 mb-2">
                PHOTO & VIDEO AUTHORIZATION
              </h3>
              <p>
                I grant Arrow Wood Games personnel permission to take
                photographs, video and audio recordings of my child and
                authorize Arrow Wood Games to use recordings for the purpose of
                publicity, advertising, and promotion. (It's okay to say no, we
                understand!)
              </p>

              <div className="flex mt-1 items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <Field
                    type="radio"
                    name="photoConsent"
                    value="yes"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Field
                    type="radio"
                    name="photoConsent"
                    value="no"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-l font-bold text-gray-700 mb-2">
                ARROW WOOD GAMES WAIVER, RELEASE & INDEMNITY
              </h3>
              <p>
                I am aware that there are risks associated with the
                participation in Arrow Wood Games’ programs, including the risk
                of injury, and I consent to my child’s participation in full
                awareness of such risks. I acknowledge that it is my
                responsibility to advise the Arrow Wood Games Staff of any
                medical or other conditions which may affect my child’s
                participation in programs and have listed them below. I
                understand that I am responsible for immediately notifying staff
                of any changes to the information included in this document. In
                the event that my child requires medical attention, I consent to
                my child being transported to the nearest emergency centre,
                including by ambulance if necessary. I have read this form and
                understand and accept its terms.
              </p>
            </div>

            <div>
              <label
                htmlFor="guardianName"
                className="block text-sm font-medium text-gray-700"
              >
                Parent / Guardian Name
              </label>
              <Field
                id="guardianName"
                name="guardianName"
                placeholder="Gardian Name"
                className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.guardianName && formik.touched.guardianName
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              <ErrorMessage
                name="guardianName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <div>
                <label
                  htmlFor="signature"
                  className="block text-sm font-medium text-gray-700"
                >
                  Parent / Guardian Signature
                </label>
                <SignaturePad
                  ref={sigPad}
                  penColor="black"
                  canvasProps={{
                    className: `signature-canvas mt-1 block w-full px-3 py-2 border ${formik.errors.signature && formik.touched.signature ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`,
                    width: 500,
                    height: 200,
                    id: 'signature',
                    name: 'signature',
                  }}
                  onEnd={() => {
                    if (sigPad.current && !sigPad.current.isEmpty()) {
                      const signatureImage = sigPad.current
                        .getTrimmedCanvas()
                        .toDataURL('image/png');
                      formik.setFieldValue('signature', signatureImage);
                    }
                  }}
                />
                <button
                  type="button"
                  className="text-xs px-3 mt-1 py-1 rounded border"
                  onClick={clearSignature}
                >
                  Clear Signature
                </button>
                {formik.errors.signature && formik.touched.signature && (
                  <div>{formik.errors.signature}</div>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="dateSigned"
                className="block text-sm font-medium text-gray-700"
              >
                Date Signed
              </label>
              <Field
                id="dateSigned"
                name="dateSigned"
                type="date"
                className={`mt-1 block w-full px-3 py-2 border ${
                  formik.errors.dateSigned && formik.touched.dateSigned
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              <ErrorMessage
                name="dateSigned"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              className="mt-4 w-full px-4 py-2 font-bold text-white bg-teal rounded-lg hover:bg-burgundy-dark disabled:opacity-50"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;

// import React, { useRef } from 'react';
// import SignaturePad from 'react-signature-canvas';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required('First Name is required'),
//   lastName: Yup.string().required('Last Name is required'),
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Email is required'),
//   birthDate: Yup.date().required('Birth Date is required').nullable(),
//   pronouns: Yup.string(),
//   street: Yup.string().required('Street is required'),
//   city: Yup.string().required('City is required'),
//   guardianName: Yup.string().required('Guardian name is required'),
//   dateSigned: Yup.date().required('Date signed is required').nullable(),
//   photoConsent: Yup.string(),
//   signature: Yup.string().required('Signature is required'),
// });

// const initialValues = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   birthDate: '',
//   pronouns: '',
//   street: '',
//   city: '',
//   guardianName: '',
//   dateSigned: '',
//   photoConsent: '',
//   signature: '',
// };

// const Register = () => {
//   const sigPad = useRef(null);

//   const clearSignature = () => {
//     sigPad.current.clear();
//   };

//   return (
//     <div className="mb-5 p-4 mx-auto bg-white rounded-lg">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={(values, actions) => {
//           console.log('Submitting Form', values);

//           fetch('/api/signup', {
//             method: 'POST',
//             body: JSON.stringify(values),
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           })
//             .then((response) => {
//               // Ensure the response is OK, then return the blob
//               if (!response.ok) throw new Error('Network Sadness!');
//               return response.blob();
//               // throw new Error('Network response was not ok.');
//             })
//             .then((blob) => {
//               // Create a URL for the blob object
//               const url = window.URL.createObjectURL(blob);
//               const a = document.createElement('a');
//               a.style.display = 'none';
//               a.href = url;
//               a.download = 'form-submission.pdf'; // Name the file
//               document.body.appendChild(a);
//               a.click();
//               window.URL.revokeObjectURL(url);
//               alert('PDF downloaded!');
//             })
//             .catch((error) => {
//               console.error('Submission Error:', error);
//               alert('Failed to download PDF.');
//             });

//           actions.setSubmitting(false);
//         }}
//       >
//         {(formik) => (
//           <Form className="space-y-4">
//             <div>
//               <h3 className="text-l font-bold text-gray-700 mb-6">
//                 Participant Information
//               </h3>
//               <label
//                 htmlFor="firstName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 First Name
//               </label>
//               <Field
//                 id="firstName"
//                 name="firstName"
//                 placeholder="Kristen"
//                 className={`mt-1 block w-full px-3 py-2 border ${
//                   formik.errors.firstName && formik.touched.firstName
//                     ? 'border-red-500'
//                     : 'border-gray-300'
//                 } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
//               />

//               <ErrorMessage
//                 name="firstName"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="lastName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Last Name
//               </label>
//               <Field
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Applebees"
//                 className={`mt-1 block w-full px-3 py-2 border ${
//                   formik.errors.lastName && formik.touched.lastName
//                     ? 'border-red-500'
//                     : 'border-gray-300'
//                 } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
//               />
//               <ErrorMessage
//                 name="lastName"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <Field
//                 id="email"
//                 name="email"
//                 placeholder="kristin@arrowwoodgames.com"
//                 type="email"
//                 className={`mt-1 block w-full px-3 py-2 border ${
//                   formik.errors.email && formik.touched.email
//                     ? 'border-red-500'
//                     : 'border-gray-300'
//                 } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="birthDate"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Birth Date
//               </label>
//               <Field
//                 id="birthDate"
//                 name="birthDate"
//                 type="date"
//                 className={`mt-1 block w-full px-3 py-2 border ${
//                   formik.errors.birthDate && formik.touched.birthDate
//                     ? 'border-red-500'
//                     : 'border-gray-300'
//                 } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
//               />
//               <ErrorMessage
//                 name="birthDate"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="pronouns"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Pronouns
//               </label>
//               <Field
//                 id="pronouns"
//                 name="pronouns"
//                 placeholder="(optional)"
//                 className={`mt-1 block w-full px-3 py-2 border ${
//                   formik.errors.pronouns && formik.touched.pronouns
//                     ? 'border-red-500'
//                     : 'border-gray-300'
//                 } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
//               />
//               <ErrorMessage
//                 name="pronouns"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="street"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Address
//               </label>
//               <Field
//                 id="street"
//                 name="street"
//                 placeholder="51234 Rhum & Eigg Drive"
//                 className={`mt-1 block w-full px-3 py-2 border ${
//                   formik.errors.street && formik.touched.street
//                     ? 'border-red-500'
//                     : 'border-gray-300'
//                 } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
//               />
//               <ErrorMessage
//                 name="street"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="city"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 City
//               </label>
//               <Field
//                 id="city"
//                 name="city"
//                 placeholder="Squamish, BC"
//                 className={`mt-1 block w-full px-3 py-2 border ${
//                   formik.errors.city && formik.touched.city
//                     ? 'border-red-500'
//                     : 'border-gray-300'
//                 } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
//               />
//               <ErrorMessage
//                 name="city"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <div id="photoConsent-section" className="rounded-md py-2">
//               <h3 className="text-l font-bold text-gray-700 mb-2">
//                 PHOTO & VIDEO AUTHORIZATION
//               </h3>
//               <p>
//                 I grant Arrow Wood Games personnel permission to take
//                 photographs, video and audio recordings of my child and
//                 authorize Arrow Wood Games to use recordings for the purpose of
//                 publicity, advertising, and promotion. (It's okay to say no, we
//                 understand!)
//               </p>

//               <div className="flex mt-1 items-center space-x-6">
//                 <label className="flex items-center space-x-2">
//                   <Field
//                     type="radio"
//                     name="photoConsent"
//                     value="yes"
//                     className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//                   />
//                   <span>Yes</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <Field
//                     type="radio"
//                     name="photoConsent"
//                     value="no"
//                     className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//                   />
//                   <span>No</span>
//                 </label>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-l font-bold text-gray-700 mb-2">
//                 ARROW WOOD GAMES WAIVER, RELEASE & INDEMNITY
//               </h3>
//               <p>
//                 I am aware that there are risks associated with the
//                 participation in Arrow Wood Games’ programs, including the risk
//                 of injury, and I consent to my child’s participation in full
//                 awareness of such risks. I acknowledge that it is my
//                 responsibility to advise the Arrow Wood Games Staff of any
//                 medical or other conditions which may affect my child’s
//                 participation in programs and have listed them below. I
//                 understand that I am responsible for immediately notifying staff
//                 of any changes to the information included in this document. In
//                 the event that my child requires medical attention, I consent to
//                 my child being transported to the nearest emergency centre,
//                 including by ambulance if necessary. I have read this form and
//                 understand and accept its terms.
//               </p>
//             </div>

//             <div>
//               <label
//                 htmlFor="guardianName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Parent / Guardian Name
//               </label>
//               <Field
//                 id="guardianName"
//                 name="guardianName"
//                 placeholder="Gardian Name"
//                 className={`mt-1 block w-full px-3 py-2 border ${
//                   formik.errors.guardianName && formik.touched.guardianName
//                     ? 'border-red-500'
//                     : 'border-gray-300'
//                 } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
//               />
//               <ErrorMessage
//                 name="guardianName"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <div>
//               <div>
//                 <label
//                   htmlFor="signature"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Parent / Guardian Signature
//                 </label>
//                 <SignaturePad
//                   ref={sigPad}
//                   penColor="black"
//                   canvasProps={{
//                     className: `signature-canvas mt-1 block w-full px-3 py-2 border ${formik.errors.signature && formik.touched.signature ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`,
//                     width: 500,
//                     height: 200,
//                     id: 'signature',
//                     name: 'signature',
//                   }}
//                   onEnd={() => {
//                     if (sigPad.current && !sigPad.current.isEmpty()) {
//                       const signatureImage = sigPad.current
//                         .getTrimmedCanvas()
//                         .toDataURL('image/png');
//                       formik.setFieldValue('signature', signatureImage);
//                     }
//                   }}
//                 />
//                 <button
//                   type="button"
//                   className="text-xs px-3 mt-1 py-1 rounded border"
//                   onClick={clearSignature}
//                 >
//                   Clear Signature
//                 </button>
//                 {formik.errors.signature && formik.touched.signature && (
//                   <div>{formik.errors.signature}</div>
//                 )}
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="dateSigned"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Date Signed
//               </label>
//               <Field
//                 id="dateSigned"
//                 name="dateSigned"
//                 type="date"
//                 className={`mt-1 block w-full px-3 py-2 border ${
//                   formik.errors.dateSigned && formik.touched.dateSigned
//                     ? 'border-red-500'
//                     : 'border-gray-300'
//                 } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
//               />
//               <ErrorMessage
//                 name="dateSigned"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <button
//               className="mt-4 w-full px-4 py-2 font-bold text-white bg-teal rounded-lg hover:bg-burgundy-dark disabled:opacity-50"
//               type="submit"
//             >
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Register;
