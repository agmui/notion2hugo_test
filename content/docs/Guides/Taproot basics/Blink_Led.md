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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWEEG4L%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu%2FdORIGqK5QqUAra8vDmAjbcUYHmSRPcp96fHLDlukAiBuKOr15By7kM31UHnzKILJ9nzybfBnPOfJuRWWtWYeUSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1fjycLpm5PMwkrBBKtwDTGjODY4YTMrhQzco%2Bk8igNBjz94sGu1GvimlH0hYX4aCe%2FUGNjuDyzInvQXH3bL75DtZ2z1J9%2F%2B174USKegFwIQgJ1HSzs1%2FzzfrKeGYz3ugG9E9k54IHORCU9KlIPDJu%2BaYiwZuBwQcYSrtUX9RnJia2jr5HG1ay6vYj4xN5mjTHyDSdeYjaZBBLtdNeGjSC8YDeJ2%2BdvSY5daGZeRjUwHAyxBS265g0fJdbfwV0fZ0v9WxGMAAqyvuUXaf%2FqcgZkDa3XdRA1wJN4AuDUC5e341Ibz9WA1itetJ0vFoO9xd3Cp4%2FXEdlUSK%2BVLMgddvbu%2BQhQpPw6rn1DXbNYrhovWx274OkZLdMMVQ5ZmLfP4vm%2B%2FWWmXgj7GDHGxRblHmSbRV0n3pejsoax%2FZiiHbuuXF6OkIGR3N%2FexzQ1VIy%2BqY4Ia1g%2F09%2Bo9%2FyqhWj37Rpq6K4cIFiDWrMDtxyB7hzoR28TlhlB2r5RBwebu7EN%2B8ySemdKdTZcWkMAbs8rHQr88LKgZJnvCSBPf0388uyTF9mK6Hcs9JarE7u3y4W2Ssr3igR3feQ88zp%2F%2FaYGhtgY58HIjVgDiIeHX3Ki9j1CyFh93CZXPSRaKJIbB0NW%2BBNxVuNzu0w7SauSowisyNwwY6pgHJTuUiMFQYd%2BCK6EIIAcA2I7jqeAwTn0ByqRkOaz1Yqiul42rfGWdQP0vFetdC58m79fkkdX30qfzvbyOh9X50O%2BMC36sxBJ6VyduheOPNsANgSavQo1tMB1tJeJi%2BbuGjReqkQQG%2BH9FP0iQmfzBk%2FqZ%2F%2FFNMCyowxN7phxYf13yutyTSyGnzJpFbFI25bojOWrG2Cz24SkTBKiKkQyaGSPvS0hO%2B&X-Amz-Signature=a8dd0056e1d3b2f791f9831d0566900f9ca467b807100a3bbeb84a28dfbdee6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5G6CIQC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtwLCXHzHvxYWdXciMHqhSS1Ux5h3i8k9cafIUUT%2FXygIgM3GDWsq2CidCZO6154Q9FTSZ9f9cJMEYhbsQYEaHbvYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNv30XpeoDvoDA3jZSrcA%2FVjZhJGqon220sORLkpg2e3VQvOomshdVtfXiBdC7PYiWj6MWUpYdRP4UAIVQkZXRWRd%2BRgUyD6slOwgIRQubIYN0u2Sr5VMi3STzcdUfV9cYm%2Blc5Tf9aD8BxiSvbd8VboHDtCOta2g1HAUfzUkHepC9p%2FfawHclKiBp5nJSXUNGg%2BSQn1rFfhrkn2sIs6CdQEo1ic01L%2FwCQcC3ukX7nARuIxUXQhvtD51gycKBsqI7VfpI8AsZHpOCuZKGPccChhusQgRujwnGjGbaBZdB5eJlOwHmy6kRqbwV1GXFqnAnkV%2FvI3Wlv39iCZ2SHIOk0b4mFxiUXItCeiRzURT2CZAoH9QuXv8UBi9LHL79Fi%2Fkvh%2Bf0jwh%2Btd%2FZ7qmh%2BNDXzpKYRwDn8E7kVsX4FnC0C52H827XuBTnHLOuy3uprYSBEIqyV1AIqbZwwo4UFlgFg6CnoJ%2BYGuz5qPNUknnLCcqqQVW6fHerQL0nY2Zd75UjazWtnHusDcB6CYwFwY7ex2%2FAkox4cIjU9ldxlAgoscYRkeWMvfaUr27VFAQ%2BzW6zBhACM44YOHqkvI8L2LVjzZVIYfYxjPO2yobGHsKwAMIPRggDXLcTA5ZaZy2vLpw3ebW3UqR3jklq2MMfLjcMGOqUBiFi4WLKQm%2Bu241L39HTgdcRJw93knbBufWATJOrw%2F90aZ5x21VFbaTZIHp%2F5CuSuq1q668DBCY6DdL%2Bh0ea%2F3TypmqoSik6WN4AMBuBiDuSwkHdPDjANX5NtsiLWstxW66LphTpQPXAg0TeFdFewNoUeIHrE3lgiLBkmRTCzYo1jK2ZMFer5wNE%2BuKvqqIv6yBScCoFv4IThcvMgX20rTHXjA%2Bx4&X-Amz-Signature=a5ebaa943d4cec405a7b3dad61329c5c815c136b18138119dd841bb9560725eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
