import styled from '@emotion/styled';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
  width: 65%;
`;
export const LabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-family: Cursive;
  div {
    padding: 8px;
    border: 1px solid #ee82ee;
    border-radius: 4px;
    background-color: #ffc4c4;
    width: 288px;
    font-size: 14px;
    font-family: Cursive;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const InputStyle = styled.input`
  width: 300px;
  height: 40px;
  font-size: 16px;
  font-family: Cursive;
  &::placeholder {
    font-size: 16px;
  }
`;

export const ButtonStyle = styled.button`
  width: 150px;
  height: 40px;
  transform: scale(1);
  background-color: #ffccff;
  border-radius: 10px;
  border: 1px solid #ee82ee;
  font-family: Cursive;

  font-size: 16px;
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
  text-shadow: 2px 2px;
`;
export const SectionTitle = styled.h2`
  margin-top: 0;
  text-align: center;
  font-size: 28px;
  font-family: Cursive;

`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  height: 440px;
  padding: 20px;
 

  &.contacts {
    overflow-y: auto;
  }
`;
