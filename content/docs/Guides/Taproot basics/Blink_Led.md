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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ROBXU6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGYV12b4VTYXcaaYyu3gmAGWMGI1SPX0%2FMoIqyqK4KvTAiBgA%2BAFfTs3xnUu7quHwLZpK%2FrPD7pOnu3PV3ed2G8ECyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3T44KY4Bq%2BeupbOZKtwDiLuD2Ku%2Fx%2FyukJNfQ2WwkWUj%2BfU0gpFDgGlkflRLBfR%2FwF1kTbOoHUhCFcH6K0wLUsa72R0YCTqcgU%2B7u0GUsWw3e7mSvvjyTOeos2e32QXg%2FqDi0dArPPNM%2FnlWVz7K40aPPLG74%2FPbcwAly2WGznoq43sNufMTqHC9JoxJZ8%2FLC1g3JhW92FuzsW%2BmmVDqfb6mMgygxaPIjqo%2BFGok6GmEaLAlw6vZavk4pwi1tBqEH%2FjEUPBstPGZkuYFJe3cGmZYJWOIEu51eVrLmJbnVp1GYEhIyyb4%2Bql8mQjqgZj2KNZfcsJYYGs%2F1XRQUP%2FsfkRza3AC%2FgSEM50XGatlcWnGRxmSv9ai2Z3SVqYj6fjq3Y7TWUw8JMij5U9vqw%2FcHxHbiDHrxa3WW18y2POejo8p%2FyrRSaXQrN4fxRRfQ0Wmuv%2Bxx9O1%2BU23HOlR1L3dg%2Fq2urYtD1xys8F7zDdPgGMZS5KE990jwVpmAYejMGZhACCh5nkMmcEdkI%2BNXFxMUJzoGLrU9mc%2FG3klwdc%2BGUvV0h3IaNU%2FB1idKfXWNYIY42E9bioCyD9x3qVwVY68SpHrrme2r2GJJx6%2F8woHDhkGbWxdv00IhsS4AZSJTvm302obeQvBmtT9GDswhfLXvwY6pgGnZMpNkzCvi%2FxvRP%2BRjs5BSrN0bgx6Jw%2BnZixfvDq%2F9PoNShjpw2vrU9xoEZjK96LKOR5nN1koYRaFxYDyidTp6k92qhZa6TxAPiqAaNacHDejDo0rJSKYt1kmTCVHUX4%2BHEdEl%2B491uc3eLGLQmrPm8xmTiybgrxLBBXKwXaxtA0qbH8VBXs%2BdThQ84hHfqXMfu2UDhqHG%2BvIKtUk3sRA3PexUac5&X-Amz-Signature=75a53a1db2ae22d047c08c7e76c866422d602fd186ffb1508d989693e7cdde50&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E73ANV7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCiRtCo%2F5T7JknjXYTa1tuI824GB%2BIGiaC22mc3cWSQMgIgHTGuINlgfI1RQQgBI%2FWvva8yJwtNU%2BhOuG2weDKzCmYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPO7xgMqstDO4pmfircA%2FodedbYnNQk%2B8qdZQ4HeXI%2FwhkoHlb9WyII0PEykEaf3wOQTMlf%2Bty3J4VjcxH0dRyiO7bpqegRygT5BtP5PYDbwT5BI9RnwW0qJRjUuDPW8VJDRGrOqoGnBGldBInWnDVmvqgb2Qpdf8tMHRqlIiWBMQbricr1Iz3RK4pMy8UnuRt4N1w0VN%2F42GfApLSGg08zS24nMmx1aCFqXwxEm5ot2B4kU8r1nIbhMSKg%2FYlk1YqooALQRqcqr9p6QGSqzTDXsNTzfG2bjyrmzroYj4onON6QKpC7IQqz8l9o05ALFSXye61WwlZIzq%2Fhy81YIVjf75MlmU1A4iIOUTLEiO1B8q8xaUs%2FV6oAvJucXiqBvLKlyDFfrvYKo8Bbxa%2Bzb4Urn%2Fhu0zq7SXDPcDfIQZW7VdlJulZXF1mQGIxURMs69lKlMViwwgzKbKaPFXzNpt3vIQjNARp5hhgBSv7wQfuc0mjWe1b00YGTovHzS6a1m%2BrHxE7lm3zKaEQc7ZHOpjwV6Zcc7tJeeqj72epV5p482wHm4oAzWJFSN0SHq9vrGXfck2l0PXWlV6eb2rSD1pHcyia9StduhNOZqKl%2Fpl0GnJS6Set1MyZz0k0fwYjgnBn5G8rrhYqm4Xe8MILy178GOqUBui7cg3jdpbVt%2BDrFE3xCRfGRZGJefd1RlbWarEXFoXE1%2BVW7q8DGCAKdNZ3qwV79OpJwAGN0Roc5ffOI4PezbUomwxC0HrJ6IGJ2jIQjOH1rULNY4EXssEA7%2BzYjHnPdhRFLBcWGHCEn%2FcAnUoRZp7uZRWXJ537wRjJbd%2FYuiJCR4v58dwWH1xilYKeF2vi7U%2BN%2F7MsRQPOq%2FNzfvIn6NBZ2LyL4&X-Amz-Signature=ba2244c50e5576a6fae2dc2054c230137b4e90415b4f9397b3cba12d9c7440c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
