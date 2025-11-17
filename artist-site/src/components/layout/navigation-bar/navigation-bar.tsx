import {Menu} from 'antd'
import type {MenuProps} from 'antd'
import {useNavigate, useLocation} from '@tanstack/react-router'

const items: MenuProps['items'] = [
    {
        label: 'Главная',
        key: '/',
    },
    {
        label: 'Проекты',
        key: '/projects',
    },
    {
        label: 'Инфо',
        key: '/about',
    },
    {
        label: 'Контакты',
        key: '/contact',
    },
]

export function NavigationBar() {
    const navigate = useNavigate()
    const location = useLocation()

    const onMenuClick: MenuProps['onClick'] = (e) => {
        navigate({to: e.key})
    }

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            onClick={onMenuClick}
            selectedKeys={[location.pathname]}
            items={items}
            style={{lineHeight: '64px'}}
        />
    )
}