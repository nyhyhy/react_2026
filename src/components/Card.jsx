
export default function Card( { title, children }) {
    return (
        <div className="card" style={{backgroundColor: '#f1e5ff'}}>
            <div className="card__header">{title}</div>
            <div className="card__body">
               {children}
            </div>
        </div>
    );
}