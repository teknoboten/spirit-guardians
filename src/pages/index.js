// import Form from '@/components/form';
import Register from '@/components/register';
import Head from 'next/head';

const HomePage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>🌲 AWG Sign Up & Waiver 🌲</title>
      </Head>
      <div className="container max-w-2xl mx-auto px-4 py-10">
        <h1 className="mb-8 text-3xl font-semibold text-center text-gray-800">
          Welcome to Arrow Wood Games!
        </h1>

        <p className="mb-8 text-gray-700">
          Please fill this out and return to us as soon as you're able so that
          we can best plan to meet your child’s needs. We need one form for each
          child in our programs.
        </p>

        <p className="mb-8 font-bold">
          The form must be filled and returned before the first day of the
          program.
        </p>

        <Register />
      </div>
    </main>
  );
};

export default HomePage;
