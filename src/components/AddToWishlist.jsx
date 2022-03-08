import React from 'react';

export default function AddToWishlist(props) {
  const {setShowModal} = props;
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-md">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="relative p-8 flex-auto text-center">
              <button
                className="absolute top-2 right-3 rounded-full bg-slate-200 h-6 w-6"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <h3 className="text-3xl font-semibold">SAVE TO WISHLIST</h3>
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Login or create account to save this item to your wishlist.
                We'll drop you back here after you have entered your details.
              </p>
              <div className="flex flex-col w-60 mx-auto">
                <button
                  className="text-black bg-gray-200 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-2 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  LOGIN
                </button>
                <button
                  className="text-white bg-gray-900 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
