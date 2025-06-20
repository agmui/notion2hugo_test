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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMTV3UDU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T033958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwhAxs0ioliAN%2B9R1l%2BJN3jR%2FBduJbWGjxdzQOPT8g%2BAIhAN3fKN9T5paWlrvoQYX32ZM3H1Fh6XGcrHgj8n3Cha9GKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxld9%2Fu1ga7xv9MQ3wq3AMKL%2FUO5%2Bazqz0afwHupsTXJy6z3fcMQyRjprGMIgU9Ec0q%2B7abrw3nYNAIh705vvzJsOxUHZdMtn7aILqWHlXUzDGfJWrUnXNx9BkNK1XgdL8zZyJ4nKUUW3QCaR7x6oynVnw5BA8UYwR%2FClmtxzrP9Dr4Pw8cd7YDWLJm04EnAW4Pg4gsR0aqkh3QElacVfC9p2FCNIDlIsfz9oDpAKzRZC9VxZrYKkGzA7BUnta2cZmEh7gmYyy%2B6bWooKKAYWNEgdEWRw9wKpB2HWGtYlswx6Fxzh0dzPy5FN9TWkgleOwNORm9xTCUQ7%2FVzqBwfeeqJjXqzz4FViPmuey%2B68A7epja1O5fJAJCuACWLBVyZWpNekwUNms8cwKEsFA%2F0s1DUeWcAocexmEqczOoCz48NUg3vQ3SdsepVwMj29kPtiwAu8tP86AjVe1Hsk5SZWwpq%2FRYnmpVRRgVROsuR9PLbNDr5um1NUJMCu3rG2y6YhjATEDjRBAS80ByMDaxRdEnWCaLCfBLTuimheEeTkKW5pMIdQ%2FVgTgP1T%2Bm%2FbcOAf6EMoUzc4YO0YSVTGYspYhNVVJlbyH%2B0ne%2FXFfkIlVSUJWLUd23tBKrmC7HjZcuiWwVJ%2F%2BZBj66dSpBITCxjtPCBjqkAeZsEovNoBOc%2FVJAwWym7lAP%2B1%2FzW5yAxI3Ukf0hCUkoc8e1pWEJV5wMasBRjUMSDbdxU3hp61AWC1k4StRsY4IcacWtQ16oj4lNm7gcDnwwc2UckzVhOZ49C3oos2ImbCcED%2B%2BFt0AtT6prbU7n7m4HRvA9bRHL5%2B87PaXTAXu3gLI7o44cZkGt4qNQZuR974LTeE67tkbdJAVyh4de0NHWtNbB&X-Amz-Signature=a5bfc202493d54cc7d89ac0887d179a00ffd8721c2f8b41e59d7d79bc59ae585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCCWD3J%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqJZX7FCer16sRnwuD4cGEClul8BlCNuULdMegeRTYPAIgWJ1Sy3zJfh91hpMQ76DNhcclk0UuhikwqSPqC74H0VkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BGO7Y9GOPM9shYZyrcA0lr5xQdgta7O8PbZC3pWDICEsir1eoLGYqfv22sD3jFOtKC3PTWwtljMwvK28r8DlTa8wjvCHepN99KzYB9IcPQpsTm6h50WDzkPizFb3YQH4BjSR0v66TK8VfQBEZVa8SgZ6cAOx0UlyneJ7BmmLwAEf58t9DJWm4%2FlnNS%2BSgC8SBGBS0zJhhfYohqYjsYgmxHmVnV%2BL2jUVrZrz6BQaGQ%2Biy0dx%2B9buxsNkiKFhXA6F8j%2FDK8x3Lew3wVZ0zxxO%2B9CUSVMOiclgugSPk1jyHGR0M1yVnvfELc0JPTUhhBdiOqI1thkD5hWeiTM92KtSM%2BSK%2FmXFtZuGwRPiB8cAbk2hfA86rqbO8o81R4d32rq6yO%2FeC9w3WXfNPmEAcQnF9zanA9WlFvnu2Qwl1c%2FBtR4AGCTUZtDYFIyUwWCAVOO2DTIIZY5PHukmyGDaNyLDYGfokyKl9%2FdqQZ4ZC8568cVa%2FIjksSue8dJ7oZnqqnT5wzkaikEl4imJOu1J6joRvFD3lOGsnsSyYlTGBOaYrLuVoWLllsnIrpaW5yLnS84dZl1PW2yruMqFII4ufudb8CD6CdnVKYpvkt%2F4c14Qh4d1aD9Qnyk25iJqK7CUMxsyQUij0FCVZBQHalMIqP08IGOqUBx0Kj2yLAVKcUAIY4ISZEW5x1uOC3GHayUV9JlxjyXD86gxTWdggVuNesz70pFw278ADNl58pyI72kz6A0KaIE2GyuoD58PclG1gjWR2sIju6fPSXJ7K7oi2yEI7UdWCgFwSpS5FnuuRqeb2XAEg0oKB16CQEEO9gQPnTn%2FTOMcTsv02CnT6ptv2739th5LmJIjxx9hqtiME9rO7ORe2wcLL5T86m&X-Amz-Signature=7130b186822a3b29b7b0ab2e5ba13ca526ed0b9d8d651555ef29ac2c5494c20b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
