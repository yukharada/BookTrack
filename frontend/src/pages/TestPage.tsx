import { useState } from "react";
import { testServices } from "../services/testServices";

export default function TestPage() {

    const [log, setLog] = useState<string | null>(null);

    const handleClick = async () => {
        try {
            const response = await testServices.ping();
            setLog(response);
        } catch (error) {
            setLog('エラー：' + (error as Error).message);
            throw error;
        }
    }
    return (
        <>
            <button onClick={() => handleClick()}>バックエンドの仮APIを叩く</button>
            {log && <p>{log}</p>}
        </>
    )
}

