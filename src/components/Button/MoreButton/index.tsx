import styled from 'styled-components';

interface MoreButtonProps {
  onClick: () => void;
}

const StyledMoreButton = styled.div`
  width: 300px;
  height: 90px;
  border-radius: 50px;
  font-size: 34px;
  border: 2px solid rgb(201, 201, 201) !important;
  color: rgb(121, 121, 121) !important;
  line-height: 90px;
  text-align: center;
  margin: 0 auto 30px;
  cursor: pointer;
`;

export const MoreButton = (props: MoreButtonProps) => {
  const { onClick } = props;
  return <StyledMoreButton onClick={onClick}>더보기</StyledMoreButton>;
};
