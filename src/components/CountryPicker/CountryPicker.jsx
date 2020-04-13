import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries,setFetchedCountries] = useState([]);
    useEffect(()=>{
        const fetchCountriesFunc = async () => {
            setFetchedCountries(await fetchCountries());
        };
        fetchCountriesFunc();
        
    },[fetchedCountries]);
    
    return (
       
        <FormControl className={styles.formControl}>
            <NativeSelect onChange= {(e) => (handleCountryChange(e.target.value))}>
                <option value="">Global</option>
                {fetchedCountries?fetchedCountries.map((country, i) => (<option key = {i} value={country}>{country}</option>)):<option>Select Country</option>}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;