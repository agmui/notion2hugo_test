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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGZZEXR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDB%2FCnUBd4CQA9nAYc16Mvru2Jnuxq4a%2FcbcMig3Tp0RwIhAL6TImuTvE%2FzEROcJlmBNaz1BHxnUqLHmjY9yFGpv%2FG1KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYNJ3UEZ2EwmNf2N4q3APfted3CDPlqu7EVSzI9Ks%2FxEXFyn339YIAq7qwLbuun1eIAglkUtjR3E84LkJ%2FV7uLNbL3yCK%2B1wPIsx978kKNKcEUoTTT680iufZHWfbB5UYeur52Px2vR68ZFmutn5bH3DD6w7MCYLdvSLgc4jWt7zaaVwUQSI2lL1RrimYF1TqQBfvVI79hLT7TceQaYfZk0ucMil1bq2i1vn3MEU%2FtVQ%2B6MxZLoiOggwDbAzmceWM%2F%2F%2FSun%2BT80OWuOSfEEGqeTuUefQQD0XbzqLdYqbiA4uxTvLMXv3GkEYA7%2FLWTX6typ81DpUP4fLiioRoa6ifKFJ5zm%2BLPFa7d4rPQH12Flh19GmONeH8oFJ8RlURJG1FkucblrKDCK%2Bul4mTOPgzSsXl%2BDGmVY7SD3iByW3v9LGI1CkfTGlWAagK%2Bpew6iaBVtnAmEmYWpJVnHNf5PM3eo3V4PfF%2F46DkRwhswuCCx1uPoMTzW0aJyTEb7begkqCNPCwLtHRTyJlV8tTpZagUhfAEVETLaJBrvCQnIMueHTbR25ey41IjEqgPFdXETr0D5siFaZNweaym5ZqjXDDBDohb4m8xOijFCsW0dYkPz7KDAbcroPbFUNFh2UP7g71Gl6sqf7eLAwyTazC8%2B%2BXDBjqkAbnHVLIj9%2FRr%2BZOqe8pxsRlXUnQ5iXpp%2FJXqCZl0Xx9PCIOiH083RIZvoEr08eHLfVTJNNBwf0lw3iseE4cVNQANg%2BqaVhhyCYK%2FypBK6%2F7Lk1lhYyQyK7fu6xV4%2BUm9vn6FO8%2BKtlqzy9Xf2dY1HEkiCy8guWaVwH5SxZsLFP%2F9lweyBb8zGt3PfTYrVmdDg3ld6qGKwV9onXsd53WfaIjHQpA8&X-Amz-Signature=90af80486a4ecb8e63389216ae0cf11754e5aadd1204318afcf0f0e742de4f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647HJMXAF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGH2y38wsWEBp1Ap44C%2BdlK%2BfGyT9wuOmx61nGKuZzIaAiB6SPIyLGwX6WW5d%2FkEJ4zJh56%2FZZ5ZAUFg%2BiYeLLNBziqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfBRlP3txM02V4UCDKtwDOrH0ZpqKCuizKVDNkqvnSO4r6l2MFXyEXF%2FLbSc7FGaO7Xf51vXYr8qdP8hLmCI0j7xdPPXQ1GzcgJRC451eC8SQHr0M5r0%2BAiV8EPiRbuOrj0C9p9lludNLnFjqOwXA9odkJe1rpgDrubrQxGgwSHYTGO%2FkecRHkZIqMbFTyjUf5kIfpDS9jfZGpZYJykPomaVSB269ajbWAIaT49muYkfM8kFVtaWk2fb01UND12mCarymY92G%2BBEQxZffvOeE1IN9YAjEQqNpLaPuWeInHxMC6D56buHVa8nnnpL2EQmtZo3TPLeMMbb%2Bw97wBYCjEhzSBLEr2rbdOmPGkBZHgv0IQiYXJYCDsMkL%2BMh8hwSRWbz94QomrZ9N0Txv6dZw27jZahye7AZ4P4gXksUee%2F31hzUbkaDyYR36d%2Fd4wjClU9ZvEBH8zqklUE1DPyfcxpi1%2BmF0x%2Brmj%2BHJxRDcJQAHN52Qk3ZPHbQjIO74JCUxhemlr%2BzUpwBHQMPZg%2FebsK4PxDyLpnaf98IIBzkga80x9vCJI8kpt1wqNF8U8xggNz1bj5Uhzo%2FG2x6Cj%2FZRKu%2Bfz5T9IVoQeTESJqLeFgXOUqB3aV8p22tgDRpiETddQpt0fEqc3zHvac0wzfrlwwY6pgH%2BO7g5PxnIEmL%2F%2F2yVT0UjicBtMKJOvh3F6tUkWxLs9IraSTZGI8LEsNVHJyjHP7%2FryM6ed6Nw76x0Dij7TC6ng3sRQnoRMx1jDVIItQ4im%2B%2FnDghMao8v48%2FTB5zEYLy7GE%2FTFCYrcqTZGDkTalwLScsi5rlJPjge%2FUGDavPvO7bDuO0T3PM53qyoWnN%2B1EeEcHGg4vHYV1FWY9JAF5AQXvItDgTN&X-Amz-Signature=6121652e4e0d32375cf9486816215a5e26eb138fbe9080a841d9df946067826a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
