import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  padding: 0px 50px;
  background-color: #d1411e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`;
export const ButtonContainer = styled.div`
  background-color: #fff;
  border-radius: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Texts = styled.div`
  color: white;
  margin-left: 20px;
`;
export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
`;
export const Center = styled.div`
  flex: 3;
`;

export const Lists = styled.ul`
  list-style-type: none;
`;

export const List = styled.li``;

export const Right = styled.div`
  flex: 1;
`;
