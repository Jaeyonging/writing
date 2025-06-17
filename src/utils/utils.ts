import Tesseract from "tesseract.js";

//https://github.com/naptha/tesseract.js/blob/master/docs/api.md
//https://www.smashingmagazine.com/2021/06/image-text-conversion-react-tesseract-js-ocr/  recommend this blog 
export const extractTextFromImage = async (imageDataUrl: string) => {
  const result = await Tesseract.recognize(imageDataUrl, 'kor', {
    logger: m => console.log(m),
    // @ts-ignore
    tessedit_pageseg_mode: 10, // SINGLE_CHAR: 단일 글자 인식에 최적
  });

  const text = result.data.text.trim();
  console.log(result)
  // @ts-ignore

  return {
    recognizedText: text,
    confidence: result.data.confidence ?? null, // symbol이 더 세밀함
  };
};
