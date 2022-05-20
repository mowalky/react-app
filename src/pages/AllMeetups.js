import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetingupsPage() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch(`https://react-app-3469b-default-rtdb.firebaseio.com/meetups.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setLoading(false);
        setMeetups(meetups);
      });
  }, []);

  if (loading) {
    return <section>Loading ...</section>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetingupsPage;
