import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../index";
import {LOGIN_ROUTE} from "../../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const Navbar = observer(() => {
    const history = useNavigate()
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        history(LOGIN_ROUTE)
    }

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Поиск..."
                        // value={value}
                        // onChange={onChange()}
                    />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div>
                        <Button variant={"outline-danger"} onClick={logOut}>Выйти</Button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Navbar;