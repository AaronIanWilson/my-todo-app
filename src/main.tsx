import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      clientId="f92900e3a76f4cc795b1e5af699e6e8b"
      domain="https://aaron.kinde.com"
      redirectUri={
        process.env.NODE_ENV === "production"
          ? "https://my-todo-app-nu-topaz.vercel.app"
          : "http://localhost:5173"
      }
      logoutUri={
        process.env.NODE_ENV === "production"
          ? "https://my-todo-app-nu-topaz.vercel.app"
          : "http://localhost:5173"
      }
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </StrictMode>
);
