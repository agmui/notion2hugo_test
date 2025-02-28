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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZK6RKJ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDXmmlKfrAnZmZhYGjCxhzSzAg0YIrWrKuWpuuHmrQ1tAiEA6%2Fbf07%2FCyh32JHqrT17%2FgVMHlkZNvWrOW7I%2B2CiCykkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuM5hhJX2GEP9RujircAx%2BZfEJh1GulVWudUX1cVhkcbbMv1FWPZPw1rCjnCG0gEi%2BG00iGvJI3rQhXL5Rej0L3hevaoxEd9vcc%2BmMmOpe0sYQlIpgoCqbZa2h09QHyBD29AI6FhBrS8y7N6L7XK62xDr1LMmLAkMLw%2FvZ4GFuBhEMG%2FH9zX4xPIRVVAxzZkmqMSgNC%2FzKDDSzrZyeSKSZ78yfwWZYBr7aPWCT57z%2FLj5pxIek78eONpW64OWJToOBpJ2jZvjGmxlQTV47XsKr%2F5Mfjof5MJCeXYTcojfc70pZjR8IqLS2ou%2F2lqzTpUNSl4K5i20frK9eyq3Eb24TCNpSGI%2BJJ0Ite1D6ms5JC0C3dnj%2BqSZUP%2FI0BmRqPtDfZ9ymEw6BiDops01m5EH8eteyg8IA%2Bixh5fDVOTVXZ2IfNZ3y5OJDc79TcYyulvrwrBU2rX2G%2FJ7VubL4%2FMrASA%2FwAqoJpZOuvLwOj53xRtCxuSQieub%2B6qRKmOYkqfRXLZBtFzKwGkgU4le0VFCHdKmQU4%2FQga5becXTdAhSqwBxbqoSj4nsOI4Bspe%2Bw7wdsXklMMFcKO6FMd8uDk7sUcFfkZkSKbNA9d%2FjSmjc6cmjDXMbR7A9UXhri%2FnfwLk7CCjLbnQz81YsOMKKQh74GOqUBZ6ijZqS%2F%2B3f22PQE84gqdsGEASJQkbNMLcjTQ%2F0YfOJDJvEkH24myZoTLiSp3q%2Bdcyj6DcjOaG5c59wJSxPfmFCnxi1gvVU%2BrWUBGa1hh7T9kM2MOx7U7lU29F3LvSjHLhtO1Tpv3ppa3KPH6DQ7jVUNfb35zVDa90YC%2B1wzkB490idR5CACfvntTKiOwNpA3xtez752zgyLj1CHyKq9XYubp4%2Fz&X-Amz-Signature=43881979450ea39a5bcb8765a2dbca0af0d85c550f8ea1f20f6c881dad4587e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5TC4KC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICixMg3GNPQtnAq%2FS8dQmbjgDaW24fwq4ytvn0uD9yRtAiEA0lsa%2Ff0tLDjLSV26uv85DHQOwNTz3be%2BK62dhuaSOQUqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNetn9ESzqLjZD7rBSrcA4NoUGXoZ5wIUKgm64DA9PztOxvkX7oT8%2FWzzbSs%2B2pBa4w1RQ5cComEcCGF6U%2FIYO9ZFayRqu%2FRGgd85OaSvjqLz0b%2BK%2F7KbExcLlNhbxQlw2dvKs9p0r6tivZgbsjKTqVG5toRCkItOD2C0D1DhHgRPZmtKvWC7%2BrhwtSYm4tLbzGEioAOWsE2N%2F8hpfPU1QMIti19%2FczPp%2B5u1FKHXYA4AksTQCqTLTcr3ZE4OVYtqlIMikR4n7RF7XS1uw8fERCrBa7X5J9%2FX%2BxOFBHkMhrZjKZ5qkVq0ajYxuBwyc8oYxrNBZI9koGF61UvOrqrQfcZXEgWTvF8kw7llAwRB7j6FURMP%2BcyFttcYnc8y%2By6fz6rEu8Z8WFgEE8zp7GZWX5xEPStd%2Fy0FN%2BdxwPXCzGjSA8dQ7AzTdxxXCZ1k9hg3%2Bll59%2BLgXanKwMzNAtWblAxsiidjYsGg%2FN4GTXvVI3bS697jqFVMKfhYJOOYH3oEB0SUkX29LvN9cj2tu11Pd6WF8B%2F7aXS07Tl8K9jX3tfQKm0EHZ2SGDHLxSkJqugMNY%2FqunrRBhWfUHWiPL5dtNSXG6jeBuV8Oth2tPHO5Hy1rb7iw%2Fn4yZtmHpmIE4skKlZQM4LSC%2B9a36xMLiQh74GOqUB7YLEIn6WjMg2aGZKB3koDAUR7p6BJlYIH2i9BcG1MYV%2BaNM42okd2fZjrhzHEW6%2BXGsRy5%2FSm5ZFn%2Bch3KvzTSBFNkXtdBLjne00Kru5fy1JbPbH8FTzncPBu4w2RlWoamjNUNgZyi2P2BNHd4eRSNJ4d1mAXCeZ%2Fe1RF9t9gmXSsfz4mN3UC2u1D%2F%2BQlnnBzDmsJZZTzXIo%2FOKBBq46yxvf18Bb&X-Amz-Signature=a6abe09d04a0f08fa12b5e5b91499214634725ad94fd9684337a724c8139dc99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
