import {Menu} from 'antd'
import type {MenuProps} from 'antd'
import {useNavigate, useLocation} from '@tanstack/react-router'

const items: MenuProps['items'] = [
    {
        label: 'Главная',
        key: '/',
    },
    {
        label: 'Вторая',
        key: '/second',
    },
    {
        label: 'Третья',
        key: '/third',
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