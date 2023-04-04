import React from 'react';
import { UserOutlined} from '@ant-design/icons';
import { Avatar, Col, Dropdown, MenuProps, Row} from 'antd';
import '../MainLayout/style.css';
import { Layout, theme } from 'antd';
import ButtonMenu from '../ButtonMenu';

const { Header } = Layout;

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

const Navbar = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  function signOut(e: React.MouseEvent) {
    e.preventDefault();
  }

  const items: MenuProps['items'] = [
    getItem(<a onClick={signOut}>Sair</a>, '1'),
  ];

  return (
    <Header
      style={{
        padding: 12,
        background: colorBgContainer,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'sticky',  
        top: 0, 
        zIndex: 1
      }}>
          <div style={{
              marginRight: '80%'}}>
              <ButtonMenu />
          </div>
          
            <Dropdown menu={{ items }} trigger={['click']}>
                <div style={{ cursor: 'pointer' }} onClick={(e) => e.preventDefault()}>
                  <Avatar size={35} icon={<UserOutlined />} style={{ marginRight: 6 }} />
                </div>
            </Dropdown>
    </Header>
  );
};

export default Navbar;
