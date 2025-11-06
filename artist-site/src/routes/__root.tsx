import {createRootRoute, Outlet} from '@tanstack/react-router'
import {Layout} from 'antd'
import {NavigationBar} from "@/components/layout/navigation-bar";

const {Header, Content} = Layout

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <Layout style={{minHeight: '100vh'}}>

            <Header style={{padding: 0}}>
                <NavigationBar/>
            </Header>

            <Content style={{padding: '24px'}}>
                <div
                    style={{
                        padding: 24,
                        background: '#fff',
                        borderRadius: 8
                    }}
                >
                    <Outlet/>
                </div>
            </Content>

        </Layout>
    )
}