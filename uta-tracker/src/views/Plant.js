import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postText } from '../state/actions';
import PlantImg from './PlantImg';
import {
    TextField,
    FormControl,
    FormHelperText,
    Button
} from '@material-ui/core';
const Plant=()=>{
    const [happiness,setHappiness] = useState(20);
    const [text, setText] = useState('');
    const {polarity,type} = useSelector(state=>state);
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        setText(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text !== ''){
            dispatch(postText(text));
        }
    };
    useEffect(()=>{
        // setHappiness(
        //     Math.min(Math.max(
        //         happiness-Math.min(Math.max(
        //             Math.round(polarity*10)
        //             ,-15),15)
        //         ,0),51)
        //     );
        if(type==='positive'){
            setHappiness(0);
        }
        else if(type==='negative'){
            setHappiness(51);
        }
        else{
            setHappiness(20);
        }
        // console.log(polarity,Math.round(polarity*5),happiness+Math.round(polarity*5));
    },[type]);
    console.log('happiness',happiness,'polarity',polarity);
    return(
        <>
            <PlantImg happiness={happiness}/>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <FormControl>
                    <TextField 
                        id='component-helper'
                        label='Text'
                        value={text}
                        onChange={handleChange}
                        aria-describedby='component-helper-text'
                        multiline={true}
                    />
                    <FormHelperText id='component-helper-text'>Say something nice!</FormHelperText>
                </FormControl>
                <Button type='submit'>Say</Button>
            </form>
            {/* <TextField multiline={true} label={'Say something'} /> */}
        </>
    );
};  
export default Plant;