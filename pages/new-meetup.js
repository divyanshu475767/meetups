import NewMeetupForm from "@/components/meetups/NewMeetupForm";



function newMeetupPage(){

    function addMeetupHandler(enteredMeetupData){
        
        alert(enteredMeetupData);
    }



    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>

}

export default newMeetupPage;