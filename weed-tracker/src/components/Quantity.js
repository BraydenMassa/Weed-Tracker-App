const Quantity = () => {
    return (
        <div className="quantity-container input">
            <label htmlFor="quantity">Quantity</label>
            <input type="text" id="quantity" name="quantity" />
            <select name="quantity-units" id="quantity-units">
                <option value="g">Grams</option>
                <option value="mg">Milligrams</option>
                <option value="ml">Millileters</option>
            </select>
        </div>
    )
}

export default Quantity