import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
`;

export const ItemData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
`;

export const ItemTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: #e3e3e3;
`;

export const ItemDescription = styled.p`
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

export const Checkbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    overflow: visible;

    &::before {
        width: 32px;
        height: 32px;
        content: "";
        border: 2px solid #fff;
        position: absolute;
        border-radius: 50%;
    }
`;

export const LottieContainer = styled.div`
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const CheckboxClick = styled.div`
    width: 32px;
    height: 32px;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`;

export const GotoItem = styled.div`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
