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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPUGAHS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBVQlTRNppRshVoP8iQCEVzxzMc1M3eQtn39QZzm6EqhAiAzg9VJSTF5Ehh3LIRxAi4F3lM3eBwoYTfcMqPXWC2wkyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2oSmNvMoK7xvcr99KtwDhNcP2r5PZKr1Z2BWhgBqyuci4t9MQ6xrNM98lQkcSflUikjceRc0AX%2F03VFQbBDNYw%2FeF4QtSG9XXavYj8rOO%2BJ%2BzOcjsXIQR%2BkJk23dWvACJkIfYFhwaudR9qjJRwMi90RiA%2B4V68tf1fVPKHOwOTB%2F3QpHeZK7jTzQ69wKYHVaE3pRseHeZRc72J8MlKD2lDe5IaW7ehEZWPu89x4WMBjEKwaftXI3u0gX01fpplicWpUMqhEgzHWXP7cfTQUuE2MeEy4yfNMMjmxBTNimx7yC0xiF%2F4qbmBH28oVbNWroUpxRqSDO%2FS%2BMiBO7vU0GqZMTvSio2dL0I4uBBlJFNtvN8s1MTstmlh%2BvUjunZb6gQEM5XbB8S8erdubpM1nJo6xwVLDb7cBU2lFz85ipmh2%2BcacoUA3pfK8yySMOTEeOqZP6ce9hx5TZLPcc0PCbhnfKQUTPfGP3%2B96atr34UvcAc9LuF8e9%2FrufDLVZgTjbW5MPSLbd%2FW5V867sJG0wr1G1KjfxBgkzdV8Pnr9%2BBbUKh%2BQXMLdp7%2BcpTbNtNRdul8nSeqUPrajMZMVYWP8C%2FqZ8r0pMr3lzn9OTx5CnWBFieK9YUfN%2FLgiiozqD3M2Air3cn5xeulBagvUwks2gxAY6pgFsVSSmdZapLWr5IsjAWKfL8DkfZofT3ppa7hzeVji25C1zCxocAjjK3OpUld1o0POGkDDzOJ1TwQH1krxBP%2B0SqrZWKHKeUUXtCVkn3lvP2CfR3fPALHKgcK9nATVsDivRkskfOS2Q4%2FhWGVWMGJY3c%2BVDGGuFPErj9i9B26RtYmFyMf%2BUPii9a%2FeNxdq%2BSY3Veb6QPOWV%2FyT43loCRjfFA%2FCUJlcV&X-Amz-Signature=99504781c4ae499b749b300189a02dbfb59882c22e6692aab0b157c586c2c173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPPGGU5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDIWOB0im891Sea0Pg%2BuXGMGOdypCbXc6Bgyfo8yuK1uQIgYdDuSIRFwWmK7Hljc0A7Husxqj3GJh6Z20DlqWliAmAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqw4%2FyRXuuSjGsp2SrcA2j4cO7NK6jrxQlxB%2FiA0cebZXSVBW3iN8BciR0AHHoZmMa5IpmpUyAaiVd0dLFKTh5q%2FK3ghORWpcEhSkMu2w%2BA%2FiilyHABq0sucbgIyZ0qTYGIMFwcOxcb%2FWMArfCtnw3y6qyesvrtXvm5IvaZDQkubkA1R2hSt6AW6sN76aDwJb3tovzgpaI2c87G51NErRAq3eMUdNlKViQI5b7jtVzNxAMTVkpUo%2B6SuPFoRukBSVwHYfoVmQIirXXXMRqa%2FyBNmUL8I43i9U0JPNdPPFWoY1YaLfx2QtG0cYOWnm%2Fv1MOsmSdxwUl7sENKUNcTZRU7Be3T%2BEUf%2B3%2FYEwVsb47%2BazPPsRf4D7CCbYuGt1XH78wrYa0u9CxjSDrik7XR8Cc4v8EjwSRqDyUeRWDGBCgVzTl2OQ1%2Bfckt8Vm6QmFjM99MeGEnRElYEehUoiZgYxwKim%2BcL%2B3aF8DOKbbDsnTteeoLG4zMOrfuBqpyFjn05PRdlO6vyhxzo94KVrSQuzwHfLliRYCG%2B959dJE23wArhMkiiJdQWVvUaHlUutiNO79H1cH8XRssaZfSZHGiuGjPc%2FxdamdUTSanVrc50uPaLrjB6ZeWOfL1APTkyq1O0fneJGVnuqUuZtqYMO7MoMQGOqUBmzWbWqIqkgcPjN7h%2FsfXceIlwXsVPSRcSre3R95H5iJ0H%2FXZRke906JZHEgmyKOvrmHN5xLzb6mGe%2BO9kKv6iqJ7awBzvvJItecFnsGBRoq5FQnKRSET86OfkzwmUMHzPS0ZP%2BNc1kWdIM6oIAyKtrh43zRkY97XYKwBZMhBfR%2FtNV7OyR6Ni5%2F14sK4IqhTfIO5W4SBLzFBvrCWUqBTIaNETQDK&X-Amz-Signature=43a900c4a892d9b3fc04d1be73f94299afe0c16a56deaa9503cd3523d4eee9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
