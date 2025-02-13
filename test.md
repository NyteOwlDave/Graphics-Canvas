
<link rel="stylesheet" href="style/test-style.css">
<script src="api/test-api.mjs"></script>

<style>
</style>

# Input

<textarea ip wrap="off"></textarea>

<menu>
<button onclick="run()">Run</button>
<a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">Help</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API">WebSocket</a>
</menu>

---

# Output

<textarea op wrap="off"></textarea>

<menu>
<button onclick="reset()">Clear</button>
</menu>

---
 
# Links

[u3]: <https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest>
[u2]: <https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API>
[u1]: <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API>

- [Fetch API][u1]
- [WebSocket][u2]
- [XMLHttpRequest][u3]

---

<script>
</script>


<script>
const _IP = select( "ip" );
const _OP = select( "op" );
</script>

<script>
function reset() {
    report( "" );
}
</script>

<script>
function run() {
    try {
        const source = input();
        process( source );
    } catch( error ) {
        report( error );
    }
}
</script>

<script>
function process( source ) {
    const result = eval( source );
    report( result );
}
</script>

<script>
function input() {
    return _IP.value;
}
</script>

<script>
function report( what ) {
    try {
        _OP.value = prepare( what );
    } catch( error ) {
        alert( error );
    }
}
</script>



