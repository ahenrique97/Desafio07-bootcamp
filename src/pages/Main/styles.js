import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
  margin-top: 100px;
  padding: 20px 0;
  flex-direction: row;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Product = styled.View`
  margin-left: 20px;
  padding: 10px;
  background: ${colors.white};
  margin-right: 20px;
  border-radius: 10px;
  width: 220px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  text-align: justify;
  color: ${colors.dark};
  margin-bottom: 10px;
`;

export const Price = styled.Text`
  font-size: 21px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Button = styled(RectButton)`
  margin-top: auto;
  justify-content: center;
  background-color: ${colors.primary};
  color: ${colors.white};
  align-items: center;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductAmount = styled.View`
  align-items: center;
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  flex-direction: row;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const TextAmount = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  color: ${colors.white};
`;

export const Text = styled.Text`
  font-size: 14px;
  text-align: center;
  flex: 1;
  font-weight: bold;
  color: ${colors.white};
`;
