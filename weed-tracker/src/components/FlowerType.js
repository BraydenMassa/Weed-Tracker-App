const FlowerType = () => {
    return (
        <div className='input'>
            <label for="flower-type">Flower-Type</label>
            <select name="flower-type" id="flower-type">
                <option value="sativa">Sativa</option>
                <option value="indica">Indica</option>
                <option value="hybrid">Hybrid</option>
                <option value="sativa-hybrid">Sativa-Dominant Hybrid</option>
                <option value="indica-hybrid">Indica-Dominant Hybrid</option>
            </select>
        </div>
    )
}

export default FlowerType