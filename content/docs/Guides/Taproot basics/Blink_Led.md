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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KYX5TEM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDXZuMcI3xQTZl0F8Uocazm2k4j85kBEoh4epX4rDDyrAIgGvEiBR2zttbkKFsUMSZ5hrvk%2BDpOcb0T00Z8qLtgODsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMsFwKokH5Amem0XkyrcA0mrjezaa%2BZjBQHUKYn5CqcW5AlEif6nQOWNHezUjGiUhFmjt0D8UKr4NCG1fFaT1VfOu9CigkfVtEmtFwigwDbK5lXk33ZjNMVtGSsWhPawZdXgrnEKz89uZU%2BLUdxDYP%2FGG64y9UrixPqMf6c%2BVK4lmVxYl1h5eqUXaR5cyMdwgADClQ%2BdsMzhuDpQnerC9bafCNuSlPM7dEej8ppZCmnfcZxiqnWxwLtTobNRv0lNYfl%2BAGDBlTh8bPDOlsiNu5mqgKf8R2Ao846xuFq3%2BaGQuvKg5UyqbWbhxZ3s0sLiBBc5TSi8P3yp5AyLjA6Ahz5H0o6LA4nkiPkie04T5QYIaLNJKX8vmqdv%2B8Za%2FPbuuaf2Da%2FhT8Rr92WiXpp97HE0Hnq2sneL3JuATHxWpGO8Us%2FhE36hvYVQBKnHg2fXqFZDF1tpiW4ICGTcOCZnG9wSVDMWOY%2Fr677FUjVeTIwl%2FMaS2%2BYlqPHjwv9raAHcbYwV5QGEo5DByvjRA%2BZ6%2FK6kmVf2pfR0Z1%2FqImlq3j1YQhzHY2EWhXMYrkm%2BkbYECzawJUoYYBft3Q2Uw9qd8qUumkMgK%2FUcnr1UZYCUrl9B%2FEQdwZ0WPFTihF5rGbQ7hY%2FsnkPtkN%2FZH5d%2BMPStzcQGOqUBj4Ekvsh2rGIYjb69KvPsqsPMWNXvA%2FdolwdPaXBM9%2BuvBdeSfuR5%2Fb32hzGWoMKaJcAARWeRihRV5p8c5zRrx%2FLxSFxOaQ%2BcMqqZJUeI7x%2BmULWMLdaTbcV6iEYf4bauYVDXpf%2BvVgPY3tZs9SLFc9t%2BmeVjD89%2FRM6lGcRmqxJhkQzMZRKPFoheYWflPcX66t4072TlNjqYLSaz%2Bu4PhbOMTc5R&X-Amz-Signature=b447033e3a441fc7d51f1cae765efaa8b7683e22842aa593b66437bcefccf0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVTKUTQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDSwfsnc241VOpNGqVDt8JKkHBB3X4gxZeTlkddLr2V7wIhAJAm91oZlIJyWpUH4e7fQT5qzP740NIBAhoWrYlKhNU0Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwvSVHaBDaR1yay76gq3ANHdO%2BpY3qHNFN9AlEkTV8ac2steSX3u9Io2STiBXP8zQZd0%2FJDczY8xQNA3jSpcbrd2x3jB3FZ9%2FI5cYxtzCODoBxe0WBF5xL5kIdLvEMqw4pAtbrl0iedYeOw8JfshMP3%2BKEs%2BlC6njso%2B4Dk5NUCSr0RvYmsxwvsglwdUgncClU8zTw9v1SOSkxS%2F3h1nv9GetOc8Rw5Xt3s3EANL7vDUpNHC7ktOkJblV%2B6P3xpMVnOKGWsg2zPgytIwD%2BBfI8affDTgS465kpJVfCMA8wL%2FcGTpcb6jFgnrRx8%2BxP3FZiVVaaduDtdw0tQsWH5iAvJkw7iFZyFa%2F0hHiUH1DyQ48%2ByZBV6wGqV8n0gWmsYtHQJgjVigkSsWUNC3XNUYWfb%2B8avIrPlVe%2B4oF%2F3TT6v0SSTh%2F4%2BX8irAbGtlCnkYF4qMou762c6HWLNLB8p9BOd1kRIK33YYBhDZboWfkEcQNNejA%2F4V86cShWMDa66j061osAPjcWIWPClSCRkk9LUpcYdwOYP49QKR18EihBfugM0a9LvdQJqRSakhoaqJ3n6rVwHTDgufstmn%2Fw7Sk4QN%2FBUy99e63DljKcBp3FK%2BFtdEPbF%2FS3%2BIFsGICm%2FojmdjmHxNZZL0gytozD0rc3EBjqkAUVZZkNdiWxzAhCnu4plM%2B0w7%2BXNBzeddheND%2FDveUzP3Om7KKxpL55VvqLaqscvANQYU90GElhluVUBe47OcaeoLD%2FpLef3nlACsYhjXhXLiW9oB7beusZmPFruDBCN9j8Oq%2FpqESz8zQEFky3w5zGc1PFF%2F%2FhzW3QssVboTrlpQi7sRVyTTSfCj9%2F7sRoRMsMc3cX%2FUHBgTjZisaG5EaRlsPVL&X-Amz-Signature=c6fc91bef992c5f81ee0b15b5f655748c542eca4efed55b6bec18e424bf002ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
