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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTCZ34A3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCID3ks0i23QxrFGV%2Fu28vL%2BefZfanrQezJJZmkRYU0xbqAiEAj%2Bv4HKyVmOdTVAckoVi1%2Bv%2FWeUkvkmWNab8W7e%2B2vrkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDczy4tkwN5ZhH9E9SrcA0bLeVEjZCLTSGv8uE%2BTdlkaVfaxEgk86PgTO0fSVOjeYHE9mzSWE1JwTTmEg0yzqyhzL443QZVC9vliK8%2BEOkGBRL39LCBDl84qST9QYVS0%2BZ8I%2FXRrcXzIApWYtgvrFDjViA2T%2Fvmsu2hwYmctFhZKp%2BaMoiwrANYbHTuNvTWOrMDNhl1GouFFbUCzkpqxian2srAIScFHerKSdmi5tK6TolgXpouwW9otbHHCK7QibLxIx8qtHlAnfrx6PkDxlIPytCSM0M8T0lTKWij3BiVOAsGaWCIlMsVIoqZk6VIs2YGCySUec7XxREvBLWUsmQSU%2B5u86jR3n0%2FglftM8GGs04P7zO5IkMSaPBIcwb7qCwyYqMVS1lHO4DkVAu8%2B7%2BpSLRhCTTylPFlwc0gj0CsmTMdzg8Zf1qbB1OX24smz87V7JQc%2F9HD9dwc0Q827fYzTM8RORqXRgGHssG2psNIwJUMidyvful7kOUQT2mvPzHEL0B3l4704QcWJ%2BWYTD8X4oOH9IgJidW3TuSqaSKXlAwS%2BuAwuas4XynJyKfgCuH1zs8XLemGa0VEA8Fvag3Of8LLa9qQrgqH%2FIOTfcu4PhdTBVwOTfTCg4pbGbXrE%2BxwwF1oJKJGHMFH6MKuOwsIGOqUB3Wcn%2BNrbPql1p2VDQQ5TmIhEaAk0Zwlq7wRdIf6q9YEt7YtGBi9xnvDF4cSsHGBVQx5dIDjO53k2qB8uaSjBn6QRvCVA7b3ESavtlftjyvF1BSLpb5D1CXebbAb7xnL3MarBkyRr0wbaZakcy61Tq83%2Fm9PR85StgC0qebcV4RZ2hP4TLjW4rkn0n94YG6hYvm6This%2FDXeztHO3nCqOPmVcaXpT&X-Amz-Signature=0d3972d0e404b035402142a09dadeac40ea7aa37f7c6143f07534d87d95438b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RKT5RSY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHK%2FcMGgk3T6tFo5a0Tmzx6%2FkZ%2BJOiBXd1yvtsutlYTUAiBQMMOGNvZ0fpSaGnVnjKEhKwx6CDhA1vQMhDRzy3Eaxyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2F6whd6B2bnAOJz7WKtwDhqy5MfTls%2BVx29xpA6oeI1OPcZdslAbaIE2o%2BWvyqjvpO8qeNZVDKs2XKFpJgng8be2Qoo%2Bx%2FswHmeqG7Jd6K%2Fn%2Fm8E5fRvD6iSW0crwfIdyEgiG7eZt9y2TmLE7LIizGeuHsEXDFQIbkkgFtmbXk5Q58AvZT1bl9d3%2BqyXX0JqeRz9LefEy4m2LLBKAoSXahotpP%2BZ0WhMBvqKZfqOMfGipKzfHP4XSdHGYzwKubY1o7mRyZ87v2AWuHWY2h%2FIF3s%2BZuSiZh7AwU%2FhXs%2BKHXL1KgpSD1625z%2BxSRDoLi2Y%2FsFt7pLoqecvlaFlT8N3bdtmHKxgHLdY49XbW80hYKENfUsdo%2B48ZCKiM4o5r4tc5wUjtU3X8BMc8YYAh5uZkoe4wdaDUc%2FRzjx4yW7fRPIP4FjKHtN%2BJZoL1CiMO81aWzinxN96euSWLaECDNMGmwgzjOTBHvPBd%2BnM53aVxV%2F%2BaE2X44p1QMlPQ5yYzpwlEkB89YcHqYckEYUOV%2BtHR4rOImZfT53%2FlPRV53eIqJgoIfW4PpH1iPnhXVplGorcs%2By4EF%2BLg3twVrL6SLEMTl0JpyCOrDudRSzGYvR2wHJvw6f%2FxGCf6C0SbG9sSBGKRZUyBFNjfVqZmpFowqI7CwgY6pgGhQ7q2VbdtJa2ON9wSTsawc4BrMwLZcxHZoAJKg1Aqp5t%2FRCdRj1VRgvHCFFckQ%2BptW%2BKCcFf6AoJb%2B2RUgWpdvrLXkQ7fLNzl%2FE0%2F4yXinvjzJPBi3unVIR%2BFUG556llKzHuySdsdQmSOLQAy17jX7pzlx3nRuqIfrU0CsrM4a6jMEchXYps%2BVVg7UcfHHotMRpgaSr21spIuNHTaXRuhiLB1uq%2BK&X-Amz-Signature=6da348d5be89fbb482d3936cf17957c6e7a43d19f5fc361afe902ec73c0cb17e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
