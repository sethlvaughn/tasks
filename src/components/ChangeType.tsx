import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function changeType(): void {
        setType(
            type === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            <div>{type === "short_answer_question" && <p>Short Answer</p>}</div>
            <div>
                {type === "multiple_choice_question" && <p>Multiple Choice</p>}
            </div>
        </div>
    );
}
