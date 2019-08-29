import React from 'react';
import styled from 'styled-components';

import colors from '../../config/color';
import font from '../../config/font';

const Text = styled.span`
  font-weight: ${font.weight.regular};
  font-size: ${font.size.small};
  color: ${colors.text.paragraph};
`;

export default Text;

export const Title = styled.h1`
  font-size: ${font.size.medium};
  color: ${colors.text.main};
  font-weight: ${font.weight.regular};
`;

export const TitleLarge = styled.h1`
  font-size: ${font.size.xlarge};
  color: ${colors.text.main};
  font-weight: ${font.weight.regular};
`;

export const TitlePrimary = styled(Title)`
  color: ${colors.primary};
`;

export const TitleError = styled(Title)`
  color: ${colors.error};
`;

export const TitleWhite = styled(Title)`
  color: ${colors.white};
`;

export const TitleLight = styled(Title)`
  font-weight: ${font.weight.light};
`;

export const TitleMedium = styled.h2`
  font-size: ${font.size.medium};
  color: ${colors.text.main};
  font-weight: ${font.weight.light};
`;

export const TitleSmall = styled.h2`
  font-size: ${font.size.small};
  color: ${colors.text.main};
  font-weight: ${font.weight.light};
`;

export const TitleSmallPrimary = styled(TitleMedium)`
  color: ${colors.primary};
`;

export const TitleSmallWhite = styled(TitleMedium)`
  color: ${colors.white};
`;

export const SubTitleSmall = styled.h2`
  font-size: ${font.size.large};
  color: ${colors.text.main};
  font-weight: ${font.weight.light};
`;

export const SubTitleSmallWhite = styled(SubTitleSmall)`
  color: ${colors.white};
`;

export const NavSelected = styled.h2`
  font-size: ${font.size.medium};
  font-weight: ${font.weight.light};
  color: ${colors.primary};
  margin-right: 1.3em;
  margin-bottom: 0;
  cursor: pointer;
`;


export const Paragraph = styled.p`
  font-size: ${font.size.medium};
  color: ${colors.text.paragraph};
  font-weight: ${font.weight.light};
  margin: 0;
`;

export const TextError = styled(Text)`
  color: ${colors.error};
`;

export const EmptyInformationText = styled(Text)`
  color: ${colors.secondary};
  font-style: italic;
`;

export const ExtraSmallText = styled(Text)`
  font-size: ${font.size.xsmall};
`;

export const ExtraSmallTextLight = styled(Text)`
  font-size: ${font.size.xsmall};
  font-weight: ${font.weight.light};
`;
export const ExtraSmallTextLightPrimary = styled(ExtraSmallTextLight)`
  color: ${colors.primary};
`;
