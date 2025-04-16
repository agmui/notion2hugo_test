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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVNP6NPB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2MlZYSoDeauWm8Ev%2BqC%2BQWngYB1LdNqgZdO6tA77AnAiB9XYjmQsZ1FdTgTnpRnrf8zAA2GYkqGhynq3ZLEXJGOSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMqunWykx3kNiyuR4SKtwDpL946DlTXMvAa7wep6wHnRDFCxEBhA9CYhHr7xeI7Dwg1erFFbJvEAEifcsAZKojsrKgcGoo%2BSCPSGG5qdOXHJc3ISxRv8uyKuejoLIyxU0%2BfLmiWwYdkUwuTVZXcydJNGKSFUjjU0s7cctDCp7PvKDKgLNeBAWTimFzdP6oZt%2B1lqkBd4YtdiSaJDmvJ8CCwFI0JTk9wuY6sa2rzGCnOM5T7c4vKaWEY%2BfhAWtJiDQfoB7yAT6JzE7WZJKNss0KQUF5kroQEITxzu3e8H8do1HPslSfEGTb1OXdjNhZIdA8uIsEmSCBVJq6XLU5vyHL1hGihf3Qym%2BN7W0AJkuqxySQeq1Y841He%2Fa1lhRB1F4miVnmmXj1XsBxiaPEeejGDt%2BhMacm%2Fpbsxqy%2Bkp5%2BrIpbUIIGMvnm1%2Bfzb6gjMpH3crI%2B8jKbPcsMkTbvWFAGwtLnkejGOWxwA0XlGS1L2eHHgO7ueOALGu%2BYX41MWKIlqS8jATiBjMP4RuSb%2FIUNpeaBUxt55dKEhYB0KVQP6gK%2B5i4cHxPDBJAjBzBmR%2Fko8jCr0zTIObWyaS1t6ft8sPW5d68%2F9RoHnfZxYfCKSWKkHyt3ZVnJ9qxCuVjkfSEmbUiYqO2Vg9Ybh7Aw%2FqL8vwY6pgHe1Qhtr%2BYJLbWzQf2WVGzHGzUEJHMt%2FJloSkCLNurbxz1rAWZl%2F9LvhGIL98vrUEP9t1wrL%2FS3eXzlW8wJADLnf3qcWWFwcRo6oAgi9GJm6k6zxB9VxxWjYuU3MMEB%2B9w0l1u0mipvVtjdaS%2BOwsfpi5q50Bl6s2ACld01BrTrS%2BYeIznMIGjZ4jb%2BI9jKjO7AQ%2BdBXjGXhzrqGD76ntyjiOCXeQwO&X-Amz-Signature=b754abfc593e6a7b38ff05d7efa873d0a6e0031cd63540a5433f19082e83ce2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPWSAZ5R%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFclGqv26H%2F83l0Lx2Th6kf4u%2FWcZpjNtDHHGYv%2FoY8JAiB0sTCKz55wz2uYQ0r3cCbWlziej0eFJwmoj9lXEHA2Oir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMsKjzdUFCFp5I1xzRKtwDeuRrgQpUxnEtzwnHsYs95Jnz5WpqI%2BMaOjITglUtr0MWyaVPpX0%2Bx%2FJ7S7AXXr%2FJKUAHlchMpYoej57cANmXdPaaMBJg0vrMG%2FrCUGmzYYhboyR4mKfC06282sN8cAmZ8AVhCywzQpgmoLaBy%2BVjyWqkT52L596m2qP9TPmH%2BDglx6xCIQea2Hbo69Ht2ImiyVI26vt%2FY0InNMq4dsBrrY5ORWL308DndWVuToaD7neXiwsUlHJtdV6SKQAgSlx375SbLSyxr5zfdlE0JvpIP7HlrJFrQa%2FD3xUtvIwubUIpkC13oUK%2B4gUngVPnZy%2BfcFeUiLk%2FdpPGfGKsgtDUReNU54CPbVfy3Vhj7%2FOuqqy9Ec%2BfRBlCZih2FXVDEOCYH4Cvzd7OWwZlEZa%2BcgtfgFjkuWVMldYR%2FxC7IqicaGcHZqQqkjUuV3T6u0XgQdiQmdJFmyYaOWN%2BEkCCxElmnAh6C6g1d6kqprOPU7V9kWEryEEjpklfgfDCQH%2BvpRf7Qh9Qrsli1K39WGHSsbXnw89mMGFAPwHMKB9Zy36IFWafqxDWLiI64QLS0NpAC3jiChAWQe6RV8vVEjUCaI%2B5kVm8XTXIYWqn%2ByPd4c9Aj5a2nGcOHLrcxWOmgogw2KP8vwY6pgGDC0Hr7%2BzkM4dGoM%2FT2ie3hPIXk3gKTpJrB5%2FWcavRi5iy%2FrqkfaHleenYxwNwo5tQ38iiF5qCJw3gppH0kbsvaBEJ4hA6ao4eyZLx8jI8QzA%2BdeRs3AC21xj0bGYRc8vQa92tS3RL4HfzktXOofhjz2If1NsnesyxYaVTcXs9ab8n1nFbvR0tnSHjFzXHldavKsMl4o%2BJXpt%2FrWNuhaPBTEGL5COm&X-Amz-Signature=cc9429007b12f8eba105a6c0fa27e95af6e62c7b9b82a5e8c2b7755e3cae0212&X-Amz-SignedHeaders=host&x-id=GetObject)

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
