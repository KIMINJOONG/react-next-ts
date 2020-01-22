import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

const AppLayout = ({ children }: IProps) => {
  return (
    <div>
      <div>헤더</div>
      <div>바디{children}</div>
      <div>푸터</div>
    </div>
  );
};

export default AppLayout;
