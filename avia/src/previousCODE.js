  function minDurationLength(ticket) {
    let minDuration = 0;

    let i = 0;

    for (let index = 0; index < ticket.segments.length; index++) {
      
      let duration1 = ticket.segments[i].duration;
      if (ticket.segments.length>1) {
      let duration2 = ticket.segments[i + 1].duration;
      
      if (duration1 < duration2) {
        minDuration = duration1;
      } else {
        minDuration = duration2;
      }
      return minDuration;
    }
    else {
      minDuration = duration1;
      return minDuration;
    }
  }
  }
  function filterFastest() {
    setTickets(
      tickets.slice().sort((ticket1, ticket2) => {
        let duration1 = minDurationLength(ticket1);
        let duration2 = minDurationLength(ticket2);

        let comparison = 0;
        if (duration1 > duration2) {
          comparison = 1;
        } else if (duration1 <= duration2) {
          comparison = -1;
        }
        return comparison;
      })
    );
  }

  function filterCheapest() {
    setTickets(
      tickets.slice().sort((ticket1, ticket2) => {
        let price1 = ticket1.price;
        let price2 = ticket2.price;

        let comparison = 0;
        if (price1 > price2) {
          comparison = 1;
        } else if (price1 < price2) {
          comparison = -1;
        }
        return comparison;
      })
    );
  }
  function firstFilter (value, segment) {
    if (value === 4) {
      setTickets(data);
      return segment;
    }
    else if (value === 3) {
      
      return segment.stops.length>=3; 
    }
    else {
      return segment.stops.length === value;
    }
  }
  function segmentFilter (ticket, value) {
    let segments = ticket.segments;
      segments = segments.filter(
        segment=>firstFilter(value, segment))
    if (segments.length === 0) {
      return;
    }
    return ticket.segments = segments;
  }
  
  function onSwitch (value) {  
    
    
    setItems(
    items.map(item=>{  
      if (item.id === value) {
        item.checked = !item.checked;
        setTickets(tickets);  
      }
      return item;
    }
    ));
    setTickets(
      tickets.filter(ticket=>segmentFilter(ticket, value))
    );  
      console.log(data)
 }
//tickets
const [tickets, setTickets] = useState([
  {
    price: "13401",
    carrier: "Yorha Airlanes",
    segments: [
      {
        origin: "Ebenya",
        destination: "DC",
        date: "December 17, 2020 03:24:00",
        stops: ["JOP", "HUI", "Sosi", "sam sosi", "kek"],
        duration: 100,
      },
      {
        origin: "Ebenya2",
        destination: "DC3",
        date: "December 31, 1995 03:24:00",
        stops: ["JOP", "da", "pizda"],
        duration: 228,
      },
    ],
  },
  {
    price: "13400",
    carrier: "Yoba Airlanes",
    segments: [
      {
        origin: "Ebenya",
        destination: "DC",
        date: "December 17, 1995 03:28:00",
        stops: ["JOP", "HUI"],
        duration: 311,
      },
      {
        origin: "Ebenya2",
        destination: "DC3",
        date: "December 31, 1995 03:12:00",
        stops: ["JOP"],
        duration: 211,
      },
    ],
  },
  {
    price: "13425",
    carrier: "Nahui Airlanes",
    segments: [
      {
        origin: "Ebenya",
        destination: "DC",
        date: "December 17, 1995 03:24:00",
        stops: ["JOP", "HUI"],
        duration: 405,
      },
      {
        origin: "Ebenya2",
        destination: "DC3",
        date: "December 31, 1995 03:24:00",
        stops: ["JOP"],
        duration: 99,
      },
    ],
  },
  {
    price: "14228",
    carrier: "Yorha Airlanes",
    segments: [
      {
        origin: "KURSK",
        destination: "DC",
        date: "December 17, 2020 03:24:00",
        stops: [],
        duration: 100,
      },
      {
        origin: "DC",
        destination: "KURSK",
        date: "December 31, 1995 03:24:00",
        stops: [],
        duration: 228,
      },
    ],
  }
]);
//checkboxes
const [items, setItems] = useState([
  {id: 4, checked: false},
  {id: 0, checked: false},
  {id: 1, checked: false},
  {id: 2, checked: false},
  {id: 3, checked: false}
])
   