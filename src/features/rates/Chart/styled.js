import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-auto-columns: 1fr;
    grid-gap: 20px;
`;

export const Paragraph = styled.p`
    display: flex;
    margin: 0px;

    ${({ info }) => info && css`
        color: ${({ theme }) => theme.colors.info};
        font-size: 14px;
        text-align: center;
        justify-content: center;
    `}

    ${({ loadingState }) => loadingState && css`
        text-align: center;
        display: inline;
        color: ${({ theme }) => theme.colors.info};
        font-size: 18px;
    `}

    ${({ errorState }) => errorState && css`
        text-align: center;
        display: inline;
        color: ${({ theme }) => theme.colors.error};
        font-size: 18px;
    `}
    
    ${({ styledResult }) => styledResult && css`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 28px;
        color: ${({ theme }) => theme.colors.result};
    `}
`;

export const Label = styled.label`
    flex: 1 0 100%;
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            flex-wrap: wrap;
        }
    `;

export const Input = styled.input`
    flex: 0 1 100%;
    border-radius: 10px;
    border: 1px solid teal;
    padding: 8px;
`;

export const Button = styled.button`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.buttonBackground};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.buttonText};
    padding: 8px;
    border: none;
    transition: filter 0.5s;

    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(120%);
    }
`;

export const Span = styled.span`
    flex: 0 0 300px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex: 0 1 auto;
    }
`;