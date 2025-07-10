import React from 'react'
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import "./Navbar.css"
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../../state/store';
import Cart from '../cart/Cart';


const Navbar = () => {
    const {auth,cart} = useSelector(store=>store)
    const navigate=useNavigate()

    const handleAvatarClick=()=>{
        if(auth.user?.role==="ROLE_CUSTOMER"){
            navigate("/my-profile")
        }
        else {
           navigate("admin/restaurant") 
        }
    }
  return (
    <Box 
        className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] 1g:px-20 flex justify-between'>
        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <li onClick={()=>navigate("/")} className='logo font-semibold text-gray-300 text-2xl'>
                Zosh food
            </li>
        </div>
        <div className='flex items-center space-x-2 lg:space-x-10'>
            <div>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
            </div>
            <div>
                {auth.user?<Avatar onClick={handleAvatarClick} sx={{bgcolor:"white",color:"primary.main"}}>{auth.user?.fullName[0].toUpperCase()}</Avatar>:
                <IconButton onClick={()=>navigate("/account/login")}>
                    <PersonIcon />
                </IconButton>}
            </div>
            <div>
                <IconButton onClick={()=>navigate("/cart")}>
                    <Badge color="primary" badgeContent={cart.cartItems?.length}>
                        <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                    </Badge>
                </IconButton>
            </div>
        </div>
    </Box>
  );
};

export default Navbar;


