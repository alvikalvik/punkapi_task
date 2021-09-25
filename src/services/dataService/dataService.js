const BASE_URL = 'https://api.punkapi.com/v2/';
const POSTFIX_URL = 'beers';

const dataService = {
    getData: function() {
        return fetch(BASE_URL + POSTFIX_URL)
            .then(res => res.json())            
    }
};

export default dataService;