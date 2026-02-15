import Header from '../components/maincomponents/Header'
import Footer from '../components/maincomponents/Footer'
import { Outlet } from 'react-router-dom'

export default function AppLayout()
{
    return <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
}