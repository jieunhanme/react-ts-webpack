import AppSelection from "@src/@components/atoms/AppSelection";
import MultiLang from "@src/@components/atoms/MultiLang";
import NavTitle from "@src/@components/atoms/NavTitle";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-center">
        <NavTitle />
        <AppSelection />
        <nav className="flex gap-4">
          <Link to={"/test"}>TEST</Link>
          <Link to={"/apc"}>APC_HOME</Link>
          <Link to={"/apc/page1"}>APC_PAGE1</Link>
        </nav>
      </div>
      <MultiLang />
    </>
  );
}
