// Additional data from Winsipedia : https://www.winsipedia.com/ranking/all-time-record
// Used for all time win percentage
win_percentages = [ ];
 const school_data = `school,conference,song_name,writers,year,student_writer,official_song,contest,bpm,sec_duration,fight,number_fights,victory,win_won,victory_win_won,rah,nonsense,colors,men,opponents,spelling,trope_count,spotify_id,win_percentage
Notre Dame,Independent,Victory March,Michael J. Shea and John F. Shea,1908,No,Yes,No,152,64,Yes,1,Yes,Yes,Yes,Yes,No,Yes,Yes,No,No,6,15a3ShKX3XWKzq0lSS48yr,0.733
Baylor,Big 12,Old Fight,Dick Baker and Frank Boggs,1947,Yes,Yes,No,76,99,Yes,4,Yes,Yes,Yes,No,No,Yes,No,No,Yes,5,2ZsaI0Cu4nz8DHfBkPt0Dl,0.509
Iowa State,Big 12,Iowa State Fights,"Jack Barker, Manly Rice, Paul Gnam, Rosalind K. Cook",1930,Yes,Yes,No,155,55,Yes,5,No,No,No,Yes,No,No,Yes,No,Yes,4,3yyfoOXZQCtR6pfRJqu9pl,0.462
Kansas,Big 12,I'm a Jayhawk,"George ""Dumpy"" Bowles",1912,Yes,Yes,No,137,62,No,0,No,No,No,No,Yes,No,Yes,Yes,No,3,0JzbjZgcjugS0dmPjF9R89,0.471
Kansas State,Big 12,Wildcat Victory,Harry E. Erickson,1927,Yes,Yes,No,80,67,Yes,6,Yes,No,Yes,No,No,Yes,No,No,No,3,4xxDK4g1OHhZ44sTFy8Ktm,0.464
Oklahoma,Big 12,Boomer Sooner,Arthur M. Alden,1905,Yes,Yes,No,153,37,No,0,No,No,No,Yes,No,No,No,No,Yes,2,0QXC8Gg1oKWkORegslTXoT,0.723
Oklahoma State,Big 12,Ride 'Em Cowboys,J.K. Long,1934,No,Yes,No,180,29,Yes,5,Yes,No,Yes,No,No,No,Yes,Yes,No,4,0mTJqaacUZPG740Y1YDn5j,0.519
Texas,Big 12,Texas Fight,"Walter S. Hunnicutt, James E. King and Burnett Pharr",1923,No,Yes,No,81,65,Yes,17,No,Yes,Yes,No,No,Yes,No,Yes,No,4,53CytfvDMSkJHY5PtrcZiD,0.704
TCU,Big 12,TCU Fight Song,Claude Sammis,1928,No,Yes,No,149,47,Yes,2,Yes,No,Yes,Yes,No,Yes,Yes,No,Yes,6,0ItcRLvqHlbkaqMCPtQKUl,0.545
Texas Tech,Big 12,"Fight, Raiders, Fight",Carroll McMath,1936,Yes,Yes,No,159,54,Yes,8,Yes,No,Yes,No,No,Yes,No,No,No,3,3DfKi9Iqvtxf4DIjs8ezTq,0.557
West Virginia,Big 12,Hail West Virginia,"Earl Miller, Ed McWhorter and Fred Deem",1915,Yes,Yes,No,152,92,No,0,No,No,No,No,No,No,Yes,No,No,1,1VqZp811UsBJy66R8TTkei,0.591
Illinois,Big Ten,Oskee-Wow-Wow,H.R. Green and H.V. Hill,1910,Yes,Yes,No,162,60,No,0,Yes,No,Yes,Yes,Yes,Yes,Yes,Yes,No,6,6C0vaoMxzM21yYgJBmGx5K,0.507
Indiana,Big Ten,"Indiana, Our Indiana",Russell P. Harker and Karl L. King,1912,Yes,Yes,No,150,63,Yes,1,No,No,No,No,No,Yes,No,No,Yes,3,2Wbo5zdRDnq4pOgWL9avaG,0.430
Iowa,Big Ten,Iowa Fight Song,Meredith Willson,1950,No,Yes,No,150,72,Yes,9,No,Yes,Yes,Yes,No,No,No,No,No,3,604ELPPFgbFlW0SHoEYVJw,0.547
Maryland,Big Ten,Maryland Fight Song,Ralph Davis,1939,Yes,Yes,No,142,56,Yes,8,Yes,Yes,Yes,No,No,No,No,No,No,3,6PKoPWKJLOBI2K33RkFvbc,0.516
Michigan,Big Ten,The Victors,Louis Elbel,1898,Yes,Yes,No,83,122,No,0,No,No,No,No,No,No,No,No,No,0,6wVbHLCBOCqp6052WcWXLG,0.732
Michigan State,Big Ten,Victory for MSU,Francis Irving Lankey and Arthur L. Sayles,1915,Yes,Yes,No,145,112,Yes,6,Yes,Yes,Yes,Yes,No,Yes,No,No,Yes,5,4BSrPApxbeUNPA5Q8LyfMd,0.592
Minnesota,Big Ten,The Minnesota Rouser,Floyd Hutsell,1909,No,Yes,Yes,151,60,No,0,No,No,No,Yes,Yes,No,No,No,Yes,3,2EeyLSmHKdZulOKGcTpLS0,0.573
Nebraska,Big Ten,Dear Old Nebraska U.,Harry Pecha,1924,Yes,No,No,136,94,No,0,No,No,No,No,No,No,Yes,No,No,1,7z2TihIyf3IZR1r0AmI1Ik,0.676
Northwestern,Big Ten,Go! U Northwestern,Theodore C. Van Etten,1912,Yes,Yes,No,140,57,Yes,1,Yes,Yes,Yes,Yes,No,No,No,No,No,4,4iWO9U49SZ0vvzto7qxRxN,0.448
Ohio State,Big Ten,Buckeye Battle Cry,Frank Crumit,1919,No,Yes,Yes,178,89,Yes,1,Yes,Yes,Yes,No,No,Yes,Yes,No,No,5,2faIedehtxwQqYxRRc6T2L,0.737
Penn State,Big Ten,"Fight On, State",Joseph Sanders,1933,No,Yes,No,145,81,Yes,5,Yes,Yes,Yes,No,No,Yes,No,No,Yes,5,5InlNNfIFQAvCL78VFgR5O,0.689
Purdue,Big Ten,Hail Purdue,James R. Morrison and Edward S. Wotawa,1912,Yes,Yes,No,160,86,No,0,Yes,No,Yes,No,No,Yes,No,No,No,2,1bYZgec19T5gQJAUeIzq9W,0.510
Rutgers,Big Ten,The Bells Must Ring,Richard Hadden and W.E. Sanford,1931,Yes,Yes,Yes,75,74,Yes,10,Yes,Yes,Yes,Yes,Yes,Yes,Yes,No,Yes,8,7EdGMXzZjJKNHJaszbWTHi,0.491
Wisconsin,Big Ten,"On, Wisconsin",William Purdy and Carl Beck,1909,No,Yes,No,132,134,Yes,5,No,Yes,Yes,No,No,No,Yes,No,No,3,4DmMOLdp4ZYvrAqemDBBbJ,0.582
Arizona,Pac-12,"Bear Down, Arizona",Jack K. Lee,1952,No,No,No,144,83,No,0,No,No,No,No,No,Yes,No,No,No,1,2ckfyC5awK1YD3kbOfCHeP,0.557
Arizona State,Pac-12,Maroon and Gold,Felix McKernan,1948,No,Yes,No,150,106,Yes,3,Yes,No,Yes,No,No,Yes,No,No,Yes,4,138TmlsqwA1J0pGeJBoGUS,0.601
California,Pac-12,Fight for California,Earl Elleson McCoy and Robert N. Fitch,1909,No,Yes,No,134,88,Yes,2,Yes,Yes,Yes,No,No,Yes,Yes,No,No,5,06Qz83gVtmHtWTClrucgjX,0.546
Colorado,Pac-12,Fight CU,Richard Durnett,Unknown,Unknown,Yes,No,151,27,Yes,8,Yes,Yes,Yes,No,No,No,No,No,Yes,4,0Q3VKlBT4lugyLG5n9LKIz,0.567
Oregon,Pac-12,Mighty Oregon,DeWitt Gilbert and Albert John Perfect,1916,Yes,Yes,No,65,80,Yes,2,Yes,Yes,Yes,No,No,No,Yes,Yes,No,5,4zPgdoDF3Od2dwQdPlGJtt,0.584
Oregon State,Pac-12,Hail to Old OSU,Harold Wilkins,1914,No,Yes,No,137,63,Yes,2,No,No,No,No,No,No,No,No,Yes,2,4IV43tyrxewZDmBMp2rtHh,0.470
Stanford,Pac-12,Come Join the Band,"Aurania Ellerbeck Rouverol, Robert Browne Hall",1907,Yes,Yes,No,135,63,No,0,No,Yes,Yes,No,No,Yes,Yes,No,No,3,3Zw53YIiVtdcQBmwbBQ2JS,0.566
UCLA,Pac-12,Sons of Westwood, Harold P. Williams and N. Loyall McLaren; Kelly James,1959,No,Yes,No,72,69,Yes,3,No,No,No,No,No,Yes,Yes,Yes,Yes,5,0XxQcPAThn9dOZ6NVFUfGl,0.580
USC,Pac-12,"Fight On, USC",Milo Sweet,1922,Yes,Yes,Yes,75,60,Yes,5,Yes,Yes,Yes,No,No,No,Yes,No,Yes,5,23EM48kuqZWVltXE9bApcK,0.694
Utah,Pac-12,Utah Man,Harvey Holmes and the football team,1904,No,Yes,No,168,66,Yes,1,No,No,No,No,Yes,Yes,Yes,No,No,4,5pwoauvjUb3aRkDDvibaco,0.597
Washington,Pac-12,Bow Down to Washington,Lester J. Wilson,1915,No,Yes,Yes,139,89,Yes,1,Yes,No,Yes,Yes,No,Yes,No,No,No,4,0OLQPcJ1jMwrXJbt81hHrx,0.619
Washington State,Pac-12,The Fight Song,Zella Melcher and Phyllis Sayles,1919,Yes,Yes,No,81,64,Yes,7,Yes,Yes,Yes,No,No,Yes,No,No,Yes,5,5VErX42t9bSJGas8aOtQyD,0.496
Alabama,SEC,Yea Alabama,Ethelred Lundy (Epp) Sykes,1926,Yes,Yes,Yes,153,59,Yes,3,Yes,Yes,Yes,No,No,Yes,Yes,Yes,No,6,1lkKK6lbsPYD6n5QZbiH1q,0.733
Arkansas,SEC,Arkansas Fight,William Edwin Douglass,1913,Yes,Yes,No,77,88,Yes,3,No,No,No,Yes,No,No,No,No,Yes,3,20iLjYvQOdAO3lPYkfycGn,0.572
Auburn,SEC,War Eagle,Robert Allen and Al Stillman,1955,No,Yes,No,77,27,Yes,1,Yes,Yes,Yes,No,No,Yes,No,No,No,4,1WSPADIiYIO5GfNTJ2vwnM,0.621
Florida,SEC,The Orange and Blue,George Hamilton and Thornton Whitney Allen,1925,No,Yes,No,71,66,Yes,1,No,No,No,No,No,Yes,No,No,No,2,15yyBZUfgNbft50mMB7a4V,0.623
Georgia,SEC,"Glory, Glory","Hugh Hodgson, based on traditional song",1915,Yes,No,No,162,41,No,0,No,No,No,No,No,No,No,No,Yes,1,7masdC1Jz6f4okFu4tAwOz,0.669
Kentucky,SEC,On! On! U of K,Troy Perkins and Charles A. Lampert,1923,Yes,Yes,Yes,79,52,Yes,4,Yes,Yes,Yes,No,No,Yes,No,No,Yes,5,6QMYhg8EaZm7P1n4FZrCWB,0.496
LSU,SEC,Fight for LSU,Castro Carazo and W.G. Higginbotham,1937,No,Yes,No,168,83,Yes,5,No,Yes,Yes,Yes,No,Yes,No,No,Yes,5,5AeAxCC07c4eyWY8eKopQ4,0.644
Mississippi,SEC,Forward Rebels,E.F. Yerby,Unknown,Unknown,Yes,No,153,65,Yes,6,Yes,Yes,Yes,No,No,Yes,No,No,No,4,301ClIQs4cI8poO11mklxg,0.557
Mississippi State,SEC,Hail State,Joseph Peavey,1936,No,Yes,Yes,146,54,Yes,2,Yes,Yes,Yes,No,No,No,No,No,Yes,4,3WN6SK7WfjUSRDFH4PlMNV,0.486
Missouri,SEC,Fight Tiger,Donald MacKay and Robert Karsch,1946,Yes,Yes,Yes,138,86,Yes,4,Yes,Yes,Yes,No,No,No,No,No,No,3,4nrVmzJetWGvMa3OKGJm2Q,0.547
South Carolina,SEC,The Fighting Gamecocks Lead the Way (Step to the Rear),"Paul Dietzel and Elmer Bernstein, arranged by James Pritchard",1968,No,Yes,No,153,64,Yes,4,No,Yes,Yes,No,No,Yes,No,No,Yes,4,65X66oBRmSp8gDkoRGbLjD,0.509
Tennessee,SEC,Rocky Top,Felice and Boudleaux Bryant,1967,No,No,No,149,53,No,0,No,No,No,No,No,No,No,No,No,0,5BRY9YO0PDey8RQcDOV9aP,0.670
Texas A&M,SEC,Aggie War Hymn,J.V. “Pinky” Wilson,1918,Yes,No,Yes,117,172,Yes,1,No,No,No,No,Yes,No,Yes,Yes,No,4,4mssGSMkmNIv0XR5e6j9Ky,0.605
Vanderbilt,SEC,Dynamite,Francis Craig,1941,No,Yes,No,72,45,Yes,3,Yes,Yes,Yes,No,No,No,No,No,No,3,5tXWqJHiTDHRYtOngsBPAW,0.486
Boston College,ACC,For Boston,T.J. Hurley,Unknown,No,Yes,No,147,84,No,0,No,No,No,No,No,No,No,No,No,0,4E8cLR6NcYCCJWqD2iwz7c,0.563
Clemson,ACC,Tiger Rag,Original Dixieland Jass Band,1917,No,Yes,No,145,78,No,0,No,No,No,No,No,No,No,No,Yes,1,7hGtgN4N9ebZTlC7xhvKIE,0.624
Duke,ACC,Fight Blue Devils,Joe Hewitt and Doug Ballin,1947,No,Yes,No,139,58,Yes,5,No,Yes,Yes,No,No,Yes,No,Yes,No,4,0fDiYvMTYWSSrIuHVJGMZj,0.496
Florida State,ACC,FSU Fight Song,Doug Alley and Tommie Wright,1950,Yes,Yes,No,135,92,Yes,6,Yes,Yes,Yes,No,Yes,No,No,No,Yes,5,552UZRLtAO5YXvIVRLjphI,0.661
Georgia Tech,ACC,Ramblin' Wreck From Georgia Tech,Unknown,Unknown,Yes,Yes,No,148,68,No,0,No,No,No,No,No,Yes,Yes,Yes,No,3,0ZOzvjnZDwrtluHrwbtvGR,0.581
Louisville,ACC,Fight! U of L,Robert B. Griffith,1962,No,Yes,No,139,80,Yes,3,Yes,Yes,Yes,Yes,No,No,No,No,Yes,5,1sCmJDLWfD4hsCHyc9hqUr,0.529
Miami,ACC,Miami U How-Dee-Doo,Henry Fillmore,1950,No,Yes,No,75,73,Yes,3,Yes,No,Yes,No,No,No,No,No,Yes,3,2TDHghruqAnMmH4L9GFUUr,0.633
North Carolina,ACC,I'm a Tar Heel Born,Unknown,Unknown,Unknown,Yes,No,158,38,No,0,No,No,No,Yes,No,No,No,No,No,1,23cCr6w4YgxQaYlr3eNTUr,0.556
North Carolina State,ACC,The Red & White Song,J. Perry Watson,1961,No,No,No,90,82,No,0,No,No,No,No,No,Yes,No,Yes,Yes,3,2Pn76lkyMhOxJj8maIrIRT,0.516
Pitt,ACC,Hail to Pitt,George Kirk and Lester Milton Taylor,1911,Yes,Yes,No,79,110,No,0,Yes,Yes,Yes,No,Yes,Yes,Yes,No,Yes,6,55nndPja6lpTsGMinT1SJy,0.574
Syracuse,ACC,Down the Field,Ralph Murphy and C. Harold Lewis,1914,Yes,Yes,No,137,85,Yes,3,Yes,No,Yes,Yes,No,Yes,Yes,Yes,No,6,4zrPkQ9AFljRbPy0JNW6cA,0.560
Virginia,ACC,The Good Old Song,Edward H. Craighill,1893,Yes,No,No,112,42,No,0,No,No,No,Yes,Yes,No,No,No,Yes,3,4zymLpKnHG2KURvrSUyUy8,0.517
Virginia Tech,ACC,Tech Triumph,Wilfred P. Maddux and Mattie Eppes,1919,Yes,Yes,No,133,71,No,0,No,Yes,Yes,No,Yes,Yes,Yes,No,Yes,5,5v3wGg8VMD8MMYGb8SXBss,0.596
Wake Forest,ACC,O Here's To Wake Forest,C.P. Weaver,1908,No,Yes,No,146,69,No,0,No,No,No,Yes,No,Yes,Yes,No,No,3,3u6THWNCTIdCcGIcJ1FQsN,0.422`


