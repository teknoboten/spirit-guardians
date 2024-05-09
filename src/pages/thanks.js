import Head from 'next/head';

const Thanks = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>🌲 Thank You for Registering! 🌲</title>
      </Head>
      <div className="container max-w-2xl mx-auto px-4 py-10 text-center ">
        <h1 className="mb-8 text-3xl font-semibold text-center text-gray-800">
          Thanks for Registering!
        </h1>

        <p className="mb-8 text-gray-700">
          We are so glad you will be joining us on our quest.
        </p>
      </div>
    </main>
  );
};

export default Thanks;
