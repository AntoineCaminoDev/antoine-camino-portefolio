import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onStarted }) {
    const { progress } = useProgress();

    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                setStarted(true);
            }, 5000); // Attendre 5 secondes (5000 millisecondes)
        }
    }, [progress]);

    return (
        <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
            <div>
                <div className="intro-logo">
                    <img src="/src/assets/logo.svg" alt="Logo" />
                    <div>
                        <p>lunatic</p>
                        <p>des solutions pour vos envies</p>
                        <div className="loadingScreen__progress">
                            <div
                                className="loadingScreen__progress__value"
                                style={{
                                    width: `${progress}%`,
                                }}
                            />
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}