import "./TaskFetcher.css";
import { useEffect, useState } from "react";
import CardGroup from "../CardGroup/CardGroup";

function TaskFetcher() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [userTickets, setUserTickets] = useState({});

  const organizeTicketsByUser = (tickets, users, priority) => {
    if (priority === "users") {
      const organizedTickets = {};

      tickets.forEach((ticket) => {
        const userId = ticket.userId;

        if (!organizedTickets[userId]) {
          organizedTickets[userId] = [];
          const userName = users.find((user) => user.id === userId);
          organizedTickets[userId].userName = userName.name;
        }
        organizedTickets[userId].push(ticket);
      });

      return organizedTickets;
    }
    if (priority === "priority") {
    }
  };

  const fetchUserData = () => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setUsers(data.users);
        const organizedTickets = organizeTicketsByUser(
          data.tickets,
          data.users,
          "users"
        );
        setUserTickets(organizedTickets);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {console.log(userTickets)}
      <div className="group">
        {console.log("----------------------")}

        {Object.entries(userTickets).map(([userId, tickets]) => (
          <>
            {console.log(tickets)}
            <CardGroup
              key={userId}
              userId={userId}
              userName={tickets.userName}
              tickets={tickets}
            />
          </>
        ))}
      </div>
    </>
  );
}

export default TaskFetcher;
