import { useState } from "react";
import CanvasBox from "../CanvasBox";

const WritingContainer = () => {
    const [material, setMaterial] = useState('pencil')

    return (
        <div className='flex flex-col w-full p-2 gap-2'>
            <div className='text-[24px] font-bold'>
                '한글'을 따라 써보세요.
            </div>
            <div className='flex text-[100px] items-center justify-center gap-2 text-center text-gray-500'>
                <CanvasBox material={material} backgroundText='한' />
                <CanvasBox material={material} backgroundText='글' />
            </div>
            <div className='flex items-center justify-center gap-10'>
                <button className='text-[15px] font-bold border-[1px] border-black rounded-md p-2'>지우개</button>
            </div>
            <span>재료들:</span>
            <div className="flex items-center justify-center gap-2">
                <button className={`text-[15px] font-bold border-[1px] border-black rounded-md cursor-pointer p-2 ${material === 'pencil' ? 'bg-black text-white' : ''}`} onClick={() => setMaterial('pencil')}>연필</button>
                <button className={`text-[15px] font-bold border-[1px] border-black rounded-md cursor-pointer p-2 ${material === 'colorpencil' ? 'bg-black text-white' : ''}`} onClick={() => setMaterial('colorpencil')}>색연필</button>
                <button className={`text-[15px] font-bold border-[1px] border-black rounded-md cursor-pointer p-2 ${material === 'eraser' ? 'bg-black text-white' : ''}`} onClick={() => setMaterial('eraser')}>지우개</button>
            </div>
        </div>
    )
}

export default WritingContainer
