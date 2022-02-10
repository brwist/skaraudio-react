import {useState} from 'react';
import {Link} from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import CurrencySelector from './CurrencySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';

function SearchBar() {
  return (
    <>
      <input type="text" placeholder={'Search'}></input>
    </>
  );
}

function PreHeaderBar() {
  return (
    <div className="px-5 flex py-3 z-20 w-full bg-neutral-900">
      <div className="social_icons flex-row">
        <a
          href="https://twitter.com/skaraudio_?lang=en"
          title="Skar Audio on Twitter"
          rel="me noreferrer"
          target="_blank"
          className="fa fa-twitter px-4 hover:text-white"
        >
          &nbsp;
        </a>
        <a
          href="https://www.facebook.com/SkarAudio"
          title="Skar Audio on Facebook"
          rel="me"
          target="_blank"
          className="fa fa-facebook px-4 hover:text-white"
        >
          &nbsp;
        </a>
        <a
          href="https://www.youtube.com/user/skaraudio"
          title="Skar Audio on YouTube"
          rel="me"
          target="_blank"
          className="fa fa-youtube px-4 hover:text-white"
        >
          &nbsp;
        </a>
        <a
          href="https://www.instagram.com/skaraudioofficial"
          title="Skar Audio on Instagram"
          rel="me"
          target="_blank"
          className="fa fa-instagram px-4 hover:text-white"
        >
          &nbsp;
        </a>
        <a
          href="mailto:support@skaraudio.com"
          title="Email Skar Audio"
          className="fa fa-envelope-o px-4 hover:text-white"
        >
          &nbsp;
        </a>
      </div>

      {/* Spacer to push search bar to the far right*/}
      <div className={'flex-grow'}>&nbsp;</div>

      <div>
        <a href={"login"} className={"mx-3 px-3 hover:text-white"}><i className={"fa fa-user-circle px-2"} /> Login</a>
        <SearchBar />
      </div>
    </div>
  );
}

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  let hideCurrencySelector = true;

  return (
    <>
      <PreHeaderBar />
      <header
        className="sticky top-0 left-0 right-0 h-20 lg:h-32 z-20 w-full bg-slate-700 transition-[height] ease-in-out duration-500"
        role="banner"
      >
        <div
          className={`h-20 lg:h-32 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto ${
            isMobileNavOpen ? '' : 'bg-opacity-95'
          }`}
        >
          <div className="h-full flex lg:flex-col place-content-between">
            <div className="text-center w-full flex justify-between items-center">
              {hideCurrencySelector ? (
                <>
                  <div className="hidden lg:block">&nbsp;</div>
                </>
              ) : (
                <CurrencySelector />
              )}
              <MobileNavigation
                  collections={collections}
                  isOpen={isMobileNavOpen}
                  setIsOpen={setIsMobileNavOpen}
              />
              <Link
                className={
                  'font-black uppercase text-3xl tracking-widest'
                }
                to="/"
              >
                {/*{storeName}*/}
                <img className={"lg:h-24 h-16 transition-all ease-in-out duration-500"} src={'/image/site-logo.webp'}  alt={"Site Logo"}/>
              </Link>
              <CartToggle
                handleClick={() => {
                  if (isMobileNavOpen) setIsMobileNavOpen(false);
                }}
              />
            </div>
            <Navigation collections={collections} storeName={storeName} />
          </div>
        </div>
      </header>
    </>
  );
}
