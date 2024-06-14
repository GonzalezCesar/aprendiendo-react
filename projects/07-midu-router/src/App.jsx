import { lazy, Suspense } from "react";
import "./App.css";
import SearchPage from "./pages/Search";
import Page404 from "./pages/404";

import { Router } from "./Router";
import { Route } from "./Route";

const LazyHomePage = lazy(() => import('./pages/About.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx')); //import Dinamico

const appRoutes = [
  {
    path: "/:lang/about",
    Component: LazyAboutPage,
  },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <Suspense fallback={null}>
      <main>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </main>
    </Suspense>
  );
}

export default App;
