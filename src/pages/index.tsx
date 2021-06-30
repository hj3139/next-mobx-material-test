// base
import Link from 'next/link';

//component
import { EventList, MoreButton } from 'components';

//mobx
import { inject, observer } from 'mobx-react';

//model
import { EventStore } from 'stores/event';

//ui
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { eventAPI } from 'stores/event/event.api';

const Styled = styled.div``;

interface HomeProps {
  event: EventStore;
}

const Home = (props: HomeProps) => {
  const { event } = props;

  return (
    <Styled>
      <EventList eventList={event.eventList} />
      {!event.eventList.last && <MoreButton onClick={event.getEvent} />}
      <div style={{ textAlign: 'center' }}>
        <Link href='/count' passHref>
          <Button
            style={{
              width: 300,
              height: 50,
              borderRadius: 30,
              margin: '0 auto'
            }}
          >
            countPage
          </Button>
        </Link>
      </div>
    </Styled>
  );
};

export const getServerSideProps = async () => {
  const event = await eventAPI.getEvent();
  return {
    props: {
      eventList: event
    }
  };
};

export default inject('event')(observer(Home));
