import { useState } from "react";


const Form = (props) => {

    const [formData, setFormData] = useState({
        city: "",
        code: ""
    })
 

    const handleChange = (e) => {
        const {id, value}= e.target
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       props.getLocationWeather(formData)
       setFormData({
        city:"",
        code:""
       })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col max-w-xl m-5">
                <label htmlFor="city" className="text-zinc-600  text-sm md:text-md font-medium">Enter city name </label>
                <input type="text" id="city" onChange={handleChange} value = {formData.city} className=" text-sm border border-gray-200 p-2 rounded-lg mb-4" placeholder="eg. nairobi" />
                <label htmlFor="code" className="text-zinc-600 text-sm md:text-md font-medium">Enter country code (optional)</label>
                <input type="text" id="code" onChange={handleChange} value = {formData.code} className="text-sm border border-gray-200 p-2 rounded-lg mb-4" placeholder="eg. 254" />
                <button className="px-5 py-2.5 rounded-lg max-w-[140px] bg-indigo-600 hover:bg-indigo-900 hover:outline-double text-white">Get weather</button>
            </div>
        </form>
    )
}

export default Form;