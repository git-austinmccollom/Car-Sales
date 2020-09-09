import {ADD_FEATURE, REMOVE_FEATURE} from '../actions'

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: [
        { id: 1, name: 'V-6 engine', price: 1500 }
      ]
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            let addTotal = state.car.price;
            addTotal += action.payload.price;
            return {
                ...state,
                additionalFeatures: state.additionalFeatures.filter(
                    (feature) => feature.id !== action.payload.id
                ),
                car: {
                    ...state.car,
                    price: addTotal,
                    features: [...state.car.features, action.payload],
                }, 
            }
            // return {...state};
        case REMOVE_FEATURE:
            let removeTotal = state.car.price;
            removeTotal -= action.payload.price;
            return {
                ...state,
                car: {
                    ...state.car,
                    price: removeTotal,
                    features: state.car.features.filter(
                        (feature) => feature.id !== action.payload.id),
                },
                additionalFeatures: [ ...state.additionalFeatures, action.payload],
            };
        default:
            return {...state};
    }
}