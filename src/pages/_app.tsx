import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalLayout from '@/components/global-layout';
import { ReactNode } from 'react';
import { NextPage } from 'next';

// 개별 레이아웃을 설정하기 위해 타입을 확장해준다.
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <>
      <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
    </>
  );
}