const school_colors = {
    "Notre Dame": "rgba(12, 35, 64, 0.7)",
    "Baylor": "rgba(0, 48, 37, 0.7)",
    "Iowa State": "rgba(130, 36, 51, 0.7)",
    "Kansas": "rgba(0, 81, 186, 0.7)",
    "Kansas State": "rgba(81, 40, 144, 0.7)",
    "Oklahoma": "rgba(132, 22, 23, 0.7)",
    "Oklahoma State": "rgba(255, 124, 25, 0.7)",
    "Texas": "rgba(191, 87, 0, 0.7)",
    "TCU": "rgba(77, 25, 121, 0.7)",
    "Texas Tech": "rgba(204, 0, 0, 0.7)",
    "West Virginia": "rgba(0, 40, 85, 0.7)",
    "Illinois": "rgba(19, 41, 75, 0.7)",
    "Indiana": "rgba(153, 0, 0, 0.7)",
    "Iowa": "rgba(255, 205, 0, 0.7)",
    "Maryland": "rgba(224, 25, 34, 0.7)",
    "Michigan": "rgba(0, 39, 76, 0.7)",
    "Michigan State": "rgba(24, 69, 59, 0.7)",
    "Minnesota": "rgba(122, 0, 25, 0.7)",
    "Nebraska": "rgba(228, 17, 43, 0.7)",
    "Northwestern": "rgba(78, 42, 132, 0.7)",
    "Ohio State": "rgba(187, 0, 0, 0.7)",
    "Penn State": "rgba(4, 30, 66, 0.7)",
    "Purdue": "rgba(206, 184, 136, 0.7)",
    "Rutgers": "rgba(204, 0, 51, 0.7)",
    "Wisconsin": "rgba(197, 5, 12, 0.7)",
    "Arizona": "rgba(12, 35, 64, 0.7)",
    "Arizona State": "rgba(142, 35, 52, 0.7)",
    "California": "rgba(0, 50, 91, 0.7)",
    "Colorado": "rgba(207, 184, 110, 0.7)",
    "Oregon": "rgba(18, 71, 52, 0.7)",
    "Oregon State": "rgba(220, 68, 5, 0.7)",
    "Stanford": "rgba(140, 21, 21, 0.7)",
    "UCLA": "rgba(45, 104, 196, 0.7)",
    "USC": "rgba(153, 0, 0, 0.7)",
    "Utah": "rgba(204, 0, 0, 0.7)",
    "Washington": "rgba(51, 0, 111, 0.7)",
    "Washington State": "rgba(152, 30, 50, 0.7)",
    "Alabama": "rgba(158, 27, 50, 0.7)",
    "Arkansas": "rgba(157, 34, 53, 0.7)",
    "Auburn": "rgba(12, 35, 64, 0.7)",
    "Florida": "rgba(0, 33, 165, 0.7)",
    "Georgia": "rgba(186, 12, 47, 0.7)",
    "Kentucky": "rgba(0, 51, 160, 0.7)",
    "LSU": "rgba(70, 29, 124, 0.7)",
    "Mississippi": "rgba(206, 17, 38, 0.7)",
    "Mississippi State": "rgba(102, 0, 0, 0.7)",
    "Missouri": "rgba(0, 0, 0, 0.7)",
    "South Carolina": "rgba(115, 0, 10, 0.7)",
    "Tennessee": "rgba(255, 130, 0, 0.7)",
    "Texas A&M": "rgba(80, 0, 0, 0.7)",
    "Vanderbilt": "rgba(134, 109, 75, 0.7)",
    "Boston College": "rgba(152, 30, 50, 0.7)",
    "Clemson": "rgba(245, 102, 0, 0.7)",
    "Duke": "rgba(0, 48, 135, 0.7)",
    "Florida State": "rgba(120, 47, 64, 0.7)",
    "Georgia Tech": "rgba(179, 163, 105, 0.7)",
    "Louisville": "rgba(173, 27, 46, 0.7)",
    "Miami": "rgba(244, 115, 33, 0.7)",
    "North Carolina": "rgba(123, 175, 212, 0.7)",
    "North Carolina State": "rgba(204, 0, 0, 0.7)",
    "Pitt": "rgba(0, 53, 148, 0.7)",
    "Syracuse": "rgba(247, 105, 0, 0.7)",
    "Virginia": "rgba(35, 45, 75, 0.7)",
    "Virginia Tech": "rgba(99, 0, 49, 0.7)",
    "Wake Forest": "rgba(158, 126, 56, 0.7)"
};






