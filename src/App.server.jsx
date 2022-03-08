import {DefaultRoutes} from '@shopify/hydrogen';
import {Suspense} from 'react';

import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
import AppClient from './App.client';
import LoadingFallback from './components/LoadingFallback';
import WishlistProvider from './components/WishlistProvider.client';

export default function App({log, pages, ...serverState}) {
  // console.log(pages);
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AppClient helmetContext={serverState.helmetContext}>
        <WishlistProvider data={serverState.wishilist}>
          <DefaultSeo />
          <DefaultRoutes
            pages={pages}
            serverState={serverState}
            log={log}
            fallback={<NotFound />}
          />
        </WishlistProvider>
      </AppClient>
    </Suspense>
  );
}
