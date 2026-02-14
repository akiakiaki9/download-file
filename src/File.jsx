import { useEffect } from 'react';

const File = () => {
  useEffect(() => {
    window.location.href = 'magnet:?xt=urn:btih:781A39BA6152EEA0A435B8EB0B29974C87323E5E';
  }, []);

  return null;
};

export default File;
