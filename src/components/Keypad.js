// Code Keypad Component Here

function Keypad() {
    function handleKeypad(event) {
        console.log("Entering password...")
    }
    return (
        <div>
            <input
                type="password"
                id="PASSWORD"
                placeholder="Enter Password..."
                onChange={handleKeypad}
            />
        </div>
    )
}

export default Keypad;