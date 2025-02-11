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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMRHPXT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFxXRy2Oebu31jKH6VjDK3XPM%2F2jtLOuE1uadQih8uawIhAIh0lCha5a8ICMnIIhMDmroju4alkQmSAGa1JPObTen%2BKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIGtaZAOVflWthO5Aq3APA%2FzxwzcEZsog8TjOJWjzYTknwLfzGUQ2oTYjFZ5EK7vfT7yQhtqSYby8CUk4rfAnYVqhVObibKtgkXLEGkFirTYEnQTXy6VRII5EdmcCDa8TGoVZYYbqnf5yGu9siZDTN%2B22xUSv5W%2FotCP0I5mVPsqCJRyHPzrY9WojhAQe354y%2BXuGBh%2BykqeiSe5FRmkA6MJbvh88y1lgd6ITxAj8Lp4GUpWeWS1Okdy6rUOYwQA0ZAYD79R7XdCCkkkcInvMjUVy6UhF4nrgd208fqfSFJ2DV1PY42rVsyJi5LqVZzeOt1SoZXKKFv05hTu6YCotFYGXWhk%2BF0TB%2FEFkRm149%2FehsWfQDO6HohNgEzHcXFhGBRv6q%2FkGu2B1ecvFUzj8CWlZ%2Bff198BEUSnE8eQdU8Xk9ZLnA767ql9H5XH0lNlxZJyFZFMlNbAad6%2F2PR7TscU6WVLv5JjhQDa7HX13jk7hcxSIImlxfRYh8gOdFZgZ12u9hRB8tt3oMt71TmV%2BMn%2Feff6i0sjHyxx6FC1qzxa%2F6KQaFThcFkdh4f7%2BLyQkxffCPZlwX5KaYEQlYJb26yTG5PkNuojO7cQEgMmIAa5JQ0uTXeQOismSfr5STkFLxI%2Bd9fKRm88gEcTCc3K29BjqkARw%2B7dg7QGkP2RyP0UJvBtwjJhp7eGKH7bqizYCzC%2B5roEpjRGt9gYuwI2R841tPk%2F00ATTFiUpE6AdwXCKeZcgolkgcSu7N4NFzVYmW3pgK5RjTrg5NKRZiviqoEPKLIFToVPhe%2BS1TCXBwweY4%2Bh3fuDbjc%2FWNOp2IQsopspIBrDRStUSI7Idihtk828hDEjYPmhCkxd74gt1x4sbfzZowX2kp&X-Amz-Signature=7192e7839ea9be050f9ad6b66635673d3233e840038d00817fea0b26d7370846&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNYVJGQV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZCyCbz11eACN8WPOro2lTGZOTOq9e8y1naraLY09GiwIhALL1HXTDHwoBXJafpcKySmeLJ4jK9NNwYYUKQ0CDcIEGKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbmMutgWWBtFQq5%2BUq3APQ650XWy%2FGX%2BVusjdYXmYa974CO0TKGVWZH0HwWgZUqJJbNK2vsZcbaAKNDLVcSCWAcilTjObPqz6kNqlwbaZDKK44cb7TXqo8viSHitm6TwIgthpp5hUW6PoRCM7y21iyFg76KzA95oh1x8agi9kqirozdLzOl7iAUuOhyDv8xRQ%2F7KTysRowQ0hjTqLjZTORYjJNWupEcmeHbJCWQgEm5iZjdtd2PmTLQSLXD%2BGxG2kpIrT%2FrQFL5OLZAz6QWjS1KJuPpVZlCycZZ%2B1v9rGVJGOWVLGEzJvJq1L19Qu7z%2BQlAkVHComYr%2BwwuyrotyqzsmYmM%2BVjpybrpwLwTcsV%2FUZplzlHqTAuXHd5%2BN0B%2FwGum8YfIMe0hAYvVNLzib8Rw4fSpcNytqwrCqP6u%2Bc8boKvApKZZa8GsCcQMjHWOq%2BjZtAMMh7uXJ0vgdXUKsZBKWhwZRcY5xJUJzbU6OzV55pWQ%2F%2Fqs6xss2%2FqKVnQzCcIwZfafpjeK3V514E875J5G2iou0PoV1Q0nNyI4BO0LiPBA68bejAcOeXKdl0Svy7RaKEO7%2Bv73BqUPoFFXUEY674nRxJA6hU0GE9N6q1n4IOO9jEbFxT5A1lHaA3KeFaWYNJEJL%2FENm6sKTDc3K29BjqkAR2CvFnfsFgGJ3%2FJeQKgGBExz2UdkjpvT8k30zA1ePtBHpXTjKaJKmj3dG3RK%2Fyy4ojxAbCMdpt1F8vgOzi%2B5tCQKKPN91aSuCWplxYo84qxN%2BV6R3qxzcWP4gXTD2yODpdtblpJtwpBKa4gkDHzhJxRTzFnTQm3ENAmKePfuVB0JGslyxPzBXDY27vorER8LhMV77Ijn1JcFUhglWcWfJ%2BTca%2Bb&X-Amz-Signature=86bcb626cc18d483d509714b32485ccbd38ad204731728996ab5d6b4214356b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
