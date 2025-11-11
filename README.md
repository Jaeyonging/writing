# ✍️ Writing — 한글 필기 인식 학습 웹앱

**Demo:** [https://writing.vercel.com](https://writing-eight.vercel.app/)

---

## 📖 소개

**Writing**은 사용자가 ‘한글’을 직접 따라 쓰며 필기 데이터를 인식·검사받을 수 있는 웹 애플리케이션입니다.  
Canvas 기반으로 구성되어 있으며, 사용자가 마우스 또는 터치로 직접 글자를 쓰면  
AI 텍스트 인식 기능을 통해 필기 결과를 분석하고 정확도를 시각적으로 확인할 수 있습니다.

---

## 🎨 주요 기능

- ✏️ **Canvas 필기 기능**
  - ‘연필’, ‘색연필’, ‘지우개’ 도구를 선택해 자유롭게 필기 가능  
  - 각 글자(‘한’, ‘글’)별로 독립된 캔버스 관리  
  - `CanvasRenderingContext2D` API를 직접 다루며 드로잉 로직 구현

- 🖼️ **이미지 추출 및 분석**
  - 사용자가 그린 이미지를 DataURL 형태로 추출  
  - `extractTextFromImage()` 유틸 함수를 통해 이미지에서 텍스트 추출  
  - 결과를 JSON 형태로 관리하여 인식된 글자와 정확도 표시

- 🔍 **검사 결과 확인**
  - 각 글자별 인식된 텍스트(`recognizedText`)와 신뢰도(`confidence`) 출력  
  - 시각적으로 직관적인 결과 표시

- 🎚️ **재료 선택 UI**
  - `pencil`, `colorpencil`, `eraser` 옵션별 스타일 자동 변경  
  - 선택 상태를 직관적으로 확인할 수 있는 Tailwind 기반 버튼 구성

---

## 🧩 기술 스택

| 분류 | 기술 |
|------|------|
| **Frontend** | React, TypeScript, Tailwind CSS |
| **Canvas API** | HTML5 Canvas (`CanvasRenderingContext2D`) |
| **Image Processing** | Custom OCR Utility (`extractTextFromImage`) |
| **Deployment** | Vercel (writing.vercel.com) |

---

## 💡 배운 점과 느낀 점

이 프로젝트를 통해 **Canvas API를 실제 학습 도구에 적용하는 과정**을 깊이 있게 경험했습니다.  
단순한 그림 그리기가 아니라, **사용자 입력을 데이터로 변환하고 이를 다시 인식 결과로 피드백하는 흐름**을 구축하면서  
React의 상태 관리와 Canvas 렌더링 사이의 동기화 문제를 직접 다뤘습니다.

또한 이미지 인식 로직(`extractTextFromImage`)을 통해  
단순히 "그릴 수 있는 앱"이 아닌 **데이터 기반 학습 시스템으로 확장할 수 있는 가능성**을 느꼈습니다.  

무엇보다도, 완성된 페이지를 [writing.vercel.com](https://writing-eight.vercel.app/)에 직접 배포하면서  
“사용자가 직접 체험하며 배우는 웹”의 가치를 다시금 깨달았습니다.

---

## 🚀 실행 방법

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
