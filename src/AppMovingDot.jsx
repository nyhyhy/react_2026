import { useState } from "react";

const AppMovingDot = (prop) => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    return (
        <div
            onPointerMove={(e) => {
                // console.log('clientX:', e.clientX);
                // console.log('clientY:', e.clientY);
                // position.x = e.clientX; //기존 객체 값 변경은 의미가 없음
                // position.y = e.clientY;
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }}
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
        }}>
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }} />
        </div>
    )
}
export default AppMovingDot;