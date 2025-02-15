import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { closePopup } from "../../redux/popupSlice";

export default function PopupContainer() {
  const dispatch = useDispatch();
  const { title, isOpen, body } = useSelector(
    (state: RootState) => state.popup
  );

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700">
      <div className="bg-gray-400 p-6 rounded-lg shadow-lg w-[400px] h-[500px] relative">
        <div className="flex justify-between items-center">
          <p className="text-center w-full h-fit">{title}</p>
          <button
            className="absolute right-4 top-6.5 bg-red-500 text-white px-2 py-0.5 rounded cursor-pointer -mt-1"
            onClick={() => dispatch(closePopup())}
          >
            X
          </button>
        </div>
        <div>{body}</div>
      </div>
    </div>
  );
}