// console.log("HELLO WORLD")
data_dummy = {};
// 1. Convert the CSV text into an Array of Objects
schoolDataObjects = $.csv.toObjects(school_data);
// console.log(schoolDataObjects);

function preloadAllLogos() {
    console.log("Starting image preloading...");
    schoolDataObjects.forEach(school => {
        const img = new Image();
        const url = `/${getSchoolUrl(school.school)}`;
        img.src = url;
    });
}
preloadAllLogos();
filter = 'default';
const insert_space = document.getElementById("leaderboard_id"); // where the html will be appended
leaderboard = $('#leaderboard_id')
const calculate_button = document.getElementById("calculate-trigger"); // document refers to the html page by default 
chart = document.getElementById("sidebarChart");
label_value = "none"
labels = ["All Time CFB Win %", "BPM", "Tropes", "Duration", "Fight", "Age of Song" ]
dataValues = [0,0,0,0,0,0];
data_in = {
                labels: labels,
                datasets: [{
                    label: label_value,
                    data: dataValues,
                    backgroundColor: [
                        'rgba(255, 255, 255, 0.9)',
                        'rgba(255, 255, 255, 0.9)',
                        'rgba(255, 255, 255, 0.9)',
                        'rgba(255, 255, 255, 0.9)',
                        'rgba(255, 255, 255, 0.9)',
                        'rgba(255, 255, 255, 0.9)'
                    ],
                    borderColor: [
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)'
                    ],
                    borderWidth: 1
                }]
}
function refresh_data(label_value_in){
   data_in = {

                labels: labels,
                datasets: [{

                label: label_value_in,
                    data: dataValues,
                    backgroundColor: [
                        'rgba(255, 255, 255, 0.9)',
                        'rgba(255, 255, 255, 0.9)',
                        'rgba(255, 255, 255, 0.9)',
                        'rgba(255, 255, 255, 0.9)',
                        'rgba(255, 255, 255, 0.9)',
                        'rgba(255, 255, 255, 0.9)'
                    ],
                    borderColor: [
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)',
                        'rgb(255, 255, 255)'
                    ],
                    borderWidth: 1
                }]
} 
}





