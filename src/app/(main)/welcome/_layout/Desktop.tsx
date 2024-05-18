import { PropsWithChildren } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import Follow from '@/features/Follow';

const COPYRIGHT = `© ${new Date().getFullYear()} LobeHub, LLC`;

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flexbox
      align={'center'}
      height={'100%'}
      justify={'space-between'}
      padding={16}
      style={{ overflow: 'hidden', position: 'relative' }}
      width={'100%'}
    >
      <Center gap={16} style={{ height: '100%', paddingInline: 16 }}>
      {children}
    </Center>
      <Flexbox align={'center'} horizontal justify={'space-between'}>
        <span style={{ opacity: 0.5 }}>{COPYRIGHT}</span>
        <Follow />
      </Flexbox>
    </Flexbox>
  );
};

export default DesktopLayout;
