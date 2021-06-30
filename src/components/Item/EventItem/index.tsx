import Image from 'next/image';
import { ResponseEventListModel } from 'stores/event';
import styled from 'styled-components';
import { getThumbnailURL } from 'utils';
import only from 'assets/images/only.png';

interface EventItemProps {
  eventItem: ResponseEventListModel;
}

const StyledEventItem = styled.div`
  position: relative;
  margin: 0 17px;
  width: 340px;
  margin-bottom: 70px;
  min-height: 556px;

  .thumbnail {
    border-radius: 20px;
  }

  p {
    margin: 0;
  }
`;

export const EventItem = (props: EventItemProps) => {
  return (
    <StyledEventItem>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          textAlign: 'center',
          marginBottom: 40
        }}
      >
        <Image
          className='thumbnail'
          src={getThumbnailURL(props.eventItem.thumbnails[0].fileKey, 340, 340)}
          width={340}
          height={340}
          alt='상품 이미지'
        />
      </div>
      {props.eventItem.onlyExpose && (
        <div style={{ position: 'absolute', top: 310, left: 15 }}>
          <Image src={only} width={151} height={60} alt='only.png' />
        </div>
      )}
      <div style={{ padding: '0 20px' }}>
        <div style={{ fontSize: 28, fontWeight: 700, padding: '10px 0' }}>
          <span>{props.eventItem.name}</span>
        </div>
        <p
          style={{
            position: 'absolute',
            fontSize: 40,
            fontWeight: 700,
            bottom: 20
          }}
        >
          <span>{props.eventItem.displayPrice.toLocaleString()}</span>
          <span style={{ fontSize: 26, fontWeight: 500 }}>원</span>
        </p>
      </div>
    </StyledEventItem>
  );
};

export default EventItem;
