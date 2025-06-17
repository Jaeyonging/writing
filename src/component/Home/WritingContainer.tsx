import { useState } from "react";
import CanvasBox from "../CanvasBox";
import { extractTextFromImage } from "../../utils/utils";

const WritingContainer = () => {
    const [material, setMaterial] = useState("pencil");
    const [images, setImages] = useState<{ [key: string]: string }>({});

    const handleDrawEnd = (dataUrl: string, key: string) => {
        setImages(prev => ({ ...prev, [key]: dataUrl }));
    };

    const handleCheck = async () => {
        const text = await extractTextFromImage(images["한"]);
        console.log(text);
    }

    return (
        <div className="flex flex-col w-full p-2 gap-2">
            <div className="text-[24px] font-bold">'한글'을 따라 써보세요.</div>

            <div className="flex text-[100px] items-center justify-center gap-2 text-center text-gray-500">
                <CanvasBox material={material} backgroundText="한" onDrawEnd={handleDrawEnd} />
                <CanvasBox material={material} backgroundText="글" onDrawEnd={handleDrawEnd} />
            </div>

            <div className="flex items-center justify-center gap-10">
                <button className="text-[15px] font-bold border-[1px] border-black rounded-md p-2">
                    소리
                </button>
            </div>

            <span>재료들:</span>
            <div className="flex items-center justify-center gap-2">
                <button
                    className={`text-[15px] font-bold border-[1px] border-black rounded-md cursor-pointer p-2 ${material === "pencil" ? "bg-black text-white" : ""
                        }`}
                    onClick={() => setMaterial("pencil")}
                >
                    연필
                </button>
                <button
                    className={`text-[15px] font-bold border-[1px] border-black rounded-md cursor-pointer p-2 ${material === "colorpencil" ? "bg-black text-white" : ""
                        }`}
                    onClick={() => setMaterial("colorpencil")}
                >
                    색연필
                </button>
                <button
                    className={`text-[15px] font-bold border-[1px] border-black rounded-md cursor-pointer p-2 ${material === "eraser" ? "bg-black text-white" : ""
                        }`}
                    onClick={() => setMaterial("eraser")}
                >
                    지우개
                </button>
            </div>

            <span>내용물:</span>
            <div className="flex items-center justify-center gap-2">
                {["한", "글"].map(char => (
                    <img
                        key={char}
                        src={images[char]}
                        alt={`작성한 ${char}`}
                        className="w-[100px] h-[100px] border border-gray-400"
                    />
                ))}
            </div>
            <div>
                <button className="cursor-pointer border-[1px] border-black rounded-md p-2" onClick={handleCheck}>검사받기</button>
            </div>
        </div>
    );
};

export default WritingContainer;
