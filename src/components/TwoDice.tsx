import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

// export function TwoDice(): JSX.Element {
//     return <div>Two Dice</div>;
// }

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState(d6());
    const [rightDie, setRightDie] = useState(d6());
    const [result, setResult] = useState("");

    const rollLeftDie = () => {
        const newLeftDie = d6();
        setLeftDie(newLeftDie);
        checkResult(newLeftDie, rightDie);
    };

    const rollRightDie = () => {
        const newRightDie = d6();
        setRightDie(newRightDie);
        checkResult(leftDie, newRightDie);
    };

    const checkResult = (left: number, right: number) => {
        if (left === right) {
            if (left === 1) {
                setResult("Lose");
            }
            setResult("Win");
        } else {
            setResult("");
        }
    };

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
            {result && <div>{result}</div>}
        </div>
    );
}
