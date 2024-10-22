import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { ThemeProvider } from '../../contexts/theme';
import useThemeMode from '../../contexts/useThemeMode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/Footer/Footer';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

function Layout() {
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 3) {
        toast("Wow so easy!");
        count++;
      } else {
        clearInterval(interval);
      }
    }, 2000); // Trigger every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const { themeMode, darkTheme, lightTheme } = useThemeMode();
  
  const lenis = useLenis(({ scroll }) => {
    // Called every scroll
  });

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <ReactLenis root>
        <div className="layout h-screen">
          <div className="navbar h-[70px]">
            <Navbar />
          </div>
          <div className="content dark:bg-black bg-white" style={{ height: 'calc(100vh - 70px)' }}>
            <ToastContainer />
            <Outlet />
            {/* <Footer /> */}
          </div>
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

function AuthLayout() {
  const { themeMode, darkTheme, lightTheme } = useThemeMode();
  
  const lenis = useLenis(({ scroll }) => {
    // Called every scroll
  });

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <ReactLenis root>
        <div className="layout h-screen">
          <div className="content dark:bg-black bg-white" style={{ height: 'calc(100vh - 70px)' }}>
            <Outlet />
          </div>
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

export { Layout, AuthLayout };
