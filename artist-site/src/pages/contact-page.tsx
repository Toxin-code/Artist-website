import {Form, Input, Button, Typography, notification, Row, Col} from 'antd'

const {Title, Paragraph} = Typography
const {TextArea} = Input

export function ContactPage() {
    const [api, contextHolder] = notification.useNotification()
    const [form] = Form.useForm()

    const onFinish = (values: any) => {
        console.log('Success:', values)

        setTimeout(() => {
            api.success({
                message: 'Сообщение отправлено',
                description: 'Спасибо за ваше обращение! Мы ответим вам на указанный email в ближайшее время.',
                placement: 'topRight',
            })
            form.resetFields()
        }, 500)
    }

    return (
        <div style={{padding: '24px'}}>
            {contextHolder}
            <Row justify="center">
                <Col xs={24} md={12} lg={8}>
                    <div style={{textAlign: 'center', marginBottom: '32px'}}>
                        <Title level={2}>Связаться с нами</Title>
                        <Paragraph type="secondary">
                            Если у вас есть вопросы по работам, предложения о сотрудничестве
                            или вы нашли ошибку на сайте, напишите нам.
                        </Paragraph>
                    </div>

                    <Form
                        form={form}
                        name="contact"
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                        size="large"
                    >
                        <Form.Item
                            label="Ваше имя"
                            name="name"
                            rules={[{required: true, message: 'Пожалуйста, введите ваше имя!'}]}
                        >
                            <Input placeholder="Иван Иванов"/>
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {required: true, message: 'Пожалуйста, введите email!'},
                                {type: 'email', message: 'Введите корректный email!'},
                            ]}
                        >
                            <Input placeholder="example@mail.com"/>
                        </Form.Item>

                        <Form.Item
                            label="Тема обращения"
                            name="subject"
                            rules={[{required: true, message: 'Пожалуйста, укажите тему!'}]}
                        >
                            <Input placeholder="Техническая поддержка / Сотрудничество"/>
                        </Form.Item>

                        <Form.Item
                            label="Сообщение"
                            name="message"
                            rules={[{required: true, message: 'Пожалуйста, введите сообщение!'}]}
                        >
                            <TextArea rows={4} placeholder="Опишите ваш вопрос..."/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Отправить сообщение
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}