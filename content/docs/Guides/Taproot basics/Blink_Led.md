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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOWP33VT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T070959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCllFM4P5qx%2Bar7He1Xe8y2oljJC2HAC5QyJ3h%2F0dOXAiEA%2FinnmoxSH6JV7V3CxMIDUeZJvCLJIGimSK%2FBcd0CUZAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJvT0xL2zxxlTjQ3RircA%2B2dpfzeiHX4S7oukQOg0z3klJYis%2BClMsqMG8qCUt71aRBhVTXS%2FJ5%2FGTcMBpK3iwxtnxDPJCYsBZw5SLdsGtHjndBPCFK7uHB72SDCKH1TY4LZuYgcshx8cM3v2IySnkXyzS5H%2FtmcfGp0orJ9RajmiWIwaBTVVr2jMi0D2hY7hH0H2vJ1ShdRIknoa6jkEf%2FYVn21QMVa3ptEnQ4Sof7OHgMeM%2BycfHCPQ0JtgQtTjIOCqTnYS5CIa%2FqRWplEvuwrcjI20TFcMnW9cS4wNjOLI7qe0y2EFPaPSr4m8OtnGtAzR%2FqagyVdYkIxFEc5WufI0lIL%2BVCoZKtEwgwsAHmQ9cNPJZ8EYqoUVN6ZpC6eX1C%2BOzG4hpcHSKlqg%2Bz7DspgKCpcPXDEwzBF8kUq5gg%2Bs4kT6l%2FzWl2ukCSetUSkzVlA2H27wAtk1V%2BZHiIphlSbb7riSXp240KSH7WVPonQDFPmQ3j5Kkrm7BZgjQIsv6S8u6YAMBy8t%2F7gJ84J9%2FiG9aoAnDSnKXirQOHMwpcifwNmw8EzuhkHZL8t9OWNkESYe8LOWQbE8KltB5iQJh4dLoXygagH%2BEQ9BQThN47wdRYOZDt79XOKH9xnXWI%2B3C2V674j1dWHz28tMNCeu8QGOqUBwIDmksC3rmvRo7rUys8EX3Bn7jcddythu9sjjrYEELwAKOPn1jIVdzw0PeyGMh1hgATiQw9RqphQ%2BZLY%2F6tn5sLQtI%2FMhNZcxTZ78BrkXqRHMBrWkVXX6h0g2HpO85g4T4ODVhBusetXtBIf5yXoRLDR%2BnIJ%2B8A%2BI5AHtXArnBnnxPP6nkQ9Khmg0JKoBF6Pl23HAb8csd%2FEza9vsBihq1wdl1fy&X-Amz-Signature=5c2452f532c150b9941a421e15ed524f121fc4d87ae9cb051d032a9c32a43dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7X6V67%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T070959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDchhDaIezF4KWNojP737Rb0%2BfxR14bjgSB7631Y73mugIgOZZUjjfR9QxZ1AmCLY7SXpyZWJRnRZpYGAoIXwbrkYQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHrSsyLJlZSB2glV2CrcA87ZO5vqNuG1MvGxHBcSJz54Ms9Mvqo7wuxpypFD9UaIHvmOS6tiU7zylbA6tQLsAGY78n5%2FXcIf1hiCokCv7BBiOEYKqg73DsqqVdQD5MS1dP92XK7W330WZwVwXs6ZZha%2Fm83PaviwQnw53YluRfkZczPInILmEqd1XZie7DSOuhqCAoaUP%2BnpOYmobI4oeenx2tzbVPBMhEPU7spTqWfjvqKy7z6hRlaJZBT%2F83cRNkASvinJu%2FCsJvXwqUJqD%2Fgy7WFWyL3vWsA%2FjFbvkJYyWb7lCqatVOZVfwT60fPj1oiF7toiZYgPLO3PwsLrl%2B5bRwVy%2BRDz%2BDBCCAlzwvmBcs1xwcvGAeuxQCGSGL1dTLaL9VHsHC2YGkPHdBZA6mjkg5QA%2FwfnNCM6l42dJVrHPYmuSKslhGyRkhhI0Q9BFTLxsDktNJZetN2AW1DQ7ZOo3wV5sv9uhYwNQP%2FzkaiX8oBcqSko4OZYRlsIc0i2%2B2AIkRJ4OmO6SY0JYOKPxSmrkmUUNr3tz8z5HSulWnPJodo9GmNKxex83WzTGJhBCuhQzXemVWrOxJfTv7joCZ%2FrBGuslqsdo0XrKRSNzyVGb6PydI1835%2Bjd0uwHUXxoyXbs0N188pxiVsgMNimu8QGOqUB%2BFpShvCx3g3%2BohKjm8vfI04vuD8LZBquM%2FtRSNxmjpwkZP0G5A0vJyW3%2B%2B6%2B5pX74B3ZRhRadwHLXxK935xDuil58zuG8o%2FZTPamUx7jWVvs%2BH2a%2BGSI5XizApuytwcikdphOkHcS8f7KADiPNJuj2r8aBRt%2Bc0w1hZ%2BFyl3QCYfilq8bg3Fc3Q55WEgCqmiLC8Kc%2B85NcRTSsFAgKjjbuDfbfKV&X-Amz-Signature=001d4ed000e36ee66b359b3ca306d1a2fb7cd41fe302f927d69d6b004abb8113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
