import { css } from "styled-components";

export const mobiles = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
export const tablets = (props) => {
    return css`
      @media only screen and (max-width: 768px) and (min-width:381px){
        ${props}
      }
    `;
  };
  export const laptops = (props) => {
    return css`
      @media only screen and (min-width:767px) and (max-width: 925px) {
        ${props}
      }
    `;
  };
  export const Desktops = (props) => {
    return css`
      @media only screen and (min-width:926px)  and (max-width: 970px) {
        ${props}
      }
    `;
  };