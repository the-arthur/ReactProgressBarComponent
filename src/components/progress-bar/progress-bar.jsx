
const progressBar = (props) => {

    const progressBarWidth = 1000;
    const totalValue = props.items.map(i => i.value).reduce((a, b) => a + b);
    const totalElementsCount = Math.floor(progressBarWidth / props.width);
    let totalElemetsArray = [];


    const progressBarRender = () => {
        props.items.forEach(e => {
            const ePercentage = e.value / (totalValue / 100);
            let eElements = Math.floor(totalElementsCount / 100 * ePercentage);
            eElements = eElements < 1 ? 1 : eElements;
            totalElemetsArray = totalElemetsArray.concat(
                Array(eElements).fill().map(
                    i =>
                        <span
                            key={Math.random() * e.value}
                            style={{ width: props.width, height: props.height, background: e.color }}
                            className="progress-bar-element"
                        >
                        </span>
                )
            )
        })
        return totalElemetsArray;
    }

    const progressBarLegendsRender = () => {
        return props.items.map(e =>
            <div key={e.color}>
                <i className="progress-bar-legends-list-item-indicator" style={{ background: e.color }}></i>
                <li className="progress-bar-legends-list-item">{e.name}: {e.value} ({(e.value / (totalValue / 100)).toFixed(2)} %)</li>
            </div>
        )
    }

    return (
        <div className="progress-bar-container">
            <h1 className="progress-bar-title" >ProgressBar Component | Total value: {totalValue}</h1>
            <div style={{ width: progressBarWidth }}>
                {progressBarRender()}
            </div>
            <ul className="progress-bar-legends-list">
                {progressBarLegendsRender()}
            </ul>
        </div>
    )
}

export default progressBar