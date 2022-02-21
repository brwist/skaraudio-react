import {Link} from '@shopify/hydrogen/client';
import {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/solid';
import {RenderDropDownMenus} from './header/render-menu.js';

export default function Navigation({collections, menu}) {
  // console.dir(collections, {depth: null});
  // const mid = Math.round(collections.length / 2);
  // const menu1 = collections.slice(0, mid);
  // const menu2 = collections.slice(mid);
  console.log(menu);
  const menu1 = menu.left.categories;
  const menu2 = menu.right.categories;

  return (
    <div className={'hidden lg:flex flex-row justify-between'}>
      <RenderDropDownMenus collections={menu1} />

      <Link
        className={
          'font-black block uppercase text-3xl tracking-widest mx-auto' +
          'mx-auto '
        }
        to="/"
      >
        {/*{storeName}*/}
        <img
          className={'block transition-all ease-in-out duration-500'}
          src={'/image/site-logo.webp'}
          alt={'Site Logo'}
          style={{width: 205, height: 63}}
        />
      </Link>

      <RenderDropDownMenus collections={menu2} alignRight={true} />
    </div>
  );
}

/**
 * A client component that defines the navigation for a web storefront
 */
export function _Navigation({collections}) {
  return (
    <nav className="hidden lg:block text-center">
      <ul className="md:flex items-center justify-center">
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link
              to={`/collections/${collection.handle}`}
              className="block p-4 hover:opacity-80"
            >
              {collection.title}
            </Link>
            <ChevronDownIcon />
          </li>
        ))}
      </ul>
    </nav>
  );
}
