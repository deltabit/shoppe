import React from 'react';

interface Props {
  loading: boolean;
  error: Error | null;
  children: React.ReactNode;
}

const LoadingErrorWrapper: React.FC<Props> = ({ loading, error, children }) => {
  if (loading) {
    return <div className='flex flex-col justify-center items-center w-full my-32 text-5xl'>wait a second, mate...</div>;
  }

  if (error) {
    return <div className='flex flex-col justify-center items-center w-full my-32 text-5xl'>Ooops... Error: {error.message}</div>;
  }

  return <>{children}</>;
};

export default LoadingErrorWrapper;