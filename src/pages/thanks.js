import Head from 'next/head';

const ThankYou = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>🌲 Thank you! 🌲</title>
      </Head>
      <div className="container max-w-2xl mx-auto px-4 py-10">
        <h1 className="mb-8 text-3xl font-semibold text-center text-gray-800">
          Thank you for resigstering!
        </h1>
      </div>
    </main>
  );
};

export default ThankYou;
