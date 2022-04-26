# node_task
1. Clone repo into your github
2. Use https://expressjs.com/
3. Use this library to connect to mysql https://sequelize.org/
4. Integrate the following api into this project 

https://www.weatherapi.com/pricing.aspx 

https://github.com/stripe/stripe-php

5. Create your own airport api to retrieve from the autocomplete below. We have given you an airport.csv to use to get the data fields.

6. Use bootstrap 4 for ui

7. Make the following page by end of day, no exceptions:
- Make a main page where we we call an api to get current weather in your country and display it on frontend (degree, the type of weather, humidity)
- Make an 2 autocomplete dropdown where we call airport api where we filter by country and show the airports in the dropdown 
- Calculate the distance between the 2 airports using the lat and lng and multiple it by $10. Make a stripe form to ask user to pay that amount. Payment must be processed.
- Save the order placed into an order database table (id, from_airport, from_country, to_airport, to_country, total, stripe_id, status(paid, failed))
- Create thank you page showing their order in a table
