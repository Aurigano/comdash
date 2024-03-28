# COMDASH

Dashboard for inventory management of a commodities-based MNC.
Requiring sales data for both Historical and Forecast periods.

-   Using React JS with Vite for bundling

## Packages Used :

-   `@mui` - material ui for library grade components and styling
-   `leaflet` and `react-leaflet` for maps
-   `highcharts` and `highcharts-react-official` for charts and visualization
-   `prop-types` for type-checking within js

## Walkthrough

**/** - Homepage

Interactive map with 3 pins over specific locations, shows business data inside tooltip on hovering.
Cards representing Cities with respective data and interactive mini chart to show sales and revenue trends at a glance.
/2 - Navbar with ham menu on the left to select cards layout
Clicking on a card takes to respective `items` page

**/items/{city}** - Items page

Toolbar with `Back` button and `Open Drawer` button
Sidebar drawer has city specific commodities cards (sampled over here)
Selecting a card (checks it active) changes other components in the main layout section

Header shows the current city information along with the selected card data

Chart shows data for past 6 quarters and next 6 quarters forecasted along the dotted zone
Each data-point shows a tooltip on hover showing the values for the quarter

Table shows tabular representation of the chart data (similarly past and next 6 quarters),
dynamically changing according to card selected
