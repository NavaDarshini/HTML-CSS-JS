const mainDiv=document.getElementById('Movies');
const Movies=[
    {
        "name" : "The Wizard of Oz",
        "year" : 1925,
        "runtime" : 81,
        "categories" : [
          "comedy",
          "family",
          "fantasy"
        ],
        "release-date" : "1925-01-27",
        "director" : "Larry Semon",
        "writer" : [
          "L. Frank Baum",
          "Frank Joslyn Baum",
          "Edgar Allan Woolf"
        ],
        "actors" : [
          "Dorothy Dwan",
          "Mary Carr",
          "Virginia Pearson",
          "Bryant Washburn",
          "Josef Swickard",
          "Charles Murray",
          "Oliver Hardy",
          "Frank Alexander",
          "Otto Lederer",
          "Frederick Ko Vert",
          "Larry Semon"
        ],
        "storyline" : "Dorothy, heir to the Oz throne, must take it back from the wicked Prime Minister Kruel with the help of three farmhands."
    },
    {
        "name": "Frankenstein",
        "year": 1931,
        "runtime": 70,
        "categories": [
          "drama",
          "horror",
          "sci-fi"
        ],
        "release-date": "1931-09-21",
        "director": "James Whale",
        "writer": [
          "John L. Balderston",
          "Mary Shelley"
        ],
        "actors": [
          "Colin Clive",
          "Mae Clarke",
          "John Boles",
          "Boris Karloff"
        ],
        "storyline": "Henry Frankenstein is a doctor who is trying to discover a way to make the dead walk. He succeeds and creates a monster that has to deal with living again."
      },
      {
        "name" : "King Kong",
        "year" : 1933,
        "runtime" : 100,
        "categories" : [
          "adventure",
          "horror",
          "sci-fi"
        ],
        "release-date" : "1933-04-07",
        "director" : [
          "Merian C. Cooper",
          "Ernest B. Schoedsack"
        ],
        "writer" : [
          "James Ashmore Creelman",
          "Ruth Rose",
          "Merian C. Cooper",
          "Edgar Wallace",
          "Leon Gordon"
        ],
        "actors" : [
          "Fay Wray",
          "Robert Armstrong",
          "Bruce Cabot",
          "Frank Reicher",
          "Sam Hardy",
          "Noble Johnson",
          "Steve Clemente",
          "James Flavin",
          "King Kong"
        ],
        "storyline" : "A film crew goes to a tropical island for an exotic location shoot and discovers a colossal ape who takes a shine to their female blonde star. He is then captured and brought back to New York City for public exhibition."
    },
    {
        "name": "The Invisible Man",
        "year": 1933,
        "runtime": 71,
        "categories": [
          "horror",
          "sci-fi"
        ],
        "release-date": "1933-11-03",
        "director": "James Whale",
        "writer": [
          "H.G. Wells",
          "R.C. Sherriff"
        ],
        "actors": [
          "Claude Rains",
          "William Harrigan",
          "Gloria Stuart",
          "Henry Travers",
          "Una O'Connor",
          "Forrester Harvey",
          "Dudley Digges"
        ],
        "storyline": "A stranger, his face covered in bandages takes a room at The Lion's Head Inn while trying to reverse his experiment which meddled in things that man must leave alone, with dire consequnces to his sanity."
      },
      {
        "name" : "The Adventures of Robin Hood",
        "year" : 1938,
        "runtime" : 102,
        "categories" : [
          "action",
          "adventure",
          "romance"
        ],
        "release-date" : "1938-05-14",
        "director" : [
          "Michael Curtiz",
          "William Keighley"
        ],
        "writer" : [
          "Norman Reilly Raine",
          "Seton I. Miller"
        ],
        "actors" : [
          "Errol Flynn",
          "Olivia de Havilland",
          "Basil Rathbone",
          "Claude Rains",
          "Patric Knowles",
          "Eugene Pallette",
          "Alan Hale",
          "Melville Cooper",
          "Ian Hunter",
          "Una O'Connor",
          "Herbert Mundin",
          "Montagu Love",
          "Leonard Willey",
          "Robert Noble",
          "Kenneth Hunter",
          "Robert Warwick",
          "Colin Kenny",
          "Lester Matthews",
          "Harry Cording",
          "Ivan F. Simpson"
        ],
        "storyline" : "When Prince John and the Norman Lords begin oppressing the Saxon masses in King Richard's absence, a Saxon lord fights back as the outlaw leader of a rebel guerrilla army."
    },
    {
        "name": "The Wizard of Oz",
        "year": 1939,
        "runtime": 110,
        "categories": [
          "musical",
          "sci-fi",
          "fantasy",
          "adventure"
        ],
        "release-date": "1939-08-25",
        "director": [
            "King Vidor",
            "Victor Fleming"
        ],
        "writer": [
          "Florence Ryerson",
          "Noel Langley",
          "Edgar Allan Woolf"
        ],
        "actors": [
          "Judy Garland",
          "Ray Bolger",
          "Jack Haley",
          "Bert Lahr",
          "Margaret Hamilton",
          "Billie Burke"
        ],
        "storyline": "In this charming film based on the popular L. Frank Baum stories, Dorothy and her dog Toto are caught in a tornado's path and somehow end up in the land of Oz. Here she meets some memorable friends and foes in her journey to meet the Wizard of Oz who everyone says can help her return home and possibly grant her new friends their goals of a brain, heart and courage."
      },
      {
        "name": "The Great Dictator",
        "year": 1940,
        "runtime": 125,
        "categories": [
          "comedy"
        ],
        "release-date": "1940-10-15",
        "director": "Charles Chaplin",
        "writer": [
          "Charles Chaplin"
        ],
        "actors": [
          "Charles Chaplin",
          "Jack Oakie",
          "Reginald Gardner",
          "Billy Gilbert",
          "Grace Hayle",
          "Carter DeHaven",
          "Paulette Goddard",
          "Maurice Moscovitch",
          "Emma Dunn",
          "Bernard Gorcery",
          "Paul Weigel",
          "Chester Conklin",
          "Esther Michelson",
          "Hank Mann",
          "Florence Wright",
          "Eddie Gribbon",
          "Rudolph Anders",
          "Eddie Dunn",
          "Nita Pike",
          "George Lynn"
        ],
        "storyline": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime."
      },
      {
        "name": "Casablanca",
        "year": 1942,
        "runtime": 102,
        "categories": [
            "drama",
            "romance",
            "war"
        ],
        "release-date": "1943-01-23",
        "director": "Michael Curtiz",
        "writer": [
            "Julius J. Epstejn",
            "Philip G. Epstein",
            "Howard Koch"
        ],
        "actors": [
            "Humphrey Bogart",
            "Ingrid Bergman",
            "Paul Henreid",
            "Claude Rains",
            "Conrad Veidt",
            "Sydney Greenstreet",
            "Peter Lorre",
            "Madeleine Lebeau",
            "Dooley Wilson",
            "Joy Page",
            "John Qualen",
            "Leonid Kinskey",
            "Curt Bois"
        ],
        "storyline": "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco."
    },
    {
        "name": "Singin' in the Rain",
        "year": 1952,
        "runtime": 103,
        "categories": [
          "comedy",
          "musical",
          "romance"
        ],
        "release-date": "1952-04-11",
        "director": [
          "Stanley Donen",
          "Gene Kelly"
        ],
        "writer": [
          "Betty Comden",
          "Adolph Green"
        ],
        "actors": [
          "Gene Kelly",
          "Donald O'Connor",
          "Debbie Reynolds",
          "Jean Hagen",
          "Millard Mitchell",
          "Cyd Charisse",
          "Douglas Fowley",
          "Rita Moreno"
      
        ],
        "storyline": "In 1927, a film production company struggles to transition to sound."
      },
      {
        "name": "Roman Holiday",
        "year": 1953,
        "runtime": 118,
        "categories": [
          "comedy",
          "romance"
        ],
        "release-date": "1953-08-20",
        "director": [
          "William Wyler"
        ],
        "writer": [
          "Ian McLellan Hunte",
          "John Dighton"
        ],
        "actors": [
          "Gregory Peck",
          "Audrey Hepburn",
          "Eddie Albert",
          "Hartley Power",
          "Harcourt Williams",
          "Margaret Rawlings",
          "Tullio Carminati",
          "Paolo Carlini",
          "Claudio Ermelli",
          "Paola Borboni",
          "Alfredo Rizzo",
          "Laura Solari",
          "Gorella Gori"
      
        ],
        "storyline": "A bored and sheltered princess escapes her guardians and falls in love with an American newsman in Rome."
      },
      {
        "name": "Rebel Without a Cause",
        "year": 1955,
        "runtime": 111,
        "categories": [
          "drama"
        ],
        "description": "",
        "release-date": "1955-10-29",
        "director": "Nicholas Ray",
        "writer": [
          "Stewart Stern",
          "Irvin Shulman",
          "Nicholas Ray"
        ],
        "actors": [
          "James Dean",
          "Natalie Wood",
          "Sal Mineo",
          "Jim Backus",
          "Ann Doran",
          "Corey Allen",
          "William Hopper",
          "Rochelle Hudson",
          "Dennis Hopper",
          "Edward Platt",
          "Steffi Sidney",
          "Marietta Canty",
          "Virginia Brissac",
          "Beverly Long",
          "Ian Wolfe"
        ],
        "storyline": "A rebellious young man with a troubled past comes to a new town, finding friends and enemies."
      },
      {
        "name": "Vertigo",
        "year": 1958,
        "runtime": 128,
        "categories": [
          "mistery",
          "romance",
          "thriller"
        ],
        "release-date": "1958-05-09",
        "director": "Alfred Hitchcock",
        "writer": [
          "Alec Coppel",
          "Samuel A. Taylor"
        ],
        "actors": [
          "James Stewart",
          "Natalie Wood",
          "Kim Novak",
          "Barbara Bel Geddes",
          "Henry Jones",
          "Tom Helmore",
          "Raymond Bailey",
          "Ellen Corby",
          "Konstantin Shayne",
          "Lee Patrick"
        ],
        "storyline": "A former police detective juggles wrestling with his personal demons and becoming obsessed with a hauntingly beautiful woman."
      },
      {
        "name": "Breakfast at Tiffany's",
        "year": 1961,
        "runtime": 115,
        "categories": [
          "comedy",
          "drama",
          "romance"
        ],
        "release-date": "1961-10-06",
        "director": "Blake Edwards",
        "writer": [
          "Truman Capote",
          "George Axelrod"
        ],
        "actors": [
          "Audrey Hepburn",
          "George Peppard",
          "Patricia Neal",
          "Buddy Ebsen",
          "Martin Balsam",
          "José Luis de Vilallonga",
          "John McGiver",
          "Dorothy Whitney",
          "Stanley Adams",
          "Elvia Allman",
          "Alan Reed",
          "Beverly Powers",
          "Claude Stroud",
          "Orangey",
          "Mickey Rooney"
        ],
        "storyline": "Paul Varjak - a young wannabe writer and the kept young man of an older woman - Emily Eustace Failenson ays(aka '2E') - and meets Holly Golightly; a flighty Manhattan party girl, who's his neighbour in the brownstone she's set him up in. As Paul find out more about Holly, he begins to feel something for her, and she- always on the make - tries to be the insouciant waif."
      },
      {
        "name": "Dr. No",
        "year": 1962,
        "runtime": 110,
        "categories": [
          "action",
          "adventure",
          "thriller"
        ],
        "release-date": "1962-10-05",
        "director": "Terence Young",
        "writer": [
          "Richard Maibaum",
          "Johanna Harwood",
          "Berkely Mather",
          "Ian Fleming"
        ],
        "actors": [
          "Sean Connery",
          "Ursula Andress",
          "Joseph Wiseman",
          "Jack Lord",
          "Bernard Lee"
        ],
        "storyline": "A resourceful British government agent seeks answers in a case involving the disappearance of a colleague and the disruption of the American space program."
      },
      {
        "name": "To Kill a Mockingbird",
        "year": 1962,
        "runtime": 129,
        "categories": [
          "crime",
          "drama"
        ],
        "release-date": "1962-12-25",
        "director": "Robert Mulligan",
        "writer": [
          "Harper Lee",
          "Horton Foote"
        ],
        "actors": [
          "Gregory Peck",
          "John Megna",
          "Frank Overton",
          "Rosemary Murphy",
          "Ruth White",
          "Brock Peters",
          "Estelle Evans",
          "Paul Fix",
          "Collin Wilcox Paxton",
          "James Anderson",
          "Alice Ghostley",
          "Robert Duvall",
          "William Windom",
          "Crahan Denton",
          "Richard Hale",
          "Mary Badham",
          "Phillip Alford"
        ],
        "storyline": "Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge, and his children against prejudice."
      },
      {
        "name": "Whatever Happened To Baby Jane?",
        "year": 1962,
        "runtime": 134,
        "categories": [
          "drama",
          "horror",
          "thriller"
        ],
        "release-date": "1962-10-31",
        "director": "Robert Aldrich",
        "writer": [
          "Henry Farrell",
          "Lukas Heller"
        ],
        "actors": [
          "Bette Davis",
          "Joan Crawford",
          "Victor Buono",
          "Maidie Norman"
        ],
        "storyline": "A former child star torments her paraplegic sister in their decaying Hollywood mansion."
      },
      {
        "name": "From Russia with Love",
        "year": 1963,
        "runtime": 115,
        "categories": [
          "action",
          "adventure",
          "thriller"
        ],
        "release-date": "1963-10-10",
        "director": "Terence Young",
        "writer": [
          "Richard Maibaum",
          "Johanna Harwood",
          "Berkely Mather",
          "Ian Fleming"
        ],
        "actors": [
          "Sean Connery",
          "Robert Shaw",
          "Lotte Lenya"
        ],
        "storyline": "James Bond willingly falls into an assassination ploy involving a naive Russian beauty in order to retrieve a Soviet encryption device that was stolen by SPECTRE."
      },
      {
        "name": "Goldfinger",
        "year": 1964,
        "runtime": 110,
        "categories": [
          "action",
          "adventure",
          "thriller"
        ],
        "release-date": "1964-09-17",
        "director": "Guy Hamilton",
        "writer": [
          "Richard Maibaum",
          "Paul Dehn",
          "Johanna Harwood",
          "Berkely Mather",
          "Ian Fleming"
        ],
        "actors": [
          "Sean Connery",
          "Gert Fröbe",
          "Honor Blackman"
        ],
        "storyline": "Investigating a gold magnate's smuggling, James Bond uncovers a plot to contaminate the Fort Knox gold reserve."
      },
      {
        "name": "The Sound of Music",
        "year": 1965,
        "runtime": 172,
        "categories": [
          "biography",
          "drama",
          "family"
        ],
        "release-date": "1965-03-29",
        "director": "Robert Wise",
        "writer": [
          "George Hurdalek",
          "Howard Lindsay",
          "Russel Crouse",
          "Ernest Lehman",
          "Maria von Trapp"
        ],
        "actors": [
          "Julie Andrews",
          "Christopher Plummer",
          "Eleanor Parker"
        ],
        "storyline": "A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower."
      },
      {
        "name": "Thunderball",
        "year": 1965,
        "runtime": 130,
        "categories": [
          "action",
          "adventure",
          "thriller"
        ],
        "release-date": "1965-12-09",
        "director": "Terence Young",
        "writer": [
          "Richard Maibaum",
          "John Hopkins",
          "Jack Whittingham",
          "Kevin McClory",
          "Ian Fleming"
        ],
        "actors": [
          "Sean Connery",
          "Claudine Auger",
          "Adolfo Celi"
        ],
        "storyline": "James Bond heads to The Bahamas to recover two nuclear warheads stolen by SPECTRE agent Emilio Largo in an international extortion scheme."
      },
      {
        "name": "The Good, the Bad and the Ugly",
        "year": 1966,
        "runtime": 161,
        "categories": [
          "western",
          "action",
          "adventure"
        ],
        "release-date": "1966-12-29",
        "director": "Sergio Leone",
        "writer": [
          "Luciano Vincenzoni",
          "Sergio Leone",
          "Agenore Incrocci",
          "Furio Scarpelli"
        ],
        "actors": [
          "Eli Wallach",
          "Lee Van Cleef",
          "Aldo Giuffrè",
          "Luigi Pistilli"
        ],
        "storyline": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."
      },
      {
        "name": "You Only Live Twice",
        "year": 1967,
        "runtime": 117,
        "categories": [
          "action",
          "adventure",
          "thriller"
        ],
        "release-date": "1967-06-12",
        "director": "Lewis Gilbert",
        "writer": [
          "Harold Jack Bloom",
          "Roald Dahl",
          "Geoffrey Jenkins",
          "Ian Fleming"
        ],
        "actors": [
          "Sean Connery",
          "Akiko Wakabayashi",
          "Mie Hama"
        ],
        "storyline": "Agent 007 and the Japanese secret service ninja force must find and stop the true culprit of a series of spacejackings before nuclear war is provoked."
      }


]
Movies.forEach(function(Movie)
{
    console.log(Movie)
    const MovieDiv=document.createElement('div')
    const title=document.createElement('h2')
    title.textContent = Movie.name
    const yr=document.createElement('p')
    yr.textContent="Year: "+Movie.year;
    // const theme=document.createElement('p')
    // theme.textContent="Categories: "+Movie.categories
    const themes=document.createElement('p')
    themes.textContent="Categories: "+Movie.categories.map(function(c){return c})
    const dir=document.createElement('p')
    dir.textContent="Director: "+Movie.director
    const story=document.createElement('p')
    story.textContent="Storyline: "+Movie.storyline
    const act=document.createElement("p")
    act.textContent="Actor: "+Movie.actors
    MovieDiv.append(title,yr,themes,dir,act,story)
    MovieDiv.classList.add('Movie')
    mainDiv.appendChild(MovieDiv)
}
)