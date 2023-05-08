class Room{
  floorNum;
  roomNum;
  price;
  #isBooked;
  constructor(floorNum,roomNum,price,isBooked){
      this.floorNum=floorNum;
      this.roomNum=roomNum;
      this.price=price;
      this.#isBooked=isBooked;
  }
   printRoom()
  {
      console.log("the floor number is:"+" "+ this.floorNum+" " +"the room number is:"+" "+this.roomNum+" "+"the price of the room is:"+" "+this.price+ " "+"the room booked:"+" " +this.#isBooked);
  }
  book()
  {
     this.#isBooked=true;
  }
  isRoomBooked()
  {
      if(this.#isBooked==true)
      {
           return true;
          //console.log("This room is booked");
      }
       else{
           //console.log("This room is not booked");
      return false;
       }
  }
  set theIsBook(isBooked)
  {
      this.#isBooked=isBooked;
  }
  get theIsBook()
  {
      return this.#isBooked;
  }

}

class Hotel{
    address;
    NumberOfRooms;
    #minFloor;
    #maxFloor;
    room;
    sleepingRoom;
    roomWithView;
    rooms=[];
   constructor(address,NumberOfRooms,minFloor,maxFloor,rooms,room,sleepingRoom,roomWithView)
    {
      this.address=address;
      this.NumberOfRooms=NumberOfRooms;
      this.#minFloor=minFloor;
      this.#maxFloor=maxFloor;
      this.rooms=rooms;
      this.room=room;
      this.sleepingRoom=sleepingRoom;
      this.roomWithView=roomWithView;
    }
    
    printAdvertisemen()
    {
      console.log("Welcome to our hotel. We have many rooms available. There are rooms with a view and rooms without, at special prices and spaces. Book now");
    }
    listBookedRooms()
    {
      for(let i = 0; i<this.rooms.length;i++)
      {
        if(this.room.isRoomBooked()==true)
          {
              console.log(this.room.isRoomBooked());
              console.log(this.room.theIsBook);
              console.log("this room is booked");
          }
          // else{
          //     console.log(" no ");

          // }
      }
    }
    set theMinFloor(minFloor)
    {
      this.#minFloor=minFloor;
    }
    get theMinFloor()
    {
      return this.#minFloor;
    }

    set theMaxFloor(maxFloor)
    {
      this.#maxFloor=maxFloor;
    }
    get theMaxFloor()
    {
      return this.#maxFloor;
    }
}

class SleepingRoom extends Room{
  personCapacity;
  constructor (personCapacity,floorNum,roomNum,price,isBooked)
  {
      super(floorNum,roomNum,price,isBooked);
      this.personCapacity=personCapacity;
  }
  printRoom()
  {
      console.log("the floor number is:"+" "+ this.floorNum+" " +"the room number is:"+" "+this.roomNum+" "+"the price of the room is:"+" "+this.price+ " "+"the room booked:"+" " +this.theIsBook+" "+"capacity of this room is:"+" "+this.personCapacity);
  }
}
class RoomWithView extends Room {
  view;
  numberOfBeds;
  constructor(view,numberOfBeds,floorNum,roomNum,price,isBooked)
  {
      super(floorNum,roomNum,price,isBooked);
      this.view=view;
      this.numberOfBeds=numberOfBeds;
  }
  printRoom()
  {
      console.log("the floor number is:"+" "+ this.floorNum+" " +"the room number is:"+" "+this.roomNum+" "+"the price of the room is:"+" "+this.price+ " "+"the room booked:"+" " +this.theIsBook+" "+"view of this room is:"+" "+this.view+"the number of beds in this room is:"+this.numberOfBeds);
  }
}
const r1 = new Room(1,3,2000,false);
r1.printRoom();
console.log(r1.floorNum);

console.log(r1.roomNum);
console.log(r1.price);
console.log(r1.theIsBook);
r1.isRoomBooked();
r1.book();
console.log(r1.theIsBook);
r1.isRoomBooked();
//
const r2 = new SleepingRoom(2,1,3,2000,false);
r2.printRoom();
r2.isRoomBooked();
console.log(r2.floorNum);
console.log(r2.roomNum);
console.log(r2.price);
console.log(r2.theIsBook);
console.log(r2.personCapacity);
r2.book();
console.log(r2.theIsBook);
r2.isRoomBooked();
//
const r3=new RoomWithView('sea',3,1,1,100,false);
r3.printRoom();
console.log(r3.theIsBook);
r3.book();
console.log(r3.theIsBook);
r2.isRoomBooked();
//
const h = new Hotel('nablus',1,10,10,[r1],r1);
const h1 = new Hotel('nablus',1,10,10,[r2],r2);
const h2 = new Hotel('nablus',1,10,10,[r3],r3);

h.printAdvertisemen();
console.log(h.address);
console.log(h.NumberOfRooms);
console.log(h.theMaxFloor);
console.log(h.theMinFloor);
console.log(h.room);
h.listBookedRooms();
h1.listBookedRooms();
h2.listBookedRooms();

