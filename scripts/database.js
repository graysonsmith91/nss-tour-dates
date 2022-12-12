const database = {
    bands: [{
        id: 1,
        name: "Lil Yachty",
        members: 1,
        genre: "Rap/Hip-Hop",
        yearFormed: 2015
    },
    {
        id: 2,
        name: "Khruangbin",
        members: 3,
        genre: "Surf-Rock/Psychedelic",
        yearFormed: 2010
    },
    {
        id: 3,
        name: "BLACKPINK",
        members: 4,
        genre: "K-Pop",
        yearFormed: 2016
    },
    {
        id: 4,
        name: "Death Grips",
        members: 3,
        genre: "Experimental Hip-Hop",
        yearFormed: 2010
    },
    {
        id: 5,
        name: "Radiohead",
        members: 5,
        genre: "Alternative/Indie",
        yearFormed: 1985
    }],
    venues: [{
        id: 1,
        name: "Webster Hall",
        address: "125 E 11th St, New York, NY 10003",
        squareFt: 3394,
        maxOccupancy: 1500
    },
    {
        id: 2,
        name: "Brooklyn Bowl",
        address: "925 3rd Ave N, Nashville, TN 37201",
        squareFt: 40000,
        maxOccupancy: 1200
    },
    {
        id: 3,
        name: "Ace of Spades",
        address: "1417 R St, Sacramento, CA 95811",
        squareFt: 10800,
        maxOccupancy: 1000
    },
    {
        id: 4,
        name: "Hollywood Bowl",
        address: "2301 N Highland Ave, Los Angeles, CA 90068",
        squareFt: 22000,
        maxOccupancy: 17500
    },
    {
        id: 5,
        name: "Basement East",
        address: "917 Woodland St, Nashville, TN 37206",
        squareFt: 5000,
        maxOccupancy: 575
    }],
    bookings: [{
        id: 1, bandId: 4, venueId: 2, date: "12/8/22"
    }, {
        id: 2, bandId: 3, venueId: 5, date: "12/25/22"
    }, {
        id: 3, bandId: 1, venueId: 3, date: "1/4/23"
    }, {
        id: 4, bandId: 2, venueId: 4, date: "2/4/23"
    }, {
        id: 5, bandId: 5, venueId: 1, date: "2/15/23"
    }, {
        id: 6, bandId: 5, venueId: 5, date: "2/16/23"
    }, {
        id: 7, bandId: 2, venueId: 3, date: "3/19/23"
    }, {
        id: 8, bandId: 1, venueId: 4, date: "3/20/23"
    }, {
        id: 9, bandId: 4, venueId: 1, date: "4/15/23"
    }, {
        id: 10, bandId: 3, venueId: 1, date: "5/19/23"
    }]
}



export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}