import React, { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import useUserStore from "./store/userStore";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

import HomeStudent from "./pages/HomeStudent";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

import NotFound from "./pages/NotFound";

export default function RoutesNavigation() {
    const { user } = useUserStore();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {user.id ?
                    <>
                        {/*Remover rota de login*/}
                        <Route path="/login" element={<HomeStudent />} />
                        <Route path="/home-student" element={<HomeStudent />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/course-details" element={<CourseDetails />} />
                    </>
                    :
                    <>
                        <Route path="/home-student" element={<Home />} />
                        <Route path="/courses" element={<Home />} />
                        <Route path="/course-details" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </>
                }
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
