import './UserBar.css'

const UserBar = (props) => {
    return (
        <div className = "user-bar-container">
            <div className = "user-image">

            </div>
            <div className="user-info">{/* a place to see username, and other information*/}
                
            </div>
           

        </div>
    );
}

UserBar.defaultProps = {
    name: "nume/adresa", //ENS or adress
    skill: 0, // average score
    sillsNumber: 0, // the number of aquired skills
    givenEndorsements : 0, //the number of givenEndorsements
    takenEndorsements: 0, //the number of taken endorsements
    imageURL: "#", // the adress for the user image
    generalDescription: "Nothing" // a general description for put by user

}

export default UserBar

//To make it flexbox