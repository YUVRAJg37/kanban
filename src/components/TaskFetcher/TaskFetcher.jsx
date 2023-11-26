import "./TaskFetcher.css";
import React, { useEffect, useState } from "react";
import CardGroup from "../CardGroup/CardGroup";

const TaskFetcher = ({ groupChoice }) => {
  const [sortedData, setSortedData] = useState({});

  const organizeTicketsByUser = (tickets, users, priority) => {
    const organizedTickets = {};

    tickets.forEach((ticket) => {
      const key = priority === "users" ? ticket.userId : ticket[priority];

      if (!organizedTickets[key]) {
        organizedTickets[key] = {
          title:
            priority === "users"
              ? users.find((user) => user.id === key)?.name
              : key,
        };
        organizedTickets[key].tickets = [];
      }

      organizedTickets[key].tickets.push(ticket);
    });

    return organizedTickets;
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await response.json();

      setSortedData(
        organizeTicketsByUser(data.tickets, data.users, groupChoice)
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [groupChoice]);

  return (
    <div className="group">
      {Object.entries(sortedData).map(([key, { title, tickets }]) => (
        <CardGroup key={key} userId={key} title={title} tickets={tickets} />
      ))}
    </div>
  );
};

export default TaskFetcher;
