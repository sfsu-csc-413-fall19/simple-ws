
# Websocket demo

What is websocket?

Websocket is another TCP based protocol like HTTP. Websocket allows for a continuous 2-way connection so that both server and client can send each other messages.

### ws and http similarities
- Both use tcp
- Client must initiate connection
### ws http differences
- http functions as call and response
- ws is bi-directional message passing
- in ws, server can send client data without waiting
- ws is event driven

### ws basic events
- connect
	- Triggered once upon connection 
- message
	- Triggered every time a message is sent
- close
	- Triggered when connection closes
- error
	- If the connection broke with an error

These events can be handled on client and sever.

### Usage in spark
Add the annotation `@WebSocket` to tell it that this class will handle websocket events.
Use the `@OnWebSocket*` annotations for each method that maps to each of the events

### Front end usage
- JS has a built-in api that is initialized with the `WebSocket` class
- Note that urls now must start with `ws://`
- handle all 4 events same way as on server
- Note: using React `ref` because the function is technically called every time the screen renders, ref holds the variable across render calls.