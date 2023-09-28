const express = require('express');

const { FlightMiddlewares } = require('../../middlewares/index');

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

router.post(
    '/flight',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);


router.post('/flight', FlightController.create);
router.get('/flight', FlightController.getAll);
router.get('/flight/:id', FlightController.get);
router.patch('/flight/:id', FlightController.update);

router.post('/airports' , AirportController.create);


module.exports = router;