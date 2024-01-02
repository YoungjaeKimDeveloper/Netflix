import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import Player from "./pages/Player";
import TvShow from "./pages/TvShow";
import Netflix from "./pages/Netflix";
import MoviePage from "./pages/MoviePage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/signup" element={<SignupPage />}></Route>
        <Route exact path="/player" element={<Player />}></Route>
        <Route exact path="/tv" element={<TvShow />}></Route>
        <Route exact path="/" element={<Netflix />}></Route>
        <Route exact path="/movie" element={<MoviePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
