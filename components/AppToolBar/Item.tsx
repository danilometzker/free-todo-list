import React, { useEffect, useState } from "react";
import { ItemButton, Tooltip } from "./styles";
import { useRouter } from "next/router";
import { RiAddLargeFill } from "react-icons/ri";

type ScreenProps = {
    tooltip?: string;
    onClick: any;
};

export default function Item({ tooltip, onClick }: ScreenProps) {
    const router = useRouter();
    const [hover, setHover] = useState(false);

    return (
        <ItemButton
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
        >
            <RiAddLargeFill color="#000" size={30} />
            <Tooltip $hover={hover}>{tooltip}</Tooltip>
        </ItemButton>
    );
}
