import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=400"
      title="A first meetup"
      address="some address 5 , 12345 Some city"
      description="A first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback:false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  // fetch data for a single meetuo

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "A first meetup",
        address: "some address 5 , 12345 Some city",
        description: "A first meetup",
      },
    },
  };
}

export default MeetupDetails;
