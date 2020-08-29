import React, { useState } from 'react'

const AddlistBtn = () => {
    const [showText, setShowText] = useState(false);

    return (
        <div className="task_list">
                <div className="add_list">
                    <button className="add_more_btn" id="add_more_btn" onClick={() => setShowText(!showText)}>
                        <span aria-label="Add More List">+</span> Add List
                    </button>
                    <div className={`list_name__form ${showText && 'show_list__menu'}`}>
                        <form>
                            <input type="text" placeholder="List Name" />
                            <button type="button" v="add_list_btn" id="add_list_btn">Add</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default AddlistBtn;
