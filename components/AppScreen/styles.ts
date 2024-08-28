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

interface AppBodyProps {
    $large: boolean | undefined;
}
export const AppBody = styled.div<AppBodyProps>`
    display: flex;
    height: 80vh;
    width: ${(props) => (props.$large ? "720px" : "380px")};
    flex-direction: column;
    border-radius: 16px;
    background-color: #f6f6f6;
    box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: 0.2s;
    position: relative;
    background: rgba(255, 255, 255, 0.18);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    @media (max-width: 578px) {
        width: 100%;
        height: 100%;
    }
`;
