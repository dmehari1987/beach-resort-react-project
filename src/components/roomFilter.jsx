import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from './title';

//get all unique types
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    // console.log(context);
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;
    //get unique
    let types = getUnique(rooms, 'type')
    //add 'all'
    types = ['all', ...types]
    //map to JSX
    types = types.map((item, index)=>{
        return <option value={item} key= {index} >{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index)=> {
        return <option key= {index} value={item} >{item}</option>
    })

    return ( 
        <section className= "filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type starts */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type} 
                        className="form-control" 
                        onChange={handleChange} >
                            {types}
                    </select>
                </div>
                {/* select 'type' ends */}
                {/* select 'capacity' starts */}
                <div className="form-group">
                    <label htmlFor="type">Guests</label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className="form-control" 
                        onChange={handleChange} >
                            {people}
                    </select>
                </div>
                {/* select 'capacity' ends */}
                {/* room price starts here */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price : ${price}
                    </label>
                    <input 
                        type="range" 
                        id= "price" 
                        value = {price} 
                        name= "price" 
                        min={minPrice} 
                        max= {maxPrice}
                        onChange={handleChange}
                        className="form-control"
                        />
                </div>
                {/* room price ends here */}
                {/* filter by size starts here */}
                <div className="form-group">
                    <label htmlFor="size">
                        room size
                    </label>
                    <div className="size-inputs">
                        <input 
                            type="number" 
                            name="minSize" 
                            id="size" 
                            value= {minSize} 
                            onChange={handleChange}
                            className= "size-inputs"
                        />
                        <input 
                            type="number" 
                            name="maxSize" 
                            id="size" 
                            value= {maxSize} 
                            onChange={handleChange}
                            className= "size-inputs"
                        />
                    </div>
                </div>
                {/* filter by size ends here */}
                {/* extras starts here */}
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                            type="checkbox" 
                            name="breakfast" 
                            id="breakfast"
                            checked= {breakfast}
                            onChange={handleChange} 
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            type="checkbox" 
                            name="pets" 
                            id="pets"
                            checked= {pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* extras ends here */}
            </form>
        </section> );
}
 


export default RoomFilter;