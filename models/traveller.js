const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocationsArray = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return startLocationsArray;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocationsArray = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return endLocationsArray;
};


Traveller.prototype.getModesOfTransport = function () {
  const transportType = this.journeys.map((journey) => {
    return journey.transport;
  })
  return transportType;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter((journey) => {
    return (journey.transport === transport)
  })
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysOverMinDistance = this.journeys.filter((journey) => {
    return (journey.distance > minDistance)
  })
  return journeysOverMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
