import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "@/components/Counter";

const AppRouter = (props: any) => {
  return (
    <Router>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There `&rsquo;` s nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
};
export default AppRouter;