function sort(school_objects, filter_in){
    if(filter_in === "tempo"){
        for(let j = 0; j < (school_objects.length - 1); j++){
            for(let i = 0; i < (school_objects.length - 1); i++){
                if(Number(school_objects[i + 1].bpm) > Number(school_objects[i].bpm)){
                    console.log(" "+ school_objects[i].bpm+ "<" + school_objects[i + 1].bpm)
                    let temp = school_objects[i];
                    school_objects[i] = school_objects[i + 1];
                    school_objects[i + 1] = temp;
                }
                if(Number(school_objects[i + 1].bpm) === Number(school_objects[i].bpm)){
                    if(Number(school_objects[i+1].win_percentage) > Number(school_objects[i].win_percentage)){
                        // console.log(" "+ school_objects[i].trope_count+ "<" + school_objects[i + 1].trope_count)
                        let temp = school_objects[i];
                        school_objects[i] = school_objects[i + 1];
                        school_objects[i + 1] = temp;
                    }
                    
                }
            }
        }
        
        return "tempo";
    }
    if(filter_in === "trope_count"){
        for(let j = 0; j < (school_objects.length - 1); j++){
            for(let i = 0; i < (school_objects.length - 1); i++){
                if(Number(school_objects[i + 1].trope_count) > Number(school_objects[i].trope_count)){
                    console.log(" "+ school_objects[i].trope_count+ "<" + school_objects[i + 1].trope_count)
                    let temp = school_objects[i];
                    school_objects[i] = school_objects[i + 1];
                    school_objects[i + 1] = temp;
                }
                if(Number(school_objects[i + 1].trope_count) === Number(school_objects[i].trope_count)){
                    if(Number(school_objects[i+1].win_percentage) > Number(school_objects[i].win_percentage)){
                        // console.log(" "+ school_objects[i].trope_count+ "<" + school_objects[i + 1].trope_count)
                        let temp = school_objects[i];
                        school_objects[i] = school_objects[i + 1];
                        school_objects[i + 1] = temp;
                    }
                    
                }
            }
        }
        return "trope_count";
    }
    if(filter_in === "trope_count_inverse"){
        for(let j = 0; j < (school_objects.length - 1); j++){
            for(let i = 0; i < (school_objects.length - 1); i++){
                if(Number(school_objects[i + 1].trope_count) < Number(school_objects[i].trope_count)){
                    // console.log(" "+ school_objects[i].trope_count+ "<" + school_objects[i + 1].trope_count)
                    let temp = school_objects[i];
                    school_objects[i] = school_objects[i + 1];
                    school_objects[i + 1] = temp;
                }
                if(Number(school_objects[i + 1].trope_count) === Number(school_objects[i].trope_count)){
                    if(Number(school_objects[i+1].win_percentage) > Number(school_objects[i].win_percentage)){
                        // console.log(" "+ school_objects[i].trope_count+ "<" + school_objects[i + 1].trope_count)
                        let temp = school_objects[i];
                        school_objects[i] = school_objects[i + 1];
                        school_objects[i + 1] = temp;
                    }
                    
                }

            }
        }
        return "trope_count";
    }
    if(filter_in === "trope_count"){
        for(let j = 0; j < (school_objects.length - 1); j++){
            for(let i = 0; i < (school_objects.length - 1); i++){
                if(Number(school_objects[i + 1].trope_count) > Number(school_objects[i].trope_count)){
                    // console.log(" "+ school_objects[i].trope_count+ "<" + school_objects[i + 1].trope_count)
                    let temp = school_objects[i];
                    school_objects[i] = school_objects[i + 1];
                    school_objects[i + 1] = temp;
                }
                if(Number(school_objects[i + 1].trope_count) === Number(school_objects[i].trope_count)){
                    if(Numer(school_objects[i+1].win_percentage) > Number(school_objects[i].win_percentage)){
                        // console.log(" "+ school_objects[i].trope_count+ "<" + school_objects[i + 1].trope_count)
                        let temp = school_objects[i];
                        school_objects[i] = school_objects[i + 1];
                        school_objects[i + 1] = temp;
                    }
                    
                }
            }
        }
        return "trope_count";
    }
    if(filter_in === "oldest"){
        
        for(let j = 0; j < (school_objects.length - 1); j++){
            for(let i = 0; i < (school_objects.length - 1); i++){
                if(school_objects[i] === "Unknown"){
                    school_objects[i].year = 0;
                }
                if(school_objects[i + 1] === "Unknown"){
                    school_objects[i + 1].year = 0;
                }
                if(Number(school_objects[i + 1].year) < Number(school_objects[i].year)){
                    // console.log(" "+ school_objects[i].trope_count+ "<" + school_objects[i + 1].trope_count)
                    
                    let temp = school_objects[i];
                    school_objects[i] = school_objects[i + 1];
                    school_objects[i + 1] = temp;
                    
                }
                if(school_objects[i].year === "Unknown"){
                     let temp = school_objects[i];
                    school_objects[i] = school_objects[i + 1];
                    school_objects[i + 1] = temp;
                }
                if(Number(school_objects[i + 1].year) === Number(school_objects[i].year)){
                    if(Number(school_objects[i+1].win_percentage) > Number(school_objects[i].win_percentage)){
                        // console.log(" "+ school_objects[i].trope_count+ "<" + school_objects[i + 1].trope_count)
                        let temp = school_objects[i];
                        school_objects[i] = school_objects[i + 1];
                        school_objects[i + 1] = temp;
                    }
                    
                }
            }
        }
        return "oldest";
    }
    if(filter_in === "sec_duration"){
        for(let j = 0; j < (school_objects.length - 1); j++){
            for(let i = 0; i < (school_objects.length - 1); i++){
                if(Number(school_objects[i + 1].sec_duration) > Number(school_objects[i].sec_duration)){
                    // console.log(" "+ school_objects[i].sec_duration+ "<" + school_objects[i + 1].sec_duration)
                    let temp = school_objects[i];
                    school_objects[i] = school_objects[i + 1];
                    school_objects[i + 1] = temp;
                }
                if(Number(school_objects[i + 1].sec_duration) === Number(school_objects[i].sec_duration)){
                    if(Number(school_objects[i+1].win_percentage) > Number(school_objects[i].win_percentage)){
                        // console.log(" "+ school_objects[i].trope_count+ "<" + school_objects[i + 1].trope_count)
                        let temp = school_objects[i];
                        school_objects[i] = school_objects[i + 1];
                        school_objects[i + 1] = temp;
                    }
                    
                }
            }
        }
        return "sec_duration";
    }
    if(filter_in === "win"){
        for(let j = 0; j < (school_objects.length - 1); j++){
            for(let i = 0; i < (school_objects.length - 1); i++){
                if(Number(school_objects[i + 1].win_percentage) > Number(school_objects[i].win_percentage)){
                    // console.log(" "+ school_objects[i].sec_duration+ "<" + school_objects[i + 1].sec_duration)
                    let temp = school_objects[i];
                    school_objects[i] = school_objects[i + 1];
                    school_objects[i + 1] = temp;
                }
                if(Number(school_objects[i + 1].win_percentage) === Number(school_objects[i].win_percentage)){
                    if(school_objects[i+1].school < school_objects[i].school){
                        // console.log(" "+ school_objects[i].trope_count+ "<" + school_objects[i + 1].trope_count)
                        let temp = school_objects[i];
                        school_objects[i] = school_objects[i + 1];
                        school_objects[i + 1] = temp;
                    }
                    
                }
            }
        }
        return "win";
    }
}

