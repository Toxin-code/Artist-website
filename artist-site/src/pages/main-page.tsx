import {Carousel, Typography, Button, Row, Col} from 'antd'
import {Link} from '@tanstack/react-router'
import type {CSSProperties} from "react";

const contentStyle: CSSProperties = {
    height: '500px',
    color: '#fff',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    textShadow: '0 0 10px rgba(0,0,0,0.7)',
}

export function MainPage() {
    return (
        <div style={{padding: '24px'}}>
            <Row gutter={[24, 24]} justify="center" align="middle">
                <Col xs={24} md={10}>
                    <Typography.Title>Эдвард Мунк</Typography.Title>
                    <Typography.Paragraph style={{fontSize: '16px'}}>
                        Норвежский живописец и график, один из первых
                        представителей экспрессионизма. Его творчество пропитано
                        темами любви, смерти, тоски и меланхолии.
                    </Typography.Paragraph>

                    <Typography.Paragraph style={{fontSize: '16px'}}>
                        Самая известная работа — «Крик» — стала одним из
                        самых узнаваемых образов в мировом искусстве.
                    </Typography.Paragraph>

                    <Button type="primary" size="large">
                        <Link to="/projects">Смотреть галерею</Link>
                    </Button>
                </Col>

                <Col xs={24} md={14}>
                    <Carousel autoplay dotPosition="bottom">
                        <div>
                            <div
                                style={{
                                    ...contentStyle,
                                    backgroundImage: 'url(/scream.jpg)',
                                }}
                            >
                                <Typography.Title level={2} style={{color: '#fff'}}>
                                    Крик
                                </Typography.Title>
                            </div>
                        </div>

                        <div>
                            <div
                                style={{
                                    ...contentStyle,
                                    backgroundImage: 'url(/madonna.jpg)',
                                }}
                            >
                                <Typography.Title level={2} style={{color: '#fff'}}>
                                    Мадонна
                                </Typography.Title>
                            </div>
                        </div>

                        <div>
                            <div
                                style={{
                                    ...contentStyle,
                                    backgroundImage: 'url(/danceOfLife.jpg)',
                                }}
                            >
                                <Typography.Title level={2} style={{color: '#fff'}}>
                                    Танец жизни
                                </Typography.Title>
                            </div>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </div>
    )
}