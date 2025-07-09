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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQFAKVU%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR5qpmyGRiQZrryw24UdhJp84clqFMQnbzlUoCuEc%2B%2FwIgLaXrAZvWo%2BCV7Tzi95rwXzf3tt47WoDzGCOlcbqxwEsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMB4ZghVCX3qjlDscSrcA9qH7VNd72z89XN19u8bRt9wy8NAvruzugSjjjdeaehmqYrIc%2BxLfEvbfhlTzpS%2BqR6LRT4PTZ3cVQBCuHlDkLPS7YNieNhsKQNCxz71TrMloMofOtOTUCJhGcuAhRp5nVl2ZfJtgZ0SuBaVyDWn34SoLQgR0w6eONREoiKxWyCyH3ji9mdB%2BFgKY2uq9jOwi00bzAOUPgyJr7kmdyH0qEiLKIJqU46oWWKgPlZl4WDsDd4XoQGHgsrP6zfr%2FMZ6vYzfavg2SC%2FBFjL%2BGvC5SW%2BVOjNvcYQ53T5whdixNTyjl49Gp3EhKC7JtylOTReufqpCAzEG12My415GhGH%2F4wC9WdSJHK7kQBZoaJCrnD7sK5qA2%2BRHtzYm3ha8%2FCqwTQdBe4R6AQDLbutPAoV76k2pQKgrykYkBIbFJOd3sm%2BR8NMFc7NHv%2FWs2V1dGu3eGxQz5ZUI8FhdkRTSX4Zpfh8zSl1ZkurtALPZoczWzv19DXlCQ5VvOxhi6VOJs6Sof80UUfiP6rERT4DZkbsUztLXPUbYmMumhmjz7YAJmOq%2Fcp8vGzFS2mmgISyG5CSdoExzjqSyg0mnBoPHlCdVQCj0vbANaTdNM%2B27Wu9vEZSo6yVBo9I%2Batp8QQ8yMOKau8MGOqUB3sEjIcVYDMcZ02qgLttnPY7B4XWeNj6K00O5vpHsfWGMwXl7wi8wHOipdMaLplFU%2F9FHoh0qxiLVHo0I02HaqkYFGxwS27U1yrlg4a83xWaTi4bLp3XjKXUV8BbALnpoA2WzVuFrndaooPodNPKRruwXsjsJpkGKckdjM7THRcYjZPd2tYf%2B7A23P3yJsEuuXELLwtqP0BBhsVAJcVaAcR%2FbivY2&X-Amz-Signature=f697a68b3d84b274356e66ac90ad7fd5c4a51b71ebde96dd50d29b836dc0a74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ITFX4V3%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCq1bwNimVGo4MCm%2B9qo19DyoRVRWS7qIMEVHVO8NmygIgeNmxl6irAzh2HLLLkGWD9DdR2Qqph%2Fh91gC%2BOc3Y0l0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1B7QNtE4loYGAywSrcAwlsZlgdqBrF%2FULtxkro3FoPZdjZ1bua2lEkzCJe7CyVfaHkWfuZXU4iKmRElGKEHKg25eNKlhekvqv1N1uKx3PfDsMZcM4VJAV7Q%2FMAk5EltR77LKkpTVCOJDjQND0KNOpDc5hW3OGYbD44NruvPjhIa8d49B4wpNoyg9R%2BxegDhgGbRvUWbOtrdQzSV1XVxWRUw3WwqseTpVpeHNJQslEeCdhCSuD1dQakmNeCViJOLHWc8fJ1PG958gjNSwjHC0fuNvk64ISP3F%2BFTqqpTpL43ko8YiYmqVtPYzxC87HSvXg5%2FhMJYJ5V7MVCuZuJbJDLV9Jtf4E8CNVGMhDaCOT6%2BIrv873TvnSmJQxCNEmD3XsPWb8fkWsQWw64fbCeLEbwyZlIuk9thF8Djlp7jLlY37SG91V7Rk4lbqApIXC6EvAqViHD8yio9JoXXiQdjRomVtJ6tUxXoZxU97V7xPu%2Bbdt428qEO2ATbU7N8XIY7tyl1oOowJfiSmn0IUyJ1pnTlbefP6PFT0O7QLCdteb2pXA7Xh0oRqe3%2BhNmpdvAmIoOQNwUhm9tFlaa7mOF%2BznS%2BECuixEObEvtTwAqsLmePcQu%2BJ4H2pOpOa73tB0PtPJrWpnwAl77hvC%2BMPSau8MGOqUBjs60ecDaQsATelGbkJGpWf3MzdbFDXBXsBOkX7HFaaEe8Ib11kDi6fShGgfXjsUcrJnnTAwQX8H7LvzVFw2do%2FzlfCySahANYp%2BVwoH08BWjKbjxbbQ3voV8flJF0Au6LVGvM8ygx0bgndC7%2F0yLItLOP2a%2BCsSlT1yeIW%2F6bCPXk9%2FAQut2bYnXa%2FsKtOSPrDpT28uxG%2BWb4cAxGLijlpwqyG7w&X-Amz-Signature=290392e78fc7c3c9075482233ec52d71d547fce66ac8a5a3ba54d66b537cf6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
