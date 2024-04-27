import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Name is too short")
        .required("Name is required"),
    }),
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-5">
        <input
          placeholder="Full Name"
          type="text"
          id="name"
          className="px-3 py-2 border border-gray-300 w-full rounded-lg"
          {...formik.getFieldProps("name")}
        />
        {formik.errors.name ? (
          <div className="mt-1 text-red-600">{formik.errors.name}</div>
        ) : null}
      </div>

      <button
        className="rounded-lg w-full px-4 py-2 bg-green-600 text-white disabled:bg-opacity-65"
        type="submit"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "Loading" : "Submit"}
      </button>
    </form>
  );
};

export default Form;