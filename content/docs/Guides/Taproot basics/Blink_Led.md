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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SW66P2C%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv4n%2BE0Kxl3zv5ZPK0zA%2Bwf8r%2BY3HyGlS3iKUhS27YmAIgSVatje7kSGvStrKZjwMvm%2B%2Bm6osvZ1VLWmWojKYc8HQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMASox5MxhN%2B3xAeXircA8EHBj9GTI1bVt02HFmjhnhSl3pslIDwfgvx7gpNUXOA3wxT7jI233vYJmEzi2xpLmmuhizqt8Ufg%2FzTmDU8X7a0sS7AHQruKVy8Cka1CbcviJgSa39%2FVySXElRQdllTADpI0Xd%2BsMSMWz1yahd7nkPkhTiTv3Zwcn7AfvVfeZE0Xordz1nzdYIzjItj6R099LRKuIgxoxbmY155jKlmhclQdGeX%2BUlhs9zegeHmaNqiRD%2FHyctJl7o52SMjvZcrhyBWfuwfTc%2BPWc6dbbB8AwAFG9M4y%2FUWc0Z%2Brr%2BgrvKGdgDzYP5EiqUuqVUaZmUjABN0IQw4H%2F4%2FD%2FjW%2BJ8VfanFA1Fe%2BgW24BA4CFjgTA6J3Vkbr1aKKQzdMsyCVWo8u3Vl229bTgvj%2B46w4jJA4mJNSeMR0MMce4nJgwWKXke99NUHQDH3mAW%2F9y6rjPIku2p2VMRa11c4eWc29EVOP5KX1U14x7XV8prQTG9W7IxbWQhgL8PpzE9fWjR%2BlF%2FQaDdiq2IyrwRPs8gzNwdTxmsUiy5zi%2F6uxWgkuT6PV36tHbrRW2Sbw%2Fj7S37Wg5IFsWt2TLNfF2qsFeL0EGixx7ebb6fK6rpMZ9OI42AZRdqhudAFnJNKOs8A0tw8MIbS5sQGOqUBzqQ51Q0OWTNB1d%2FIAq6LggoxCqwLe%2FbvKgieH7WT9WbTHGyniBBzc6iPlYBZjOXbrbmG1zeW4B5e3%2FR3VXTRcHX7rsE%2BmlNDjhdWJBe8%2BKlloguUwmD%2B2Sx0F8ZhmcxGrEaICRmxtMbkLtq9Nt11AYlDGjpE3gB5kdtdi8ojlvkPVaQ%2BdyL6Mim%2FskDjKGemij7CPki9t0FbgeVxd%2BlPNtUwcP05&X-Amz-Signature=ff583f86174ac231abd36026d26843ab51bd65c9f595c03545700fed5f82a9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSODIKX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHGMTrINbD1NrmwhamozSy7%2BX051%2F1hqzZW%2BvfTdzRhgIhALI16CNLXxtJ2xCx%2Fmtzf8UfCTEk%2BUb1hUvoE3H3HHnXKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE0mPaJc4Zu0XhiHkq3AML%2FyQVh3k%2FGCeZ%2Bhtydqsrlk5cKZ2d6s1TI5duiV4EM02To9%2Fi%2FvuN80jQgonuhCgJf%2FxoQ1wKjPM4pMWgGr4gv4IjZcIJXhTVUiHbA43FEreYkae%2Bs%2FgoZn0GRESxdgpEEDhccn9CZLeRJM3Vjp1D4k2h0X2Pr4Iy8eS1Ri9sbvA9gAKd1Imx6w2zkfINjKCylu2EBPv5JHb4HhuFwJcE9vg3Sk%2BCO48Ws%2Bjes8MUWKLjXlaQX%2B60xXjI5Jtu%2B8cHyO%2B%2F2wCtJ48ScDsd1Q1PYOAcrPv%2FpjLtyTW1peNsLP61ewy9RxGgi8ws%2BgCzx4wX3%2BuwQrrIt8YaCNU2n0YtVEvm2LYUPdQRZDNNKRyb39EEqKX%2FBa7YN0UwJWazq4fGBJtEaGHnkqJGe3G8EPbZKmPo39N0e%2FpeRE10FOnEA9GH0BV1wIAjPWtKfxWLVqumnjfIpW%2BKFlc620m%2FibFuiDJi7wnDPgHEdrS6iBYoRAZpG5btX2R%2BiuWwu4DVMKWA7qGlSQ9W%2BzD%2BdPpVaZHbWiwPp0mfIDrVr7xLfoW7TDVGBmey2ws0uRLK2mqGud%2FLcFSDjaWLceeBQbstsjXH6Axds3hLpPsnSAlexxUlrtfSZloivevYydQxCDDf0ebEBjqkARy7SrwVXpSzshwP7hgj0d7YstZE58xddQHhlLkkJSItfJdF6Qb2z%2B6kKKSkbcbYNG444TBcE8kM8JQGS0iQeEtlMAJ%2BFcWelxKz2hrnhvY7UYvqrZ58vdCfKNR7aLtYTn165Nh2PGvXIIUxwPLd430QAWVrsODo4vd8570iMGrgnVwXpq4vX6bjvEb%2BuEwyMgTLfkmxXoU%2FWWxh3w8JfjCMoHDR&X-Amz-Signature=d122c67c61322c2e153c0c0ddd02826f6ac31b90b88b6057e091c491762c60b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
