import React
 from "react";
 import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

import Items from "../Pages/Items";

export const SidebarData=[
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Items',
        path: 'items',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'History',
        path: 'history',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
]