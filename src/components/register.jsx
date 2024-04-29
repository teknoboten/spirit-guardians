import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Register = () => (
  <div className="mb-5 p-4 mx-auto bg-white rounded-lg">
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        pronouns: '',
        street: '',
        city: '',
        guardianName: '',
        dateSigned: '',
        photoConsent: true,
        initials: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium text-gray-700"
            >
              Birth date
            </label>
            <Field
              id="birthDate"
              name="birthDate"
              type="date"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="street"
              className="block text-sm font-medium text-gray-700"
            >
              Street
            </label>
            <Field
              id="street"
              name="street"
              placeholder="51234 Rhum & Eigg Drive"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div id="photoConsent-section" className="rounded-md py-2">
            <h3 className="text-l font-bold text-gray-700 mb-2">
              PHOTO & VIDEO AUTHORIZATION
            </h3>
            <p>
              I grant Arrow Wood Games personnel permission to take photographs,
              video and audio recordings of my child and authorize Arrow Wood
              Games to use recordings for the purpose of publicity, advertising,
              and promotion. (It's okay to say no, we understand!)
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
              I am aware that there are risks associated with the participation
              in Arrow Wood Games’ programs, including the risk of injury, and I
              consent to my child’s participation in full awareness of such
              risks. I acknowledge that it is my responsibility to advise the
              Arrow Wood Games Staff of any medical or other conditions which
              may affect my child’s participation in programs and have listed
              them below. I understand that I am responsible for immediately
              notifying staff of any changes to the information included in this
              document. In the event that my child requires medical attention, I
              consent to my child being transported to the nearest emergency
              centre, including by ambulance if necessary. I have read this form
              and understand and accept its terms.
            </p>
          </div>

          <div>
            <label
              htmlFor="parentName"
              className="block text-sm font-medium text-gray-700"
            >
              Parent/guardian name (please print)
            </label>
            <Field
              id="guardianName"
              name="guardianName"
              placeholder="Gardian Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
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
              type="date" // Specifying input type as date
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            className="mt-4 w-full px-4 py-2 font-bold text-white bg-burgundy rounded-lg hover:bg-burgundy-dark disabled:opacity-50"
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Register;
