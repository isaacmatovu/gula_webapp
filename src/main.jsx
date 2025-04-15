import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuspenseWrappedRoutes from "./components/common/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter(SuspenseWrappedRoutes);
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
