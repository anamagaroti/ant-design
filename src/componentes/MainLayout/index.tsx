import { Layout, Menu, MenuProps, theme, Typography, Space, Image } from 'antd';
import MenuLateral from '../MenuLateral';
import { UserOutlined, MonitorOutlined, NotificationOutlined, AntDesignOutlined } from '@ant-design/icons';
import ButtonMenu from "../ButtonMenu";
import './style.css'

const { Title } = Typography;
const { Content, Header, Footer } = Layout;

const items: MenuProps['items'] = [
  {
    label: 'nome',
    key: 'SubMenu',
    icon: <UserOutlined/>,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
    ],
  },
];

const MainLayout = ({ children}: { children: JSX.Element }) => {

    const onClick: MenuProps['onClick'] = (e) => {
      console.log('click ', e);
    }
    const {
      token: { colorBgContainer }
    } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh'}}>
      <Header
      style={{
        background: '#001529',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'sticky',  
        top: 0, 
        zIndex: 1
      }}>  
              <Space style={{alignItems: 'center'}}>
                <Image width={35} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                <h2 style={{color: '#fff', alignContent: 'center'}}>Ant Design Pro</h2>
              </Space>
              <Space>
                <Menu style={{
                backgroundColor: '#001529', 
                alignItems:'center',
                height: '3.5em', 
                color:'#fff'}} 
                onClick={onClick} mode="horizontal" items={items} />
              </Space>
      </Header> 
      <Layout className="site-layout"> 
        <MenuLateral />
          <Layout>
            <Content>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              GestorPro ©2023 Todos os direitos reservados.
            </Footer>
          </Layout>
        </Layout>
      </Layout>
  );
}; export default MainLayout;
