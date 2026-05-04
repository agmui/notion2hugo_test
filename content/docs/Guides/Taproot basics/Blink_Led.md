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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CWINOQV%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDMZQt4Q6F%2Fn6Y1arVbLvBWGuHL5NRF%2F0ZazHwZEpCgAiEAj2xjSAXEA75CwZqu5PGFBsLrP9x%2F1l1PXPPVPY%2F12jMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOnbliI%2B0Mw7D9MjlircA3My2lAXcpSKmtTdIG3VVigPwGTns%2FZkTL83S9i%2BuFvnLFx6Kf6xWYT%2BIIVZOyZmUGiF46QOGt1PQEPWb1%2FVbnv8aHj0w1D5pPrHj8LfuoK3G7l%2B9Xb5lTkJQ40KVL4o8zaFFUkn4iRwp1XnLzwYGUZpPb4tjRPUUz75hW8mHCMNWqCuRuxfOLVIv6MjzqaKxTAz6Ph3t0BmQuBBmA1Ji3ECyZ1fx3qEEr0E0d7zLZSqziatvxQ7uPjnA6l4I8TMvAS94%2BJoWxB8Nf4u1nYMCJQ3eLqkJEoklSTWHmb%2Byrw5u2hCR1Jz5NUJa2aKTTqj47c6hq7G%2B4JZ0XK9UihZi2xRRqI6FK9gC4rgcxSDECmIDUxCZEoXwf9XQDGEKD6AjRDY74YkhXys8ZB3Nv7o23cZwXGHiA9MEx%2BcVMO0rCSVYLyepDrkdJLDcj653CYejQyV1anXfsUnyh1gQExbCbErAm62KVsgwrOwJx3VY4YWDHlrN1ThaU9LSLRTUx8MFEzdhraGbv65VwYpancyII%2B6Q2VFuQacfntnjmjhA2kYalt0Eay6suIRkOXOrJ5%2FKZ%2BneiOGCaCCbJEnHpPgcPvRlLPoZy5Z%2B8qS05HGkOQQmAGR3Hbw8z%2BIyDUVMLX4388GOqUBwGcJRICjidYQWn0pgJ7s%2BN78wkfMY0Sg57JCuakh%2Fg5MwDaz4ugrmwi3zjEykLgcXNpZWIA7ckkl0wvv2FiV1EViT0puOJRs2qmwN%2B4QrHpdRbGHswXNstG17FR4ENrRDvg8Q%2BMxaDPUnqTJeaHL7TPQC1irEkL3Bv5tX4MkRJa0YhN4n6g0OF3kTVaZreAChPVKGiaq6Cv8fKcg0BYcsyMRsx8W&X-Amz-Signature=ff1584536852fe564bcdd682dac721fa4dd003227933dfdc098500f12aa2ce14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVXSWB35%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8aLntCL7fE5mFZ8vOqzIH24NI4ngz4UF%2BHy0aPQAM2AiA449GZRFGCEN%2FB%2B6YuW1lNNvBDfQO7fq9yfnAETPbhjCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMssLdfmoRZXRAoZqCKtwDW8RJNzZm3SSDVck03YVKxh0eRTT%2FhCSxf2PoWQHG%2BHVVQ4gFJg7bPaNEbUMFwJJ3ED41XR%2F4%2BEUeMfpF0IxXpNdm%2BEkEIgrVxZ%2BC9MAimmLjK%2Fotqu9X683xRha9Jx3mxqoUMfaOIZiBYAgzqczUT4b7cZGqA2xZyeLT0zU6DwJY9%2FKl4IJ4wAJ4zrvueNtIXA%2BLRCZlN%2BPBBLGFneLf4IpDslJYWlld9QpfcVyh%2FaTeTAmRhmW4YKMYRLdWu8Lwk8SQxjeoBXvWkVhZWJ0V7FBq1nLyTrNibnfz%2B8vJr67hAA%2FvwTrxXEJ8byC%2BDUsrvsWiZ1dkH29EnHpvvZYYn%2BtiD91RWy9TDNswVLyALW51qPH7ikXN4P6aCVLC28KdXNkkQ%2FY1MJ51bKgtNABETUy%2Bw0cXFTIZGlaXb6bG00Tkk5mM%2FUH5UaUFPGMg9M7YeG%2FafmOWv37UH8T4E%2BfvR9Hvl6e7YV4NZ4kHDTIklQqMsBR0UnvCMmEpIC%2FamiH4Ti4EPjs7agmk60HTVLw3%2F2K1csVLpGbwkuGXEghVilNo%2F1PVdejbhbeClcKIyt%2FYf0gMsWIGo7VtuaYLdZt02ebQUBWHkFTlWRka3GU2pEbO6PWdN0HxouS7egsw3fbfzwY6pgH90OgEF7CuD%2FCUJQii0oZnAxPho2vDVc6jhb0Ny2rztc6nvQIf%2BF%2FoRhOkbJVucc6MAcPx4WM2WZ%2Bgkp4mACaQy9ypodg%2FeIHHtXNvs0f8tCe14sqWJTi7NuSO%2BUCxSDhS9BvTqkBIe%2BYmnLBjRWZfu0uJWl%2FMZhG91a%2BIb0HttBmFJyy%2FU4%2B8zt0%2BOS0KCo0u7mE2NezcoFCDURFhF0iePJeDfos4&X-Amz-Signature=c07de1510fe4fe10bc9c90730342c21243ec322c4beac41eb50176449f73f300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
