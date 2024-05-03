import { Metadata } from 'next';

import { getCanonicalUrl } from '@/const/url';
import { isMobileDevice } from '@/utils/responsive';

import Actions from './features/Actions';
import Hero from './features/Hero';
import LogoWelcome from './features/Logo';

export const metadata: Metadata = {
  alternates: { canonical: getCanonicalUrl('/welcome') },
};

const Page = () => {
  const mobile = isMobileDevice();

  return (
    <>
      <LogoWelcome mobile={mobile} />
      <Hero />
      <Actions mobile={mobile} />
    </>
  );
};

Page.displayName = 'Welcome';

export default Page;
