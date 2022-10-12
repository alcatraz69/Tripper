import { FC, useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { SearchIcon } from "@heroicons/react/solid";
import { format } from "date-fns";
import {
  CounterButton,
  DatePickerWrapper,
  GuestOptions,
  OptionDiv,
  SearchBarContainer,
  VDivider,
} from "./styles";
import { Grid } from "@mui/material";

const SearchBar: FC = () => {
  const [userInput, setUserInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestOptions,setGuestOptions] = useState<any>({
    adults: 0,
    children: 0,
    rooms: 0
  })
  const [openDatePicker, toggleDatePicker] = useState(false);
  const [openGuestOptions, toggleGuestOptions] = useState(false);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleChange(ranges: any) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  // function handleClose(e : any) {
  //   e.stopPropagation();
  //   toggleDatePicker(false);
  //   toggleGuestOptions(false);
  // }

  function handleDateClick() {
    toggleDatePicker(!openDatePicker);
    toggleGuestOptions(false);
  }

  function handleGuestOptions() {
    toggleGuestOptions(!openGuestOptions);
    toggleDatePicker(false);
  }

  function handleOptionChange(name : any, operation : any) {
    setGuestOptions((prevState : any)=>{
      return {...prevState, [name]: operation === 'i' ? guestOptions[name] + 1 : guestOptions[name] - 1}
    })
  }

  // useEffect(() => {
  //   console.log("start:", startDate);
  //   console.log("end:", endDate);
  //   console.log("userInput:", userInput);
  // }, [startDate, endDate, userInput]);
  return (
    <>
      <SearchBarContainer>
        <input
          className="flex-grow pl-5 bg-transparent outline-none font-sans"
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          placeholder="Start your search..."
        />
        <VDivider
          orientation="vertical"
          variant="middle"
          flexItem
          style={{ fontSize: "20px" }}
        />
        <OptionDiv onClick={handleDateClick}>{`${format(startDate,'dd MMM')} - ${format(endDate,'dd MMM')}`}</OptionDiv>
        <VDivider orientation="vertical" variant="middle" flexItem />
        <OptionDiv onClick={handleGuestOptions}>{guestOptions.adults === 0 && guestOptions.children === 0 && guestOptions.rooms === 0 ? 'Add guests' : `${guestOptions.adults} Guests - ${guestOptions.rooms} Room`}</OptionDiv>
        <SearchIcon className="h-8 bg-blue-450 text-white rounded-full p-2 cursor-pointer mx-4" />
      </SearchBarContainer>
      {openDatePicker && (
        <DatePickerWrapper>
          <DateRange
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#23B5B5"]}
            onChange={handleChange}
          />
        </DatePickerWrapper>
      )}
      {openGuestOptions && (
        <DatePickerWrapper>
          <GuestOptions container className="guest-options" direction="column" rowGap={3}>
            <Grid item container justifyContent='space-between'>
              <Grid item xs={5}>Adults</Grid>
              <Grid item container xs columnGap={3} alignItems='center'>
                <CounterButton disabled={guestOptions.adults < 1} onClick={()=>handleOptionChange('adults','d')}>-</CounterButton>
                <Grid>{guestOptions.adults}</Grid>
                <CounterButton onClick={()=>handleOptionChange('adults','i')}>+</CounterButton>
              </Grid>
            </Grid>
            <Grid item container justifyContent='space-between'>
              <Grid item xs={5}>Children</Grid>
              <Grid item container xs columnGap={3} alignItems='center'>
                <CounterButton disabled={guestOptions.children < 1} onClick={()=>handleOptionChange('children','d')}>-</CounterButton>
                <Grid>{guestOptions.children}</Grid>
                <CounterButton onClick={()=>handleOptionChange('children','i')}>+</CounterButton>
              </Grid>
            </Grid>
            <Grid item container justifyContent='space-between'>
              <Grid item xs={5}>Rooms</Grid>
              <Grid item container xs columnGap={3} alignItems='center'>
                <CounterButton disabled={guestOptions.rooms < 1} onClick={()=>handleOptionChange('rooms','d')}>-</CounterButton>
                <Grid>{guestOptions.rooms}</Grid>
                <CounterButton onClick={()=>handleOptionChange('rooms','i')}>+</CounterButton>
              </Grid>
            </Grid>
          </GuestOptions>
        </DatePickerWrapper>
      )}
    </>
  );
};

export default SearchBar;
