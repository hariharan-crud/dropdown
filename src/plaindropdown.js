import React, { useState ,useEffect } from 'react'
const Plaindropdown = () => {

    const [toggleSelect, setToggleSelect] = useState(false)

    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry"},
        { label: "Watermelon 🍉", value: "watermelon" },
        { label: "Pear 🍐", value: "pear" },
        { label: "Apple 🍎", value: "apple" },
        { label: "Tangerine 🍊", value: "tangerine" },
        { label: "Pineapple 🍍", value: "pineapple" },
        { label: "Peach 🍑", value: "peach" },
    ];

    const [selectedOptions ,setSelectedOptions] = useState([])

    const [searchfilter ,setSearchFilter] = useState('')

    const [filterArray ,setFilterArray] = useState([])

    useEffect(() => {
       console.log(selectedOptions)
    }, [selectedOptions])
            
    
    const handleChange=(e)=>{
        const checked = e.target.checked;
        if (checked) {
            console.log("check",e.target.value)
            setToggleSelect(!toggleSelect)
            setSelectedOptions([
                ...selectedOptions,
                e.target.value
            ])
       
        } else {
            setToggleSelect(!toggleSelect)
            setSelectedOptions( selectedOptions.filter((item)=>{
                return(item!==e.target.value)
            }))
        }
    }
   
    const searchFilter = (e) =>{
        setSearchFilter(e.target.value)
        
    //    if(searchfilter.split.length>0){
    //     const p = Array.from(e.target.value).reduce((a, v, i) => `${a}[^${e.target.value.substr(i)}]*?${v}`, '');
    //     const re = RegExp(p);
    //     setFilterArray( options.filter(v => v.value.match(re)))
       
    //    }
      
  

    }

    useEffect(()=>{
        console.log("df",selectedOptions)
    },[selectedOptions])

    const handleSelect = (e) =>{
       const checked = e.target.checked;

       if(checked){
            const checkbox=document.querySelectorAll("input[type = 'checkbox']")
            checkbox.forEach(function(checkbox){
                checkbox.checked = true;
            })
        //   console.log("elements",elements)
           setSelectedOptions(options.map((item)=>item.value))
       }else{
        const checkbox=document.querySelectorAll("input[type = 'checkbox']")
        checkbox.forEach(function(checkbox){
            checkbox.checked = false;
        })
           setSelectedOptions([])
       }
    }

  
  

    return (
        <div>
            <div  onClick={()=>{setToggleSelect(!toggleSelect)}}>
                {selectedOptions.length===0?<button>select from options</button>: <div className="cut-text">{selectedOptions.map((item)=><span style={{paddingLeft:"2px"}}>{item}</span>)}</div>}
            </div>
            <div>
                <span style={toggleSelect?{visibility:'hidden'}:{visibility:'visible'}}>

                    <input type="text" onChange={(e)=>{searchFilter(e)}} />
                    
                </span>
            </div>     
            
                {
                    <span className="innertube" style={toggleSelect?{visibility:'hidden'}:{visibility:'visible'}}>
                          <input type="checkbox" name="chckbox" onClick={(e)=>{handleSelect(e)}}/>  {"select all"}
                        {
                          
                            options.map((item ,id)=>{
                                return(
                                    <div className="optionbox">
                                        <span className="innertube">
                                        {searchfilter ? item.value.match(RegExp(Array.from(searchfilter).reduce((a, v, i) => `${a}[^${searchfilter.substr(i)}]*?${v}`, '')))&&<input type="checkbox" className="chckbox" value={item.value}   onClick={(e) => {handleChange(e)}}/>:<input type="checkbox" value={item.value}  className="chckbox" onClick={(e) => {handleChange(e)}}/>}
                                        </span>
                                        <span className="innertube">
                                           
                                            {
                                                searchfilter ? item.value.match(RegExp(Array.from(searchfilter).reduce((a, v, i) => `${a}[^${searchfilter.substr(i)}]*?${v}`, '')))&&item.label :item.label
                                            }

                                        </span>
                                    </div>
                                )
                            })
                        }
                    </span>
                }
         

        </div>
    )
}
export default Plaindropdown;
