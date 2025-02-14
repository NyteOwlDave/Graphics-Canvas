
# Change Log

> 2025-FEB-13

- Added the hosts folder (where file this is located).
- Added rockets for each host's installation of the project

<!-- 

-->

<title>Graphics Canvas</title>

<script>

function getHostName() {
    return location.hash.substring( 1 );
}

function composeURL( host ) {
    return `http://${host}/std/app/canvas/`;
}

function main () {

    let hash = location.hash.substring( 1 );
    if (! hash ) {
        throw new Error( "Missing hashtag for host name" );
        return;
    }

    location = composeURL( host );

}

</script>

<script>

try { main() } catch( error ) { alert( error ) }

</script>

