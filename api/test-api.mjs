
// const D = document;

/*

export function lando( falcon, cargo ) {
    try {
        return falcon( cargo );
    } catch( e ) {
        alert( e );
        return e;
    }
}

export function selecto( what ) {
    const q = `[${what}]`;
    return document.querySelector( q );
}


export function prepare( what ) {
    const FN = "function";
    const SI = Symbol.iterator;
    if ( FN == typeof what ) {
        return what.toString() || "f()";
    }
    if ( what instanceof Error ) {
        return what.toString();
    }
    if ( what instanceof Object ) {
        const t = typeof what[ SI ];
        if ( t == FN ) {
            what = Array.from( what );
        }
        if ( Array.isArray( what ) ) {
            return json( what );
        }
        return prepareObject( what )
    }
    return String( what );
}

export function prepareObject( o ) {
    const keys = Object.keys( o );
    const prep = k => [ k, String( o[ k ] ) ];
    return json( keys.map( prep ) );
}

export function json( o ) {
    return JSON.stringify( o, null, 2 );
}


*/