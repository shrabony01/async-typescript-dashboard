# E-Commerce Dashboard (Lab 6.2)

This is a TypeScript lab exploring asynchronous JavaScript, Promises, and error handling. It simulates fetching data from multiple endpoints (catalog, customer reviews, sales reports) with randomized delays and failures to practice handling real-world API behavior.



# Reflections & Questions
# 1. Why handle errors for each API call instead of just one .catch() at the end?
If you only catch errors at the very end of the chain, one small failure cancels the entire program. In this app, if the reviews endpoint fails, we still want to show the product list and fetch the sales report. Catching errors locally lets the rest of the dashboard keep working instead of crashing the whole screen over one broken feature.

# 2. How do custom error classes help with debugging?
Using plain strings (like reject("failed")) makes it hard to write specific logic around what went wrong. With NetworkError and DataError, I can use if (error instanceof NetworkError) to handle connection drops differently than bad data payloads. It also keeps standard stack traces intact, which makes tracking down bugs in the console a lot easier.

# 3. When is a retry mechanism useful versus failing immediately?
Retrying makes sense for temporary hiccups, like a spotty internet connection, a quick server blip, or rate limiting where waiting a second might actually work. But if the problem is permanent—like a 404 (file not found) or sending the wrong authentication credentials—retrying is just a waste of time and server resources, so failing right away is better.