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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GE2CBC7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBhID5N8C3AZ0GbXGcYcvWtPoNDlmMTPk%2BkjZbz5ZONWAiEA84x5fMVJhrGxsjb5oGUHEyAdQTG7dzQ2acMDHbhOY7wq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHNd%2BuRUUsWpEkXeuSrcA0%2Fp0khbFT%2Fl7u%2F83mQNEapDLA%2FcScL3LmqEy0fUWpGS8B87lMJMVbOI7IsztFPKoMG5i8248eqTtEN4N0fqVGI6hSdE0tMoRPQhgoUweQQEk80pW4MPIjN4VCcf5FKLzVHfoaUsHtXa4tNPn4BMAVfU39ZKcOrSxUYV%2B0pfYacBcI5Ch2cyjFLx63cob4OwPHxPOiOIf%2BU0J9Ipk%2BhofpR5vopXpMIzb%2B3OM6Deal5t3MU%2B9VSa1UY7NQs%2FGCeApLVRKMrY%2FTLkpwS%2BjXo5857q70DIEVDxFRQGs%2BNEC7TgZsO7s5fKVdIuViax4c9ySlrwCJ%2BnD9P9LTK%2FDCOKiVCmP3Dua8atuzvaKvmxIxdwzJdYM2wNwQYO5HWvtwM9heTgqzuCKcL3Z4ewSyxIvCqluJPcywTGlVaiqWimZC%2FtLHjttZdLw%2B4mG3dYMTm0yQbSvyaN6qEanNhnHqzo0GDvycje5RAIDexyXCvQ7WQFIZDszmT9h5%2B0N8vwTBSRPxaaIZLGdscAMurZJqcgJEl6l%2FS%2BoEalumJck6IjYfqO2l1Idsl4UOjA7%2BaS0zUvV8wPdHNRE0%2BlIRXVM6n8GXKTUgp%2BkUwKoFQSSLqD7125%2BHTzrcaOmrSDx0ZeMMOy6cIGOqUBHw%2F3rnnwLU6o9PYj4nmkM3RKpllVSBxbixG1uCRbOLqIW3KBTECo8Bpmb2JsQLabMk7b3TIWOFQiKecnyVrcygVi1gw2sQM7TPPzrkpu8VCZPUmHTGcyDJ%2Fv9a9MJyPAjR13c9uqwJRDP%2FItorraoh2J2i%2Fd%2Fagp6r2P5gyyCpyx%2BVG0oM903ShJBFge3uOV63V%2F3OrugUbJTNE1DQ5NfDl5ddfs&X-Amz-Signature=638346a396f3d381b9d5b54cd3b94b3f469db1fc5b398a96220e990a8ed3133d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THS3DJPH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDRvE5QW82%2BUuzaJTGhM%2F368%2Bz6dRB7nPJZE26QOPUp2AIgPOjCmb%2BzL0Gm8s67fen%2Fq8ksStf%2FDYAspbiP%2BMu8R1Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDC3X4hVXSpsL0LK2LyrcA1M1x8lunOcxuCjl2SBWHHkpiwNNyYhYbZlRmafht7ZNoBTkP%2BKMKhmYy%2BtR4DwJLCKA5XFeumDx7RMQChiZS4baBObR227gFb30K9h8n%2BdCtmq1pBXJQjSPtIAJAhLx%2ByeYjWoAbnwmlgnOR6CHGeG68kMN5tu%2FuSI0%2FM%2FMbObZfyDYPJuFi%2FgxpvHzLDFuPmexW3FsT%2BQ%2FFCxs1zhw4x2Mj4DCZ36uyC92fsRqadDy8YMDOxMzbQy43cL%2BU1MlXKzpHKixc2fySwb%2BSgsBYKnahA8QbQDnHK%2BKEl8NLYNQjGjzBMALJaQVXYXWqgCCGaMgwW%2FW2kryfVH4sKnqn%2FFkqW33nLEwc2zUdAB94x%2B%2Fsh4weoZIthUXLGBPYXnfdE7QjJiJfBd2GwUQj2U7ZF8LFZPwM%2B2X88gEMNbG50EFMvnyCKCcU6Ykwc%2Fn2mtjtibQhSTgdE3e92Miwz0xmG13QDtEExFKyWehCXgUKPdCG%2BSfQp%2Bfr7zZLh45F0%2FeGpLuq2FFHehnqLIOK%2FG7ApOu6MbYqQyOJlSGkNqCl0JI4D%2Bd6EvIcY1Yr38wGGWwCAbcxfvl4nL5i9oO27h3SPzME4tq6o97Z1XBbXras5Ko%2F%2FJun7md5AOLoB7eML2z6cIGOqUBk6gSgn5lDUOovjaviYCXGglqUt99TgXtCyzu4%2FfxvPe1GKXgjzC2wdZifkr23uc01tjitm1rpVo5UQt7O%2B4KvN2KTclCyg6yEVJqEhD2BMvAQZPVgevgLQL2dDK1PZHuPUhuwtyno6hAI%2B5PNYH1%2B9IamnfioIx9B3XGqq%2FMUNRhzW8wgRDZVldOvtfSucvatPNDW%2Brm%2B0dBWN0p283UqvfBj%2F%2Fq&X-Amz-Signature=fd61ab44c37b66007f5c1dff3c408a72f53196fd5d6815b3983d20b535fdc557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
