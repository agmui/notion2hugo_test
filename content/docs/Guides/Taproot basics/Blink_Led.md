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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQIYR5L5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIGSuitkAbve9H4BxH0QoymoZF7mq8h6jt2Q7Dy5TRCHtAiEAtbisSN7cnP8K7549XOA557mthxDT6tBTUiRTPaEbnbMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOguKN0AeQoztgMQ0SrcA308132wNu1mdGa%2BCvSJCeVqupqOIzA4TJ90xXAm8oSp3yaTZVPHT%2Fu%2BcNtSL0rYl1PZFpYbqQMNHXb4PVLy5xmFxTGKJMoX5fgbqmqRQH%2BO2cIBsTM%2FUqGnaZQFCeoco8fyY1XbnvA4FJ9BxfhDIHNCchuqi7jl6XO5qf%2FcNLZnF0as7BdLtPCHIxoW8yuZndu%2BH3BiLYC6ErPQjn0NDE%2FoNvkI77puXYm9B1HP0I2FC%2BLJpnKJklwwolDIXhSuntiglTVW01sSOoVCQdh%2F0dovIUoIgycmB1iECpeDcSUbzqVChYilSeXPAc9cxnzWRTZ7R2yxMYco85Z7xkMaN4kOjHG2J4784LuyhPNGpxFLzvSE%2BVQ2a9TOQRtsuiQfYLYS67Mc%2FZQk%2FR7hBImLQ%2BlpVjW23foST74M2dnADfHYwEFULPtLqr4TNOeD8YMlZj9p1gmN1SzdWPYTy32vhAaOjMqdHWEbCKy2EEaNPQHc3Z1IxGT7PTJP4oih4AZ65KuZ2MWhFkAUsx2oJtcMhqdHnYeouxhbvv63Ft1s2cI1cfZDYuJJcJAuH10CwfQsalNF%2BsN3rP1%2B1mch1BRc5GnbeJneMqajpWGZkCpEmhEgucNOsXWKJA%2FJBK1RMLOhpMAGOqUBbgZF%2FyhlUAa%2B%2BhYGv2kYvaq6xtchbXd78mUnML%2BojMNmVjJlP9tWs2NgmsQuFMZQBvvT8SA3KckaHDIyR4epymCTzuJJhs5DmAThp55h%2FY%2BON1XQowemjud4NI9zyyzpNSYRUflnPkmnJbNx%2BiEQYBh1xRly%2BZ4UOtORrY5MjnbdqQ%2BVxbh5UynmAQajCR4VSJcqqqINUcx%2FIsZtl3%2BlQWa7pmyx&X-Amz-Signature=9c0445f98c3210d181f7f0bcdbcc19043c4925277310f506823a9665233dda5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMF4E3O%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCHQQclkW%2FpTv2v38RbhglnRnRmUBQgvASNMYWkkEjEtgIhAMMT8foHpGfQshtCYhfwIPtaHL%2F5Xk3FlSlE1%2BNvf0xkKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnjcEaaZGnhUcPMEoq3AP11A%2BegkE8mdVt%2FEibX1RQ9U5S%2F%2BGM6YP2GxhwdhSMkHA3JiEBzzfxfs7D5XCsq%2BCP2NNaGvNwcSCTV3PhAgPtszoGObBRIZ4%2BggN7s5peiiY9RBJJgP1E%2BhE3FA8r%2F0%2BoV9LPEmLfiA7hw4jQAwDyPREcHbCOI3%2FgWKW%2BdgzTe4Si7fKQbRP%2B%2Ftmycgh%2BrwkkPGb8WyrmxQqSPYcWgMscGqjerwzRA4wo398C4GNn9FFhpS%2FsDwLmq9xO%2F7MeB%2BFWqlDzS4X%2BHuGVrXRO%2FH2reR%2Byp9ekktLtSxe5t97MPed3NggNhziqAk4LI%2BeSxyIvyt3QztA%2FSVizp3OppdhggEPntPM4qyujQpmpl8udyulWZ6uRoalQ9DnD9NNGI%2BfLaYIzAH3T%2BwPG1tvM1RAtanLeZakfBE%2BwxHvN7ebjdMEpQ9lWWT9Wb%2FDxxBdjcqiQmUthu5UR9JV6oFfjHLKlYHhbv2NIQPeCsBjjDmJNIKaLGB9DEUQ7qPJzxD45S35wuLXVdi5P7g%2BA5Xco2CfWSrDebY8d2GOcefCqWjqFYNRgA8AqXLayeS2%2FyguFlit5%2FF8Xj%2FIoAmp5Nk%2FCj%2BFofrq7vLaGBPAr68AzHqU0tqmCX5aW6zhbLExBDTDBvKTABjqkAYsSnWxpkmtFEaG1NXX34UEdHwRcqwMBhqaVO4vCkPrwBdTphnSRvrGNZ%2FE%2F0WmbuXbwfn7Iho9oM0ZPVQZdnQad38YniKRbscl7koPVrTnR2l9tlggAxtpZe1HSNfT0BtIP0jTbXey%2BU82NIhoQBgEIJMFjY96lPr20dFaSHqM0cdYzd6%2Br4NkfDvNSK9XYxQpZ8mEcdB9bteGe99ZPk%2BTsDVR6&X-Amz-Signature=0771c8709fafa84742dbcfb26dda7a0ae95cba7950e46b549a53a1e25a09bb2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
