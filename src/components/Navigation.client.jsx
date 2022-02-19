import {Link} from '@shopify/hydrogen/client';
import {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation({collections}) {
  console.log(collections);
  const mid = Math.round(collections.length / 2);
  const menu1 = collections.slice(0, mid);
  const menu2 = collections.slice(mid);

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

function RenderDropDownMenus({collections, alignRight}) {
  return (
    <>
      {collections.map((collection) => (
        <Menu
          as="div"
          className="relative inline-block text-left"
          key={collection.id}
        >
          <div>
            <Menu.Button
              className={
                'inline-flex justify-center w-full px-4 py-2 ' +
                'text-sm font-medium text-white focus:outline-none '
              }
            >
              {collection.title}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={
                (alignRight
                  ? 'origin-top-right right-0 '
                  : 'origin-top-left left-0 ') +
                ' absolute mt-2 w-56 rounded-md' +
                ' shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
              }
              style={{backgroundColor: 'rgba(27, 31, 35, 0.9)'}}
            >
              <div className="py-1">
                {collection.products.edges.map((product) => (
                  <Menu.Item key={product.node.id}>
                    {({active}) => (
                      <Link to={`/products/${product.node.handle}`}>
                        className=
                        {classNames(
                          active ? 'text-white' : 'text-gray-300',
                          'block px-4 py-2 text-sm',
                        )}
                        >{product.node.title}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ))}
    </>
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
