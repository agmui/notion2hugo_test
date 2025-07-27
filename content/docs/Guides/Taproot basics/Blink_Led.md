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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHR4WMC6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGwXIFadKrrAxizbZJgJDM9ZTYRYgNpGNZ%2FBA27G5ss1AiEA1scAC664PvIwzMkJLiVAsP84njfyF4eViRuI5XU8y4Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP2qv%2BlX9XnnS%2BIhTyrcA4DhKR81rq%2BczEUpeMm2Luxps6VV%2Bx%2BS%2BmCC853uTzxzAJueIc2JETjIckeSbgKOi%2Fc6EsYxu8rTQfkDUKc6KRxBTvFKzFw2xtzRsPbPSlkd%2BqH0cQcZbPUqyvQgbceYbpGYE3aqORDp7rXFsMQPvOio4CbggrRncrsYNAZ8%2BTUeJRPC0BNcUMIKGmGceNTyeHN4MNjWL2NnXvN8I58Ej2mcXgfmsHWM0srjJW01bjdfcZs9BajJ2qv8S5JJA93e%2BEU0m5emDFLre0OPHIg4O3P2OkzVfJKItdX%2FUMr3eWSwDkfQ9rY252Dj693RBCaCcWWU1GkVV0hpod2RNVzY0daEBpSZa1UNuEY9FJX2AXPDIzY4TTiOVZhWyp2stk58t%2F%2FooHlFdTNyxd0T5SkCyE%2B5dOhG4uq%2BgClQWYx6qG3SuK%2FtYAu4%2BM%2Fz1aKTZxI1wrm4A8rZXNmCWjedHAneDAu1PE5WPesNBaiy2XKUznuPlx0RYqviFlTVSIdMo7r6HqfR%2Bgxw5oOvsTQEw0HxHPYUldW7XkpxE1hV9ze2YqwqbgaJxu14j0ezSX4RjZpxtrLf35OkSjPtJ0YV9geIsrZrtiQI6LXSaX6f3H17AoWBvQck9JmE3yfOn02EMJi7lsQGOqUBArsHJy6%2Fat9V2Z7eThLIj%2FOYBancxk43gIttp8rFIoBDG7JH4wCssIvF3JXIInJorrHbP%2FTkDbRolC1s1lsSuZZtC95UxIC4bSDO4v%2F9SHUCEZ1WNRV3XcLxTu5Bth6V1RmxgEUkIrXY04qDcVEvGotg2jm1Pjj0OkzluJ1JjmExQ%2B3f3a3u8AqrJWmIjvUkT6vUXTtZKhrJALRfnO3mlMypGnNB&X-Amz-Signature=69000a3ba1dd57c58f41ae9cd7e268cb55b8ee331f9e624f3563614a26df27c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5MBKET%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDqaQqk9Z3F8r3umAz4dquIPBJxaary2OUB9gKu2WApGQIgSwkF5jMk1FyCQ0bPnNlN8%2FotlDYSo8Crvv9AL9%2B8ecoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGsrBUbToI4fiWNnCircA3H16EeUPUbhc5NhRkOdDw13PMK1Ho6vDm44fUumn6CJVmyVnOQ98BxGdw7JA970eFezX2I%2BGlmePFHTwQPr6ovGUcj8ddBdUqrMdctxYXWpiH4JpBxniXNBn553OoD4QQPCKcJnzi8VIPz1Nbba0BZzQX9Sli7Tz%2BLawVqxlC6MWwbMJMVbEuTK0dh1PLWADYBtW8ELRGGI4cF81StA%2Byl%2F8qyw96rN5BngnCbpX2ADlavlSuCdVlE7D6ScepvF%2B8CoQa6UVKixvapRqp8U66hzeIbu%2F8o1A8B1933TZAnBkrN3clMsG5MjULmmJUgqMjQhoE7yjgBkuac1FR7RMQxmleYFIdQ043CIx68GnsbIzM4SpD3risvW3YjqGlfOOHlgKEejxWc5yTV%2FFdd3XNQJEKSGo%2FArpDQ9F1klw8%2Fz31lSOGp0bK1LYL4Y6WgSaulgHYAJwWsS9%2BJOMvIJ3bUZOZEKjVS8Ic81HoVkgUe2tWW%2B1BNlFIJj93%2FwFSRYKnKueyi7veakAzklsr1o26WL0LYJLrvsXX4GJqEkZraxjyVtFqaRTMBrB8bAoBZ68iEh%2BOR8%2BG8We4Y2tmLewaAE1TEbY57CfeqNyW%2B5xkbGjJQL9Hb3LdRA1tkXMK27lsQGOqUBgbA0m48v6gk4Sl5QOmUkVWa6WhpcXWnpWwmlJpMvWe01HoSymZaNBFixpBVze%2BOmEfNAeW0R%2FDjnXcjSWF6uDJSE3LqBSXyPrfYNKrj9xbfOxw0wfa6x3SYvtekBEPY5Pol3DXzVWNK8QYIDTDpbopPNfxXRleLerEEqFxSCHIuT5xPTqujstcPR4f6Un%2FsCcuzxjlTjzZnBqKjokRJxxvoqa%2BD%2B&X-Amz-Signature=e718f9a5741a8cd43dc83b00600091d61c380f2111b2bc615b91ce3b6d434d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
