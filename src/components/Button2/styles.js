import styled from "styled-components";
// const sizeButton = (props) => {
//   if (props.theme.body === "blue") {
//     return {
//       body: "blue",
//     };
//   }
// };
export const SButton2 = styled.p`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
`;
