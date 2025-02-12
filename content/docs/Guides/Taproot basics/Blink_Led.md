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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRY6DLB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxN8Y8d1EPRwQ%2FdqWdfZhgNr8yjewizzi35dE5c31NwgIgI4EOyGXUg8qCOcyTJ3VtOOnu%2FXyx0x%2B3EMxkuam2v00qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2B5k5oKq21dqzj67CrcA75PHOJFphPE52Ea3%2F3cZC5Ewj54ylfHnVqdgbD8v2FdhUcjiq0tUalqYigIxp4uGiSU3H4%2BMZnT%2FRI6sC4daTZdK%2F1bdpXW%2BWh4mQZnLQVzL7gAPK2%2FYBsdY%2Fd8n5tW%2Boe46MVTLERLPGKA2iqqz24DeeNOwU%2FftR1V1HgwhFLOBKfDscboFDFhVMqOiOXNk7vhHDJt5gnY5yrmK%2BLOrhjR2nY%2BTeDnVXlznWdBHFBWmHLKl6ymMG%2BHXIuRs1s5JB3LLQQXmXwUe0QLF4MCe8rGjcd2QBxshe5QQ8X9McctMre%2FlJCCc0E1t4qYOWzYaxRNplmbS2bIq2ZESxovfHsv5FLrpOmUTMwtX4uhttGaqbwBWFkFs9i05nZfgPsjgAiFlNbW%2BvRy6ya7edleZd9YVNoETeNJ1LrPYhx3InUBJX%2FpIHDY2q7%2BiR%2FfAec8HdhYG34ed4yu5GkUuMr65KI1TKuirSpWPGTxeCKKItvA2%2FAdJAPUX6%2B9Ca%2Bu94QHvucn%2FXuJKHhBk8B%2F9MrQphjV4bnRPR88irgbW1GByvDe8Fo2xJjdK5LNh499dl8f01UmXhAJH%2B2fgAPxLnDSnuDzrjfroQcipc00X%2FUI0%2BcdrAb43%2F%2BPcD%2FQH4SaMLvtr70GOqUBUtOkTuh1cpn4k9FdYPdKzCfouZucVAPrGrecQ%2FOVLmVXxs5I1lUM0Wu5y75C%2BaUVaAoQAvBiQv0RWBh6Ja%2Fd89WUC4sae2KLCzio7BdoUZ7CNBp6Ex%2FzWObZyq41QQ2PBtIgPUmjmiYCfU3e%2FJ%2FrCHc4lzf4uKr48BNmZ19YobFLjN13uV868Gmyc0BMaeWHo97CpdMwbcL%2FBH0lrfSZJtuyav71&X-Amz-Signature=72f3b21f3f472aea15702f64d1314952fcc6c3501598cddaf3ebfaa53563bb89&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFL4AZQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCRnaG3FOpHoXmZEMf5ZI5jdOQrmJNsus%2BkWp8We0czQIgKc1F8WioIaFCzhiQ9JjjEpaiL9KZsLtJBx%2Ffq3m9sSYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNf%2BMSVbkhMmFmg%2F3yrcA1PiXLQEQJOKj1x4cSg94RWAorsWURjPb0BJqiTyLhWNs3SPvoJxDK%2Bvx01LLbfWeVvNkzfG1%2BDkOCe9o2kNQFcBpj%2BbTF%2Bc6kEIpW8LJPsSDtXEKVhgu4lhbjEThotBNT4hqzHocpm6powXNDwHA5j2w5s80PQrGLVt%2FR%2BU1r62ryRd3et1B%2FwjJwPpsJamkQkb3JKdPcrfh2W1tEF40pvz2plW2yiVcXT3YAgMmv1L08A5g8JJVqlsOHGxFy3LF75MBHhOL0LHOQPjddyp0DxwvAzUYI0s3dfFmKYBAsS6MSmXA0QmsQmwhEfi7D57H4Z%2B54mA5PXWaqZVG8wiVcK5wAsWQ7KyYu%2FENtRyz4Zibu0Ux%2FUeQo%2BgSyd%2FitJu41wcFKYgDdNT2B5dOjala6EdpeESY%2B6itIjkdyVEleGtTVc56LDsvOHZBiYnPRcBLIfJhFOxD2Mu9z%2BjMaaN270mmZ2xrAltRu%2B3NgiQIfflRbijrZTWeUZgctu4DHqYlxjozEhL4hqllDeZvlip%2FnCsYe6Lp%2F0yMLF%2BZAloNzIhrb28iXlqvtTBa7M9%2F8vpU2d%2F6nG%2F91PKnokVSLEvgCWSGl6b3ryasQqAhlL71JEiJDg1Pa1RuJ9KDOQYMOvsr70GOqUBrfLNP27u328X8na58g7Fdg4RKgjWL5ggCkmXNwYPFIr5ovrlFJ074wlJXfRWIFuDRSUkMvmfvWx54YSXUByBVEWCm5bqfZOJRWDBp1yv4pC3m0jzCydHAbSoMM0koopqGp1%2FeOhVQOpjmgk3pGr79GR7fuSTYwiTusIfeq15w2jGf%2FZ%2FDA%2B6AkaDbOemm3tFFe71RNvL%2Bh1aRfmDJt2GXM9qf54O&X-Amz-Signature=c676def8c9ece865f7d4faf7aa8798ff1ad002b1667cb8bfa63259364758f530&X-Amz-SignedHeaders=host&x-id=GetObject)

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
