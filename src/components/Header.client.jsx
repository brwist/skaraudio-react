import {useState} from 'react';
import CurrencySelector from './CurrencySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  let hideCurrencySelector = true;

  return (
    <>
      <header
        className="sticky top-0 left-0 right-0 z-20 w-full transition-[height] ease-in-out duration-500"
        role="banner"
        style={{
          backgroundColor: 'rgb(49,53,57)'
        }}
      >
        <div
          className={`px-6 md:px-8 md:py-6 lg:pt-4 lg:pb-0 mx-auto ${
            isMobileNavOpen ? '' : 'bg-opacity-95'
          }`}
        >
          <div className="h-full flex lg:flex-col place-content-between">
            <div className="text-center w-full flex justify-between items-center hidden">
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

            </div>
            <Navigation collections={collections} storeName={storeName} />
          </div>
        </div>
      </header>
    </>
  );
}
