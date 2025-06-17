import { useRef, useState, useEffect } from "react";

interface Props{
  material: string
  backgroundText: string
}

const CanvasBox = ({ material, backgroundText }: Props) => {
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
                return { color: "red", width: 2 };
            case "eraser":
                return { color: "white", width: 10 };
            default:
                return { color: "black", width: 2 };
        }
    };

    const handleDraw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      if (!ctx || !isDrawing.current) return;
  
      const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
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
  

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!ctx) return;
        isDrawing.current = true;
        const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
        ctx.beginPath();
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    };

    const stopDrawing = () => {
        isDrawing.current = false;
        if (ctx) ctx.closePath();
    };

    return (
        <div className="relative w-[150px] h-[150px] border-[1px] border-black">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[80px] text-gray-400 pointer-events-none select-none">
                {backgroundText}
            </div>
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 z-10"
                onMouseDown={startDrawing}
                onMouseMove={handleDraw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            />
        </div>
    );
};

export default CanvasBox;