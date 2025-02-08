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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636TDSKQW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDGxzzyQ%2FTCxWTDCEVH28IkgrzcfWOS9kJFTf%2BfwhH10AIgTM6N5JIV7GMsvWl69QWgex4Wzk23W%2BBAc6N5mV4sDm8qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs4WdmI1RgDZ0f%2FByrcAxiebp2tur9x4ANZU3L1KBx3lEKsvARQk6yF1%2F0otjx3l46OR01Pmr78UAqKrXpLtzmzYy7zgxmnswaDLQa7O9kXJRRto6tzDkq6clLxNRf1E6jitJK1UMecP7aHyM5kbsGSj8qIwWj3gI0UYGnOu70udYKDmtKpnAf3nUanc%2BpbXwjgyZkPMiUwVswr5OQ9wZD5%2F7Lr%2FzrHKUsJ4E7YziiyJnNN3aoN5TCi7Co51Ert32yC8FZrjM36hGRWB7qpNF9nLudQDchPCFTapslCuL%2BRrK%2BsKXxh1Ff4KqbDHSDHHsgz9z0zDzh4aem2HkjlHkFa1GIbz9wWb01QdLMLHpyLSw7IDb7S8d7d%2BFkwo%2B0tH8inmldMab6GaAle1dcX4cfsj%2B8nhr%2Fykwfsb012Lo1%2BzousZP1GR6YONZCk52%2BmR%2FME%2Fe3FTpK3Mbh7d%2FYWvljzFC8k3%2FYapO%2BUTz9dMQtxNUKKti5y2B9a6%2BDxFipOlsqgyDrkjMuKPstJE1j0jsIv0nvywbywKaOTBVDYh5yDZaMrHRocE6dyWJxgDAlf4HosWC5A04p7t0HIL10vNn5EqdmeLt0p84zpf986BKlAx6sYuy5WJTbCy3TNNE5zb9nm7NuGCKayHU4mMPqGnb0GOqUBeiw8L0DKu75sPHuEGh8yhALjSG7K21xMhhhfYweqB3JSGP%2FMEmw3%2B5UszGeqsJ4cJziwRtL5ZnL7eipra20ntfGC2q9kQYn41mcy4F91%2BnUPE2cC8Bc6UoC2cNsRywx7pksvic6whiVoS2%2FZ4myU0yNl%2FDhMaiGXvDLUu9nf3NRu97Eaty7p1GT4QLTzjUR23irKtcNeiO6woO7NgTejCfOdkatC&X-Amz-Signature=cb6e7a3fcebb371c601fc6eb409fa55e7eb685c26b516d5b69328968fc5fa016&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5UOPB3U%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIB69ojI8f5T7LjvIXFuZP5W%2Bs9jpJgTHCbBf8o5l2c7zAiEAy8O2Z5h%2BOocaNPQVKYSiIROounsuh3mWoIsYl%2BPVLRgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLR97kcNGNm4EKRUZyrcA868CgKQzSLbjmuNkp6KUDMdf8Vz67QX7vFxrmbxwYCif7UBqTjAXTb4wGOC544ET7AGVsWa8oy3VjAGi%2B7AgE7Wg7Vba8kNO7LteMzo7ksY9IgzLVDBlawOtK1qyLoCQmrYOvV7QYF5iStuhvlCazuDk6w%2B7moDrPDVqIfmRsiU3snhOwO4TlvZQZaZQXjprFMCEO173nMqlm%2FVM8omJuP1mNTwJPBl6wcz0lNBy1YIRZusoneyyYDTYT%2Bx5ylPp7XtQzcjV0plGohL8j5f2FdytJGEECV2F0Erv%2B6%2BWbMNNhaTvyY0QqyDF47dOJlTqPMFLBuAIihQtGBcor%2BMQzxctIAUK0V15j1CNo6E%2FElw30wvIv%2Bkzpuh7ejbyrSUllftrExuIrM6ML1B0JFfJGFTzm5OzlS0SAU%2FOfp%2FJ71cVuWnidFJDK5IcXs3H%2FgXkUZdcQie2IvbAK9jGTrB%2B7fxPpr5E7FkvZVbxDZ32HYXdfDT09F4hkoPg2QMOOUDMjoJpn4xBgLNtJBXiQ0E5n0fNR154k9qtlT03lrnXmQX%2BBw47VGVHqHST3Rl4Dty08Eee0qrXmHj79fJOCb%2BkUnTJbsLw8hb9W6O6bo%2FZxqSnP3K%2FChltWnZvHJZMNOHnb0GOqUBhFCkBB%2BHaxuVI5TreOpvNP75d88VYi1teTp96RFuF8x2a8NpFBeIRNgQx0tRaRPZpeqmRpVQ7Mck%2FSuq3wr3xk%2BqWaewtR%2F1UqbjFPRsgAiWbq%2FeWAdO7806TZuIhlogzdWnaH8fQXnQuu4goiZugz965WjDczfg572tSsjt61sMCkZq9Ftt2A%2BGpMLlyU6xNxe0w5POp3852%2FN5a1DSY8TOxY%2Bh&X-Amz-Signature=a9a334c1b051fc41c28b010986cbdae0582fb2eda442d0025a67cbe6c942a842&X-Amz-SignedHeaders=host&x-id=GetObject)

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
