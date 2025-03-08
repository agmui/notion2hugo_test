---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNR7M2K%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCunbwKdDvkz9fNrsk%2BqtO7q%2F%2Foy9jEDb8WtIhMtX9CGQIgWV0NdDrn%2BudMpg7SEJ7MLm4fQMTQm0ueVoBjkF0wP4oq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKTqieVGM5sLNGxgRircA0G87VIrTI%2Fr4vbkaDAp9IZlk9%2FIA26LCZQBoXt6GVWTtimh242%2Bha7f7ifZ8PVAufjjOUbw4CVnIURD3QG%2FxLpGHV09HXmSqkZngsTy9B1ZjWJvdxJUbuzuhnzFBoVpCmm5Jj46gI58cAZQ4jaL3axw0qN1oa4fGlsQof7dIyWZvKl1pAId2orvzU2vgPNObJxm7YPssC6%2FqMYLtSKFUMl%2BkmG37KTpETQyXz14rS7ePB%2BxI0QjF%2BLPFGJqaTTGGcloPgRZHEUK8WHhsaJ37L5LzAKkjWqrdkh%2F7LnA6kwpqKmkjsk0sQ1GdvbMmwb3TKSjZ3%2F7N5PAwZK50A2qPArRM9BJwPhsNxSnA8Cupi6I9HVwsjGcmzUg0U6DSgpWkqRwa49rFgKJpVfattfE7%2F85v90hI6fex%2BYXo%2FYFlIy5x%2BUxJyuaGksTQfxUjQqgV1x3xhXl9AyWSc33zaua8WDM%2Bn81UCTFRYOUrx8W78iTnMQXTj%2Fk0Tjm1mqbwmocj2cbb4A%2Fz5Qm%2BfELRov7hJIJfoN6aWP3OqaDgqbH1c2B4uhNan8I7JEBuMBRDVGg%2BuTLzWom8LTuiONJYStTa1AQXjWmx05tZ%2BlIo7XSJQ%2BFLKp9J12vDbR8o%2FvWMMm9r74GOqUBH5FNziYSHq83g9yQKVSqoRxUiAmf37fpC3zEf8iwLjhGzdsMgrRmblIibOIzrXv2LLok%2FZcAZOjAS%2FEI1CDy3OjIivVG42TEmKuZypszX%2BOZfRpHuzEf%2BPWU%2BMPVJa71UoVSPtkZZxpW8liCEP0Y%2FHqXiNtOOAPO%2F3L9stg2zolF7xYv3A5LpcjhBv3ouf3n2MKM3W5btsC%2B3EOWQHhLjHmcto4x&X-Amz-Signature=8e1c60bae71774b97c6773997e0cc26440c3e666612666d25412a2a8ca0932c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWC6HWD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD0U8wxR1YjBbrP3qZsIDvq%2BESjWjwSXPamtTrMQO0elwIhAK6LxHkRE3Qh2YDmRQhWXJpvken46PmxRK966SvdyJBjKv8DCFcQABoMNjM3NDIzMTgzODA1IgxwmYWqM9hy%2FOAZJGkq3AOi6UbpHwYD1weS2zEZBTJy7VkFJS8kUNce78QUAAwzC7M4c5YkY0EO8HwXhIcXJHDBLiFx7wGSTKqvlfWSUZUExJROFnhyX8gzq5PKxyv9%2FDnU9GFYkrmZoG%2BNDIrFRmCG%2BbpXSMH0ZSN6GdDrzAzNDp%2BlVZtlzlXuGnHScy6%2FWZ5T7chL%2FBu7rD9RTmvW04jxbTDz%2Fx%2FqNGNm3x6nYWQBI54%2FVlP0OAqiqYd5deFq6JcTbLtTCj9w1xYZf7OzuPHUav2D18JWtW9awtC1uYOCBNkUpMiUpMfT8ckT%2BQ6YCorund1ZkHHNzl3vO%2FGgh4qXnyNFsybrexVxevXd72Q1VwRFwP5td0LrR4vyD0kzyX8ggjWHNOPALXxV%2BfIZMJycaOQsNex0Un1XbYIqtlOne0pK2YD%2FubhD%2F8EcnnJAAKExetVwqI5kqvCPLOtr%2BQMotAwMx4VR5c87gjLkQDgRAAJJVhDuPabndft5FttnoIdJf531KpOwJGq5PpQlZ6XcXAZ2JI19UcKigc618NmhF%2By1fy1quWgbFTrp61lewZ6ylKEvGPY1%2Brtu7n6fLhccz7opszyl3auB7hcSnDzVW2mxSshgR0PpVGwkIzjH9gAesZ%2FSGoO9d9J9JTC6va%2B%2BBjqkAZkzI43ne93uKM9G1CurcMNaywakuowDaRJWd%2FoA7U9nXxCgEeIz1WzLsF0xtHS7yQH3wctgzJT3Se7Jq7fL0kRZafD1hhxiE945fm82JqCRSQhI58cDZTcauzghdVuJvYVYeRbFZ9HP%2Bc3KWxa2iWq3DcZ%2BALxnBBCsoe0sbCDlzd7ly03uMhOlRX7nw3IQ4O6aI2W%2BENG63928NDcK2B6JbbGN&X-Amz-Signature=2379b24131415f668d5cb5848fe69b5d48b3606ee47529e59291307e0e2a86a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
