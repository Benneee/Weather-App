class Store {
  constructor() {
    this.city;
    this.country;

    this.defaultCity = 'Lagos';
    this.defaultCountry = 'Nigeria';
  }

  getLocationData() {
    // First we have to check if the data saved for location in LS is null
    // If it is, we want to now set them to the defaultCity and defaultCountry from above
    // If it is not null, we want to set them to the location stored there

    this.city = localStorage.getItem('city') === null ? this.defaultCity : localStorage.getItem('city');

    this.country = localStorage.getItem('city') === null ? this.defaultCountry : localStorage.getItem('country');

    return {
      city: this.city,
      counrtry: this.country
    };
  }

  setLocationData(city, country) {
    // Before now, I would have to call a JSON method on the object (usually arrays)
    // I want to save in Local Storage, in this case, we are just saving
    // string values in the Local Storage and nothing more.

    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
  }
}
