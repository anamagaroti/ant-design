import React from "react";
import { MenuProps, Dropdown} from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, MenuOutlined, DashboardOutlined, FormOutlined,
    UnorderedListOutlined, ProfileOutlined, CheckCircleOutlined,
    ExceptionOutlined, AccountBookOutlined } from '@ant-design/icons';
import '../MainLayout/style.css';

export default function ButtonMenu(){
    
    type MenuItem = Required<MenuProps>['items'][number];

        function getItem(
            label: React.ReactNode,
            key: React.Key,
            icon?: React.ReactNode,
            children?: MenuItem[],
            type?: 'group',
        ): MenuItem {
            return {
            key,
            icon,
            children,
            label,
            type,
            } as MenuItem;
        }

        const items: MenuItem[] = [
            getItem('Dashboard', '1', <DashboardOutlined />, [
                getItem('lala', '1'),
                getItem('lala', '1'),
            ]),
            getItem('Formulário', '2', <FormOutlined />, [
                getItem('bebe', '2'),
                getItem('bebe', '2'),
            ]),
            getItem('Lista', '3', <UnorderedListOutlined />, [
                getItem(<Link to={'/lista'}>Lista</Link>, '3'),
            ]),
            getItem('Perfil', '4', <ProfileOutlined />, [
                getItem('caca', '4'),
                getItem('caca', '4'),
            ]),
            getItem('Resultado', '5', <CheckCircleOutlined />, [
                getItem('dede', '5'),
                getItem('dede', '5'),
            ]),
            getItem('Exceção', '6', <ExceptionOutlined />, [
                getItem('fafa', '6'),
                getItem('fafa', '6'),
            ]),
            getItem('Cliente', '7', <UserOutlined />, [
                getItem(<Link to={'/cliente/inserir'}>Cadastro</Link>, '7'),
            ]),
            getItem('Conta', '8', <AccountBookOutlined />, [
                getItem('gaga', '8'),
                getItem('gaga', '8'),
            ]),
        ];  

        return(
            
            <Dropdown className='menu-botao' menu={{items}} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
                <MenuOutlined />
            </a>
            </Dropdown>  
        )
} 