import React, { useRef, useState } from 'react';
import { Breadcrumb, Button, DatePicker, Dropdown, Layout, MenuProps, Space, Table, Form, Input, InputRef  } from 'antd';
import MainLayout from '../../componentes/MainLayout';
import { Link } from 'react-router-dom';
import {DownOutlined, SmileOutlined, SearchOutlined} from '@ant-design/icons'
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';

interface DataType {
  key: string;
  name: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
  },
  {
    key: '2',
    name: 'Joe Black',
  },
  {
    key: '3',
    name: 'Jim Green',
  },
  {
    key: '4',
    name: 'Jim Red',
  },
];

const Lista: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

    return (

      <MainLayout>
        <Layout>
          <Layout>
            <div style={{
              margin: '0.5em',
              padding: '1em'
            }}>
              <Breadcrumb
                items={[
                  {
                    title: 'Lista',
                  },
                  {
                    title: <Link to={'/lista'}>lista</Link>,
                  },
                  {
                    title: <Link to={'/cliente/inserir'}>Cadastro</Link>,
                  },
                ]} />
            </div>
            <div style={{
              backgroundColor: '#fff',
              margin: '1em',
              padding: '1em',
              alignContent: 'center'
            }}>
              <Form>
                <Space>
                  <Form.Item label="Data inicial">
                    <DatePicker />
                  </Form.Item>

                  <Form.Item label="Data final">
                    <DatePicker />
                  </Form.Item>
                </Space>
                <Space style={{ marginLeft: '20em' }}>

                  <Button>
                    Limpar
                  </Button>

                  <Button>Filtrar</Button>
                </Space>
              </Form>
            </div>
          </Layout>
        <Layout>
         
        </Layout>
        </Layout>
      </MainLayout>

      );
}

export default Lista;