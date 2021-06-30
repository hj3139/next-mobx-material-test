import dynamic from 'next/dynamic';
import { PageWrapper } from 'models';
import { ResponseEventListModel } from 'stores/event';
import styled from 'styled-components';

interface HomeProps {
  eventList: PageWrapper<ResponseEventListModel>;
}
const DynamicComponent = dynamic(() => import('components/Item/EventItem'));
const StyledEventList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const EventList = (props: HomeProps) => {
  const { eventList } = props;

  return (
    <StyledEventList>
      {eventList.content.map((arr, idx) => (
        <DynamicComponent key={idx} eventItem={arr} />
      ))}
    </StyledEventList>
  );
};
