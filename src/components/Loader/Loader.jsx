import { Audio } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <Audio
      className=""
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
    />
  );
};
