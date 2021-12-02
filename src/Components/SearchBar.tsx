import {FC, useState} from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { SearchIcon } from '@heroicons/react/solid'
const SearchBar: FC =()=> {
    const [userInput,setUserInput] = useState("");
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date())
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }

    function handleChange(ranges:any){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }
    return (
        <>
        <div className="flex items-center border-2 rounded-full py-2 w-80 mt-10 mx-auto shadow-md">
            <input className="flex-grow pl-5 bg-transparent outline-none font-sans" type="text" onChange={(e)=>setUserInput(e.target.value)} value={userInput} placeholder="Start your search..."/>
            <SearchIcon className="h-8 bg-blue-450 text-white rounded-full p-2 cursor-pointer mx-2"/>
        </div >
        {userInput && <div className="mx-auto font-sans mt-3 w-80">
        <DateRange
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#23B5B5"]}
        onChange={handleChange}
      />
      <div className="flex border-t-2 pt-2">
          <button onClick={()=>setUserInput("")} className="flex-grow text-gray-500">Cancel</button>
          <button className="flex-grow text-blue-450">Search</button>
      </div>
      </div>}
      
        </>

    )
}

export default SearchBar
