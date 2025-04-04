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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKWN6GZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeGbuMEWdgQWsBSLgBC9QhsGeL9riaWl4VPriU%2BP%2FvHgIgLze3k9%2FuB9Ex8KgpvTRVUzCxuzX4VIKo%2FTfu80FtHvcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBVSwq%2FhNCFla24SCrcA7QiUscjhdRwO9DzZHNW5J7bTcsHEQm%2BexbyV6cxL5x8nqCxquMr6rCPVUaF4e0xNv3Di3oHkjb7Ric8LI0f0ydXP5jjvz9nI0t6APt5RA7%2FGlkqFHUpZi3%2B3dBL345P%2B5Q1OMv7ntS9T3atNFYcZn3qqq%2Fu1L7WhSlDGd2E%2FQNLibI%2Fz09ZeIboALQK2nhn8i9aYzJlfJ%2B%2FsXQ%2Bx06Rev13QqjJXEELDx83h2kiF9Y8WnscqFSIsCkm7jjT404YgNycUc%2FfHrufiQUgg5oRx45I4s1e64%2Bu0QHg9z1Lw2vPvY2vzW5UgtOtsrg3u7Sa3f%2BYvyeovv9pWXImgvoL1b4peXNNa9FdvO726%2BBET%2BGMyKcvWl%2F1ggJoOdTIPzEQKm1Jk3CRJi6MkE%2Bnd%2FcHUdoj1s3Ytt5bBW27RULxHisOWWRq605ifR5l4PM4quhiBwTGBBfGGH%2FZbImatXtJGANmrQlLQ2KUBNZMzGBCsV3weP1A8M0kw8kTgt8togVGarnk1yjLKbgWMQmGQCGTEjsKYxLik%2Ft9ANI3Ji%2F62OjELCnkU0yJwyxOZ2vCxRTW9lyBATzz3NoU4EYXg2%2BmAayIZPaM3Mt%2BKrqW6Oh4vh4CqNn9z8u7Y1OByMPzMPqrvb8GOqUB0HgorfN1J%2FDlLdyv4wj2kxsmEH5CSLS9HLkbFK6YuC4REbdaKUqJ1cIK0F4WPLEukJQjp%2F3estRCDN8Icqx%2BhGvlBTgLfZU6C%2FQrQgIOAsFzwNIC%2FTsBhkz3eJLlT1p1SS7M%2FuCI18a7ykJsayWooMRXNXULOV%2FAPTnx%2F1cmolFAfE%2BfKfH4zDX4WT9aEHKb9%2BB5l8vnXTxDTy8M1dPQIXnDbm31&X-Amz-Signature=8507d6a53c35b2893f99b806adfb3101ecca92d604adbf7ccb54aa68b120521a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZDB2HYD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMeYy2zQreUwj5nLYooeXF9WhNPluuZxQvxzjaHcms8AiEAgZsLi323XOHLJCNh5yDfRCbcAXK13vBs7baTxrboE1QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDzF6k64xDf%2FYAAjSrcA6CC%2BCMzF6r5XQ0ogRU1cShOPAYAqoO%2FhukuhWxvLyXzUX9uGdKZbeeFOjezi6fGJFIRF0shQJgwmA6gQv3N13nMwa5VPQntjZ5BwFHMGWgIqpYbKzS7LM2loOYuTdtaCa0K30V75QJDxSl2MESLIVAyLOnNOXhtTE%2BsN9DARxc%2B32riDej39IPbx4B8IwrE9aQaQaf1%2Ff1jfcHXtcFjUkaHDHoPVI1T45SMlmhYdqa%2B%2Fk5odzAbEbDpRWQA9c0ZIcyXIQlPdN3cSl5Yo6qdwh3p4sIdCDXHJTrlMj%2Bzuix8RMjZUXNMatGgoTnxSjxHX1UKW7A%2FV2rDAhi05i2LFROgfySS9yQ5uE3tsyKopwXGpI%2FHtzamnI1NaocKS6Gl4LXivELwlA8CD0bzFtahLzqi78jOoSAdvrWbcLka7%2BCni3ZXF0KlpX%2BbPWfcMZuGSLX78C2VpCZGy%2BH0NHeCfft4hDQQVea7t%2FHKMpMLNS%2BTv8qhnO9wPJwmRrl4Trd1rcLEIjI1skHqKu2cusY8FXWpHz0t7YCpV525j%2BBLDjwA7YBGNgduOFuOryqJ2XSqZ%2FmIroOHMBMHziqDnGEgupxi1xCoFirOR6s%2FHtteOK%2FeRG4mTGlpxkc3GQ3JMOmrvb8GOqUBVIx9cP9VpL5DljCTTYu2wOwZp4K%2FwQ1jeFusPoK%2FvQju5KBXWJbSGV%2FJyKwY5FqYX4WQwziwlWhu%2F1mOOliDBL29bFj7GC67cVeNtj3R2O4JplIscGA9c51sxFGKVnZpMJGx21H1w%2BC53ncL7C3ziMVT5GmolITRHjJMjZu%2F2rr62MTYUp%2FzEpyQLrvW0nQ0Z9MU1XH7JhA56yMOvUZtjQwHWkAh&X-Amz-Signature=19858aef286def562d296db0eb81beba0866963deef1f4efc4862879634116e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
