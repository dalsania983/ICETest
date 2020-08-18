import React from 'react';
import HomeStyle from './HomeStyle';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seatCount: 10,
            selectedSeat: [],
            finalSelect: [],
            price: 250,
            TotalPrice: 0,
        }
    }
    handleChange(e) {
        const {selectedSeat,price} =this.state;
        let isChecked = e.target.checked;
        if (isChecked) {
            selectedSeat.push(e.target.id);
        } else {
            let index = selectedSeat.indexOf(e.target.id);
            selectedSeat.splice(index, 1);
        }
        this.setState({ selectedSeat: [...selectedSeat],TotalPrice: selectedSeat.length * price });

    }
    ConfirmSets(){
        const {finalSelect,selectedSeat}=this.state;
        alert(`your ${selectedSeat.length+finalSelect.length} seat is confirmed`)
        this.setState({ finalSelect: [...selectedSeat, ...finalSelect], selectedSeat: [] });
    }
    render() {
        const { seatCount, selectedSeat, finalSelect, TotalPrice} = this.state;
        return (
            <HomeStyle>
                <div clssName='mainContainer'>
                    <div className="plane">
                        <ol className="cabin fuselage">
                            {Array.apply(null, { length: seatCount }).map((e, j) => (
                                <li className={'row row--' + j + 1} key={j}>
                                    <ol className="seats" type="A">
                                        {
                                            Array.apply(null, { length: 6 }).map((e, i) => (
                                                <li className="seat" key={i}>
                                                    <input type="checkbox" id={`${j + 1}` + String.fromCharCode(65 + i)} disabled={finalSelect.includes(`${j + 1}` + String.fromCharCode(65 + i))} onChange={e => this.handleChange(e)} />
                                                    <label htmlFor={`${j + 1}` + String.fromCharCode(65 + i)}>{`${j + 1}` + String.fromCharCode(65 + i)}</label>
                                                </li>
                                            ))
                                        }
                                    </ol>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className='busCart'>
                    <div className='selectHeader'>your selection</div>
                    <label>TotalPrice:</label>
                    <span>{TotalPrice} </span><br/>
                    <label>selected sets :</label>
                    <div style={{ display: 'flex' }}>
                        {selectedSeat.map((dl, key) => (
                            <div className='SelectedSets' key={key}>{dl}</div>
                        ))}
                    </div>
                    <div className='Confirm' onClick={() =>this.ConfirmSets()}>Confirm Sets</div>
                </div>
            </HomeStyle>
        )
    }
}
export default Home;
