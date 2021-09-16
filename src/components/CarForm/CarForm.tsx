import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake, chooseModel, choosePrice, chooseYear, chooseSeats, chooseTransmission, chooseEngine, chooseDimensions, chooseWeight, chooseMSRP } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    id: string;
    make: string;
    model: string;
    price: number;
    year: string;
    seats: string;
    transmission: string;
    engine: string;
    dimensions: string;
    weight: number;
    MSRP: number;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore()
    const id = useSelector<CarState>(state => state.id)
    const make = useSelector<CarState>(state => state.make)
    const model = useSelector<CarState>(state => state.model)
    const price = useSelector<CarState>(state => state.price)
    const year = useSelector<CarState>(state => state.year)
    const seats = useSelector<CarState>(state => state.seats)
    const transmission = useSelector<CarState>(state => state.transmission)
    const engine = useSelector<CarState>(state => state.engine)
    const dimensions = useSelector<CarState>(state => state.dimensions)
    const weight = useSelector<CarState>(state => state.weight)
    const MSRP = useSelector<CarState>(state => state.MSRP)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseMake(data.id))
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(choosePrice(data.price))
            dispatch(chooseYear(data.year))
            dispatch(chooseSeats(data.seats))
            dispatch(chooseTransmission(data.transmission))
            dispatch(chooseEngine(data.engine))
            dispatch(chooseDimensions(data.dimensions))
            dispatch(chooseWeight(data.weight))
            dispatch(chooseMSRP(data.MSRP))
            await server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="id">Make</label>
                    <Input {...register('id')} name="id" placeholder='Id' />
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name="make" placeholder='Make' />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder='Model' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder='Year' />
                </div>
                <div>
                    <label htmlFor="seats">Seats</label>
                    <Input {...register('seats')} name="seats" placeholder='Seats' />
                </div>
                <div>
                    <label htmlFor="transmission">Transmission</label>
                    <Input {...register('transmission')} name="transmission" placeholder='Transmission' />
                </div>
                <div>
                    <label htmlFor="engine">Engine</label>
                    <Input {...register('engine')} name="engine" placeholder='Engine' />
                </div>
                <div>
                    <label htmlFor="dimensions">Dimensions</label>
                    <Input {...register('dimensions')} name="dimensions" placeholder='Dimensions' />
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name="weight" placeholder='Weight' />
                </div>
                <div>
                    <label htmlFor="MSRP">MSRP</label>
                    <Input {...register('MSRP')} name="MSRP" placeholder='MSRP' />
                </div>
                <Button type='submit' color='primary' variant='contained'>Submit</Button>
            </form>
        </div>
    )
}