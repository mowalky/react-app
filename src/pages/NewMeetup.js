import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function onAddMeetupHandler(meetupData) {
    fetch(`https://react-app-3469b-default-rtdb.firebaseio.com/meetups.json`, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
