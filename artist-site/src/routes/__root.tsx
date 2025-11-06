import {createRootRoute, Outlet} from '@tanstack/react-router'
import {Layout} from "antd";
import {NavigationBar} from "@/components/layout/navigation-bar";
import {Content, Header} from "antd/es/layout/layout";

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <>
            {
                <Layout>
                    <Header style={{padding: 0}}>
                        <NavigationBar/>
                    </Header>
                    <Content style={{padding: '20px'}}>
                        <Outlet/>
                    </Content>
                </Layout>
            }
        </>
    )
}