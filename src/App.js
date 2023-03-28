import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/main-page";
import TodoPage from "./pages/todo-page"

function App() {
  return (
    <div className="container py-3">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<MainPage />} />

          <Route path="todo" element={<TodoPage />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
