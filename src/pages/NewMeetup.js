import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function onAddMeetupHandler(data) {
    console.log(data);
  }

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
