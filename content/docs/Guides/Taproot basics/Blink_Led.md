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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIKHDK2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHZp4ld9XLkVxiIS%2FJ3ZGVJPTOg0NCvpgtOMcTi0t5JxAiEA%2BZYEU995lKul5zAw8z1YDytwYbfqv11u4qDfRH0nxaAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHTHD9BuzIkhuzGYIircA%2BDatZk%2BBIKxfhLB9m5iJH70NZKNXe1R%2BqwXM%2B1EusjZKU9KmdYKDSJmAoXZMyHrxJySAvrmo%2F1AeD7vyaOjB%2BJlUcUceWcU1x1tQGOG3%2BgiorcpzZT8SVo6GMxy94feo0OQpeQUj2RoKxCQHZMJTZ6FKvIzj%2F4D0AYkIMRHj7i5i6gSfgvafDQzO0yDNRNVvZ0CnUxIbpKbU9N7d0PRckniQCBql3DTc5jfcvnnsKY8B4LQGgrLzT5OF6Bu%2FOjuYyjdFRX4aauaQ5XBlyE9L0NLLuX5g99HS73oKe165ozSSa%2FuR2r7qqo5SGq62dTX8oCWwtcG9OePSY2ymg7yfTc0tSzY8WdVm0qfmszz0vikHONbQrPPJPAthEUtB69lfBKDe5jOMBDtV0HXdEelqvyCUHtuSQz9%2B9RLwQC3Y1uAk8mafmMxSJnX%2Fs%2BnL0N7iAZZXjLLkmWFGDiuAGEg4cYazWcl%2Fx8LXNmSWjDiKK0nOERdhsVqAyyWfXAwk9N0%2BZomvZ2kaFvX4e%2BLUf3RZS4qKazmI861YdAf7M6FxeJoKazuX2S76QBflC3vUaJiWQ5tyUY%2F7KkZjiQAB2DBudBfEElgKE8yH%2FAw1%2BWDiWKNe3Dh1l8Ne6MCicwoMKasx8QGOqUBIk%2FQ5BtmEfKZj1kiQI2jF8ZsJ815KR%2Bot57Sz4GZEAGxsGK72S7Ma3f6Lzsg1EapcaJ8MHvn%2F%2FsV5r56EVNtHPCgQpZmLo2EsEEeTFONVuEkjIYlXkRzCOCDisQQ0WjOcIsPa0fNTmPPxPW%2BEY1o0svZpE%2BPwPODULL0tW%2BhPpTzebwOqUkvhAkgFh7oUfVifKS%2F3XshMd4P%2Fc28gdlZn0u9lIu5&X-Amz-Signature=6efce35cc37353f9cf1f51585ef92c9d1ef18c24fcc827235842150f8cada99c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AS5VIPW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCokXBqr9It1MnyO3oJffu0XKW1LfEg%2F2bNcYY6KzAL7QIhALyHFN323bA1gi%2F8kx34za3oc3oZflQOwsWAYnWuaCsCKv8DCFsQABoMNjM3NDIzMTgzODA1IgyG1ifL0LMmwZgk1j0q3AN80OuyRiKmeYryVQtGrFqvljgQcqohVoLfb6ZTF2u%2BjKdt%2FIAtgC3HXntcdbucXbPCyQNPWT%2F%2BIJX2Farj0%2Bv5XA2NL1tlou0f%2BxJkDa9mxqxvKjjkMyhoWEd%2B8I2USSFu%2BmedvkZPzcrXXaph3TBJfq%2Bao7WcPrBtvMxfIJF7DWbeC4g42Z46dtyOIST5iUShMAxSdIWcOdjQDAcApGhVKMFcYWWhbXcIzxaQRdhbumtnotC%2FrKYk4h4KZZmOpTZ2BKtye03XU687Xas3cWP1rR2TnzhBP4COcCosPxqmjyXoqc3uLEkDML5uSObCuBy4cv8fzJv8UcjDwTTiil9XaoS2uWX54Y7UaVWXXnS9TmmK9jxJ3cwCig9HDPdu6JO2fr6LVh24HA5cNKnX%2FVhsOcYrp4tDiyDqF%2BtxgTyfPg9bzc05ZJ9B67iNc7xrZNXpFobZmG5dWzEH15QLGQ1GkRbKCyS3msqAYvPImuXLopXpHWd5DmhkBMCZSV0yRvSDZ7LOCCFeQOSG8bLOHNnSTiZ5r2a2qZxMPixZ9plPmA%2BQc6SM07RRfNlKPn%2FdULKR9b1uMCgIi7ACyBi5JYj8PQrxNS57fA0YS3qBggsg5Z1pk%2FHYh8vpPh%2B1zTCvrMfEBjqkAU0iFrPDG7j4fEptLUkPMS2Y6raVqssUugewuILI0APxCLqUsxGhKNmCWbZ5YbOv6bxFaiPsc%2BMAZHzIt7lhyzYMOnREwZGYSU5aJhvy7AHPTIUiGGzybIZMN2InGRJRezFsERB%2Bh9q0rvgqhXe1dVzz8vEuC7eO%2F6qvKmu%2BszmKZDz9h%2BeniQwYPyIzFHzuzykLpQ1Eie9L9tKwJ4K51jGGkJRw&X-Amz-Signature=5585eada143f6aadbd8c25ff1384c4da1eb7551d3c0d3ad51102231a6d58966c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
