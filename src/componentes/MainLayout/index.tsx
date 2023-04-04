import React, { useState } from 'react';
import { MenuProps } from 'antd';
import { Layout, Menu, theme} from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import Navbar from '../Navbar'; 
import './style.css'

const { Content, Sider, Footer } = Layout;

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

const MainLayout = ({ children }: { children: JSX.Element }) => {

    const [collapsed, setCollapsed] = useState(false);

    const {
      token: { colorBgContainer }
    } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh'}}>
        <Sider  className='menu-lateral' 
        collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme="dark">   
          <div
            style={{
              height: 32,
              margin: 16,
              background: 'rgba(255, 255, 255, 0.2)'
            }}
          />
            <Menu theme="dark" mode="inline" items={items}/>
        </Sider>
        <Layout className="site-layout"> 
          <Navbar />        
          <Content style={{ margin: '0 16px', padding: '16px 0' }}>
            <div
              style={{
                padding: 24,
                height: '100%',
                background: colorBgContainer,
                display: 'grid',
                justifyContent: 'center'
              }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            GestorPro ©2023 Todos os direitos reservados.
          </Footer>
        </Layout>
      </Layout>
  );
}; export default MainLayout;
