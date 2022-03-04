import Layout from '../components/Layout.server.jsx';

export default function Page() {
  return (
    <Layout>
      <div className="relative mb-12">
        <div className="h-screen flex justify-center">
          <div className="py-6 px-8 w-80 h-80 mt-20 bg-white rounded shadow-xl">
            <form action="">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-bold"
                >
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="@email"
                  className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-800 font-bold">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                />
                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600"
                  >
                    Forget Password
                  </a>
                </div>
              </div>

              <butt className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
                Login
              </butt>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
