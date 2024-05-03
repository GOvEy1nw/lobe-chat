'use client';

import dynamic from 'next/dynamic';
import { memo } from 'react';
import { Center } from 'react-layout-kit';
import { Logo } from '@govey1nw/lobehub-ui';

const LogoWelcome = memo<{ mobile?: boolean }>(({ mobile }) => {
  return mobile ? (
    <Center height={240} width={240}>
      <Logo size={240} type={'3d'} />
    </Center>
  ) : (
    <Center
      style={{
        height: `min(482px, 40vw)`,
        marginBottom: '-10%',
        marginTop: '-20%',
        position: 'relative',
        width: `min(976px, 80vw)`,
      }}
    >
      <Logo type={'3d'} height={'min(482px, 40vw)'} width={'min(976px, 80vw)'} />
    </Center>
  );
});

export default LogoWelcome;