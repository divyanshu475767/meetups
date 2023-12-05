import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";



const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=400",
    address: "some address 5 , 12345 Some city",
    description: "This is first setup",
  },

  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=400",
    address: "some  other address 55 , 45 Some village",
    description: "This is second setup",
  },
];

function HomePage(props) {



  return (
      <MeetupList meetups={props.meetups} />
  );

}




// export async function getStaticProps(){

//    //fetch data from an API

//    return {
//     props:{
//          meetups:DUMMY_MEETUPS,
//     },
//     revalidate: 10//seconds
//    }
// }


// this runs for every incoming request
export async function getServerSideProps(context){


      
  const client =  await  MongoClient.connect('mongodb+srv://divyanshu:ak475767@cluster0.dyvy47l.mongodb.net/meetups?retryWrites=true&w=majority');


  const db= client.db();

  const meetupsCollection = db.collection('meetups');


 const meetups= await meetupsCollection.find().toArray();


   client.close();

  // const req = context.req;
  // const res = context.res;
  
  //fetch data from an API

  return {
    props:{
        meetups:meetups.map(meetup=>({
          
          title:meetup.title,
          address:meetup.address,
          image:meetup.image,
          id:meetup._id.toString(),

          }))
        

      
    }
  }





}

export default HomePage;
