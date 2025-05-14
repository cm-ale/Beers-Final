import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const defaultConfig = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  transition: Bounce,
};

export const errorToast = (message, config) => {
  toast.error(message, { ...defaultConfig, ...config });
};

export const successToast = (message, config) => {
  toast.success(message, { ...defaultConfig, ...config });
};

export const NotificationContainer = () => <ToastContainer />;
