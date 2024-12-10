/*   STEP 1   */
export const leagueID = "1056045016835055616"; // your league ID
export const leagueName = "The Busch League"; // your league name
export const dues = 50; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to The Busch League! The league has been made up of 10 friends since 2015, some in the league from the start, and some that have joined as we progressed. Starting back in Middle School to now as Adults, The Busch League has CHANGED, RESHAPED, and BEGAN a new Chapter with many more years to come. From the great feel of competing and winning and the pain and suffering of losing... Proudly introduce you to the past, present, and future of our fantasy league! This is The Busch League.</p>
  
  
  `;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Ty Dorvinen",
       "tookOver": 2019, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Green Bay", // (optional)
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "rival": {
         name: "Tai Thao", // Can be anything (usually your rival's name)
         link: 9, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
     },
     {
       "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Jackson Salmon",
       "tookOver": 2015, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Green Bay", // (optional)
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "rival": {
         name: "Grant Maus", // Can be anything (usually your rival's name)
         link: 8, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
     },
     {
       "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "Colton Gaeth": "Your Name",
       "tookOver": 2015, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Appleton", // (optional)
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "rival": {
         name: "Ryan Kemppainen", // Can be anything (usually your rival's name)
         link: 4, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
     },
       {
       "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Drake Toneys",
       "tookOver": 2015, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Green Bay", // (optional)
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "rival": {
         name: "Jaden Wilson", // Can be anything (usually your rival's name)
         link: 5, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
     },
     {
       {
       "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Ryan Kemppainen",
       "tookOver": 2015, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Madison", // (optional)
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "rival": {
         name: "Colton Gaeth", // Can be anything (usually your rival's name)
         link: 2, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
     },
     {
       {
       "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Jaden Wilson",
       "tookOver": 2015, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Green Bay", // (optional)
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "rival": {
         name: "Drake Toneys", // Can be anything (usually your rival's name)
         link: 3, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
     },
     {
       {
       "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Sam Salemi",
       "tookOver": 2016, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Green Bay", // (optional)
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "rival": {
         name: "Jake Plummer", // Can be anything (usually your rival's name)
         link: 7, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
     },
     {
       {
       "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Jake Plummer",
       "tookOver": 2015, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Green Bay", // (optional)
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "rival": {
         name: "Sam Salemi", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
     },
     {
       {
       "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Grant Maus",
       "tookOver": 2015, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Green Bay", // (optional)
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "rival": {
         name: "Jackson Salmon", // Can be anything (usually your rival's name)
         link: 1, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
     },
     {
       {
       "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Tai Thao",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Green Bay", // (optional)
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "rival": {
         name: "Ty Dorvinen", // Can be anything (usually your rival's name)
         link: 0, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
     },
     {
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
