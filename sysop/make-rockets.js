
//[ readCount ]
let readCount = 0;

//[ writeCount ]
let writeCount = 0;

//[ parseCount ]
let parseCount = 0;

//[ composeCount ]
let composeCount = 0;

//[ totalCount ]
let totalCount = 0;

//[ flags ]
const flags = [];

//[ files ]
const files = [];

//[ todo ]
function todo( what ) {
    const s = `🚧 TODO 🚧 => ${what}`;
    throw new Error( s );
}

//[ matchFlag ]
function matchFlag( arg ) {
    return arg.startsWith( "-" );
}

//[ sortArgs ]
// ===> 🚧 TODO 🚧 <===
function sortArgs() {
    todo( "sortArgs" );
}

//[ hasFlag ]
// ===> 🚧 TODO 🚧 <===
function hasFlag( flag ) {
    todo( "hasFlag" );
}

//[ hasEnviron ]
// ===> 🚧 TODO 🚧 <===
function hasEnviron( flag ) {
    todo( "hasEnviron" );
}

//[ statsEnabled ]
function statsEnabled() {
    if ( hasFlag( "stats" ) ) return true;
    if ( hasEnviron( "NAVSTATS" ) ) return true;
    return false;
}

//[ testEnabled ]
function testEnabled() {
    if ( hasFlag( "test" ) ) return true;
    if ( hasEnviron( "NAVTEST" ) ) return true;
    return false;
}

//[ nextFile ]
function nextFile() {
    const file = file.pop();
    if (! file ) return null;
    return `${file}.nav`;
}

//[ loadFile ]
// ===> 🚧 TODO 🚧 <===
function loadFile( pathname ) {
    todo( "loadFile" );
}

//[ saveFile ]
// ===> 🚧 TODO 🚧 <===
function saveFile( pathname, content ) {
    todo( "saveFile" );
}

//[ parseNavDoc ]
function parseNavDoc( doc ) {
    const titles = [];
    const links  = [];
    const names  = [];
    const extra  = [];
    function actual( s, key ) {
        const value = s.substring( 1 ).trim();
        if ( value.length ) return value;
        throw new Error( `Empty ${key} detected` );
    }
    function first( s, ch ) {
        return s.startsWith( ch );
    }
    function parse( line ) {
        if ( first( line, "+" ) ) {
            titles.push( actual( line, "title" ) );
            return;
        }
        if ( first( line, "@" ) ) {
            links.push( actual( line, "link" ) );
            return;
        }
        if ( first( line, "*" ) ) {
            names.push( actual( line, "filename" ) );
            return;
        }
        extra.push( line );
    }
    doc.split( "\n" )
        .map( s => s.trim() )
        .filter( s => (!! s ) )
        .forEach( parse );
    return { titles, links, names, extra };
}

//[ stats ]
function stats( table ) {
    const records = [];
    function add( key, value ) {
        records.push( [ key, value ] );
    }
    add( "Titles", table.titles.length );
    add( "Links" , table.links.length  );
    add( "Names" , table.names.length  );
    add( "Extra" , table.extra.length  );
    console.group( "Statistics" );
    console.table( records );
    console.groupEnd();
}

//[ fail ]
function fail( what, table ) {
    stats( table );
    console.warn( what, " has too few entries" );
    throw new Error( "Processing failed" );
}

//[ verifyTable ]
function verifyTable( table ) {
    const numTitles = table.titles.length;
    const numLinks  = table.links.length;
    const numNames  = table.names.length;
    const count = Math.max( 
        numTitles, numLinks, numNames
    );
    if ( count < 1 ) {
        throw new Error( "No records found" );
    }
    if ( numTitles < count ) {
        fail( "titles", table );
    }
    if ( numLinks < count ) {
        fail( "links", table );
    }
    if ( numNames < count ) {
        fail( "names", table );
    }
    table.count = count;
}

//[ composeRocket ]
function composeRocket( title, link, filename ) {
    const content = [
        `<title>${title}</title>` ,
        `<script>` ,
        `location="${link}"`;
        `</script>\n`
    ].join( "\n" );
    return { filename , content };
}

//[ composeRockets ]
function composeRockets( table ) {
    const rockets = [];
    verifyTable( table );
    let count = table.count;
    let titles = table.titles;
    let links  = table.links;
    let names  = table.names;
    while ( --count >= 0 ) {
        let title    = titles.shift();
        let link     = links.shift();
        let filename = names.shift();
        const r = composeRocket( title, link, filename );
        rockets.push( r );
    }
    return rockets;
}

//[ composeFilename ]
function composeFilename( s ) {
    return `rockets/${s}.html`;
}

//[ writeRocket ]
function writeRocket( rocket ) {
    const filename = composeFilename( rocket.filename );
    saveFile( filename, rocket.content );  
}

//[ writeRockets ]
function writeRockets( list ) {
    list.forEach( writeRocket );
}

//[ processFile ]
function processFile() {
    try {
        const infile = nextFile();
        if (! infile ) return;
        const doc = loadFile( infile );
        readCount += 1; 
        const table = parseNavDoc( doc );
        parseCount += 1; 
        if ( statsEnabled() ) {
            stats( table );
            if ( writeDisabled() ) { return; }
        }
        const rockets = composeRockets( table );
        composeCount += 1; 
        writeRockets( rockets );
        writeCount += 1; 
    } catch( error ) {
        console.error( error );
    }
}

//[ main ]
function main() {
    try {
        if (! sortArgs() ) {
            return;
        }
        const doc = loadFile( "canvas.nav" );
        const table = parseNavDoc( doc );
        if ( statsEnabled() ) {
            stats( table );
            if ( writeDisabled() ) { return; }
        }
        const rockets = composeRockets( table );
        writeRockets( rockets ); 
    } catch( error ) {
        console.error( error );
    }
}

main();

