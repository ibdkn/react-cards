import styled, {css} from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

export const StyledCard = styled.div`
  width: 300px;
  padding: 10px 10px 22px 10px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 15px;
`

export const StyledCardImage = styled.img`
  margin-bottom: 20px;
`

export const StyledCardTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  color: #000;
  margin-bottom: 20px;
`

export const StyledCardDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 167%;
  color: #abb3ba;
`

export const StyledCardAction = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 19px;
`

type StyledCardButtonPropsType = {
    color?: string
    btntype: "primary" | "outlined"
}

export const StyledCardButton = styled.button<StyledCardButtonPropsType>`
  width: 86px;
  height: 30px;
  font-weight: 700;
  font-size: 10px;
  line-height: 200%;
  border-radius: 5px;
  border: 2px solid transparent;
  cursor: pointer;
  
  ${props => props.btntype === "primary" && css<StyledCardButtonPropsType>`
    color: #fff;
    background-color: ${myTheme.colors.primary};

    &:hover {
      background-color: ${myTheme.colors.primaryHover};
    }
  `}

  ${props => props.btntype === "outlined" && css<StyledCardButtonPropsType>`
    color: ${myTheme.colors.primary};
    background-color: transparent;
    border: 2px solid ${myTheme.colors.primary};

    &:hover {
      color: #fff;
      border: 2px solid ${myTheme.colors.primaryHover};
      background-color: ${myTheme.colors.primaryHover};
    }
  `}
`