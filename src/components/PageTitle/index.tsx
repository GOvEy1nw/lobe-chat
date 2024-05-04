import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · rais` : 'rais';
  }, [title]);

  return null;
});

export default PageTitle;
