import { Button } from '@material-ui/core';
import { CountButton, CountText } from 'components';

import { inject, observer } from 'mobx-react';
import Link from 'next/link';
import { CountStore } from 'stores/count';
import styled from 'styled-components';

const Styled = styled.div``;

interface CountProps {
  count: CountStore;
}

const Count = inject('count')(
  observer((props: CountProps) => {
    const { count } = props;

    return (
      <Styled>
        <CountText number={count.number} />
        <CountButton
          increase={() => count.increase()}
          decrease={() => count.decreaes()}
        />
        <Link href='/' passHref>
          <Button>BACK</Button>
        </Link>
      </Styled>
    );
  })
);

export const getServerSideProps = async () => {
  return {
    props: {
      number: 0
    }
  };
};

export default Count;
