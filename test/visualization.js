(function(){
    var codes = {
        ABW:'Aruba',
        AFG:'Afghanistan',
        AGO:'Angola',
        AIA:'Anguilla',
        ALA:'Åland Islands',
        ALB:'Albania',
        AND:'Andorra',
        ARE:'United Arab Emirates',
        ARG:'Argentina',
        ARM:'Armenia',
        ASM:'American Samoa',
        ATA:'Antarctica',
        ATF:'French Southern Territories',
        ATG:'Antigua and Barbuda',
        AUS:'Australia',
        AUT:'Austria',
        AZE:'Azerbaijan',
        BDI:'Burundi',
        BEL:'Belgium',
        BEN:'Benin',
       BES:'Bonaire, Sint Eustatius and Saba',
       BFA:'Burkina Faso',
       BGD:'Bangladesh',
       BGR:'Bulgaria',
       BHR:'Bahrain',
       BHS:'Bahamas',
       BIH:'Bosnia and Herzegovina',
       BLM:'Saint Barthélemy',
       BLR:'Belarus',
       BLZ:'Belize',
       BMU:'Bermuda',
       BOL:'Bolivia, Plurinational State of',
       BRA:'Brazil',
       BRB:'Barbados',
       BRN:'Brunei Darussalam',
       BTN:'Bhutan',
       BVT:'Bouvet Island',
       BWA:'Botswana',
       CAF:'Central African Republic',
       CAN:'Canada',
       CCK:'Cocos (Keeling) Islands',
       CHE:'Switzerland',
       CHL:'Chile',
       CHN:'China',
       CIV:'Côte d\'Ivoire',
       CMR:'Cameroon',
       COD:'Congo, the Democratic Republic of the',
       COG:'Congo',
       COK:'Cook Islands',
       COL:'Colombia',
       COM:'Comoros',
       CPV:'Cape Verde',
       CRI:'Costa Rica',
       CUB:'Cuba',
       CUW:'Curaçao',
       CXR:'Christmas Island',
       CYM:'Cayman Islands',
       CYP:'Cyprus',
       CZE:'Czech Republic',
       DEU:'Germany',
       DJI:'Djibouti',
       DMA:'Dominica',
       DNK:'Denmark',
       DOM:'Dominican Republic',
       DZA:'Algeria',
       ECU:'Ecuador',
       EGY:'Egypt',
       ERI:'Eritrea',
       ESH:'Western Sahara',
       ESP:'Spain',
       EST:'Estonia',
       ETH:'Ethiopia',
       FIN:'Finland',
       FJI:'Fiji',
       FLK:'Falkland Islands (Malvinas)',
       FRA:'France',
       FRO:'Faroe Islands',
       FSM:'Micronesia, Federated States of',
       GAB:'Gabon',
       GBR:'United Kingdom',
       GEO:'Georgia',
       GGY:'Guernsey',
       GHA:'Ghana',
       GIB:'Gibraltar',
       GIN:'Guinea',
       GLP:'Guadeloupe',
       GMB:'Gambia',
       GNB:'Guinea-Bissau',
       GNQ:'Equatorial Guinea',
       GRC:'Greece',
       GRD:'Grenada',
       GRL:'Greenland',
       GTM:'Guatemala',
       GUF:'French Guiana',
       GUM:'Guam',
       GUY:'Guyana',
       HKG:'Hong Kong',
       HMD:'Heard Island and McDonald Islands',
       HND:'Honduras',
       HRV:'Croatia',
       HTI:'Haiti',
       HUN:'Hungary',
       IDN:'Indonesia',
       IMN:'Isle of Man',
       IND:'India',
       IOT:'British Indian Ocean Territory',
       IRL:'Ireland',
       IRN:'Iran, Islamic Republic of',
       IRQ:'Iraq',
       ISL:'Iceland',
       ISR:'Israel',
       ITA:'Italy',
       JAM:'Jamaica',
       JEY:'Jersey',
       JOR:'Jordan',
       JPN:'Japan',
       KAZ:'Kazakhstan',
       KEN:'Kenya',
       KGZ:'Kyrgyzstan',
       KHM:'Cambodia',
       KIR:'Kiribati',
       KNA:'Saint Kitts and Nevis',
       KOR:'Korea, Republic of',
       KWT:'Kuwait',
       LAO:'Lao People\'s Democratic Republic',
       LBN:'Lebanon',
       LBR:'Liberia',
       LBY:'Libya',
       LCA:'Saint Lucia',
       LIE:'Liechtenstein',
       LKA:'Sri Lanka',
       LSO:'Lesotho',
       LTU:'Lithuania',
       LUX:'Luxembourg',
       LVA:'Latvia',
       MAC:'Macao',
       MAF:'Saint Martin (French part)',
       MAR:'Morocco',
       MCO:'Monaco',
       MDA:'Moldova, Republic of',
       MDG:'Madagascar',
       MDV:'Maldives',
       MEX:'Mexico',
       MHL:'Marshall Islands',
       MKD:'Macedonia, the former Yugoslav Republic of',
       MLI:'Mali',
       MLT:'Malta',
       MMR:'Myanmar',
       MNE:'Montenegro',
       MNG:'Mongolia',
       MNP:'Northern Mariana Islands',
       MOZ:'Mozambique',
       MRT:'Mauritania',
       MSR:'Montserrat',
       MTQ:'Martinique',
       MUS:'Mauritius',
       MWI:'Malawi',
       MYS:'Malaysia',
       MYT:'Mayotte',
       NAM:'Namibia',
       NCL:'New Caledonia',
       NER:'Niger',
       NFK:'Norfolk Island',
       NGA:'Nigeria',
       NIC:'Nicaragua',
       NIU:'Niue',
       NLD:'Netherlands',
       NOR:'Norway',
       NPL:'Nepal',
       NRU:'Nauru',
       NZL:'New Zealand',
       OMN:'Oman',
       PAK:'Pakistan',
       PAN:'Panama',
       PCN:'Pitcairn',
       PER:'Peru',
       PHL:'Philippines',
       PLW:'Palau',
       PNG:'Papua New Guinea',
       POL:'Poland',
       PRI:'Puerto Rico',
       PRK:'Korea, Democratic People\'s Republic of',
       PRT:'Portugal',
       PRY:'Paraguay',
       PSE:'Palestinian Territory, Occupied',
       PYF:'French Polynesia',
       QAT:'Qatar',
       REU:'Réunion',
       ROU:'Romania',
       RUS:'Russian Federation',
       RWA:'Rwanda',
       SAU:'Saudi Arabia',
       SDN:'Sudan',
       SEN:'Senegal',
       SGP:'Singapore',
       SGS:'South Georgia and the South Sandwich Islands',
       SHN:'Saint Helena, Ascension and Tristan da Cunha',
       SJM:'Svalbard and Jan Mayen',
       SLB:'Solomon Islands',
       SLE:'Sierra Leone',
       SLV:'El Salvador',
       SMR:'San Marino',
       SOM:'Somalia',
       SPM:'Saint Pierre and Miquelon',
       SRB:'Serbia',
       SSD:'South Sudan',
       STP:'Sao Tome and Principe',
       SUR:'Suriname',
       SVK:'Slovakia',
       SVN:'Slovenia',
       SWE:'Sweden',
       SWZ:'Swaziland',
       SXM:'Sint Maarten (Dutch part)',
       SYC:'Seychelles',
       SYR:'Syrian Arab Republic',
       TCA:'Turks and Caicos Islands',
       TCD:'Chad',
       TGO:'Togo',
       THA:'Thailand',
       TJK:'Tajikistan',
       TKL:'Tokelau',
       TKM:'Turkmenistan',
       TLS:'Timor-Leste',
       TON:'Tonga',
       TTO:'Trinidad and Tobago',
       TUN:'Tunisia',
       TUR:'Turkey',
       TUV:'Tuvalu',
       TWN:'Taiwan, Province of China',
       TZA:'Tanzania, United Republic of',
       UGA:'Uganda',
       UKR:'Ukraine',
       UMI:'United States Minor Outlying Islands',
       URY:'Uruguay',
       USA:'United States',
       UZB:'Uzbekistan',
       VAT:'Holy See (Vatican City State)',
       VCT:'Saint Vincent and the Grenadines',
       VEN:'Venezuela, Bolivarian Republic of',
       VGB:'Virgin Islands, British',
       VIR:'Virgin Islands, U.S.',
       VNM:'Viet Nam',
       VUT:'Vanuatu',
       WLF:'Wallis and Futuna',
       WSM:'Samoa',
       YEM:'Yemen',
       ZAF:'South Africa',
       ZMB:'Zambia',
       ZWE:'Zimbabwe'
    };

    var div = d3.select("body").append("div")	
                .attr("class", "tooltip")				
                .style("opacity", 0);

    var margin = { top: 50, left: 50, right:50, bottom: 50},
        height = window.innerHeight,
        width = window.innerWidth;
    
    var svg = d3.select("#map")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
    
    //Read in world.topjson
    d3.queue()
        .defer(d3.json, "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json")
        // .defer(d3.csv, "cities.csv")
        .await(ready)

    //create a new projection with mercator 
    var projection = d3.geoMercator()
        .translate([width/2, height/2])
        .scale(175)
    //create a path using projection
    var path = d3.geoPath()
        .projection(projection)
    function ready(error, data, capitals){
        var countries = topojson.feature(data, data.objects.countries1).features
        var countryName = topojson.feature(data, data.objects.countries1.geometries).features

        //add path to each country. Shapes -> path
        svg.selectAll(".country")
            .data(countries)
            .enter().append("path")
            .attr("class", "country")
            .attr("d", path)
            .attr('title', function(d){
                return d.id;
            })
            .on('click', function(d){
                if(this.classList.contains('selected')){
                    d3.select(this).classed("selected", false)
                }
                else{
                    d3.select(this).classed("selected", true)
                    d3.select(this).classed('over', false)
                }
            })
            .on('mouseover', function(d){
                if(!this.classList.contains('selected')){
                    d3.select(this).classed('over', true)
                }
                div.transition()		
                    .duration(200)		
                    .style("opacity", .9);		
                div	.html(codes[d.id])	
                    .style("left", (d3.event.pageX) + "px")		
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on('mouseout', function(d){
                d3.select(this).classed('over', false)
                div.transition()		
                .duration(500)		
                .style("opacity", 0);	
            })

        // console.log(capitals)
        
        // svg.selectAll(".city-circle")
        //     .data(capitals)
        //     .enter().append("circle")
        //     .attr('r', 2)
        //     .attr('cx', function(d){
        //         var coords = projection([d.CapitalLongitude, d.CapitalLatitude])
        //         return coords[0]
        //     })
        //     .attr('cy', function(d){
        //         var coords = projection([d.CapitalLongitude, d.CapitalLatitude])
        //         return coords[1]
        //     })
        //     .attr("fill", "whitesmoke")
    }
})()