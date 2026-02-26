export const hostNavbar = {
    links: 
        [
            {name: "Dashboard", to:".", end: true},
            {name: "Income", to:"income"},
            {name: "Vans", to:"vans"},
            {name: "Reviews", to:"reviews"}
        ]
}

export const hostVanDetailNavbar = {
    links: 
        [
            {name: "Details", to:".", end: true},
            {name: "Pricing", to:"pricing"},
            {name: "Photos", to:"photos"}        
        ],    
    endElement: "icon"
}