export default function TabButton({ children, cica, ...props}) {

 
    return(
    <li>
        <button className={cica ? "active" : ''} {...props}>{children}</button>
    </li>
    )
}