function please_pick_a_filter(){
    html_insert = `<div class="school-card" id = "pick-a-filter"> 
                <div class="rank"></div>
                
                    <div class="school-info">
                        <p class="school-name">Please pick a filter</p>
                    </div>

    </div> 
                `;

                
    leaderboard.append(html_insert);
}


function getSchoolUrl(school_name_in){
    // if(school_name_in === "Alabama"){
    //     return "alabama.gif";
    // }
    const converted = school_name_in.toLowerCase().trim().replace(/\s+/g, '-').replace(/[&]/g, 'and');

    return `${converted}.png`
}


//chool,conference,song_name,writers,year,student_writer,official_song,contest,bpm,sec_duration,fight,
// number_fights,victory,win_won,victory_win_won,rah,nonsense,colors,men,opponents,spelling,trope_count,spotify_id mm-1/14/2026
function make_div_from_object(school_object, category_in, rank){
    // console.log(school_object.school);
    category_item = ""
    if(category_in === "tempo"){
        category_item = "BPM : " + school_object.bpm;
    }
    if(category_in === "trope_count"){
        category_item = "Tropes: " + school_object.trope_count;
    }
    if(category_in === "trope_count_inverse"){
        category_item = "Tropes: " + school_object.trope_count;
    }
    if(category_in === "sec_duration"){
        category_item =  "Duration: " +school_object.sec_duration + " s";
    }
    if(category_in === "oldest"){
        if(school_object.year === "Unknown"){
            category_item = 'Unknown'
        }else{
        category_item =  `Written: ${school_object.year}`;
        }
    }
    if(category_in === "win"){
        category_item = `${(school_object.win_percentage * 100).toFixed(2)}%`;
    }

    
    const logo_URL = getSchoolUrl(school_object.school);


                            // <p class="song-details">"${school_object.song_name}" • ${school_object.bpm} BPM • Tropes: ${school_object.trope_count}</p>


    const html_insert = `
    <div class="school-card" id = rank-${rank}>
                    <div class="rank">${rank}</div>
                    <div class="logo-placeholder" ><img class = "school-logo" src = /${logo_URL}></div>
                    <div class="school-info">
                        <p class="school-name">${school_object.school}</p>
                    </div>
                    <div class="score-badge">${category_item}</div>
                </div> 
                `;
    leaderboard.append(html_insert);
    school_card = document.getElementById(`rank-${rank}`);
    school_card.addEventListener('click', function() {
        // display_school_stats(school_object);
        this.classList.toggle('selected');

        if (this.classList.contains('selected')) {
        display_school_stats(school_object);
        } else {
            // Logic to remove the school from display_chart.data.datasets
            display_chart.data.datasets = display_chart.data.datasets.filter(
                d => d.label !== school_object.school
            );
            display_chart.update();
        }
    });
}

