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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP4JUK4L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBotcnLvrGwFxBthkXAp3HaSmZlz84vgCG%2BwtgvlzWAdAiBuLgf%2FpnJBqN1oE54xtmqROxjoB%2Fd6Bpnxvx%2BxhQa4viqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6wQ3%2F8gt0imut2zlKtwDKAsBcM%2F2EtgKGVZA6tDUj%2BDQ8APRhSeG4K5MClJo3M%2Fqb4XBuqRz4Q%2FDv9O4LXMdRAqXxV%2FTNaNWVp2XJpW%2BxuY3FZddA4M7UvlB7iqKCcqqVcLIKU1o7gyiG%2BNwqjKKM%2BAgOS1RQFUh5AGfMTVr4hidrUAwNywJePnIyNpmKUPG5C4I5H6aCkbhpSoztPPJz9h4QVO8Ve2lsSNFeYzvfC6w5ofnw5msfmNYAi%2Bst8kyXlb66vixoeIefqstBjS3puzEmuzGRBIVwc8RdsKQtXq%2BvjnrQjDNt99o9PhzM%2B55%2FKMtFMV6HaZxfVezkIM7RUeq%2BF5ikR%2FIs%2F%2Fv8L0Id2RdG4ayssYuMVflycU6J%2Fypx2qy3pm8PY2X90Cqq1dTcbUc7BMwzKi%2B2QztyZIwVlu6llO%2FUdV6Sqm2Qx%2BewgHxcxwcHh6Vrt7L04uP5aW2r2OkK3aA%2BT4o1nw4J7h3rvSZ1j0pZQi29sALuH1W4HcYVGm7pTM%2FwL6FX4BmUXFEO7duvWwia7fuHtEnH55Qe3iMv%2Fmnd8J%2BFzEMLLjlm6Ix2ycS3tTEJ2xXE7%2BbU%2Fy1IreJqkkrOEafKu6qgJipwKzAMdeAppudPmn5mz0aOqlkwMmQ1WbFe%2BpXyi0wsNmIwQY6pgFR4lIOiwOhxC%2Bqr%2FtaiifthJWM0aOToKHxti1iVzTspbu6GjAsxJgGnSUgp4CkZaafUQFNxZ9eZ0KE1TElhRQWd%2B1%2B%2FwLv7GS4f3%2BkEDuHuV3DREqJkqvP90vX3Y1FRwWPoz3HOjrVPzS5bBkKWFelnp0SneQDR3JP%2BtIsh65e%2FuWa5wqaq%2FT2jlDwhHVxx6DOCj0qVEbk8IuSJHD9PCwbETCaXMkj&X-Amz-Signature=c03d015c1ae9e615657736a62ff4c7fc423c0a7b1f4819f1c4d8b3c586eaba40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL263LQG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDAk1hgvQtgqN8G%2F25OxuHuoBiBj1jhq5v8J7jTGBL3cwIhALODOWTAGlJlv8QGbgar2BU679uad5vYnBfunwM8BNHGKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa4KhqwkIVvShaUKIq3AP5t%2Fo%2BEC4o%2F3PlohRE5G1HyIKYAz1JIVSFek5icxSgUPfeLaavG5Np8gUWN9GFHIyCoUV%2FfuIe9aRkD%2BMlHAdmVTnVuQd%2BuLvS6qLZ%2F%2BGPofGy37JBm8PNpUi5RMFgRRU4yUuIzeZ3T3EI5b2bzPEsWyxfPQ346AeZDtVaitK%2BVnRaIqBNzDx1p6iOQNUbrQsdXbDgG1NJR3YSaiNpzKoAszSf1Zn3p5GjyHe%2FCGmWXGPe4IzB8UgcVgDYT%2B54YJbWCCevC3vD0hckPQAsWiqLQK0N7I6En2ZLP%2F9P1hRmn2EpVq7IzfZzuOjmjtTfHD6k%2B3yKO2KDnJJxz75XwXb9Ln41xe6GJqLivFPH7K1Pu7d3HrtH6J6MbV3Is%2F4%2BuFEdH4DM%2B4cBFfQbwGxhWKEmYjsg%2F7rXdBgBBbcYrjwpQKet4joroi9wAaWyRj%2BIelHZj2uxS5ZQnpTVw4K6mM5L4zkeRwlmyD6mvUbg4nbxuKxribIAlLvKDxp1WSA%2BdsfAIkyzr9Ii%2BjZ119pVyym941ZbBvw4bX5vOn0aDqzQtAxeMvAKGFYD81RsooEAbO%2BRKSl02wFY16gu%2F1bn3iHx9nAJvisfzt8yk1QXMurc%2FotTfRGs%2BcyVKsmS4TCG2YjBBjqkAU1DW5PBg0TqPZR29woeaJ9AoIkcd0vYN85DlsjpSZtoh0T9ZSbx0%2BrxisKfu518YBT3oVvfUJYUfvr4InAIqcwiK%2FbucdxLF264scL5pg8Hcj%2F4X7gG0p%2FiSEWVA%2FgLohdgnPqiYI3DSbW%2FPp9wbCnxljAPij71ZPdh8DrDLuoxyhdzF4SGwwA%2BF60nAU%2Fb9ZyMzYi0CWNyZ%2B4eIJgWHaDXsyui&X-Amz-Signature=673758657ba8112bd12adb43f187f3dca146731696a1bc6bcb793ba54c21b2ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
