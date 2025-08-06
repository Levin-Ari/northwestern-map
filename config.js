var config = {
    style: 'mapbox://styles/ari11/cmcqj8pj500mb01s195vsfp0b',
    accessToken: 'pk.eyJ1IjoiYXJpMTEiLCJhIjoiY21jMm5qdjQ5MDRnNTJycHV4NGNxZnpsaiJ9.1BA4rht0TndgkJnYRxU0-g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Trials of a Northwestern Undergrad',
    subtitle: 'The Storytelling Template helps you create an awesome animated map story with ease.',
    byline: 'By Ari Levin',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Welcome to Northwestern University',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Northwestern_Arch.jpg',
            description: 'This is the Historic Weber Arch, contructed in the mid-1990s.',
            location: {
                center: [-87.67579, 42.05548],
                zoom: 14.39,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Allison Hall',
                    opacity: 0,
                    duration: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'A Day on Campus',
            image: 'https://news.northwestern.edu/assets/Stories/2017/05/allisonhall0209__FitMaxWzk3MCw2NTBd.jpg',
            description: 'Allison Hall is the dorm that I lived in for my freshman and sophomore year of college. It is located on the south end of campus. But navigating from there is easy. Almost all of campus is bounded by two easy north-south points: Sheridan Road (large, busy, hard to cross) and Lake Michigan (definitely large, visible from a distance, also hard to cross.)',
            location: {
                center: [-87.67544, 42.05354],
                zoom: 15.89,
                pitch: 55,
                bearing: 25.60,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [{
                layer: 'Allison Hall',
                opacity: 1,
                duration: 0    
            }],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Navigating Off Campus',
            // image: './assets/geneva.jpg',
            description: 'However, once we move off campus, everything gets thrown out of whack. In the "Downtown Evanston" area, filled with restaurants for a night out, streets go in every which way. There is no lake or orienting road in sight.',
            location: {
                center: [-87.68102, 42.04921],
                zoom: 16.8,
                pitch: 58,
                bearing: -143.20
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'A confusing scale.',
            // image: './assets/buenos-aires.jpg',
            description: 'Navigating off campus becomes more and more confusing. For instance, I never even considered going to this Trader Joe\'s a mile away from campus. And yet, according to Google Maps, it is as far a walk as parts of north campus, such as the student gymnasium or the lacrosse field were!',
            location: {
                center: [-87.68024, 42.05105],
                zoom: 14.85,
                pitch: 0,
                bearing: -90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'points',
                opacity: 1,
                'stroke-opacity': 1,
                duration: 3000    
            }],
            onChapterExit: [{
                layer: 'points',
                opacity: 0,
                'stroke-opacity':0,
                duration: 0    
            }]
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'The Threshold Points.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Northwestern_University_Graduate_School_front.jpg',
            description: 'There are certain points that feel like "thresholds" when transitioning from campus to away from campus. The most common I would walk past is the clock tower area, which meets up where Clark St. branches off into Elgin St. <br><br> Walking through this area, it would feel like my whole world spun around.',
            location: {
                center: [-87.67509, 42.04968],
                zoom: 15.60,
                pitch: 50.99,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'thresholds',
                opacity: 1,
                duration: 3000    
            }],
            onChapterExit: []
        }
    ]
};
