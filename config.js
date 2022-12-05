var config = {
    style: 'mapbox://styles/mapbox/outdoors-v12',
    accessToken: 'pk.eyJ1IjoiY2FqNzIxMCIsImEiOiJjbGE4cDFkeGYwMGswM3FtaXN0YW91aXdmIn0.XtJtE_37_rs2pv2MBv80kg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Cape to Cairo: The Journey',
    // subtitle: 
    byline: "An interactive map giving more detail on Lydia Pederson's journey",
    // byline: 'By a Digital Storyteller',
    footer: 'Sources: <a href="https://i.pinimg.com/736x/3d/bf/c1/3dbfc11906f2334baf9667418add6cdd.jpg">1953 image of the Grand Hotel in Cape town</a> <br>Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'The Pederson Collection',
            image: './images/collection2.jpg',
            description: "This collection came from a wide variety of places on Pederson's journey across Africa. Some objects' histories are still unknown. We hope to help investigate and give context to the collection.",
            location: {
                center: [-1.64259, 16.40781],
                zoom: 2.13,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
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
            alignment: 'right',
            hidden: false,
            title: 'Cape Town',
            image: 'https://i.pinimg.com/736x/3d/bf/c1/3dbfc11906f2334baf9667418add6cdd.jpg',
            description: "In January 1953, Pederson flew from Illinois to Cape Town, South Africa, where she stayed in the Grand Hotel. Apartheid had officially been implemented five years earlier.",
            location: {
                center: [18.42946, -34.12834],
                zoom: 10.19,
                pitch: 45.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Durban',
            image: './images/Durban.png',
            description: 'Pederson also visited Durban, where she visited Indian Markets. This is a frame from the color film she shot of the city. More recently, Durban helped to host the 2010 FIFA World Cup.',
            location: {
                center: [30.93548, -29.93737],
                zoom: 10.51,
                pitch: 45.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Nairobi',
            image: './images/fin.jpg',
            description: 'In Kenya, Lydia bought leopard and zebra pelts, which she later turned into purses, hats, and a scrapbook.',
            location: {
                center: [36.83485, -1.22279],
                zoom: 8.29,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
