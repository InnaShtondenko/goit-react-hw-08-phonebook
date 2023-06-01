import styled from 'styled-components';
import { css } from 'styled-components';
import { color, flexbox, layout, position, space } from 'styled-system';

export const activeButton = ({ theme, isDelete }) => css`
  border: ${theme.borders.small};
  border-color: ${theme.colors.grey};
  cursor: pointer;
  transition: background-color ${theme.transitions.normal},
    color ${theme.transitions.normal};
  box-shadow: ${theme.shadows.small};
  &:focus,
  &:hover {
    outline: none;
    background-color: ${isDelete ? theme.colors.warning : theme.colors.accentPrimary};
    color: ${theme.colors.dark};
  }
`;

export const interactiveInput = ({ theme }) => css`
  display: block;
  border-style: solid;
  outline: none;
  box-shadow: ${theme.shadows.inputInset};
  transition: border-color ${theme.transitions.normal};
  &:focus,
  &:active {
    border-color: ${theme.colors.accentPrimary};
  }
`;
export const ButtonWideCommon = styled.button`
  ${activeButton};
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  width: ${p => p.theme.sizes.small};
  margin: 0;
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radius.big};
`;

export const Box = styled.div(space, color, layout, flexbox, position);

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const ContainerFrameCommon = styled.div`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  padding: ${({ theme: { space } }) => space[3]}px
    ${({ theme: { space } }) => space[4]}px;
  border-radius: ${({ theme: { radius } }) => radius.big};
  background-color: ${({ theme: { colors } }) => colors.light};
  box-shadow: ${({ theme: { shadows } }) => shadows.insetBig},
    ${({ theme: { shadows } }) => shadows.insetColored};
`;

export const ContainerCardCommon = styled.div`
  width: ${p => p.theme.sizes.wide};
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  border-radius: ${p => p.theme.radius.normal};
  box-shadow: ${p => p.theme.shadows.medium};
`;

export const ContainerInnerCardCommon = styled.div`
  width: 0.85;
  margin: 0 auto;
  margin-top: ${p => p.theme.space[4]}px;
  border-color: ${p => p.theme.colors.accentSecondary};
  color: ${p => p.theme.colors.textColorSecondary};
`;

export const FormCommon = styled.form`
  padding: ${p => p.theme.space[3]}px;
  border-top: ${p => p.theme.borders.small};
`;

export const InsetButtonCommon = styled.button`
  ${activeButton};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  min-width: ${p => p.theme.sizes.buttons.normal};
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radius.normal};
  box-shadow: ${p => p.theme.shadows.buttonInset};
`;

export const InputInfoLabelCommon = styled.label`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;
  transition: color ${p => p.theme.transitions.normal};
  &:focus-within {
    color: ${p => p.theme.colors.accentPrimary};
  }
`;

export const InputCommon = styled.input`
  ${interactiveInput};
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  width: ${p => p.theme.sizes.small};
  margin: 0 auto;
  margin-top: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radius.normal};
`;

export const Section = styled.section`
padding: ${({ theme: { space } }) => space[4]}px;
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: max-content;
  margin: 0 auto;
  padding: ${({ theme: { space } }) => space[3]}px;
  text-align: center;
`;