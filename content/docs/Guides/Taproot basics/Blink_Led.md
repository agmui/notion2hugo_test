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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKKGAKUL%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDfSAMoEwrwHbeUuGqrptOgOzLCynOD8QdxOVfyh%2BuTFgIhAKt0Rh3NnGmYmvUSw3LPwifS0Ji7hBZCgFSXsjNyvMdWKv8DCDsQABoMNjM3NDIzMTgzODA1Igx6Z9Wus0cqnD9R2g0q3AOGWycleE8NVpv7rMs%2FZPd1vzo%2FSDzH1Mt38utWMwQFbz7lV2l1%2Frl44a3sSfI4vL3Dw8DjoNv4YNKpI9bh9DMgalm1RLl42F0NV%2B%2FP6uJLh3b6BGCXArBA8DlevUMt1IHInguTe9XJz8T6MhQn96FHjzEVV%2F0QJrKNfQ5SUgGTZkx8%2FzY7HhOOnh2kHdSiZfCZKib10E2hlhkFvjwGj0TG9u4NbHMD3vWf2TiJL%2FEL0S1sbQqpNY0u2cSShAdLu%2FCLmryKa8himGItmnfawvdpAb5aOK8W5V7uEFVc%2F4ySx4J%2BVS2SUsQY%2B8Tb8c2doF%2BcNeCrctPuFzxkXVwIncGIGeuR1ovOZZEzObmL516IqixWvplSvrsNShMkYoBdT8IViwj9upvxA9QkfYQUGV7BuPXEg9tUN%2BZx6RJGSDNkCQ%2FBeFBw4ILUhIqDCkSEqll%2B0by7WVICzaVhvksFrdharLjlR7xU8ZiyLxPv5vvXzAlYfWiDJ37wXjs4mPTGT11K2nU2Cb05N8wpe4q7iA5unJSjZviBTrBiiD33JQl1oO8MVJEdjJphMBdGYC6%2FkrzE1F%2B8HoLZmBRnmUQg7sR2GQdOtOsLv5fu1icBs%2BPx1qI7sO6D7AGiWUB7UzDsnbjRBjqkAeRJPkr6z%2BRThIT258Cy8MmcsXn1moanfAXNXMys6UiVclAvh2Ev2qDrzAF87UlTVnm2etbSEEZU3XCv%2BnDJdDxuCN68B5%2FySbHxMpunLmBUrROWUQc5uMQLIGmhOcdE1hhcuh4xm%2FaUE%2FAx0NvB0sTT3XrkgZfhgDIGMGpNbnWTrHsVIGbB%2B1uMsdU8ws6c%2B%2Bk5Jj5FQOpaM9%2FPMmB3tTdqYGkN&X-Amz-Signature=3ba88389abdb4e1d805d91ed135547bf371bfea13722c9e8bc5a1721eee060f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKNMRGF%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCc5CSbN5RHRDrNtMd9oVsljhBKEs5bQ%2Fy4WRg05L0F8AIhAIhLDZlKjqnHjH74YgecA%2Bm9aa8M%2FYHrTmFeMA0oun8YKv8DCDsQABoMNjM3NDIzMTgzODA1IgzcZBWzlL1Z4jq0oUAq3APkItTNMdbU0SynH%2Btd3%2B0RgAEDkTSrFINzY6hcH9ZC87JVZk%2FyDyBY2Xk7%2FQNViMSs8aKXAGGTRY94wXEIOAe3RUMwPtcDKa%2BZ5gyWxA4A5WjZVHaY4zru8fudBQH0nOK2A09oRBKFUao8X4yzee9JrYd%2B7Yhjz%2FX1d5OyxC19QhOC6MCo0SZQek6zg857hejiotPwF3wNFR8P1lTqtd10E7jGzGZ3y6jtFRW8vSTTQypsr598SVTvAQHDrW8lEg9kiwiu7S9FJ1MRZ%2Bo4QU0CxrcoWA3n1CjllBmZxOUi7oMCyIviWBmBf6W22ksT6BUY1NeqaDpQ3HTCS7DIZ4HsH%2Fck4iBxOOgAbjfkJqtsQbBhJmueg%2B9owtjbET25k%2FeQ9bBkPkAUC6vG%2F6txEHlASt1NAShJHvuBZyUHi1sz8Ye8FeX7bvs7aOEESYH3Camx4uV1G0G9QaDBuq8X2qY3MJJVWPcldPzo3r1tws4SiEpwWgeQs8xE%2BsTLYNrqv14goHYSqc8D5fOwnJlks4ys2Ie5y40g%2FeflibrrEzhBh9nm%2Bgf50nyiu%2BJg42rHnx%2Fal3knxhU%2BAv6wi0KkVUjm5IabpvU5Ur4Y%2FktmFjtk%2BHnAiP3wnd%2FZV9TWuDDFm7jRBjqkAQBs5X1SCe2rAGvldz0H34wH9Z2XTmkyEOChV2TRiTzjvjNBrVwVuQDP%2BjALqbZ1wSD8K4ybumnGps7oFxPc1rZqtRaz%2FZVlTCZYRp0LdIBa8I99lsIfcKVZt6h7ToasZVB1THF1jYadi9H7RSQ3%2FmrKKa17jo0Flf5TeDyejoyCCkg4bO8CFOxMUAH8ZkqtXDKN4vHaaZBng2tBkehcHfc%2BHoPL&X-Amz-Signature=35711948be0658a2f9a7d6f1a8d572ace136122e6c90ca9180652a8362f70063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
