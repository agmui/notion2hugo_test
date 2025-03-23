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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4HM3MF%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCcW2p1ab2M5UaSumE2v%2FwqUXoADwqfIxLOCeP8hT83RwIgZV8IRfKCddmk8Hc7I3EP2%2BnSpEIkJ%2FgT%2FrVYytMMGjMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyKmF%2FHrcF5nzze2SrcA%2FjFjxqip3b22IhBniV8V%2BEMmgcyKrCwe%2B543cI9u7NSYJPAJqzUDjRZyJYNvITwi94AQt83IEC%2BD2s%2FKZcTRgS6doEMbR6rEfer9nWF9XoCXDVN2weMOHw55vd3De1qb489luPSbY8AqtGEgBqGXVqcC2%2FYldj%2BtxkxiVT60n%2FcFDHimKh%2F8kDGplBCnah1RchdSwiBelm3vtyVnUx%2FQu9kcpO%2BWJMqqqr1xhaWSTu5fgOyUmb2K%2BWIIZu%2BcJwJsaZ1Oh4zZnEQ0JgEOXlBtv4%2FNzPI%2FUjgKXSCOPCos5ded%2B8Re3h4VAauNeu2fagc1mB70aw%2F%2FCdezrg%2BGqHDxgg3TskmPitm%2FzVaGUGTnkmVEVFRTVXZ%2FAHaNPuTOaQwF46fu7BOdaPTlkheHZBAymT4f2ge9gz1McMkloeI8GXLhaRoTDJeq1X%2BfhMhdWYos3VlemJvgJKBAaAV6B9%2F5c9yuGkT44gEQi1FHvhgufCBLMo%2B6cXVl6gc5UDsPK%2FFB%2BRabY05Hp2gT79JfjNrL8fPZWmBCt4u6xDr%2F5rryv27K5jd8L87cFOnJkYA2TcAy%2FHZiZp2vTXNsVKmXuke3OFFVzc%2BFq2THjUwwHw3A7jt9eiXDJbsxsI7KlnnMKjj%2Fb4GOqUBlsQV4dYj8QVq3wQTRNDWlYu%2Btasr%2FZEaWNEIcmMWpb2z4CZOt2DgqNKG8xo2uZJOHbu1lMfQ5%2Fi%2FrhHVE%2F%2B6yMvf18ofKhmK4XcZD7hUApuzCFi8W4xPWoqpeNMs7EY8NxrTvFPUcnKBaK3njBEpcPXGtTWto3uxsF0bt1qHKx0ZVUMEBDqbYMpgqWMkn0kRIfln7KL3cRNJDrDXsOYY5MA4doWZ&X-Amz-Signature=17b46348474b7bae3c3a26233160f1d6dfc6b93bfe5b7c8561bcd1f3a2826650&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCGMAYX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHnB0InmDck1%2BsIGoeq9apnpm6Eh8Krw7OY5KOwecFa%2BAiBRCZnZpQWlCWkvSscXbWzSyOL4NNhk2fAZYVs%2BamwTayqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMloRzrWj2y1Ra0S2sKtwDgA8lKmOzHrpQIDmzZl8t%2FsPEZD%2FmL7g1AuOYj4WWfPh07qKeVr0hBsX27OWZWxozulIxT5tvkEl%2Fxh7wkR6eHjb4F9MWxx5p5Pq5Jvn6hOljuLrTARtBRNXn1vWvsmbZOMm1THHt2dvSPTdVKtFDafoXvESh4Q2Ea%2FtkXDfsjgIedRjoD0G15ML%2Fo2bReMbFM2%2BlFyjXFFQS3KT0n4ejc%2B947g62rO%2FrBRksZSf11o2DbsLeGZtcf8yomXs5%2Fj0LtZZWs9jhQe%2Bz1l%2BgHyavFzOcrBvtlQMCN72azjYEmt4k03lWNlJGt1EYW58MfD9xsu6kfd6lB%2BcP0T0%2BdrSkfyPkrpv%2Fl7%2BRI72vB7Qy3rXYU0BNEitud3iruTig7EQ57IfGHgBDpIWz25TbUNl%2FrCtuHiRnb5z0%2BeJy7NSXAW3EmZOAd02VXUEeWBAMR%2FH63SJXHU%2Fg5Qqk9991owKgT9qP%2BWci6Erli%2Be6VOFLIXEeR7NzHUWOOXB3uSFB5coLX7gizBl4o3ZETL8EshXYSRey6keD7TFVSij0sImdCDQCZHxShCYaIlmtuALnMGnnZAG%2FkDAFB2eDjjdA9XfoKIxaHU9XiNhOsU0P9bDyqCK6X4opzM7U%2FJN6iBUwrOP9vgY6pgGTxvJ8zVbEwM%2BtjToGtHIliXxuiNrqwJs6ZDTQN7eP%2F2i36JmIiwvUEvhDOrEvlC3dU4f5ET%2FTV%2BraBOGdcTJFaIGYqsKWv20TSWuNCQsWiosXaQVHNyF71X3nWNoK8HfCCAYmlfKdeRkB7SYS6jiWQhQhb6U4z9yYwRSTnKO8exzhoHboaHJFtumroiInYncWagsZXeootTd8nXcnJsIC%2FZrzhSmF&X-Amz-Signature=f18b65938e5d3f9837f6199da4b7131b2638375f26632fc8b98a0adbfb592258&X-Amz-SignedHeaders=host&x-id=GetObject)

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
