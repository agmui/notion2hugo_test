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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZNLUY3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi%2Ff3TxQj1zrVXRRhoFQ5wzwaa3pvPT2MEV9ho5Jt2aAIgQ%2Fm9ylyClFmKh1vpScaOmeAQkNQLjjtX8v%2BvZjeduPQqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOi3AcjJpLgRGdxYCrcA%2FKIEJzNQaIPl5FhhFdTom4vtUt3cS%2BJyQciAqI0e1ypQopW9y%2F9e4PifZ5zsL6ZbtGgRg7l8X5ctQsR%2BYfG2LAx%2Fu%2FaV6%2Bqu0vBHjdRHsc7glpdc57DgsAiI7dIwCHHU7eQ0g3g8otddNwJC0WWUDoQN0BG03Jc42lopP4iW2Y%2FxhMyvpf2Kw3Hg%2FtRBo5jm7CZsaYBAWpVOvIulfT38k2RzOX00kUS9xHT9zeokTUy%2BJGDxbCMeLywzIKsqrNEiHOlFsp%2BKSe%2BvU9Pfct8lTrJrh6pVo3t7Hs0cam8nxgJFsZ0IIgdBo7%2FyCH7hi8qLltTpVJ9bf2l7L7%2F7SKvHNw%2BJ0wMdtZaocguVDFqnirKM1IdcMw%2FdkdwnzpT4m8MuF%2FBZmnCh2R4NSNjI9nT1ko%2B5DfxWhRPtS5knrvwVoi3R13R2TloZOTGzY1ckc4yC1SJaNZ2VJIAgzveg%2B7cb9TkJ%2BkMXiq8BM7Jx5FH6MdEe8%2Bq8BPrA40vEJvYW4k%2BQWEnrw2ifsDZiC90r1OXjJoYlDubmTf14es5BnJ%2F9MLT8hEnPEfLKo8ONoq8lyKEEt4ctBUmbyfrBWWXvrtdfPvuMijdpnfVSrc6TVEZrjAyarCxAWB%2Be7fm0IYZMIXaysMGOqUBEqx3fZr0O%2BubYm8DmScqds%2Biv1cSHnw1PPwcJugubGK5xuJH8CqyBudIGf4mMO5qIPVhPF%2FscI7cnVr8xy%2FaKktMgXKPYqCPcPLGnCrfzdKDDJ0W2bOCihDgpvG0XjtWPQbsFtIxtKuQiNxwih5obQu0PWNVgo5SkT6gH3OOzC25PrtZLl0W9GbddsKVeT%2FlOV%2F%2FAtX7AaYKus9bkPf4MZXQbSfQ&X-Amz-Signature=414033e892bbac6df3d5007e86777a5123d738f88dae84415ab29d07f0edfc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2L2TRXX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZ4IiQ9dMPsE55diJH%2BT4Ewft38KB3QE6IRyy6ZUOnkAiEAvWhHW9xaqnHTH0Qu0NBrndDS3CroM12VSafDgvEPYiwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEFyY3n0ZSv0I35ASrcAzomTAswJivPLVKcm%2B8QBnXWVZt7uAmZBASlOFp%2Blmduy%2BIBTE0Lp5nZ01mMBn7DePzHefOxDYam%2FaYhyqREXfZsA6E9cS82Wji5JBLqOmQtyId4WGsFFuV2xwMo3CprRlV9KiHl%2FI5OxpMDQLzjuAmbuj%2BpeII0QwIQlFIAZCB0j8U0%2BLOB8MgIusbmzYIGtkS%2F2t4BQPJkep%2FxD0vLJbg%2BJLqbGL75qk5fjLTcMR7g5GAx7znYj00biV89f1BOEhz8qeCmWyuYhyB4BoxSdVgbqfTlO7UvnSEhRR7o5m0LS6G5WRxpNu9cZ7jm7nyUQwuFETCuM3fESicVbu60wsbVBowUrTOBfKpclCYCfbXDshonaLln7TLxmuaMLn9cOlm3dysY9%2BjoIYgRIbXsQT9M8IeTJJ4XRJXzCLSeNB354WWd92eKsvLJeTEZspL%2BjTwegqh7HzK3ElDBfWeq%2Bc7Cc1cb7Wt317wt2CgWZjOeP9Gy9ACGMG5NdEkQJWekAY54MxxF8BGq8HEtXyMoHZqINjZsXo2XuKDqFwRSiZuUAYuHMv9WLnSP8wNM6O3NNzMI0aXjc9IkvmDFcZafOPBMXMk2cI1OETWOH%2FfwBgmTTgR2vU%2BmdSF3pw6LMI7aysMGOqUB7p9S2aj0ZqskpRiX16GFbseYCchsk9IyI35KLiY25jp%2FDZYt0VUp70Qj1h6bZnldvHbhU7mf5EtbNACnLRhQcB2MqWeBdL4nFQRX%2FLwD61FLEv%2FBIRw7yCoA8F7jP71XNeyfGEIMvmnPi%2F%2B9%2F1xWf9OnKCxhfIHI9VdJEp%2BahWLbbpv6CyQFyGmfOxK6ta2QD7y7XPLc0fe2fQ6Oy%2B8k%2FXuN0nu5&X-Amz-Signature=11750f4608e5e977a655a42c73d729d537b68fef91e2213dbd864ed348640b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
