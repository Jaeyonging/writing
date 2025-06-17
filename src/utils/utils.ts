import Tesseract from "tesseract.js";

export const extractTextFromImage = async (imageDataUrl: string) => {
  const result = await Tesseract.recognize(imageDataUrl, 'kor', {
    logger: m => console.log(m),
    // @ts-ignore
    tessedit_pageseg_mode: 10, // SINGLE_CHAR: 단일 글자 인식에 최적
  });

  const text = result.data.text.trim();
  // @ts-ignore
  const symbol = result.data.symbols?.[0]; // 단일 문자일 경우 symbols 배열에서 가져옴

  return {
    recognizedText: text,
    confidence: symbol?.confidence ?? null, // symbol이 더 세밀함
  };
};
