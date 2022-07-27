import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function Tickets() {
  // tickets?
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  console.log(tickets, "this is tickets");
  console.log(isLoading, "this isloading");
  console.log(isSuccess, "this isSuccess");

  const dispatch = useDispatch();
  // this is to fix some stupid error
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return <div>Tickets</div>;
}

export default Tickets;
