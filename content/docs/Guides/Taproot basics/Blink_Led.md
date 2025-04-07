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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJRJNQB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDA7KWMCTCXaquaXXJXHBoWjaIC10AkyMKG43mmjIH3GAiEA418BAE%2FeWkseQIxptui9uZlZvRO%2FVwUkBLGu%2F%2FNUxLsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDM74%2FghYTbh8eSQgFCrcAyHztq8PU3h1lUR8sSYdvPM1rlYs1eONrfT%2FpwtOThv5yvI1O4HjIAyv6RzF52lmTk7LWrM5Vvs2NIN9snhiNrOzIYtxKnr0PzkvtOwqGD%2BU5SNk80ODavzHiXpE7%2BbpC3xzNcxjlVhposziEX%2F4Iv8E86NzMjIN980ZbnvliJmvC0vEXuIoLKeReHlwTJEjwJ5m17tzWlIUm0SpbtwLxRyVS4ps1OQTPg6UbFcGfVHNIWnI1OmqDrDs7BshlMyNSeHu6uv%2Fm8rwlZV%2BHNXgZDvWgaQzR2YVlzUtVUcw2I57M5mZwFHwfWBtpxy4uX3GnLisWhCucRpdu0jxK7AtYwtnmXpdRDhITnPY%2FrQXzf3PVrjKRH6VRSJi4bGGybVPtQEHuUP57mPL7ypbUB7dDtwn9ac%2BYJuhwr1Km57Ld2S%2BXTPEYjem26MIAPxGuNW7CaQYXmmvBAvQ56LtDaAUsAO36JfzTEZlpNjPy1xx1jkpioOD6dNUqKGSj4GQTqmhYWhKqmC1MwKOCJYW0cb5iEthAxwnmKxia4uGzgDspijpikqZmQLANvw7RHVkeu2Ozd2yGkvxP8tMqeQp7aAywQgfIF9TasTpCIjrGlYXezDd4GdanuSfC%2Bn3RjIUMMWj0L8GOqUBMyBc7TIr77k5glC1Y7vu57Tlv8sldCTDv6vU%2Bw8OGPB65JjdEbmVD%2BVZU3WsP26zAvqzAIe64B5sd3z2Oku4ew7O%2BOxUvJDCpA2BDF99fCx8qwtz2zzOj4RmQe8PmWsmCQiPhMbR6zbYva%2BKwSPaPExF%2Bw9rtZwejKr39fkNeBKM5oWim62nLFmMXQ28W1K1m5vzZ%2BLBFhrKA%2FHv23kTwOw%2Frv5f&X-Amz-Signature=bd0df42c613b4109f6640e4114645f7cb418395a8c91528ee6b680383a477b04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRML4RL%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0p8iC0OatHwhSI%2BPpoHiKzClREVXIMsZpQ92VbFHteAIgZhYaivBN8IO4uM3uYKZLqOXwZIUHwVeCnubmDVW4ojwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJmmUmxyLZlkOVq%2BkCrcAwsIdvA336bgeCVyYZjOLqjyKoSoSJMxJm8MJPD9iJOdrlsqsvF2VhQRWI52KKiuGGsk69k4v133jxbVp%2FIlTyHcZuYxGss6GNJaoicfOO9gRBum0Jmx%2FYgw2ckCQHFk3kQd9%2BIkwtD3JcDRtln4pNncnYuSdYRl3ISLEBoWd8FDD8yH6bxkOIpWR6xLtJ7BsOf3mnY0IdTB2JbYlclxFiUK1kepIi5usgDFgHV3P6Qh7Q22qggUG3urTsj5UhflzVDrrGkMpEyFa7AOfbBg%2BwsfQTtZ16tjqmBUxIKqou6Qmqts2oy6gGDyUCN3BKTkdtQT360fEdvvAWJnomgUflOtvaTRJ6gDJl5J3oqf4SI8t46G1QKl9ztA%2FMOA7gdUXwhK%2B1Djw2FppMcam0ZoltD3uIe3HY%2BJe4bHHdCkriuZ174mYjVMIbw%2FqCG9umalzB7tkoTYpPxNgAsVipY0dAhJ1tZKWuJTtg6t%2F2hVbww8ekmRST9t1zEsKBWLGRvB%2Fq%2FlZDSIFk%2B8Ylti2LtckbloDsvzvqvVLAgfE0xTf2FIGXlLEjK8CrJ9nJXk8H%2BZiAsq%2Bp6OdPt7%2BpLwWT9%2BVMk5Fcc2K%2FSr6rgCnfZN0SEkFZyH%2Bqsc8HbFXbO0ML%2Bj0L8GOqUBzfyv2sxXwPTqBP45HPmqAUGCqgqnjSTo9%2BJdizh7FKHTkYrRoUwmW%2F2%2FnKpwiq6tFCzdjlT3Udcl4u53zLwihnrIr21QyZE1J%2Fw28G2Jv6TMEg9T4qRaq79j%2FsPlJb0XshPv451hYz1JsvG5WO0NNy9y%2FZOJ%2B8KOgT7GPhUwnyxxjD%2B7WT9MG6dAhoxZLiRqSFPGDdVwO5i%2F75Qcss0JYd61aE0m&X-Amz-Signature=51e5b4e38674e129fd2878628d0e7a48403c7333c39e175a55d1c501091467a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
