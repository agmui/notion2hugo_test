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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7LTM6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD14NPu3IfIFY6RfJtMbO4RvOGQQIpdSJ1wp6tS4VIsfwIgSi4Q%2BF0m%2BxEaFwFVc2hvHKHN8yvEX1wz5A%2B2SA9yPZ8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIqqP3XKR3lC9hhleyrcA%2BSaLBJD46AudknJlKsXj2cFiMwK5TP84Ll21jvDLQUaGq%2FPfw24LHESiyKf%2FzxgltB2Bn%2BrDmUxQEPiI%2FKTLgbGTGXPsQI5priY3fBxzGC3akGM%2Fou2Xk2pmOJnAx8nNVMUOIGFt9qOc1XKXXdsC3fr9zCISA6iAFDnEKBnkz%2FOY%2F0qaW2lJSmikYMKD%2FEOHgxp1Uc3mqyihiRLfrMf5zDBznL88EQDZWs5JnFULNNlDHt%2FtSD9BBhDoJRPuCd8ahrC0PWBJKCrct5w7c2%2FsRKiLUdCMZkfd12B1l3utmwHC7iGqyZvR2pxzLR6vwYCEUBtNcB0Sq7lJG2x%2FpspN7BR0he6DrkzRdTiIS5oyWyKILvma3GDMthslnbrp6lm6p0jPsnBXrjTHsBoiLE06Hm0M%2BXq3mkfq9aR8Q0gvmUMfP319aUF%2BodxPr8yKNN%2BUYL5GSRP90tnLtfNZ2Kl1EvnaqGFO1gfH7FS9sDizVJ51fT5lj20mex6rrLGLffziNMDUCfO1aRVovUTxWrlN3c7wAJHlC%2FxpIprylXEhvQekvtPjSUmYPEH4mWjz7sZufxj%2BR66olUIXjuQE%2FFZ5hoghF3%2FRVODQpuWyM8FSBcCzFFeajF4vUSdKMhMMJeptMAGOqUB%2Fnbdi1Xy7DAexJWbL5%2BSK%2Bs%2FMajImGpH3orOIbA5dse5v7xtSIQ1k%2BGlwtfGqIX52%2FtuZ82gclZ%2BXjVGQ8k7dXpvz3A7aYJ2POnuxjE59W%2FxuObYdLEN2gDg7tJu2uL0RiKqGtKaKLAt7PdZp7hATAIFKZR49%2FHIqvMrlzaRV4UzrqxtaxrTHDf9Ee%2FOl75r57p7wvv%2FAMt7bL6Fh%2BRiT5TeZqVT&X-Amz-Signature=04a0fa2335fb16fef0b7dc711ba1f8d64cdd08432399e7e4852cdf69257bcb43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRO4PBDO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1fSYsQmvWDF5on4Hz7BISFLOsVac%2B4CBFtHpBz4ASMgIgR5mRCUvGN6KzENNkVd2PnSQ0uaH0NbPOOeVaf16CMbcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJlAcfsKR4UXPnv4WyrcAxkpDgu6hnmDYOilyKpwwE8c3rvY1qaIvKAH%2Bo%2BdFsnYfvimQ6B6jIbnfau%2FWGHNRTw0U%2B%2FXan2EYT%2FKKNfmUrtRbJE%2FinDlHV5Eb36wduuvv4l5bHasMyW9FyM2n1kr9zLJD82xeew0JWKc3FYVMSXPQjWVhELwbb4IWXP%2F9ZFog6S6UUeKMhXfHXtFBlepzLRjlgXk9KKYT%2FMrXs5%2FNCNCx0D3I%2FeX6o8UYPpuHtkGqGsPYhAaF0McDEOJotPUEvq6kEulNCry%2BnGLifdfm4O%2B6YoP43JKH4K7%2Fc2iFKiF9fPNRsfpD6gw0Xhk57tZZ3qqZIf5Tkm55mSh5hqrUk20Qpee0amNqbHAQt%2FgbWgDGEU9xnzTckMjT2Zwz0Vzz11D7W2p%2BoNXzFxXJ6shpF1vF8qpd18CjcDINbu0jHWNZcGyZl1sdCaDZh7Y%2Br%2B7c%2FxwjOY7S90BMbCecHA7ChSMyAukI0z%2FgSEMsZRF2vWAtDp6ATT9nx87xptlSY%2BvdtB7CbW%2BZf4eeiEJ2WJENUsIOv4Fs5gdMU7D9UtHb0yUEAvAmwFjyhz0RYbLPaCPcO2QOGGkEdiF1rZ7NLWsedzjOWBtGD5U3TsBvEOfUMQNqgnmgNl0%2F1owdQGbMLOptMAGOqUBefN7eHxjS6QA0W%2FWhrRaXABp8viDjTQ4z%2FbDLBkbbb7YLN61hoSPE7T2w5%2Fc3Mq0xBSzaQBJpdpbGk9kVfkYJeKYdL9RaOqV1Le43MBCZ8RVwQ6%2FpDW0RGmecWmtYoF6WWhz8EDGPTGrcmYiYyfd8gDPE%2BHHdolqX2LKgdebkNLjPqhGuCN90gBdV5zWwMPz%2B7WN0sOkQs5yixrJgHvyLnHE0xZ7&X-Amz-Signature=2d02b4a049f08503468d2b435a14e73e2edf64ffebe96ed35d442b603defcd03&X-Amz-SignedHeaders=host&x-id=GetObject)

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
