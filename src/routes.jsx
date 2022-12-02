import react from 'react'


const Envio = react.lazy(()=>import('./views/Envio'))
const Home = react.lazy(()=>import('./layout/DefaultLayout'))

const routes = [
    {path: '/', exact:true , name:'Home' },
    {path:'/Envio', name:'Envio', element:Envio },
]

export default routes