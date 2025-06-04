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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGZVGU2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHfqxth8tmspl8PlpYjSPFf6QPam2O1cJE0xUw%2B42%2B9fAiEAgmSfwinj7Z0LjFvzkDItHWtT6uSQv%2FLqqEgLv58XCU4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKQ2fe2pMi5HtNOVoircA4fmlhdoL29ddzwIEKH4Hs8TVtctJq8qkYhueNW7j6JW2vd14I8mWoGd1QzzX3Gp1MyWBRfR5w3nLZPlwA7lnmmSo1foKq48dSoBvFAE741mLMVgk2vLhk6DHnx7uUCOdTF0tyZzGc%2B82jXOtQanNS%2F3nrcPNXp2irOr0NFhWRBgStKn6GGEu%2BOx42kaBlayLGptgAx7TEqCP0Az6122jz%2BE9Hl944yTY4oKQovYoZzphJhChP%2FamVkWeml655eMBW9bzKZqWARSZL9%2FiOUIDaYVulvfoVZ2ugpSlm8FXBiEmMLK%2FFPdndR%2BL%2BLIOvw%2BP14XNMgCoYZ9wLYE9zPZKjJ2JZSIcpiEGxYRdm6yIv4tSMO%2FWs2i7HMBL6GMa575UEy5OblnAkq5Gd3UYiA5YVm4hNzo9acGuAGBiwRJDINvvUOUvx9HAUvL5N7RGAlScbgBg9M14ePHdBfnvXNmt8TcAgbNs5a2OY2uR0hzv68jv5674npDgD0Gkm08kzYJstywgy%2BTQX%2FwVW9Z2PB8St9ZopBu2ASsQqVM%2FYW2ytsaQjuwKpOv0c4xE2N5B%2B9Is6DA0uhEgVwdkBkNVytkfnKtukGHiHyNL3pz7tL8BlJlFonAoESiwD5H62OkMJeFg8IGOqUB7HQcAvWlo9zB2naFeUhLseb4wiEvUHla%2B1eU%2F5C%2F0nYXSB3bYhlFJrA9h79%2B28Y%2B1f054FBC%2BD98wU3LwG%2B3TuqMt9H7FjkHob6NMZ%2Fxj%2Fbg3x1sOK7eMCr%2BKt1PR9xbCReZFmC8acVnl4Kv3QA9GBnSvCP0aHlQA2FVMjuqyy2s1qgAtLbNHVWejRYFP5Y0erbQbMBMBesmQHCAZFGgmJ6sSJ4s&X-Amz-Signature=145f3e346444ff65fef4731133d41ea984181b983a4f3d1354b3287be197cd42&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QLEV5X%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCID4D1cfW06FyTMM5spMSVUOjoAWm8%2BG4%2BnqZ0Hx4PGp9AiAZ8hbaEGWNa3Qg3TTUBr%2BGBkHAPoPadI9dGY7n%2B6wpvir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMeL8UDrYBYDutcbz9KtwD3FgPNAtGm0WTpeatx3xFFwohRRFIZc%2BV1m3J6L00dj7Il4hsakD0GUcsdqhi4tQA4DjWKDcIAJRMzx%2Bu1b%2BzJEAnvR2AQ5aXCkip%2BtsRNHpw8Dy%2Bmn2ifJp8Kl6zPM6KbJf7UGi%2BbqxovK7PL1%2FZPcIphe4HrKLpK6kZs64kuHmOpYJL1nVo3xC4luXzq702XmfsnYsrTGzMrw%2FnUSAxR6GPzr7D7LHLXlKDWlJANEvL5TrXxAx1r3gjmYYvu1QmAXPqtOLXle5Lx5ppHcZ0bAXCj%2Bv%2FtFElg5%2FUK%2Fxf5gu%2FWO4zMQb7SIXBi%2BNr1pC%2BJ4%2FT1rIpJoZ3CfUOehKKJnXg7W7dPy4QQwPse6tCDdgrKWDLN92Z3fLgVizQmRmQ4L3FSBOroQqTrQZlNHSgJ8%2FEpW3Jon%2BIrm3mo4zXMHYHEZgeZImDOi9AzBaq7FrEV5EBBMCDmY80IVKXAIPCi9%2Bsh1yC9KHS2sNRHKsHe0UWjFjtY4eEcERP9oRxJqpczCmwH634c66rbTNaM%2F0p8R2r9DcPnwqZY3Q6xXyG4geTKeTZIdYT1woHQHezhz%2Fn3XIsc7oOt25rtCkREMXmdr1wHpEjeEM0RX5qLqENxCfGBUJX%2Ba8DFPvU%2FnAwmYWDwgY6pgEBlbrYBQFmn7JvVsfEDfYTNQh5xjsPffEn7%2FLl0WTUa2R24zOq8pUlnSf4sJcZeBZfgfJBKm4w8rCP5KqQDULtzq8ONFGvW6XRxOrN7kuwhTEfj%2B5zTgLQHWR%2BcAl4BMB72QHH%2F1iFz9%2BgflGvtMib2iLSiodZiHBw23SI0v8t7bpuSb03erwdnj3q%2BG0pv094U%2FooPS1siIEoRarCJioptmT%2Fq6yS&X-Amz-Signature=f0786a6df4489895f926d266757bf73921397cdafb46582bbdea93727f0ff2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
