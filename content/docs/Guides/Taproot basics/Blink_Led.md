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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QROBGSM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC%2FeJUFV4aVDDbLS%2F4FL3swr5GU4jTwJLRVF1kTdjxGdgIfQPvsVMOyliKqo2FXu18%2BH10LiM9E8ziudQmdP5ypxCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMQwpGXZcSiNfhZBzKKtwDVc9OgsvmQnrgk4zgw5eCtkBQdezbEzwXAgUV22xqD0y16xH2t%2FVmyWiMnpNYn56r0OxA2dcBaaoRH3%2B6HMgx0mPkZargBpsZJY5XYV3Xh99lism6Vo%2BJNRwnDoxr5akdnKkd05tAOVsRDqRBy8yJwZ%2BLKEecjUialCfrrHnxobO6jmf5rrDrqcklbuUW%2FlzSzB%2BUedAWinLWkv8CVU9%2FoSV9Q0vFoMXYE%2BiuWcqg7C1R7w4CFPloX0EPXc8r2bzARRsjCmRaMv%2F6OJgVyxLNuZjHk6vdVUgH1twkdVGqjtmjqYrfssUGTBT%2Fzz4mqrDtsHxQ5MuPLs8wxkygmoy9zQPMnVawtQObgPc80jeIZyPZQqYWH9vZG3f%2FvZoPvht%2BtK5nf704XEibjVDhTHJ%2Fp4wEsE8g%2FqD4kMtsv2ewmrmDpEFRfRoIitN800ddJSddVXIa1xYmhjEb%2BlnMGH2wkmilM%2FBmkNSI1crDxX0iRficNnkFjlZw7FavmCphi7LllWtl2XIphL349QRj3K2b%2BGuVlAVH3hc4CmLEboPWW0QMeCm0mydWhdkk9QyvRIWifnB1I6k7pdZ%2Bs6oR8M55%2BstqwsIMfAuDY522yFVpOvPN4xWo5ykJV67RMKMwt72LwgY6pgF3x4qNBOwtyVeFV2xOa5H7T0uHc8dwXZXlk3Bfo%2F%2FR7B7PuXXdESEZg5A4vjNtjGcK9rroaw3iwgTBv3lVeWddc0MM859PEMV59l%2FYrbh0QuXWQPULRIa8RYi7lJ3QJVKxDJ0QTxOZpKi4ZqtAshTPnOmkjAoWTvxx4%2B4qsf%2FRkSibWxBDkqpgpNgj91JGkCnKi8CwO4%2BDGUp6Xp8Sx0T0C4ZWBt2s&X-Amz-Signature=58eeb91f84b2dad8cb4a5fb4bea192c4d2ae75afe49eec266ca11cd198925133&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VPCORXB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNl%2B7rjnQ2K6howT%2BfO%2Bo2qdWsZYPuQHnvylNqyeRl3AiEAw3g6%2FeMyyl2kR5TIIZpER8HogVyHQYVktJxJxUX203Yq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMxbvD2VEp90NsgVGSrcAyO%2BP0JV1bMusadHdz3QdHh65QizJVFeeMWDK9v3Z3VTnayMpAfMCBwWrRkO7egnXaCtMgNDJkRTl9ZXQmIrzSrgxv6UrKvLlhEDnsI8yrg%2BisSjCgXa%2FdOCxcBVzUO8omXca7FXvkX1HlvoZgeqR%2B%2BOUQ9Hx2PoeXkToh1dTY7TuwmMcvO8i%2BCtaZllz1LwGrLI6ivugbsC941sD7EPcn34JuKh9CGe0VG9BJetpokvQjZZ3wwFQtiCqSWI4qSjalfvgDviVWLcMHb041tqPBOVLtqUZ9Qc91pGRYD7Rjxh413V5YO5vEwVcyoU%2BW1f7%2FNFsh6iZ%2FBYvoygPaFxGMjFseC%2FvfPTV7UGf4u9EAw5QdFRWD88u0efy2wVgRBvmTqDcnlyxC2%2Bn5npjhM26xCJ%2FQNHvB0Wzvnk7Z0RcujiKYmavRpaMNz3pNSRXlR4zR2Zt0%2FZiQwpgSoeH5A5wrXtwqniHFoub8TXt5mUKAJ4xo4xeDLrCEn3LPfjiwZKYPMw%2B7ntGreKEG5wZQD74cbbwJbMQ1%2FaL5hRPBRt7TipQRXI0%2FeTxYwt0Gd%2BKR1KTE0KkC5Zd7dLn2LKnlV9ISxpotvuwQE3Q9N6s81buOoI8pg8aJaMGLh153u9MMq%2Bi8IGOqUBu038rpMFC%2BlAYql44rOdeT9ldzRGmLDkayxeAub%2FkSHpaAd%2Bcci1iEvBPW3bvgG5HLCkVmZpFbUQMrR3NCwZ3dAFjbSn%2FKysDQemxSDYv9%2FqqJ%2BzIKhF%2BGlnZMDlfaKPVwLq8mFITMxl5XcerQP%2Bkf7%2BI3Vslvv8b0%2B%2BBjxKDPgqBWm2GtfA9sUpP7KDt3pMn7T%2Fvbv9roS66H16XHQ1SD1Y%2Boxz&X-Amz-Signature=df7930298aef193d050db3152001566435d11f9657ed10c1a14f115c075c15fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
