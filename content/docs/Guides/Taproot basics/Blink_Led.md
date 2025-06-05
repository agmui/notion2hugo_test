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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQZVK4E%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIClvmPmi1uCZZND%2BSnp7HYJQ3bTTTvgwfY9nKQz42YL0AiAkDH2xRr5PFNQskT60TJE7Ui3aXUg8vA6eoIytS%2BdpSir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMUrkOTm50F%2BfchJd2KtwDbtQkhnf%2FTDYCfSKzcgpTf97t7LVSVot73jg1Y16EmqEUbZFxLSMTBSig1wq%2Bkt3lbI1stRqXvqknQE3LNo0pQxubjD2WrB12wDgg0WLG%2F1wjUHH6zt1BzRB76Qv24PBLvSsrVZh0IjAALqrNQ6NhpBhOcU42uykP0ur6ZknHh1XXJ3W8I1DaYKqCzhmDhVaNJ8hChk1eBQoaXU1DSaaFBliv%2B%2B25Vk3zzkh1inRfM8ldMpK7VlRisLD6Pw%2BR6yMqi8WHtYFJHeeFnE5qvGYo7%2FHpiKdI4w4KMCurkF1Hzp5fjKstUmR4PVwBUsgWon3Vxhawyb0uPgbggpxgNQrbcPMq9Pg68UzOFimsh%2BtWUSpiOeNK86dZ5HbJs1PJ0jbahUvBWZQrvY8NZASCrwZG5eV7yaiKXvlMEdzy%2F9oaDWPCVGLX8siW9hmMuWj4uA9HD2xEFkVeBzeBm8GJERs2lowAhaa206WyktZvZV60D1fP%2BPkqENm2tY%2FIXrWcQVVXZux4vthzKOrlq4XxWPNXEjKL3%2Fv2qdQolwK5Dg83DFlqZ9j70VSf94dCa7ScCHKZDzCKiMFlSAE4AFZMvIeRkgPf2fgN8mQUns9JPdqtqmNUwxU9TUHNPDzoaf8wzcSGwgY6pgFYuFylpuo3BVEeU10lLaq9npBHXN543WprL53NvICHETiVAq5U3lj1hydjBL8dchMqoLvmsOEbnTYBBGI7towCupUVL3z1Bt8BCwAgQEPiYsgHjD9U03iOK0Wk%2FSlkVRMuAJV8ttg0oo3T95ZZE2IB1fRCwrbdBRld0NpfmNSsN0Ki0RHNftgm4Y8S9CerTHOMH%2Bm%2FFfjNqVdEsEBc3F%2B21ytKcBCX&X-Amz-Signature=b4c1bfc2a210d81273632c483d5403f33fd7a4ef27bf124f9e59294bbd47237e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6RGP5Y%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG9p7xi5%2BE6L%2BNtOpYrdcAt9R18fYOob%2Ff2XwPz6AgzyAiEApe60%2BT0qYyALBLCQlYPCjmXgjCo%2BPccXnp9url3Vzacq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDP%2Bzdh3qoP7kpV3n1SrcA1dXNbm1KKTMPUoSvSBNoYsi6s%2FLV0AyszT2o1J7ju7llp62LBJCTvDMdyyO63oyF5bzKL2t6QH47sEMxBZY9PXezXDVvsniiuX96v1%2F7L9I4AxoIGd6pNMOQjAnqQYDmzwrA%2BhZb0NxFKj3VSEmPHzyotvDz%2FIlM5JPqUUmwj4S3%2B3EXbYWxJaxCIM9V%2BQW5zDgTeSa6XO7gWCfmGGYIC5lPlo4DTvrex49Q13ulaC90LyUy2yRCuQx8YePvZvG6URxSfXNRrS3h1OLLG1Iw5tS0AyY%2BaLWjtsLZEm4iPRJ1IW9OkFIqPBoaRwDXMuOz6BIRPf%2FyHAy%2BQfUxcIGrx7bUTmWL9HBkGRmDOqJa%2BF%2BQGif0dTNPVrcEajtk8q8hLyaljM27n0aUyBB6DY6%2FZZvkGbPG20sTD0c1HXQ4%2F69EjrYYrmtVWMqyAQY5SNQlbNAJALFBdi9mtT6TP0k12%2F6MzJSQN3uM61bUfPTz4KpOCAnPTrmHkSnwgP%2Bc4%2FqlLA9ww%2Fk%2BeOit76p2SB%2BoZqm%2BbGOcTlJ%2FYEMR4tVsSVvCkXarDB1mEePH46KnkvM3%2BrUaTEesFAbwzI1YyJE%2BIf54exNsmCPbZJza%2BgSJdxDy77wPgoAFIeDMc2rMIzEhsIGOqUBQOWoV2arWsBtANq%2BOLZ3E3Tj4PtBSiIR%2FDEqBHQA0%2FYPcZYOndVjAtRqtO4inbwJZ%2BbSKFv%2BNuXhUVHB4rU5IYZBQ8%2FBe9%2FDzK1b%2FLhigaYNH%2Fz5ryD8rv32oP1CKQfvZ4FLEyuV2ZlXZSYoMshhP0qExjCGy2X5V5xKv9pF8Wc2qpZv6aGLYWGrkNB2lc9iKRSSZm579ai%2B561GGsyObxEiAGZE&X-Amz-Signature=2a15a8e1c10027d96dc0bbc796b845246918b3b0b8db8668ad637a8dd2286712&X-Amz-SignedHeaders=host&x-id=GetObject)

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
