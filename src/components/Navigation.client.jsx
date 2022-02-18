import {Link} from '@shopify/hydrogen/client';
import { Menu, Transition } from '@headlessui/react'
import {NavDropdown, Container, Col, Dropdown} from 'react-bootstrap';

function ChevronDownIcon() {
  return (
    <svg
      className="-mr-1 ml-2 h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

export default function Navigation({collections}) {
  // console.log(collections);

  return (
    <div className={"hidden lg:flex flex-row justify-between"}>
      {collections.map((collection)=>(

        <NavDropdown
          key={'collection.id'}
          className={'py-2 align-text-top'}
          style={{color: 'black'}}
          title={collection.title}
        >
          <Dropdown.Item>
            <Link to={`/collections/${collection.handle}`}>
              <a className={'nav-link'}>All</a>
            </Link>
          </Dropdown.Item>
          <Dropdown.Header>Products</Dropdown.Header>
          {collection.products.edges.map((product) => (
            <Dropdown.Item>
              <Link to={`/products/${product.node.handle}`}>
                <a className="nav-link">{product.node.title}</a>
              </Link>
            </Dropdown.Item>
          ))}
        </NavDropdown>
      ))
      }
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

