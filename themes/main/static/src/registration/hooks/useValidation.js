import { useState } from "react";

function useValidation() {
    const [validation, setValidation] = useState(false);

    return [validation, setValidation];
}

export default useValidation;