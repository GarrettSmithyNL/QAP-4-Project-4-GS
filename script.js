const millToDays = 1000 * 60 * 60 * 24;

const Motel = {
    name: "Motel Newfoundland",
    numRooms: 100,
    occupiedRooms: 83,
    floors: 5,

    getAvailRooms: function() {
        return this.numRooms - this.occupiedRooms;
    }
};

const MotelCustomer = {
    name: "Jacob Boomhower",
    phoneNumber: "709-268-9532",
    birthDate: new Date(1946, 4, 13),
    gender: "Male",
    address: {
        street: "18 Main St",
        city: "Gander",
        province: "NL",
        postalCode: "A1V 1C0"
    },
    roomNumber: 76,
    floorNumber: 4,
    roomPreference: [
        "Smoking",
        "Pet friendly",
        "Handicap accessible",
        "Seperate Rooms"
    ],
    paymentMethod: "Credit Card",
    checkinDate: new Date(2021, 7, 1),
    checkoutDate: new Date(2021, 7, 5),
    pet: {
        name: "Buddy",
        type: "Dog",
        breed: "Golden Retriever",
        age: 3,
        weight: 90
    },
    getAge: function() {
        today = new Date(Date.now());
        return today.getFullYear() - this.birthDate.getFullYear();
    },
    getStayLen: function() {
        let stay = this.checkoutDate -  this.checkinDate;
        return stay / millToDays;
    }
    
};

let story = `The ${Motel.name} has ${Motel.getAvailRooms()} rooms available. ${MotelCustomer.name} is ${MotelCustomer.getAge()} 
years old and is staying for ${MotelCustomer.getStayLen()} days. He is staying in room ${MotelCustomer.roomNumber} on floor 
${MotelCustomer.floorNumber}. He is paying with ${MotelCustomer.paymentMethod}. He perferes a room that is`;

for (let i = 0; i < MotelCustomer.roomPreference.length; i++) {
    if (i == MotelCustomer.roomPreference.length - 1) {
        story += ` and ${MotelCustomer.roomPreference[i].toLowerCase()}.`;
        break;
    }
    else {
        story += ` ${MotelCustomer.roomPreference[i].toLowerCase()},`;
    }
}

story += ` He needs a ${MotelCustomer.roomPreference[1].toLowerCase()} room because he has a ${MotelCustomer.pet.breed.toLowerCase()} 
named ${MotelCustomer.pet.name}. ${MotelCustomer.pet.name} is ${MotelCustomer.pet.age} years old and weighs ${MotelCustomer.pet.weight} pounds.`

story += ` ${MotelCustomer.name} is from ${MotelCustomer.address.city}, ${MotelCustomer.address.province}. If you need to get a hold of him, 
his phone number is ${MotelCustomer.phoneNumber}.`


let html = `<p>${story}</p>`;
document.write(html);

