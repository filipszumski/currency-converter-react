import React from "react";
import { Button } from "../../styled";
import { Wrapper } from "./style";

export const Buttons = ({ setTrend }) => {

    const onButtonChange = (event) => {
        const buttonInnerText = event.target.innerText;

        if (buttonInnerText === "increase") {
            setTrend("increase");
        } else {
            setTrend("decrease");
        }
    };

    return (
        <Wrapper>
            <Button trends onClick={onButtonChange}>increase</Button>
            <Button trends onClick={onButtonChange}>decrease</Button>
        </Wrapper>
    )
};