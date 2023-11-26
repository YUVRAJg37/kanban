import "./TaskFetcher.css";
import React, { useEffect, useState } from "react";
import CardGroup from "../CardGroup/CardGroup";

const TaskFetcher = ({ groupChoice, sortChoice }) => {
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

    const ticketsArray = Object.entries(organizedTickets);

    if (priority === "users") {
      ticketsArray.sort((a, b) =>
        a[1].title.localeCompare(b[1].title, undefined, { sensitivity: "base" })
      );
      const sortedOrganizedTickets = Object.fromEntries(ticketsArray);
      return sortedOrganizedTickets;
    }

    return organizedTickets;
  };

  const sortTickets = (tickets, sortChoice) => {
    if (sortChoice === "title") {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortChoice === "priority") {
      return tickets.sort((a, b) => a.priority - b.priority);
    }

    return tickets;
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await response.json();

      const organizedTickets = organizeTicketsByUser(
        data.tickets,
        data.users,
        groupChoice
      );

      // Sort the arrays inside organizedTickets
      Object.keys(organizedTickets).forEach((key) => {
        organizedTickets[key].tickets = sortTickets(
          organizedTickets[key].tickets,
          sortChoice
        );
      });

      setSortedData(organizedTickets);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [groupChoice, sortChoice]);

  return (
    <div className="group">
      {Object.entries(sortedData).map(([key, { title, tickets }]) => (
        <CardGroup key={key} userId={key} title={title} tickets={tickets} />
      ))}
    </div>
  );
};

export default TaskFetcher;
