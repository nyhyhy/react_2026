import { useContext } from "react";
import Card from "../Card";
import { DarkModeContext } from "../../context/DarkModeContext";

const Main = () => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <>
            <main>
                <Card title="제목" darkMode={darkMode}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus iste laborum iusto ipsa cum est dolorum pariatur eaque ipsam at, sunt exercitationem dolor magnam, et esse. Porro laborum eligendi nemo.
                </Card>
            </main>
        </>
    )
}

export default Main;