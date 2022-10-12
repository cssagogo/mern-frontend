import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [{
    id: "p1",
    title: "Empire State Building",
    description: "Most popular building in the world!",
    imageUrl: "https://lh5.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=w408-h272-k-no",
    address: "20 W 34th St., New York, NY 10001",
    location: {
        lat: 40.7484445,
        lng: -73.9878584
    },
    creatorId: "u1"
},
{
    id: "p2",
    title: "Empire State Building",
    description: "Most popular building in the world!",
    imageUrl: "https://lh5.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=w408-h272-k-no",
    address: "20 W 34th St., New York, NY 10001",
    location: {
        lat: 40.7484445,
        lng: -73.9878584
    },
    creatorId: "u2"
}];

const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES} />
}

export default UserPlaces;