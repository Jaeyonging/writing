import { useRef, useState, useEffect } from "react";

interface Props {
    material: string;
    backgroundText: string;
    onDrawEnd?: (imageDataUrl: string, key: string) => void;
}

const CanvasBox = ({ material, backgroundText, onDrawEnd }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawing = useRef(false);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = 150;
            canvas.height = 150;
            const context = canvas.getContext("2d");
            if (context) {
                context.lineJoin = "round";
                context.lineCap = "round";
                setCtx(context);
            }
        }
    }, []);

    const getStrokeStyle = () => {
        switch (material) {
            case "colorpencil":
                return { color: "red", width: 5 };
            case "eraser":
                return { color: "white", width: 10 };
            default:
                return { color: "black", width: 5 };
        }
    };

    const getCoords = (e: MouseEvent | TouchEvent, rect: DOMRect) => {
        if ("touches" in e) {
            const touch = e.touches[0];
            return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
        } else {
            return {
                x: (e as MouseEvent).clientX - rect.left,
                y: (e as MouseEvent).clientY - rect.top,
            };
        }
    };

    const draw = (e: MouseEvent | TouchEvent) => {
        if (!ctx || !isDrawing.current || !canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const { x, y } = getCoords(e, rect);

        if (material === "eraser") {
            ctx.clearRect(x - 5, y - 5, 10, 10);
        } else {
            const { color, width } = getStrokeStyle();
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };

    const start = (e: MouseEvent | TouchEvent) => {
        if (!ctx || !canvasRef.current) return;
        isDrawing.current = true;
        const rect = canvasRef.current.getBoundingClientRect();
        const { x, y } = getCoords(e, rect);
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    const end = () => {
        isDrawing.current = false;
        ctx?.closePath();
        if (canvasRef.current && onDrawEnd) {
            const dataUrl = canvasRef.current.toDataURL("image/png");
            onDrawEnd(dataUrl, backgroundText);
        }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => start(e.nativeEvent);
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => draw(e.nativeEvent);
    const handleMouseUp = () => end();

    const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
        e.preventDefault();
        start(e.nativeEvent);
    };
    const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
        e.preventDefault();
        draw(e.nativeEvent);
    };
    const handleTouchEnd = () => end();

    const clearCanvas = () => {
        if (!ctx || !canvasRef.current) return;
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    return (
        <div className="flex flex-col items-center w-[150px]">
            <div className="relative w-[150px] h-[150px]">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[80px] text-gray-400 pointer-events-none select-none">
                    {backgroundText}
                </div>
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 z-10 border border-black bg-transparent"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                />
            </div>
            <button
                className="mt-1 text-[12px] px-3 py-1 border border-gray-400 rounded-md"
                onClick={clearCanvas}
            >
                초기화
            </button>
        </div>
    );
};

export default CanvasBox;
