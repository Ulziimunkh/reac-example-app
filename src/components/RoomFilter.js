import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title  from './Title'

// get all unique values
const getUnique = (items, value) => {
return [...new Set(items.map(item => item[value]))];
};
export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,type, capacity, price, minPrice, maxPrice, minSize, maxSize,  breakfast, pets
    } = context;
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    types =  types.map((item, index) => {
        return <option value={item} key ={index}>{item}</option>
    });
    // capacity
    let people = getUnique(rooms, 'capacity');
    people =  people.map((item, index) => {
        return <option value={item} key ={index}>{item}</option>
    }); 
    return (
        <section className="filter-container">
            <Title title="Search rooms"></Title>
            <form className="filter-form">
                {/* type */}
                <div className="form-group">
                    <label htmlFor="type"> room type</label>
                    <select name="type" id="type" value={type}
                    className="form-control" onChange={handleChange}>
                       {types}
                    </select>
                </div>
                {/* capacity */}
                <div className="form-group">
                    <label htmlFor="capacity"> Guests</label>
                    <select name="capacity" id="capacity" value={capacity}
                    className="form-control" onChange={handleChange}>
                       {people}
                    </select>
                </div>
                {/* price */}
                <div className="form-group">
                    <label htmlFor="capacity"> Room Price ${price}</label>
                    <input type="range" className="form-control" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} name="price"/>
                </div>
                  {/* size */}
                  <div className="form-group">
                    <label htmlFor="size"> room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" value={minSize} id="size" onChange={handleChange} className="size-input"/>
                        <input type="number" name="maxSize" value={maxSize} id="size" onChange={handleChange} className="size-input"/>
                    </div>
                </div>
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" checked={breakfast} onChange={handleChange} id="breakfast"/>
                        <lable htmlFor="breakfast">breakfast</lable>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <lable htmlFor="pets">Pets</lable>

                    </div>
                </div>
            </form>
        </section>
    )
}
