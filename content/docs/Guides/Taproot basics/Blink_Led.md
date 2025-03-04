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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSYGUCR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEETsQYMyYdNuvCRrMK7fSP4T4oKRJ4CFtJlSNr7Lj9MAiBMkRO%2BayRoHUJy07CnZfQM9ryQuNBD%2F7NiR0BnU2%2FBBSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMthny3iXXj0YtiEUWKtwDz3REt%2Fxri%2Fc8ka4jV9%2Bk4cNFPtHKpXRuJssuPD5aTt%2BIUErQ7g9D%2F%2F1EebBlV1qJHp9sdSn9VPtF4wT%2B0pcQzbR7qW1c1KVL0EDWPQYOSTp9DUARMAippjvuImCAa3IvPpJnZCJwleUZwmMSS%2BmsUkKQ9jchgtSEnRTC0uroIpvgJxwCYStPkkVp79lC0EWAyeQQc4H%2BWhjU5vJg58b9idmTRsPXuDiA5BjAgOQtuLC5zU5RfpVxjShx6%2B0oa7wxM81p6LTnsWL0JJEOAe9l7617esXXgsa4utDamLIAUblc9o8OUmHnS%2B424u3MkZgK3zokPLGzVihTBqXrZnBO16F4fb54FI1YoMGtfJ3Ehz6uAkRyFn4EwcLOJUH7zEkoL2FREwbAtm9GiMAwGF%2B10zP836AOo7937G1h9lXpqiiu%2BACPIDyCBYtuSPUPIlkJQLhsA8wAwx8%2FJRA6jZE5Hk6Af2gAup4YnoDKrUgoNvdvSjTbEU5FpNbApZrKRWg50z2itUxlxeZX4peg%2FRqzodxzIQQl4ALGQQvKwMlOLI87V%2FKq1WjZ0WosnUvJQIcPYEkYLsHRGimhDlqrVRrbqiakHrPZ9jy87ThD5swwoVhTw5YRSscasLsbdaEwlbqdvgY6pgGqUc1ITxiI3W5aoNBoUs3UkJssX%2BR3%2FaFqxkOwXl9nJpFkFWFyVhPf19tiWISMAonKeURarFwjZPEnSHhAW38criDKziLvO5y2BavY%2Fc566yZdoTAf9vYsbNopZyddNp91CsgV6hYWxXfKEmO28e6dxGEe1r5IG7IFfjtj2LvOossMOTQsu0vY1G0N76iUAL47QzmaA1QOoGY1foE5gFWtTUUCM6GK&X-Amz-Signature=819c40360e059bb91e41b7158ceddca40c9fe29df014751bf552f06482be4ff5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQB53LBZ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgoS0npwrbh4hYOSDjicoujqGpNXclkfBe0m%2BSgZ%2BPHAiEA9h%2BKg8bVAn1R7yJ494v1sQy7BBsJugFZ05caqUpqH2UqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHMgbWYsdmX%2B1GBEyrcAy9zkBhmC785cKu0oxIzN4V0B%2BhAIEj7y37RTgfb5RVidI3QOhZFWFGYPIW0nCKx%2FpkksEkpB6cfPNVYd%2BAvpCfx%2Bk1eH0IUoOQeGHRo%2FUs%2Fz3pSEe3YHBGhO9hK%2BlM7mPFIScO%2F%2FIycsBTbfZFSsOQ%2FEOCzDaPAMWw4bTSfne0a%2FRndfnS7fKbMc1jOdBISX3ByqLJKkQ%2F%2BTH29jkKHx939Ra%2B0Olj9%2BubCxwD9iEkR2WnwCAYwZXlkCcmLWsq33OCYS3z%2By08LuHZEoztap0E%2F2aSpQG62y%2BqhvED%2FA2n%2ByruW1IgJdSMBjlzFHh28LN32%2FeEk7FZJwvuzouMM4qrU3Tkp6A1Td%2FeWdopvzTzPXC9BsorNZomo%2FXJaHhG1LkslqECogYJ6UrOW6bqrk8%2FPt%2BhL9%2F5LxXTbnkC8T8oBcO62o7F7T8SUvqNosvN2CLZC%2FRvE3HfzW1X0HrUVZqWio%2B3KwrZm3jexNz%2BE%2FUCc0zbrRZSIV6hoCRO6o1ftWrv%2B02fUvrqwWslBhlx1OeXBalNPpOKWluHdIzZqAw3q4elXX%2FiBunA7KGKWDonzC9WvdD7TTxbEmUEDyJq4yOwvbGFuJBxZJ5ZjVz8elp3ky3RqeBlywU8evvFRMKi6nb4GOqUBS61oe%2Bwy5KDl6FQIUU1iTWSxP2goilqPB8tJWj%2F0qvYdCthPAg5xO2D1%2FKe9Jl05IJOWS3uz%2BaaiYScc0Nb8QgBHWXfZKG2bJQq%2FOzwNp3Jj0m6EImT9r5VjeEzZKWfX5fNWjnFy7pIojXlgx6M0qQjGgMjlN2%2BFaQoSxC%2FS%2B48%2B1MFCiKioJHXndab%2ByXzvbwNBRhtGBl9vmIxteHWpMGYcjxI1&X-Amz-Signature=655c9aacc0279a825dd1278ae36b407d69acd6201fcfd22a40739525ffa35293&X-Amz-SignedHeaders=host&x-id=GetObject)

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
