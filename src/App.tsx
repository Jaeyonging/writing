import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./utils/AnimatedRoutes";

function App() {
  return (
    <>
      <div className="flex items-center justify-center w-[100vw] h-[100vh] overflow-hidden">
        <div className="w-[500px] h-[100vh] overflow-y-auto border-[1px] border-gray-300">
          <Suspense fallback={<div>로딩중...</div>}>
            <AnimatedRoutes />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
