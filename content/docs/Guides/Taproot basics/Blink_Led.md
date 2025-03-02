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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHUWWC32%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByccjNKvCreQ0OwW4C90puL72S7rw3m36RkvDb%2Bc0eEAiAFR7dye8eeSIHRHPcbrDIKDS1diz5YWOC4OCBfjf6i%2FCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOvf2FUtNDN2vu1JvKtwDvfDyhymIGndBMkbYfaCdKNvMkGCgSmrAkW9F1O0WMi0mIc3AlHNwaWjDWpb0MVkJpd4k4%2BDe%2FMOg%2Bj8AEjUtovmg5s2DWJ%2BpC43iZecRA6mCV6L9122Vwgii9FE7Opn7FQy%2FliIEM5uz2uHR3CLrh%2F8SYR%2FX9s2qxS7zQsg8udiPStO5aSZmxweyLixVP1IfHUBXkIqTnoVml%2BIBm7I7GCwqq8Lz5pXolRls8gtq7j9ASKnPHpRoScxWrsrHzcR0q7R9K2ZU8V9LBksPXINN5ZP697hZYmgKBnrrK0x4XfgledNglkPGViVXTjHHGeLx1ugge%2FShGMjHodst2ZgCxWHW0vw8tvwA182iw6bmZM98IJY%2BVDBIJbZV4iB86PEcXVob2JKQmSMjMJKe9%2BhgvvsKgYZj4fv0bRSjpRTq8JX7VNfZmJ9Chp96PxM%2FeOPEUnIqWUxv%2FL79e6Ys74kUdiDTC5sZ4Qr5jNe8kVKjmuALtjnPEqKKTh%2FhpJ3iGvb8ekcg0kPXvB0iEm9hoN%2FbXUeibXNU%2B%2F0K%2FPizIICPc8IBOLFlkA3Lkz4wRl4E%2BWZqIpTr%2FjRRwK5uKTQ15rvZFctoL1AXuCoJsQ9ANenzimZf8W49FFnXe1aC8W8wmfuQvgY6pgFBnFDquFWLmK4w8PRi8%2Bi%2BpV1OjnXz4FdHi6UqaEnRC3LZhh1DFJ8RWjhPtEG7lJY5UnWK0YLaFHAaTt%2F74yTxw2fw0taiwEq3a6SUSZR8DOMRwNPkJzC84Np8XafPhLzNBpdy%2BJwe3cQawznrTyid%2FSLSs9qN2foD3iS%2FzukHu7GtxsCnnlLqUmaxjwBRQHq1PFfscbFWvqK5YPZyxLUf5lCLPvKN&X-Amz-Signature=0847bd73215b2d9faa01c4a14535a9a68c7f4fa62275e4b5152c945c09833b30&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466776SM3NF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtHlbfb69jsYnKRfzRKNf2xUFz1tHjasfNcMH%2BFSaPJwIhANGla%2FSzi4ji3M7piM4yIalzyBra3nPliqgtSwZtHSVyKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgyj3zhqNGJHCPRasq3AMMQZA9%2FCgDcMKpIzqdtpDjcBQBZK%2FP%2FEHykW7qPCT6cg0Izqc%2BB2OzRWIWMA6ubj0QmafPwRG25xnMFi%2FXMGulvgPsJ8dUdNyg8Uh4EUb9nk8AfpWpKlqz9lTnoEow0Os9jwuMO%2FrEnW2FAnSCn3htzXl%2B%2BR%2BWuXEx1ZU3idBvVHHMY5K7nK9cXOTMFnEleFJEmIQaqg629YwIe0V%2FPH0XSaHInGewt7jN%2FXVGx03jOzJbKzV%2FoKpwgPtXV%2B7H%2FAeNuSuWoMj%2BePOED5DQlEz3Y7UDXy0UXqWOtPoC9bfGu6LzDBTURmfOn8Eu3rk%2Bty42G1Q9Tj15JaOLdS77wFkc0Q418xkc5mddpfLlZN9w5XoGzOwhjighEkpP1Q2VmFjRHWfquDpE3TNP14neS29vW2hHK%2BUbrVRXoaIKyR6uD7q5oEziqGikqOtE%2BBndN3ReK1RpniyCbeawsHo3WwyqRLi%2FUwgnEK6BfuttPM7Pzwn76R8wSTKqM03BIpxqhB9E%2FTejaU470gDgIGcE0SVZBk4ggMqk9AWDB7Tz3kGe0d%2FMA7eas2zkDUv13PgcStMbaD0Zatiingg%2BQpe6tB9LY5rO5hKyaQAunjj3rhs5Vc12lajDy8CJQ7YaUjC%2B%2FJC%2BBjqkAenH0a7m6DM4E0lvB7WbJ5y1JSv6aqQyVyjpDzUhPXUWlvlht2WyQ7%2BN7NDex8iiygiTS4Eu8lkK1fSGy%2Btih05sUT%2FVtXGnbGQI7RO1Le8d5TxxL6KpRUnoIzTKd5%2FgQ3MtE00gBFxt5cQ4ailftuWLfUSXG%2FAz2gRUwxEuXBkz%2B6iY5mJiCbQb2kO9g5unjaQoXiPr1bHJy319QJ6umn8jfmIj&X-Amz-Signature=858f3d7731258e534330cec0eb3b7b89837b137c55b2db194d36de8be6173dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
