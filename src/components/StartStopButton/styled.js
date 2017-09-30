import styled from 'styled-components';

const StyledStartStopButton = styled.button`
  border-radius: 5px;
  padding: 0.5em 1em;
  margin: 1 2em;

  background-color: ${(props) => (props.running ? 'grey' : 'green')};
`;

export default StyledStartStopButton;
