import { List, Card, Typography } from 'antd'

const { Meta } = Card

const galleryData = [
    {
        id: 1,
        title: 'Крик',
        description: '1893, Темпера и пастель на картоне',
        imageUrl: '/scream.jpg',
    },
    {
        id: 2,
        title: 'Мадонна',
        description: '1894, Масло на холсте',
        imageUrl: '/madonna.jpg',
    },
    {
        id: 3,
        title: 'Больная девочка',
        description: '1886, Масло на холсте',
        imageUrl: '/sick-child.jpg',
    },
    {
        id: 4,
        title: 'Танец жизни',
        description: '1899–1900, Масло на холсте',
        imageUrl: '/danceOfLife.jpg',
    },
    {
        id: 5,
        title: 'Вампир',
        description: '1893–1894, Масло на холсте',
        imageUrl: '/vampire.jpg',
    },
    {
        id: 6,
        title: 'Меланхолия',
        description: '1892, Масло на холсте',
        imageUrl: '/melancholy.jpg',
    },
    {
        id: 7,
        title: 'Девушка у окна',
        description: '1892, Масло на холсте',
        imageUrl: '/woman-behind-window.jpg',
    },
    {
        id: 8,
        title: 'Девушки у реки',
        description: '1892, Масло на холсте',
        imageUrl: '/womans-on-the-river.jpg',
    },
]

export function GalleryPage() {
    return (
        <div style={{ padding: '24px' }}>
            <Typography.Title level={2} style={{ marginBottom: '24px' }}>
                Галерея работ
            </Typography.Title>

            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 4,
                    xxl: 4,
                }}

                dataSource={galleryData}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            hoverable
                            cover={<img alt={item.title} src={item.imageUrl} />}
                        >
                            <Meta title={item.title} description={item.description} />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    )
}