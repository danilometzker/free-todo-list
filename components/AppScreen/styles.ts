import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    @media (max-width: 578px) {
        padding: 16px;
    }
`;

export const AppBody = styled.div`
    display: flex;
    height: 80vh;
    width: 380px;
    flex-direction: column;
    border-radius: 16px;
    background-color: #f6f6f6;
    box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);

    @media (max-width: 578px) {
        width: 100%;
        height: 100%;
    }
`;
