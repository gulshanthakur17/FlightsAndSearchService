# Welcome To Flight Service
- Our repository showcases the backend of an airline booking management system. With a focus on user authentication, flight search,  booking management, and reminders this system is engineered for scalability, security, and dependability

## Key Features:
- User Registration aur Authentication
- Flight Search aur Booking
- Booking Management
- Reminder Notifications
- Role-Based Access Control
- External Service Integration

## Technology Stack:
- JavaScript ,Express.js, Nodejs
- MySQL database
- RESTful APIs
- AWS (EC2 instances, autoscaling, load balancing)
- JSON Web Tokens (JWT) for Authentication
- Postman for Api Testing

## Microservices:
- [Flight and Search Service](https://github.com/gulshanthakur17/FlightsAndSearchService)
- [Reminder Service](https://github.com/gulshanthakur17/ReminderService)
- [Booking Service](https://github.com/gulshanthakur17/BookingService)
- [Auth Service](https://github.com/gulshanthakur17/Auth_Service)
- [API Gateway](https://github.com/gulshanthakur17/APIGateway)



## Project Setup

- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and the add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```
- Once you've added your Db config as listed above, go to the src folders from your terminal and execute `npx sequelize db:create`
  and then execute

`npx sequelize db:migrate`


## DB Design

```
    - Airplane Table
    - Flight
    - Airport
    - City


    - A flight belongs to an airplane but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights, but a flight belongs to one airport


    ## Tables

    ### City -> id, name, created_at, updated_at
    ### Airport -> id, name, address, city_id, created_at, updated_at
        Relationship -> City has many airports and Airport belongs to a city (one to many)


```
    