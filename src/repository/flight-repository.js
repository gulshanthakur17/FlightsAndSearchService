const {Flights} = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {


    #createFilter(data) {
        let filetr = {};
        if(data.arrivalAirportId){
            filetr.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filetr.departureAirportId = data.departureAirportId;
        }


        let priceFilter = [];
        if(data.minPrice) {
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice) {
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }

        Object.assign(filetr, {[Op.and]: priceFilter});

        console.log(filetr);
        return filetr;

    }



    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};            
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error}; 
        }
    }


    async getAllFlight(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error}; 
        }
    }
}


module.exports = FlightRepository;