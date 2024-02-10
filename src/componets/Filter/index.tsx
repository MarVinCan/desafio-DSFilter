/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { useState } from "react";
import "./styles.css";

 type Props ={
  onFilter: Function;
 } 

export default function Filter({onFilter}:Props) {

  type FormData = {
    minValue?: number;
    maxValue?: number;
  }

 const[formData,setFormData] = useState<FormData>({});

 
 function handleInputChange(event:any){
  const value = event.target.value;
  const name = event.target.name;
  setFormData({...formData, [name]:value});
 }

 function handleSubmit(event:any){
  event.preventDefault();
  if(onFilter){
    onFilter((formData.minValue || 0), 
    (formData.maxValue || Number.MAX_VALUE));
  }

 }
  return (
    <div className="dsf-container dsf-card-filter">
      <form onSubmit={handleSubmit} className="dsf-form-items">
        <input 
        className="dsf-item-form" 
        name="minValue"
        value={formData.minValue || ""}
        type="text" 
        placeholder="Preço mínimo" 
        onChange={handleInputChange}/>

        <input 
        className="dsf-item-form" 
        name="maxValue"
        value={formData.maxValue || ""}
        type="text" 
        placeholder="Preço máximo"
        onChange={handleInputChange} />

        <button className="dsf-item-form" type="submit">Filtrar</button>
      </form>
    </div>
  );
}
