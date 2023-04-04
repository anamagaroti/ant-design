import React from "react";
import { MenuProps, Dropdown} from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import '../MainLayout/style.css';

export default function ButtonMenu(){
    
    type MenuItem = Required<MenuProps>['items'][number];

        function getItem(
            label: React.ReactNode,
            key: React.Key,
            icon?: React.ReactNode,
            children?: MenuItem[]
        ): MenuItem {
            return {
            key,
            icon,
            children,
            label
            } as MenuItem;
        }

        const items: MenuItem[] = [
            getItem(<Link to={'/cliente/inserir'}>Cliente</Link>, '1', <UserOutlined />),
        ];  

        return(
            <Dropdown className='menu-botao' menu={{items}} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
                <MenuOutlined />
            </a>
            </Dropdown>  
        )
} 