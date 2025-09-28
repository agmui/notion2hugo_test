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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IBSDLP7%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIDvjmZYCLsj8KCa7%2BRPEFn5TosfvFTooO4vLsiAF4fCJAiAb26vmerRSGFPEUBz7vaE27gd9wIzriuGVXC21kgi2tCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BJsNLxJUrz1pXZtKtwDBGeOIstCNFEAnNevWSssYif455R%2FXC5yqw0A6vqQwb5%2F8k%2BM3KCPHF4RFSx23RI9%2BnNIBKn5Cac1MBQhac3kKIj3mmrnFfTFI52YIpDl9NKcNxnCxcfw7ezBJl%2FLpS7aWiJUIqii5rpKWiAj3DRmKf5HhLx0i4RsiNf1W30kjCK6w0KAK2otC6o0CrtyMlIotsoV8Q0xsM697fSthBE7rViPfHpztSRcYp7UWIMNldnHY9P%2BU0K%2FVZzGjZJlRPyVKYTg1aGrA7uaA8d47YX55IOssKt%2Fcow31gUj99QckjCUgzSSw72dQR33I5To2a5BKfXbdgQY2KnRww2uyCdM9Fe%2Fy4yCqZJqqwNPY75zp0SmKdEaDELHobtmZyk8QJnBdbXwgv5WzD6gP4lmbMAarS7U8rHnYUl%2FUb3%2FOFfx7TO4tLJYVSa1%2FeOeBq4hHm%2FKApf9V%2BWahUr1SV8Nf16VFj00jkydR9eDXth1noj0NdpFZY1WoyxOY0TTRT2MvYJoExnXEl2tyxW69kEm1NtcSQ%2BqLebXjkeKf47UqEvZqJCDwrR18MoK3l7Cdwrvb8Hl9reD5X8uQllHFOwa5aIIfLt2VH06OYx1rqnMRddyTo8dJKq6FMXxVkeXDJQwpL7hxgY6pgHVNLzGZFo87b5qdu4d%2B59GBpESLdtVEs8gLx8zA1u3%2FNFC7Q3v8sO0cXMFWoEELx4JQjOWeh3US3IiPlI63E%2FxjOo6TsV%2BQHoo4AkzZNbrND9MUZaJgV7X7a5uNASBAioX0vXcr1PqaZ6%2B%2FSdKTJp9DIckqMS8%2Bxj3slWIvzCVB8DHFQc2H%2FurFrcSoFTgaio%2BgO2vFCf77dKxo1CXWohBzR25mqJ0&X-Amz-Signature=fa83100ca820a8c0558a55c24d9e08683b81cea377c5e213f37042197a26c98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBWOPU2N%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCpovBmtzpIlYjpXQ%2FY6uQvvwsh4mspyKGu4ml2IRh2XgIgK5Nd5RZV5nIehaeTtXL6sNUQvYvDfkoqnOFw%2FgCXDaEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWneFiLe6dyFmAqeircA9uhi1Ge4V7vwou5Gbs92G1%2BzyGGO11tBa1s04Ghz%2FXnRmWpEBgGGRoSP6EWhMjZ7PuaZAqhm3%2Bfi6tE3ISGxAb9OdQXf%2BJ6r4k5MFuHn2G9tkrHIjnhCY9M1KDIHZs0jUUNgZMKWaZAZEDz9qvUWODzBmILlz1GtM%2FMQNsFpwUy1iWWXZB%2BcFD7DHGDHaFSpDVkq5ry4XQ9mjQgjZ06VVZVMVFb%2FjpSpesXtX8noUm0SC%2BLUpAsdfg4DMpM6BXOqFdtlpjst1%2BFmRRwaj8lVC%2Ba2swOsVdUGV0rkUKq94ELQGzp1OD7titHfZLDGLQgYNwTo0uGMmQx%2BVJovTeghInkNi7lIYf1ZNrG5XDO5DDwlJV5SaZMUIdeTfxtSOhrmarR%2BQHvYCFYZUcLUc6oR021pY%2FPjddFhQNUCL0qU3TNYsIXlcc74Saamm7NO%2Bk6m511HFSIlRxYUzDPOhABet9gGdGVEm7UXSTuSOfOKlr4QBgD07adTelxCrTi3lAYE0yV%2BVgj9HMx58mE3%2BeIjrXDC5cTPACMPpNjGrt%2BHUarDlIzOd1dThIJXODSDwA0Be9etWFhmGQDoMospcFE4vfXwZXUJHXPsy%2BDg6lxQmpbtJwq8xv8hB8aURNPMPO%2B4cYGOqUBZdtsX%2Fbjoc9vdhDSWU7l2PhMenft99JULUAbgHyWkLUSTes3kquYvRKi7wdRAST9vwOsVWXySYNeMEZnzfhZESkAMtmuDnpS8D8EWf7CrSxiUea592fkDtFq7yLs7EpbkT2GqOLlyxPuboydahkzgNYjLy%2Fahgn5s8pwa4D3tN2Hgg5mvL2aU%2BAtE4C1ewHt9XMZj4nUYlj1rjnHRr3%2Fr%2FTG%2Bup4&X-Amz-Signature=bb4cd653b6a350cc7f0846b8cff0c6338d27da7a62d8a63f97b1f1b8b6a2f016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
