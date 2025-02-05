---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Blink_Led.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS5NTZH3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDPFTHB0vHrdGVpcMxbg6giulhTiSS%2BHh4gFB4miSgbjgIhAP3L562Cdhd%2FlQ9%2FtdCPoRyMvA8ilXgwAkOD6j0tf9iWKv8DCDkQABoMNjM3NDIzMTgzODA1Igwd7U5fKI8OnPIBgBEq3ANticEt5KCFmPu09QieDCW6nCaEK3aNLn4FbUIV%2BreL85Ha0AZ9yOmxt1GXLKpFvx8rFgNhtMZH1gaX3Ni56hiSTgt7vit5lBw6Sz%2BbohWLqh8BhNWsFfUJ%2Bg0lqCF234jmxbKoe%2FPDLIUSQtcSDxW%2FhZBV8xZQc3pbq%2B1%2F8JLupjryD0vhQgrCS3j8kCD6PJpD4oAKgFfUcXPtP2e2nmqLv5HL6Ri5G1v9QNrmOz%2BjLiZUJiRMlClOoLLxGSaERrGTgBt8vxykPJ9ysvm6NNWTXqs%2Buz6h3g2cDXZL0nApY3tBe6lhapbBVbQaNnr52myEvjXiErDhIWmKvZdY9VDSqpa%2FXxyPW%2FN1FyUbRZgRjWV2LW%2B0ibIpPhQa7sJa64z692xv6iXHlGYpPDcKotAQXs3O2nwp7T%2FK2bYLaTBHRVBbb693lClnXpgzYUg01725TEAahlhdvnMEf%2Fvib2mpbAJmF6YWHcA2w8zemjlTSw644Aa%2F3bhtMM3GeuBHhM8XIwHfCibAB%2BjeEkvAx3E83jnO%2Bo5YK6FOxXdij7S2CXznR1GxDHIL8YlpBK7ibjK%2F59fIj%2FXWmmspF9OiCn0eUxjBqV6nO1bi1dVxray8xuKs5CLjJVmUFTUljjCWz4q9BjqkAWGgfboKAKT6VyObIbgleN%2BiZcdrj2C3z5LR2xrrQLsODUXgynIDkfkXAd0ZTDLd1jJpZSYB1cqWVjZZCAV7KHU8hiwGM3aMAPjKHovKawQQkNO6UtP0sd1mRDARHq4hXEoH8L%2BH4gGm%2B8PuuaUbILCDWZPj8ikpAL%2B%2FCfLM3x8JTdTGrkBUtPxSeP39OvJdiW4phiI9ZEvMYPM1Vj%2Fe80T8T4Ar&X-Amz-Signature=83cb8b70e38b40b6d8173c4bf79834cadfc51bd232f97a63588b5fb2f7c2b5c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWSZ4DBE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCCnuKyXd2JeezoLYLBzGoY1EI5PGxNdmpjLQT7YP1qyQIgAr8Sr%2FEXrzj3tE9T0nNuUOJiVoT7k51zVyPlGDuT6sMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGLi0gABeAr%2F1BMKnSrcA5RkO7lcWeHtc3aD4NopONlyVX%2B0%2FbVWM1UQBDdSD6rG5hAJtxoxEqDV2mdJKEaUsMuCYlGX5Xvt5oRY0%2FlgdO%2FJR8tfOrmZclWa9OjUYzKWXd0%2BhxpRM9kKWWhNDmLcRB5N0E4gX%2BqO6NbZXThHTKOseWNRNumJ52nYi1aLhrEf3UhCPKgM7KkTCpdOLJrUXkgbNqOPoyD%2BPvvZ7Iyalfbnk%2FUN%2BuI1317CRIlMqPNK2y56E8nBhdsI9KzZlgfi9TEl5d3LQjs51pGTlb53B%2BXl%2Fhuw9dMZa1FAxM8phXQr999ACCRhxMsGbdJXyAQThVj3xIv1lGQ8S6xvNXejvEjW2Qb6R%2B0weGRU7esmdYgvQYF%2FGk7olG8%2FywKaH6PSAaCIO%2Fh2VREicXCo3WKAIiTniVHGJW0vpFeLJa356Oq6QaSdOWAFiYWnHB%2BcRwxgSfVmIFDE5YcEAiE4p6jpFhwct%2FDgNa2CbUUZkB1VYclXfvK%2FfE%2BElb%2BFolWS0B9UEjJvpOal3ngsVHkys%2B9Qx78poeweVEfs71xDpApSU1WxQzyijgP95lA3ekv4B0j%2Bo%2Bsle%2Ba7F1jVMfnRqvwez3oaqTrtkUvOSlZqpOkHYadSG6tW9fXltoiWbeDkMIDQir0GOqUB00mDGR6cjaiup6g4Jd%2BsS8iO36mlLnmQ2DqJMLfnRo3gmX7warKcHDxCo3eQiv7aTWuad5vdOR8ynS5Ax1vlfWxflrTxhSVTPr2m1rqQHjgHAAUO5i%2BDPNJpglczU2mDbtCjNu4UvrqVZmsrxSj9J46EqsIQ5J0gFkejCMU9B8TFleDeE3kAsWgq9izPMlIzjTGun9wbcRrQOrtMUXEaNyiPfhGY&X-Amz-Signature=b4eeaa56432a0e038d0475e1c13d063e62ce1d3e80de31e57fd7cf4c1744815e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
