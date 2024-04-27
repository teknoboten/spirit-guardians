import Form from '@/components/form';
import Head from 'next/head';

const HomePage = () => {
  return (
    <main className="flex min-h-screen">
      <Head>
        <title>🌲 AWG Sign Up & Waiver 🌲</title>
      </Head>
      <div className="container max-w-[600px] mx-auto">
        <h1 className="mb-8 py-10 font-semibold text-3xl">
          Welcome to Arrow Wood Games!
        </h1>
        <Form />
      </div>
    </main>
  );
};

export default HomePage;
