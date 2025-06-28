import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>John Doe - Portfolio</title>
        <meta name="description" content="Personal portfolio of John Doe" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <header className="bg-blue-600 text-white py-6">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-lg">Web Developer</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 flex-grow">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            I'm Pranav kadam, a web developer passionate about creating user-friendly websites using modern tools like Next.js and Tailwind CSS.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-medium">Project One</h3>
              <p className="text-gray-600">An e-commerce site built with Next.js.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-medium">Project Two</h3>
              <p className="text-gray-600">A blog platform with CMS integration.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">Reach out via email or social media.</p>
          <div className="flex space-x-4">
            <a href="mailto:john.doe@example.com" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Email Me
            </a>
            <a href="https://github.com" className="text-blue-500 hover:underline">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2025 John Doe</p>
      </footer>
    </div>
  );
}
