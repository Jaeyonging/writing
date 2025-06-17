import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalErrorBoundary from "./boundary/GlobalErrorBoundary";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GlobalErrorBoundary>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
      </BrowserRouter>
  </GlobalErrorBoundary>
);
