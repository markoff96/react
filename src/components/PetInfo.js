function PetInfo(props) {
    const {animal, age, hasPet} = props;

    return hasPet ? (  
        <h1>{`My ${animal} name is Licia, and she is ${age} years old`}</h1>
        ) : (<h1>You don' t have an animal</h1> )
}
export default PetInfo