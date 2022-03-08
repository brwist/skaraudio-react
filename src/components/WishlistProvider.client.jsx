import {ProductProvider, ProductTitle} from '@shopify/hydrogen';
import {useCallback, useEffect, useState} from 'react';
import WishlistContext from './WishlistContext.client';

function WishlistProvider({children}) {
  const [items, setItems] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    const itemsFromStorage = localStorage.getItem('skaraudio/wishlist');
    if (!itemsFromStorage) return;
    const parsedItem = JSON.parse(itemsFromStorage);
    setItems([...parsedItem]);
  }, []);

  const toggleWishlist = (data) => {
    if (!data) return;
    setData(data);
    const {type, product} = data;
    if (type === 'remove') {
      const newItemsArr = items.filter((it) => it.id !== product.id);
      setItems(newItemsArr);
    } else {
      if (items.some((it) => it.id == product.id)) return;
      setItems([...items, product]);
    }
  };

  useEffect(() => {
    if (items.length) {
      localStorage.setItem('skaraudio/wishlist', JSON.stringify(items));
    }
  }, [items]);

  const isAlreadyAdded = (product) => {
    return items.some((itm) => itm.id == product.id);
  };

  const values = {
    items,
    isAlreadyAdded,
    toggleWishlist,
  };

  return (
    <>
      <WishlistContext.Provider value={values}>
        {children}
        {data && (
          <WishlistPopup
            data={data}
            onClose={() => {
              setData(null);
            }}
          />
        )}
      </WishlistContext.Provider>
    </>
  );
}

export default WishlistProvider;

const WishlistPopup = ({data, onClose}) => {
  const {type, product} = data;
  const handleClose = useCallback(onClose, []);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-teal-lightest font-sans fixed top-0 left-0">
      <div className="bg-white opacity-40 absolute w-full h-full top-0 left-0"></div>
      <div className="h-screen w-full absolute flex items-center justify-center bg-modal">
        <div className="bg-white rounded shadow p-8 m-4 max-w-xs max-h-full text-center relative">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute top-1 right-1"
            onClick={handleClose}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mb-4">
            <h1>Item {type == 'remove' ? 'Removed' : 'Added'}</h1>
          </div>
          <div className="mb-4">
            <ProductProvider product={product}>
              <h1>
                <ProductTitle />
              </h1>
            </ProductProvider>
          </div>
          {/* <div className="flex justify-center">
            <button className="flex-no-shrink text-white py-2 px-4 rounded bg-teal hover:bg-teal-dark">
              Let's Go
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
