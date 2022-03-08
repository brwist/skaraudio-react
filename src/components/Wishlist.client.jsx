import {useProduct} from '@shopify/hydrogen/client';
import {useWishlistContext} from './WishlistContext.client';

export default function WishListButton({className, children}) {
  const {isAlreadyAdded, toggleWishlist} = useWishlistContext();
  const product = useProduct();

  const clickHandler = () => {
    const added = isAlreadyAdded(product);
    const data = {
      type: added ? 'remove' : 'add',
      product,
    };
    toggleWishlist(data);
  };

  return (
    <button onClick={clickHandler} type="button" className={className}>
      {children}
    </button>
  );
}
