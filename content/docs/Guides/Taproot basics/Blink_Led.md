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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKEGHIV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiQFkX47gsr2CEncBfHeV6OC0Ky40r8X%2FK422pp0muAwIhAIzgt5ZPQhGgE1aUrz2Rs4EhQkJ7EzA4VrrvQosi5aETKv8DCHYQABoMNjM3NDIzMTgzODA1IgySmgtjOfU8Kjf%2FXy8q3APnQrkX77EjcjfXSlT3q4c2MzhwQhyqVwLE9Ov77JJxibNKAomdjw%2Fzdy6y3jiUKvBDq0EBV44UoAufRhSrbz%2FQSwEM3Ymma0pbkNZLekNUfB8i9KKfGw4k0bIM71jRlxUbRU7Ox8wzmnLcqxgf8rJlUBOplGfqt2l1E4i3IC2YPPVOJod2SiGKa%2Be0EQrXsHWUC1lWWpQ3G2meky4pTw%2BiZs%2BPSsXTzgtPHa4aWd4unnGSw6W2kE7U0VDU0wyDz3Cs2z5L4P3as3iloexuP8wzuJvF5jcPk%2FI%2FxMpSJxRU0DcjVeHI0rFcs9Aga%2FfTs%2FZh4bVjTRLylK0w74FnoUMa%2BkhbW6OJVtI%2BkEx0xMeN0E9z34uhxpamsbjt93JldRxoxLJdBsO%2Bxwq%2ByTgqgkH6xHlMp8n4KY7zgHihjx68AOFo0SAuCPoXUFAHj%2Fi2inmoqaNcE04xzzsvI69InpCV7PtxTIjGkGAmKnN8iJegxvyZgBg0HZ7YZoKDrxNTEqYW5MmJfvg0rWEi%2F14GVBnJaD%2BJxudZ7Ve5hafT80YVUYNh6gadqq3zAc1%2F05F1lqe0hqZZBsUCWedGwWByDTtILZdMM5HmIaKs8EpWgDm7cgJfvW6OlwInATm9WzCMyvLABjqkAeuy2jme6v8HyGOwJbWYqD7w%2FLqemaexGNzquwvSeyQbqxvXJyeIC%2B8ZCoe42v8RAUM8HF%2BByXhPnndPVod273wEUNuIxxmElDNixtQ%2FYuAdrL7FyHosqLUSo1zK%2B3dwNNuLcoVHiKpRSGOxza%2Bgvjrd6wXKRZVlzqmYP10HdvCkQaptCVhMndSSNvdcMa%2FNrwYcaPMzbpn%2BGxMPO4e1Uf2C1iSQ&X-Amz-Signature=5b0365c5b27ff4644d2bc723f9b2f02a5b31ae0170ef4e1f9aebd6eb00058b79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPAZR3WQ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFibJUb7ZM7rJ28MUkiSjeuUML51ZvYBZYfZK%2FJyU1tvAiBB4E2lbfIJ6%2FvYcXrSLROpmcEFwpWGNN1zA8emhVYMfCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMKqt1DI9CH9b8w0wKKtwDRGrL6112yB7R7mqRcwp7BbZvPiYoRCvGY5atVyEpI8p9uAZ8g%2BCEbD7RHhvNKfHuWfcLQbZAw8R4iYJxBh7BnVE5AJqu4aWpL4iN1gw156fDEgcf8vV06DftfuxQHfn9G64j0z8cKDCThyLlAzKMV4M1IutvH2CKZybitNBN6ELgZzRBA59F0SAiQAuSm02t9l3TaNkGH5AJjI8ZgFzu14fz3zuHqtC1LpyrbwgKoYnEwTQw1tXmiwINQOo0RUc%2BnuNuJqSXaweeZa3Ei6RL%2B14G8YPoB9mLl7b6htnc3MnwyUPy4HCkXA0xdu1JrzeQ1WSH4RYt%2F6Sr9iTT7zzxW%2FSN82UDvhWKkIY4YPatdCqW%2Fzii6RcBmKOupPd2UteEOqb2%2B3pnjyIInnf4tFQDes3Dk0vYLhCNXOZ9%2FPokwXRedwPP4hmlfRpBSHWVKPjARx3m3ULkgDOgd6MzzmzPyrBzQduOS4N9Lr%2F80nOUH6t44p1Clyqec714SoebUTKAqtgdeL4I5ReiaX7aPJ1Z2BquzAK3w2A4smO57z2lXQWU%2Bdw52p6Ldqf25AStZIvWRb8y4gcNMTM%2Fj7PcUEQuC96M2gBcG3MvzX9cXUWJJpzRtpxYYs6toSmm1YQwq8rywAY6pgFtPxI0G2ocSvZudB3GYxl53Tx6xdpHS37o8DgERRgmi9N7rGcdQYwYyKAcr22C1BG0PswIFhC1AestsDYb0jzWtz3G12OzRvtAjDXWB4ltso5YHv4v3zwtOSVO1BEGHXGkoLIvPjlsQHMn2uWf4cOZzvhgriE%2BLeLXuRYZi55CHYFdpR6Z5%2FQaPhp%2FsHLCWkrLMKsNNx46l323WIyZdGWruMNGjDlk&X-Amz-Signature=c7cd2317eae99430837341bd3290a44970b0e805aff04d9c3c7631a3d5eab47d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
