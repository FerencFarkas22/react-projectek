export default function TabButton({ children, onSelect, cica }) {

 
    return(
    <li>
        <button className={cica ? "active" : ''} onClick={onSelect}>{children}</button>
    </li>
    )
}