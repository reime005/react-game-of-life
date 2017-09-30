import styled from 'styled-components';

const StyledGameRoundView = styled.h2`
  font-size: 1em;
  text-align: left;
  color: ${(props) => (props.running ? 'green' : 'white')};
`;

export default StyledGameRoundView;
