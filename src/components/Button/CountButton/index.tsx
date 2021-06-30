//ui
import { Button } from '@material-ui/core';

interface CountButtonProps {
  increase: () => void;
  decrease: () => void;
}

export const CountButton = (props: CountButtonProps) => {
  const { increase, decrease } = props;
  return (
    <>
      <Button onClick={increase}>increase</Button>
      <Button onClick={decrease}>decrease</Button>
    </>
  );
};
