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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ5WTD7R%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErUlaz6RCwZyRATZAIHJnaVXBciDum%2BPrYwTaCIEIP7AiAMz52H5BqqyjwKqF0TJZl3IMMXn7J%2F4shXPfYxVcb8LyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaQrUWq3Srvbd2K5nKtwDmHb3I8kXLh1ZU%2Bv%2F109i1ShW3bhArQ0pUkHb09YvwNG9GtWDQRO6C7joCn2LNA7oi5brkPi2hJ%2F9G%2FIWywCvA1Rdas1ijgaA%2FK4UVOT2%2FXKGNEJ3kr%2FbEt4ANOQfvKd083S3oETbJzGn0EeizZsY14NKsqUDdEwT4nNHuBCBETv4%2F8NRXiO5QlELOtY9Ckerciej8GdeYSF37A6KM%2FojIfr58eVg%2F7mB%2Bp0jbn9aJsyhLdc4J3HR5d1zU0GgfioVog%2FF79BJ3eoOqNTXhC%2BgYtt4ht0TNLODHkwfcg6Ygs3PRrS5UUk4jpUCaIHoQ0NIjGLtZsESA%2Bx5RuUYMYaCA65jVpQGLgg4usi0m7iQTFnFMttDgQ0LYHRNXeAky%2B0dMg0MLLY%2FZbpkMM3KMVOGl2rAZh9COqclyzUoGG%2BItqW6o05l1QZU5rzswFbzMNmlcfypLIreuatBFC8tRZUebabG8a68t4WPS4vg9SqLYVPsbiLjqkKHcbEfjrT3SztrEZEF0OcHvaYZ7dPJ3Zmzh1dTK%2BizXsKvUFwEt4OSRDCg2AV0RLhzP2ODfP%2FF7MwhUd2IoxF5R0Xc68E40nVw54NmjjkJtzHTEXRrVXSREkmUxm0rn%2FHbHSzdsBswuYTrwQY6pgGyp8rV5VbtwIvk1ODPemBqKRzh9oOk7C2vY8dGJoPDW5PRI53h7%2BETMmboYuKXyrobPxc9r5p0LZQf7GkPV2qJLxucpX%2B9AOJDiOaM1StUWnu8BdJrNo28bxbvtbkaOXlSZ1GQUKftR%2F%2Bna3eCr%2FvejWnXT4uwIPKHq2i9cxZmzYtCHzZRmmxevlQl4x99cLF%2FrTTt8lf1riv1Ae1yw8BdblilqboL&X-Amz-Signature=a097d252ba7cfec315648ede0a4410fcd161c12ef6c16eb6fa3387164affb28a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526T5DEK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPKMrqU9447DpDSq0PVgc3MOJwygfy65oDh19QiQfbWAiEAve2MM8Zhrd1dGfjlb8EWVG%2FiMUUgc6z3JVTtbj9B0kIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyfpdI%2F14ndP%2FbbaircAzmYav8m0QbjqcHUUKdWL4VNLIcwZdN1D5g4jSqd8uT4Ai5GsEOIRkuGQSG4bTbAo0nr%2F6jTOQ7DahnxFxoEVxGCo4xEyPxiP%2BAWhb%2B4GqD0IZcNJMPSchuxc2wmRn1TUUtUwp46cFwv9HJZLYXlYgKsEC85lyNZZrJJC2VI42yForVPKYX4NSlRSQYkV6dd%2BjZVGb58cXTTzryyHF12BtPC4OpnFyykVuBh5tBmdx7cvF9fUHLUQI4qWCbFuXJmkjSQZr58qDnrqgriIAZiTGIHhjgtXTmePBVs7GR9tB276nThs76ap1tJUpl9huIwpBD56qjAr%2FurA5%2FtAeRtH2Nh0gQJQHugpzMWSWlO9u8bhgvUmUitPVcojUjeC0WwR7WnGCfAPstcUcDeg%2FRvaO6ccw6a2CZmhClNp3fa8mjTcrQWi8NOoCywSd3gsvYAgVII1ukmpHuV4vESd33ZOpMGNZ%2BuVhyxfdzKORYQuNuy5nWi3aqnGcXUr5Nr4Y%2FTLlxTIbSKevY68wMrKdP8BuQ6fsjqZ7%2FpxW0cOWcJIcUfv5Xg2qQ%2FifHqf%2FnDNdFNXcdj3lyZgggq%2F1vxY1AXudmznA5Y5IsMDG%2F5OJTS7zgp6BPX0%2Bx3hWUJ5W%2B1MICE68EGOqUBG5hD37P2RSOxK1QinyCf9MHQRwzba2PVvGi3xxl5AlqfLCpaNM%2FyI05AxtLKl9mFV284UGZuuCyEoWRBBLLJqfzfTR294Oo0mX91kuKs%2BJAw6qN%2BsJuBaQHZsMGfQ2UFQ%2BRzru4JF6cVoQtJnlxNwMn2TxwwB6B0Y%2FUeEQUxnl9lIYEoJAd%2BomSg60UN6wT4zaWf3KFAe20DC%2B%2BPXVE273gW87Ii&X-Amz-Signature=75eaf071e4ce89b9e7182a290ce44b8504bc6baa5f8b9eaa6b743a6f0794c7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
