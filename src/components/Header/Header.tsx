import Button from "../Utils/Button";
import { openPopup } from "../../redux/popupSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      openPopup({
        title: "Login Popup !",
        body: <div>Login Form !</div>,
      })
    );
  };

  return (
    <div className="w-full h-20 sticky top-0 bg-gray-950 flex justify-between px-10 items-center text-white">
      <div className="p-2 rounded-xl hover:bg-gray-500 duration-200 transition-all">
        <a href="/">Home</a>
      </div>
      <div className="flex gap-5 justify-center items-center p-2">
        {MenuList &&
          MenuList?.map((d) => (
            <div className="p-2 rounded-xl hover:bg-gray-500 transition-all duration-200 cursor-pointer">
              {d.value}
            </div>
          ))}
        <Button
          class="border p-2 rounded-xl hover:bg-green-100 hover:text-black cursor-pointer"
          textButton="Login"
          isActive={true}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}

const MenuList = [
  {
    key: "home",
    value: "Home",
  },
  {
    key: "skill",
    value: "Skill",
  },
  {
    key: "education",
    value: "Education",
  },
  {
    key: "portfolio",
    value: "Portfolio",
  },
];
