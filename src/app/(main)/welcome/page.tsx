import { Metadata } from 'next';

import { getCanonicalUrl } from '@/const/url';
import { isMobileDevice } from '@/utils/responsive';

import Actions from './features/Actions';
import Hero from './features/Hero';
import { Logo } from '@lobehub/ui';

export const metadata: Metadata = {
  alternates: { canonical: getCanonicalUrl('/welcome') },
};

const Page = () => {
  const mobile = isMobileDevice();

  return (
    <>
      <Logo size={350} type={'text'} />
      <Hero />
      <Actions mobile={mobile} />
    </>
  );
};

Page.displayName = 'Welcome';

export default Page;
