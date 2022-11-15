import "./app-info.css";

const AppInfo = ({employeesLength}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Hozzikk</h1>
            <h2>Общее число сотрудников: {employeesLength}</h2>
            <h2>Премию получат:</h2>
        </div>
    )
}

export default AppInfo;