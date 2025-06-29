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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QABTR7BK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzm4N1Sg0Q5YOIyWSasXL9zylMjnqLhf%2BNLRm3%2BexBCgIhAKslegmwRiZHl%2FXovzqqC4lHZzWOgKY69%2BbmFwSlyYpEKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLnYU5yybmW5h8Wusq3AMJQtEgsR0x4aSe4OCwtI1WAeXAGNnhYWun%2FT2Fzu954qsCX4zb3mU0v%2BTwtyPYI%2Fk%2FAq9diBQHb3py6Aq3QLPAJWNI6A%2BVMNA%2FO7LOV8MquayZtIokw2gnPsuMqAt3CU6CdqD6IsXvgS4WuZjrHa%2FGRYWrpNaM24FqVaj0i%2FMsBAQdeX93s2rTtelRh4F%2FnLxihFGPPYFs12bQquoIgLSyTopTKefEUoKqjjeNwa8djUOx9MNuDeP6Gs55N0aQN%2BrK4IcuVgoPOyFzGuxkO9lwMZtaKq3m7yPQHxws%2BdW%2BY0rma6lr9gggGdxkYmcsy6frb3kKgqPdO8F%2BfyrACkGrQSocKgb0nYlDGtQDsJIlErNlQiL2ndZ9ZISf%2Fj81P0UzUt%2BWwl0%2B4rEqX1W1wlpWG9xmmw1U4TX8Zg%2B5i98ac8UMxMFBi0fK4OTOc%2FXialGRWmw5tBE968A9RvpZA%2B5drFWEWpXMP%2FnFq9GOG76M8S0wNUrvlIkJxsQfJDRgHlXj1zFL5%2FdTTu%2ByG0uYI5qtVzFJzDCW%2FvnIOEhzMVg0mvlsyl3N7C9NMwWmVgpXI3eJFUEiRTXkdGj%2FzWAPwJtYjSF07mrCZjEBRtgF2j5GrCMJ8Atp9iQhxn%2BfAzDJ3YPDBjqkAfExZXj3aQUQsJ4Nk85DOfoc9lFoafNe7GqyDNPM8Tp%2BWQhRwQLvVHzHCJFbV8v70Fomp1Zu5uh3szGsAHIdMHS4iLvg2J1kknH8hi1nWg2%2F5UJjsywWwsbs8L72qUPtRFLhshAuCxKyGLPryQFq1TqQYovHt%2BSm6HIzf3AkxvTML0K%2FVe4Rhxs%2F%2B3LS8iNLZ1meUad66KQYstxUdKE8YieVs52%2F&X-Amz-Signature=5ee12a23ea13841b3560ece071ffe4942d755afcfd3be4244243c67df0cbb9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNB7EHE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaQ8KKEbknmpc%2BWkDSBHmzobpvHEoVOeq%2FeIIIYIyoAIgMK9Z8KX%2FfWNCSbYzEINV0Yni8aUZ7Osben0g8k0o%2F1wqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEvIdK10mxIrIyvqircA2AXi7zrLHRnHBwn%2BjMWlcoDXVzOX43nOPr3zn1FuqD0Mw81F9rcgJBcETASaVb4cWrwetAA7j7lWgBDajho82y68hzzxUshVvzQyPRFf%2BM6CcHZzGl792N1fEEW9czjPDRVZ538a2ocJAi%2BpJsZY0FHmnrCmTQ4nLFyd7GNrj00uAuewfoybWzT4xNnOIriMZwjpDXXY2zto8kTEPcCdgsmP0LsjqcbWSK%2FK7sj%2FQBVagfgBR9FQWT1EnVLZ%2B4P1xeCULcwTrJKGKc%2BJKXOxGyLyjJ6JtRPoQh2IHI3gOPjtJ2ZuXLfODfql%2Fvk2qWiDbWqRjq1yOjiSOTOY4CNrvBAEkHILDm88rld6HUwozCKmc4RRHPCs7qAu%2FkKImWbIop42xwmZ18stZAUiejcIiBUL50q%2FFFUv2ajr%2FAEKJGITu8TQ44amZ3AU72zN%2BJrOMT8yiBUiWnI%2F6w08YMbHk7tcXYZxyTJSi9ePEdoYZdKh0ixZlTKl1PdkNJDHrqeDmwqI%2BmwJy1njXVhnw8D6QNJkuscd9VKsXLKMz4HK8INMpE%2F%2B0StElRbYlyfHavWCOYBqX4PEgdP5DRwzGZT1QyAAze%2FKNJ2iJiVaX3O30G3mmCBHP5HL8ZA%2FIjZMIi3g8MGOqUBB3DQkZH3Bsy9yxtl3X5185E87fYwC%2FpPI%2B8hXuEMiwM1S%2BCYalmNrhQywWV%2FVOCWcMJJSCCqwe5BwLWAE1ge89NNR2jEmEJOuQ5RLm0nbJa5g82XTg7ggJk0ZV7of7ioT72JR2Gn7PP3vQrRpwY9q94kvuMazV%2F0KeHL0QsvZDLWDd0qBP7zX%2BI7%2F1l2TD6YzJkcDEu6ikt9zxwaCO%2Fw0DnjKgKM&X-Amz-Signature=5aab933cd12d862feda2bdd55d5252dee63f1883c0931be559ed170eddb4d0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
