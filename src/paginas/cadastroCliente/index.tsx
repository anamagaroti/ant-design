import MainLayout from "../../componentes/MainLayout";
import { Button, Form, Input, Select, Breadcrumb, Layout, Typography, Space, InputNumber} from 'antd';
import '../../componentes/MainLayout/style.css';
import { Link } from "react-router-dom";

const { Option } = Select;

const { Title } = Typography;

                const CadastroCliente = () => {
                const [form] = Form.useForm();

                const onGenderChange = (value: string) => {
                    switch (value) {
                    case 'masculino':
                        break;
                    case 'feminino':
                        break;
                    case 'outro':
                        break;
                    default:
                    }
                };
                const documentType = (value: string) => {
                    switch (value) {
                    case 'RG':
                        break;
                    case 'CPF':
                        break;
                    default:
                    }
                };

                const onReset = () => {
                    form.resetFields();
                };

        return(
            <MainLayout>
                <Layout>
                <div style={{
                        backgroundColor: '#fff',
                        padding: '1.5em'
                    }}>
                        <Breadcrumb
                        items={[
                            {
                                title: 'Cliente',
                            },
                            {
                                title: <Link to={'/cliente/inserir'}>Cadastro</Link>,
                            },
                            {
                                title: <Link to={'/lista'}>lista</Link>,
                            },
                        ]}/>
                        <br/>
                        <Title level={4}>Cadastro</Title>
                </div>
                    <Form
                    form={form}
                    name="control-hooks"
                    style={{ display: 'grid', 
                    justifyContent: 'center', 
                    margin: '1.5em',
                    backgroundColor: '#fff',
                    padding: '2em'
                    }}
                    >
                    <Space>
                        <Form.Item label="Nome"
                            name="nome" rules={[{ required: true,  message: 'informe seu nome'}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Sobrenome"
                            name="sobrenome" rules={[{ required: true,  message: 'informe seu sobrenome'}]}>
                            <Input />
                        </Form.Item>
                    </Space>
                    <Space direction="vertical">
                        <Form.Item label="Documento"
                        name="documento" rules={[{required: true, message: 'informe seu documento'}]}     
                        >
                            <Select
                            placeholder="selecione"
                            onChange={onGenderChange}
                            allowClear
                            >
                            <Option value="RG">RG</Option>
                            <Option value="CPF">CPF</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.documento !== currentValues.documento}
                        >
                            {({ getFieldValue }) =>
                            getFieldValue('documento') === 'RG' ? (
                                <Form.Item name="rg"
                                label="Digite seu RG" rules={[{ required: true, message: "ex: 99999999-9"}]}>
                                <Input />
                                </Form.Item>
                            ) : null
                            }
                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.documento !== currentValues.documento}
                        >
                            {({ getFieldValue }) =>
                            getFieldValue('documento') === 'CPF' ? (
                                <Form.Item 
                                name="cpf" label="Digite seu CPF" rules={[{ required: true, message: "ex: 111.222.333-44" }]}>
                                <Input />
                                </Form.Item>
                            ) : null
                            }
                        </Form.Item>

                        <Form.Item name="gender" label="Gênero" rules={[{ required: true, message: 'digite seu gênero' }]}>
                            <Select
                            placeholder="selecione"
                            onChange={onGenderChange}
                            allowClear>
                            <Option value="masculino">masculino</Option>
                            <Option value="feminino">feminino</Option>
                            <Option value="outro">outro</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                        >
                            {({ getFieldValue }) =>
                            getFieldValue('gender') === 'outro' ? (
                                <Form.Item name="customizeGender" label="Digite seu gênero" 
                                rules={[{ required: true }]}>
                                <Input />
                                </Form.Item>
                            ) : null
                            }
                        </Form.Item>
                        <Form.Item label="Email" 
                       name="email" rules={[{required: true, message: 'informe seu email'}]}
                    >
                    <Input />
                        </Form.Item>
                    </Space>
                    <Space>
                        <Form.Item label="Telefone" 
                        name="telefone" rules={[{message: 'informe seu telefone'}]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item label="Celular" 
                        name="celular" rules={[{message: 'informe seu celular'}]}
                        >
                        <Input />
                        </Form.Item>
                    </Space>
                    <Space>        
                        <Form.Item label="CEP"
                            name="cep" rules={[{required: true, message: 'informe seu cep'}]}
                            >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Cidade"
                            name="cidade" rules={[{required: true, message: 'informe sua cidade'}]}
                            >
                            <Input />
                        </Form.Item>
                    </Space>
                    <Space>
                        <Form.Item label="Bairro"
                            name="bairro"  rules={[{required: true, message: 'informe seu bairro'}]}
                            >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Rua"
                            name="Rua"  rules={[{required: true, message: 'informe sua rua'}]}
                            >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Número"
                            name="numero"  rules={[{required: true, message: 'informe seu número'}]}
                            >
                            <InputNumber />
                        </Form.Item>
                    </Space>
                    <Form.Item
                    style={{display: "flex"}}
                    >
                        <Button style={{margin: "5px"}} type="primary" htmlType="submit">
                            Cadastrar
                            </Button>

                            <Button htmlType="button" onClick={onReset}>
                            Limpar todos os campos
                            </Button>
                    </Form.Item>
                    </Form>
          </Layout>
        </MainLayout>
    )
}
 export default CadastroCliente;