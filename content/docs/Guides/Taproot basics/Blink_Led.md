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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDG26CI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8CfxIrs0e%2B%2Bom%2FF0XBqyZ7jdG8lUnA3qMn%2FOSucvRTQIgZ2CUXZL3F8X9CesvwY047LjDMpEknsTokWyI24SxlPwq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFYBATnD%2FB89qqQMjCrcA9RCYBghfgFEa%2FxrtsRsIopqOVZ5lm7AW1QaJuAxv6E9381QcD1GsnYAR3z2AgxC2LZk4hl%2FtcwXLB71E5fG8raU18Yn%2FWAR8NnRkJnm22hsvxB9ZCObhHhHpMcjOackI5M7QTuvLK3i2oMDCVZoJ2aAtnw4laN9U45glxJ2zw6oBZFC3hWW0YdrTsJOZzAV%2F6EQ%2BLhXwsbs7MPMmqJFR%2F5ebnKKOkL79gP43xbYRT%2BMrvSFrs6EzTrRaQOkV%2FXkIADOHgWTbJVqpmuQMc56qMjDVMGD1yOZg13YmhXLzs4hQYYi9y%2FxlUqboBZF2MggtylznywvGMTotde6ZOFLNq0ds6va8NaEeh%2BcBv%2Bd5Mqz8XT0PCtjTKoARfQgsV%2Frd%2B%2B9hJhYndGoL5tnswY8KhlXrfTvxT0L9r6G5OvWJK6fiHKP0eK8JsyYB2xS9vqBsR2UMFlVdf%2FIlWH%2BktdrceWopXNjZdIA0mzFY07PMQKZlzQpmEmtmm1FYsQTL4DNZEGCdNkTnKWCKyWcRbeyI3HlfvRKiehVGg9NUnW4wfgD04VmBwM82ibbrs3WAsqIqvqY44B%2Bd0Fa4rZLmix35JWlsEdJUnoVdoIyf3zZC91tPBC7jmokXgAdWdAzMIfBjsIGOqUBivkMb8Iwe5rtH2JwmWU6zn0jM%2BSTGj9VvgrSctPepVyyqiR5C3AYedjVVXX6an0kKyunPbMaK%2BBcg9B%2FgVHK03FtQA8adkWkqEyRPeKC11HzpafLUobGkhOtUYCm7R%2FfcccpjfCFiH3bFyDGj3alqTh58Jz5gu4V%2F0UaQO03FCz%2B68WEy%2BxjK2zwBVjlSWM%2F7sDt4QXO26aSq3VnQ%2FsfRXHIy7jl&X-Amz-Signature=1d516e8db6a5d2682edd8343d1139320613c3e956541ba538a88e2ac70d4d0ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJ7D4CP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjJZJWhA7G%2FOgPVQFrSKvzw0NeuAilsphQzCwt4xoxdQIhAMzZ0VoF43%2BlUQkfVA8gEMY9wctcBs2g39%2FxPCpWa4iHKv8DCGsQABoMNjM3NDIzMTgzODA1Igz7n2ur8VvMLj53YMsq3ANgi9gOxi9T55DhhR1A7Ma%2BT5t2Jgrzo2z4fGZM8PitrNeGQ9iOJ9zlsXzuFVYLliAcMPP0VTsTCtPu5CZUBlzbgtlrUkaQN0mFRYxF8%2Bj0HgprmfqBMQxA8Yiu4kTvrNQrmtSfKg1uT10O%2BYD0QxHAaF%2BMD0XjQJRnFDozCNPEhA9D9omx3jy9KeRmIN9ZXKrcvJzGDN7bx%2FpZXYSgX5KznC0G16gsV%2F6GhFnk4K%2Fqs5LnYe8Wnwo5wKn6Zw4Qg85B0lc6rHTQn7L7vLaC7VuUqqdIWmD2jIsLpjoX0x1YWCW0G7nhcWdP0FsgYGAR3ikQ5tHtSvNPeQPnQ0iy2%2FNY1Doj41C%2FhjoRMwZR%2FN%2B7EIPxyD9NOeoHFyIAvLdHyfsW8puz6mKYErM0p0CZMPFQ6qezKl4HSp27rCahYHiKaZ4VEm5F5XLkHlkLKuqf8kklOb2yr%2FiRhOMms%2FGbntp5tynQw9RLJWRbgPo5G71BTj%2B6LyB8zY5i%2B14RPyYFA0CKFMs1LVfsSRSLW7c7FJ0vnGxaXLeHB6AWQCLakJyteDpBlTmC670YZqcKs%2BVyvWdAsrSvQjdQHA8OO4mCpYUwJe%2F9cRABW3WVC8TOeFJ495%2BdPibwnUMT8pEN6TC5wI7CBjqkAcL9m%2F7gNhUyq7NohYDLjqDGT17FWm2QWYpJz93MWuv8nKn3z0qych7XZx8Ln3KPQxpWyko80qei3el7kpC0Cbp8YNuDEUHwGIoGFXnYdMg8Miu8O0bo1F%2Fjp12y5hThq9a32fH0fp9GewIAj2ksxnihUaGfDCcRM%2FLrB%2BrRPDGdy%2B87tlDiHsYVdUk%2Fg%2BfoQPUlbRoZDFXYQ%2BQG3fHViZgR0hzI&X-Amz-Signature=71acba5b5b8fbbf013f1289b7704849a029ed28ab5603e4f9df7af075ded7393&X-Amz-SignedHeaders=host&x-id=GetObject)

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
