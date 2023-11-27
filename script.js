const millToDays = 1000 * 60 * 60 * 24;

const Motel = {
    name: "Hotel Newfoundland",
    numRooms: 100,
    occupiedRooms: 83,
    floors: 5,

    getAvailRooms: function() {
        return this.numRooms - this.occupiedRooms;
    }
};

const MotelCustomer = {
    name: "Jacob Boomhower",
    phoneNumber: "709-999-0000",
    birthDate: {
        month: 3,
        day: 9,
        year: 1946
    },
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
    checkinDate: {
        month: 8,
        day: 4,
        year: 2021
    },
    checkoutDate: {
        month: 8,
        day: 6,
        year: 2021
    },
    pet: {
        name: "Buddy",
        type: "Dog",
        breed: "Golden Retriever",
        age: 3,
        weight: 90
    },
    getAge() {
        today = new Date(Date.now());
        return today.getFullYear() - this.birthDate.year;
    },
    getStayLen() {
        start = new Date(this.checkinDate.year, this.checkinDate.month, this.checkinDate.day);
        end = new Date(this.checkoutDate.year, this.checkoutDate.month, this.checkoutDate.day);
        stay = end - start;
        return stay/millToDays;
    }
    
};

story = `The ${Motel.name} has ${Motel.getAvailRooms()} rooms available. ${MotelCustomer.name} is ${MotelCustomer.getAge()} years old and is staying for ${MotelCustomer.getStayLen()} days. 
He is staying in room ${MotelCustomer.roomNumber} on floor ${MotelCustomer.floorNumber}. ${MotelCustomer.name} is paying with ${MotelCustomer.paymentMethod}. ${MotelCustomer.name} perferes a room that is`;

for (let i = 0; i < MotelCustomer.roomPreference.length; i++) {
    if (i == MotelCustomer.roomPreference.length - 1) {
        story += ` and ${MotelCustomer.roomPreference[i].toLowerCase()}.`;
        break;
    }
    else {
        story += ` ${MotelCustomer.roomPreference[i].toLowerCase()},`;
    }
}

story += ` He need a ${MotelCustomer.roomPreference[3].toLowerCase()} room because he has a ${MotelCustomer.pet.breed.toLowerCase()} named ${MotelCustomer.pet.name}. He is ${MotelCustomer.name} is from ${MotelCustomer.address.city}, ${MotelCustomer.address.province}.`


let html = `<p>${story}</p>`;
document.write(html);