function get_names_from(school_objects){
    var list_of_names = [];
    school_objects.forEach(school =>
        {
            list_of_names.push(school.school);
        }
    );
    return list_of_names;

}
function update_chart_UI(){
    // if (display_chart !== null) {
    //     display_chart.destroy();
    // }
    // display_chart = chartUI(chart);
    // display_chart.update({
    //     duration: 800,     // Time in milliseconds (800ms = 0.8s)
    //     easing: 'easeOutQuart'
    // })
    // new_data_set
    display_chart.update();

}   
// function add_data(new_data_values){
//     // chart.data.labels.push(label);
//     // chart.data.datasets[chart.data.datasets.length]
//         new_data= {
//                 labels: labels,
//                 datasets: [{
//                     label: '',
//                     data: new_data_values,
//                     // backgroundColor: [
//                     //     'rgba(255, 99, 132, 0.2)',
//                     //     'rgba(54, 162, 235, 0.2)',
//                     //     'rgba(255, 206, 86, 0.2)',
//                     //     'rgba(75, 192, 192, 0.2)',
//                     //     'rgba(153, 102, 255, 0.2)',
//                     //     'rgba(255, 159, 64, 0.2)'
//                     // ],
//                     // borderColor: [
//                     //     'rgba(255, 99, 132, 1)',
//                     //     'rgba(54, 162, 235, 1)',
//                     //     'rgba(255, 206, 86, 1)',
//                     //     'rgba(75, 192, 192, 1)',
//                     //     'rgba(153, 102, 255, 1)',
//                     //     'rgba(255, 159, 64, 1)'
//                     // ],
//                     borderWidth: 1
//                 }]
//         } 
//     // new_data = new_data_values;
//     // dataValues;
//     display_chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(new_data);
//     });

