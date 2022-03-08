import {createContext, useContext} from 'react';

const WishlistContext = createContext();

export default WishlistContext;

export function useWishlistContext() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('No wishlist context found');
  }
  return context;
}
