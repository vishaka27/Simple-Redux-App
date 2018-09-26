import React from 'react';
import { store } from './store';
import setTechnology from './actions';

const ButtonGroup = ({ props }) => {
    return (
        <div
            className="button-group-container"
            style={{
                display: 'flex',
                marginTop: '20px'
            }}
        >
            {props.map(buttonItem => {
                return (
                    <div
                
                        data-tech={buttonItem.tech}
                        key={buttonItem.tech}
                        className='button-item'
                        style={{
                            margin: '10px',
                            border: '1px solid',
                            padding: '10px',
                            borderRadius: '15px',
                            background: 'lavender',
                            cursor: 'pointer'
                        }}
                        onClick={(e) => dispatchActionFunction(e)}
                    >
                        {buttonItem.tech}
                    </div>
                )
            })}
        </div>
    );
}

function dispatchActionFunction(e) {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
}

export default ButtonGroup;