
const CannabisType = () => {

    return (
        <div className='input'>
            <label htmlFor="cannabis-type">Cannabis Type</label>
            <select name="cannabis-type" id="cannabis-type">
                <option value="flower">Flower</option>
                <option value="preground">Pre-ground</option>
                <option value="shake">Shake</option>
                <option value="preroll">Preroll</option>
                <option value="wax">Wax</option>
                <option value="rosin">Resin/Rosin</option>
                <option value="edibles">Edibles</option>
                <option value="disposables">Disposables</option>
                <option value="cartridges">Cartridges</option>
                <option value="pods">Pods</option>
                <option value="tinctures">Tinctures</option>
                <option value="topicals">Topicals</option>
            </select>
        </div>
    )
}

export default CannabisType