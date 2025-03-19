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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJAIPTY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDC%2BTy0UBY67woga2uVNtg5CArj9A%2FyprxzABcvBok9iAiBZl1%2BzxEJv5YZYaw7P0ueUTnQvkjy9Atif0N0exoz5UCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM7rYlmvsaU%2F3x2kbyKtwDTGqRVTfZZPlirZdrnZ18265O8xgnmAbKD1SSE9TtIcxB3qAEqXr5IARK4sH%2FALNqyEfK7sS2%2FWiQGKNrkGQ6uUkIvWkrmyi9cvmZvLkXnUlG4vWNZUcNbGteT8OrztYOisblTwAXe4IjHVbemsnUneyFzrJRMQjAHf8GWP54UQYl%2BbVb8cu73Xd9qGA9PK6yxevABBQFP6lg3KRG7EVpp8A%2FSsXyFq%2Fv7ysfokaDjRsXm7NX2vxeTxbuBKkMKhOOR5E%2FzHDMg5NzDoDnc5hsylsrBHiUUvJUvdjJKBh8LK6DMICUtubNdxuNDpqUsZD8p9noxLSMdiYNVYaMLndYNTypTCRsUhYc1O1T36vRJF%2BhyHKtN2rx26%2BpQLnwVGYiG1OF2y8RT0rCH5ybAvVX6Y%2FeK%2BpcslPQQFGhLq2zCA7nmX6cDv2v3lWTH47fNLylR12kcu2nzuMRzRCNHKkybHFPbHCG%2FrP4HYegvsM8qEM0951uW%2FZy9eDD7ncvFxvKG1%2BShoCXMZRAhAFJPxFh95BlZwnkXVtYvmddKGOW8okOQx7bjq236Fe%2Fn3FGBm8zDucwefyY%2FiW30xJzDcoCuEbee1IuWXoD1CXaom6OIEibXyXRwL98IcfuRhUwnbzrvgY6pgGaFzRjcf4Ym24MljXvbnIo6OkFvWWDOrtGl7icYwSlPhYZrA1vqraZgs9iRw5jAL0PPa5YqbtwrnRIdUD6Dz0Qm5jOCnGqg0bUcCnguDDUNGaZVwlSKikHNFCAfO%2Bgxy6AY2WQdiLpju9b6MlRkdLZfXaeGtRktqxPnfqmGS4MnyiN43LNFsnivBXMubnC968XVLkAg2fu2HCbyAE%2F%2B6LCQBkzHkJ8&X-Amz-Signature=15e6876fbb56446f9b05bdb57d5b336f7e84acdb6eaf85b745fb012186d4264f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDVTKMHS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCzFXmbIUuo9yJgqnRiMml9sVjwuIoF7uvwk%2Fpg8kW4AAIgR47lB6Bm9K%2Bkd%2FeiGL6AYp6ggGBaYy4sdeio9oXd4t0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEvw6OsX%2B3dyaFPfpircA60RSEf3%2FGSu2I1LLQCff9ZBa%2FY2yTgUe%2FRAc8ePy6nUyYWIqfbSGiGEpwbrP5oqO9knabVk7VfHmJu6LNuI31vClaRowd7HPheRMERu%2F4CZywzNEndOzzWfjC9mwBYgFqPis9ha6P0wc9Jzyhs0jwV6vYJuQ6cB2v9OsRwdPECamKUaiqZVLrZ2dFLjdfMVJlqO2D9I9nUT29AnQhjDVsCGQaKxpznU%2BvDAyC14F9FVYfNG4PWqd1PuaaFzVM%2B6a%2FOGA3OPv8T7k6LSoX8T33ZT%2B14wQLEqjjcJqnVC4Aulbv8SUJQsipNZiaGNozMSDe6n%2FqmD0lEIm35%2FsTJM7728qq5LC1OYR3FGLH1i1Plr%2BjSbY5bDwPDJH00NUt8G6%2FtfjEV9nUcGtGgeKRgImVm8YTmx8gUv%2B2NcQHeBt3x4QbIwVQahguO%2Bwzrps4SygmE7ex3JO2bhr380Hq5E8PFL2E%2B%2FiStWbDE%2B7UtwRrcR1qlkyVkM5%2BoaoLwT9ah1PDqHWiLmdl2XJfmVwDIIn5AOAY6p%2FPl064nMeRqPLXI%2Fn4aMFvn%2FoxDReMhenxECrRtEBEh4xGY52XrV0SaZUL6H%2Fosy%2BeoDJcMrbfLrQVrG2u6MN%2Bhytt9SjzvuMMS9674GOqUBUhmIzFeQwDQRCP4v2usZcH%2Bup9Pxf0BUBzz%2B%2Fg9sctXW23mprVOA7aOSoLnfrR18BouBZ9EQmmF36OKOJzYs51MqTGOALxj3MpM1XcqFs2OhsTHCUqu2G9rbb8crpdgcpvW1cQapl8zlKThG2cXRRvOrC6soq%2BR%2FuDsxOIXoqMxv%2FyqKFRUkaz34l3Wci1o8YOPa6PczFKlXCP11uPbpFARjKWAt&X-Amz-Signature=9d3f43f72196784464bf09bb6eb8de0bc72b887013b8ec25bab56dd1753758f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
