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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WES6MSJC%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDHpqOP5sqMNGQ3cYlfYAsv3aP1d7gFkxvjHnxiJCZA5AIgf%2FgOyFXcmrdo%2BQGh29LGYUlbsXMXiXsRvLFzV7ZZ7C0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD78tSj1ilDbMdCTSSrcAyKX9%2F2EQyK7RuOJzJps7otzeh74VO3rTkqduJJfMhZy%2BbJHnUYPwpw5AyLqPMpg%2Bo7ffIGcj6ZHwe3SKqo0tmYOk%2FXJRu4rQoyOc5d296Wr96jrBTrM49%2Ff5%2BjxrNjxyCgaAkgsrGjA16TZUkGTH2HDT5dr4kThq0eV4nI4JyYvMlHcnaE6Ibr5NXMmr21n%2BmzFykbU0Gcg9cIjSVcxnYPqXMvgLD4k71JwJaecVwE3u79zRZdPbhcaui24je1EB9qQrEjEHAefnRgYcGRKWANT6TeEPL1ndH3gkYOjw3kQPdlimYNjMqG%2Fp9r0rh0ZiazOTzkw9%2FcIEZ5yvw7LtUxcfDh%2FkV67Ee%2BAMJ3%2BaWgMKcdSa9G9HLntIhiO0jMODoi95KsNhZXpC%2Bd42u6NOr2uVCTjmiWTj7kV16EKHDJj%2F2rVur%2BiKlYyyRu43jAwTRGjKOFGu0Kz1s%2F1H0FCqn7FaMiCH6GhgK4f5Gmi2hMVjj4EIyiKFxB%2BHvnZ5r3SbO%2BHpsFMg0FBoc3fBSGCkZN%2FttuyaMqRS%2BNKJMTC%2FpNewhHrPfVa8JReXgU6OtaMHebnQ6lPE3i9Nyn5TPlA1ERFlr7ygQWbNHd%2BlYT000ev2dThfEubDil7fqAdMNPag80GOqUB%2Bg1eF7pkJDJys2bFzIo1bBUEOqvnfr5xJLmReF%2F5szA%2Be%2Bd9a8fSxe2IkyP3yVUrD5Ts9T7q6QeGncxBmQE8NK2Y70tt%2BHQKxto5be4Z2S4latGiDgL0QFeytgPKdwxsHCPMmx6XTZDQxcfF4EqVCCAR4rCAWjIgFSB16f6ty4s%2FxXU%2BvaI8BcJRRV9u%2FZitiC55TIsN6HXqZWLfaYDUpumSy%2Fqe&X-Amz-Signature=315b34f4901e41cda0f965aaad5bfe0ca22d226f69e2738a4a657e29e51d3225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34GDEMN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDk9XP3MxWe3%2BAVQ7aUjicg2VYFJwbDT8vE3PuDFxabHAIhAIOcERfESRvJfMcFJag%2BNyUPviMHDZ9R4B%2BvZtxuTZINKv8DCDIQABoMNjM3NDIzMTgzODA1Igz%2B%2B27FvhBKAgoU2iEq3AN6GWTgEQIrpIalWUJ9cxMlzquNZJqTlPyCHV4rit40r%2B6vw3X7ekCKeT3J3Lh0%2FHB4kqsybwutE7NzraDZFSKpIL4cIZCgJcgiM5JAVqTQnKc%2F9EUuYe1suafc1sfRdZkJKx0wDOL3MFEadkgMtMXfHIZ5cR9o6mPXd3KsB%2B%2FK%2FRnsJhHTWj%2B5KuBit6F8g3tjW5yabnltifdFg3JakIsURktu9yUrfNRC1eBX5zuE8CWM%2BrTuGgpB1%2BI4IBjYyy47ha5h8OhmQqWaVeaKec6nWGwP6LlJ7XdbmEgxBGtgIizMmAGnWs%2BhKaQ%2FiCu87%2B4GnyMIKx3M61RfYLQVWBskseEZypsKaS0kC%2FyvnffPI35QbSlDORgaj6tzwLBudhtGYBu9T6PEufhMnDP%2FoWoljujiGwY%2F%2F8lwBjBXW8JLVp%2BrplFlKeRxMfkVm%2FuVrepCghvJwhu%2BQX8LSUlZxRs8D5jVcOF3FIUQR9r8lkgIcz%2BbuDYCtZRAY%2FlVt7GskM7Zkq4oLX2gHIFPzVmANwDMX5MEE52hzprPOUxwfuctpD2JmNjgZBYoY0M99zwg12i8w1bW0tP0OlOJJo8ckgs%2BFAjKhCZKMXHSja%2BerWhDOJFpW20dtnPaAreGhDCJ2YPNBjqkAXsMlNbDEjlWWJYi0urwVtwp8duDzwZ7spwu9TndWXaKrIYbBpHEvFFL%2BDJaSvhcq8AyR8xmBHjB7%2F2IsDZ%2F6uEj%2FFnSkAGoTwv80GraQ0g%2BveL4T34wLxmMSaB2TAqzDpiOrdUhLICqrf71Em01ksSFv09eZAZiLzAcvudHiyUtKK7NNKWxPhHLZ6AF4Z09ZOhJiuPKb3RYqKgunzoa6qudNRIQ&X-Amz-Signature=ad96be7131caacbe8b0e45d7e473286553c23a2552fee236997188327ba0fcaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
