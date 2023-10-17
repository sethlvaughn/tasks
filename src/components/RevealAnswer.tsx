import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answer, setAnswer] = useState<string>("Reveal Answer");
    function changeButton(): void {
        setAnswer(answer === "Reveal Answer" ? "42" : "Reveal Answer");
    }
    return (
        <div>
            <Button onClick={changeButton}>{answer}</Button>
        </div>
    );
}