//     update_chart_UI();

// }
function remove_data(){

}

// ["BPM", "Original", "Duration", "Traditional", "Fight", "Victory/Win" ]
function display_school_stats(school){
    var index = display_chart.data.datasets.length - 1;
    
    console.log("calculating");
    var functional_fights = school.number_fights;
    var functional_year = school.year;
    if(school.year == "Unknown"){
        functional_year = 0;
    }
    if(school.number_fights == "0"){
        functional_fights = 1;
    }
    
    
    dataValues = [school.win_percentage,(school.bpm)/180,(((school.trope_count)/8)),(school.sec_duration)/172,(functional_fights)/20, functional_year/2000]; 
    
    // display_chart.data.datasets[index].data = dataValues;
    // label_value = school.school;
    
    console.log("label_value : "+ label_value);

    var team_color = school_colors[school.school];
    //
    newDataset = {
        label: school.school,
        data: dataValues,
        backgroundColor: team_color,
        borderColor: [
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)'
        ],
        borderWidth: 1
    };

    //
    // refresh_data(school.school);
    // // display_chart.data.datasets.label = (label_value);
    // display_chart.data.datasets[index].label = school.school;
    // display_chart.data.datasets[index].backgroundColor[0] = school_colors[school.school];

        display_chart.data.datasets.push(newDataset);
    
    update_chart_UI();
    // add_data(dataValues);

}


