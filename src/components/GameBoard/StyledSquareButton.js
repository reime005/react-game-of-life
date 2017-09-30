import styled from 'styled-components';

const StyledSquareButton = styled.div`
  background-color: ${(props) => (props.active ? 'green' : 'black')};
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
`;

export default StyledSquareButton;
