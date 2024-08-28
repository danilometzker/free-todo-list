import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: absolute;
    width: 64px;
    height: 100%;
    left: -82px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;

    @media (max-width: 578px) {
        left: auto;
        right: 16px;
        bottom: 16px;
        height: auto;
        width: 48px;
    }
`;

export const ItemButton = styled.div`
    width: 64px;
    height: 64px;
    background-color: #11ff8f;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 64px 0 rgba(0, 0, 0, 0.3);
    position: relative;
    cursor: pointer;

    @media (max-width: 578px) {
        height: 48px;
        width: 48px;
    }
`;

interface TooltipProps {
    $hover: boolean | undefined;
}
export const Tooltip = styled.span<TooltipProps>`
    position: absolute;
    background: rgba(255, 255, 255, 0.18);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
    white-space: nowrap;
    right: 100%;
    margin-right: 8px;
    padding: 8px;
    border-radius: 8px;
    transition: 0.3s;
    opacity: ${(props) => (props.$hover ? 1 : 0)};
    right: ${(props) => (props.$hover ? "100%" : "50%")};
`;