function calculate(filter_in){

    // labels = ["BPM", "Originality", "duration", ]

    leaderboard.empty();
    console.log("printing!!!");
    console.log(filter_in);
    //sort according to filter
    
    if(filter_in != "default"){
        // console.log("here");
        // var category_text = sort(schoolDataObjects, filter_in);
        // let i = 1;
        // schoolDataObjects.forEach(school => {
        //     // console.log("school object : "  + school);
        //     make_div_from_object(school, category_text, i);
        //     i++;
        //     // console.log("1");
        // });
        // display_school_stats(schoolDataObjects[0]);
        // const iterator = display_chart.data.datasets.length;
        // for(let i = 1; i < iterator; i++){
        //     display_chart.data.datasets.pop();
        // }
        var category_text = sort(schoolDataObjects, filter_in);
        let i = 1;
        
        // Clear the chart datasets BEFORE adding new ones
        display_chart.data.datasets = []; 

        schoolDataObjects.forEach(school => {
            make_div_from_object(school, category_text, i);
            i++;
        });

        // Add the #1 ranked school to the fresh chart
        display_school_stats(schoolDataObjects[0]);
        var bot = document.getElementById("rank-1");
        bot.classList.add('selected');
        
        // Final update to show everything
        display_chart.update();



    }    
    else{
        please_pick_a_filter();
    }

}

function chartUI(ctx){

    var myChart = new Chart(ctx, {
            type: 'radar', // Options: 'line', 'pie', 'doughnut', 'radar'
            data: data_in,
            options: {
                animation: {
                    duration: 500, // Default animation speed
                    easing: 'easeOutQuart'
                },
                scales: {
                    r: { // 'r' is the radial scale
                    max: 1,
                    beginAtZero: true,
                    ticks: {    
                        showLabelBackdrop: false, // Ensure this is true
                        backdropColor: 'rgb(238, 238, 238)', // Change to your desired color (e.g., yellow)
                        color: 'rgb(255, 255, 255)' // This changes the actual number color
                    },
                    grid: {
                        color: 'rgb(187, 187, 187)', // Makes horizontal grid lines white (with transparency)
                        borderColor: '#b9b9b9'             // Makes the bottom axis line solid white
                    }
                    }
                }
                }
    });
    return myChart;
}

// display_chart = chartUI(chart);

// schools = document.getElementsByClassName("school-card");

function printAlphabeticalSchools() {
    // 1. Create a shallow copy so we don't mess up the original ranking order
    const sortedSchools = [...schoolDataObjects];

    // 2. Sort alphabetically by the 'school' property
    sortedSchools.sort((a, b) => {
        const nameA = a.school.toUpperCase(); // ignore upper and lowercase
        const nameB = b.school.toUpperCase(); // ignore upper and lowercase
        
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0; // names must be equal
    });

    // 3. Print to the console
    console.log("--- Schools in Alphabetical Order ---");
    sortedSchools.forEach(item => {
        console.log(item.school);
    });
}
printAlphabeticalSchools();

// schools.addEventListener('click', () =>)



window.addEventListener('scroll', function() {
    const container = document.getElementsByClassName('other-btn');
    container.classList.toggle('scrolling', window.scrollY > 0);
});

