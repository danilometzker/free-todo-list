import styled, { keyframes } from "styled-components";

export const AppHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background: linear-gradient(
        98.05deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.3) 97.84%
    );
    border-radius: 16px 16px 0 0;
    height: 56px;
`;

export const AppHeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const AppHeaderNavigation = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const appearAnimation = keyframes`
    from{
        transform: scale(0);
    }
    to{
        transform: scale(1);
    }
`;

export const PressableIcon = styled.div`
    width: 32px;
    height: 32px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    transition: 0.2s;
    animation: ${appearAnimation} 0.2s linear;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`;
