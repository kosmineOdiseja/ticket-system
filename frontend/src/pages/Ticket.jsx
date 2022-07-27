import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Ticket() {
  const { ticket, isLoader, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );
  const params = useParams();
  const dispatch = useDispatch();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTicket(ticketId));
  }, [isError, message, ticketId]);

  return <div>Ticket</div>;
}

export default Ticket;
