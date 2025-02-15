import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PopupContainer from "../../components/Utils/PopupContainer";

export default function Home() {
  return (
    <div className="w-full h-dvw">
      <Header />
      <PopupContainer />
      <Content />
      <Footer />
    </div>
  );
}
