import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }: {children: ReactNode}) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <><span className="loading loading-dots loading-md"></span></>;
  }
  if (user) {
    return <>{children}</>;
  }else {
    return <Navigate to={'/login'}></Navigate>
  }
};

export default PrivateRoute;