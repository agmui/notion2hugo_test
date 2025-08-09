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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NKY5ECX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIF0Uic3a0l18rGWFi4OjpIKLENpfsXmCKqAXBVlraEyZAiEAhrnQ%2B7v7lmNIHcI9foqL3Solkbi%2Frs37fG%2BPvy4dB%2FsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoCjOqx%2BWXt1iATiyrcA%2BpZYWuRKxs8ZkUeiCG5JV%2BoeFdXSTdhQ5UBTeKYXfll9W1LT97YXwb%2FdMJVkBJN5OJ2Dj1wtLhqCUOgS4pDDQvR6744g5wF2DD8a24yq1X09kgaA3TLL%2Bpg0HET2mgXsRDrR%2F%2FUrI5qZDpjAUhzjgHxwPnqj7h547PvdwiYy6HoSMcsEUZLF1ORi2NcqzRvO2Va3MfxZv8C3dWs8bWZrBakWTIjeglldEpNaEupXhrItwn5lcNEBI7nqFtxzRJely%2Bb2Sjw9r3Z5CSIi4JEFssjvcaE35eUd%2FhW4y1fWCpJ5qXLBOt46dIEd8hh7zk8kPPScFGljwawZa1gHdoVcYb4Yn7cPuSqkbC2HBFoF4Cu0z1viltxWKBvj0o5vxduBLimPkDzr2vpBdDdUz4g9WsxTrD3PJRAPz0Uxr9Q%2FA3lS0ZlXbXI4M2zkR1Ei3Bx41%2BHptpGMJ4MqkIZUXooXexJQ%2FDPFrOTDjN289iN6tPZ95cEymXtmqizhzHPvqcpngaB%2B6akYwSK7BoPpReGVMrpfGcxhwBouGFWzChf1%2FQ%2BKDkUxeA%2BTjsThSFYAtfvEKigQ5coMqB5vHQvlG%2BVOf%2FhRRatrKzTbr0sg83bd44rfO1I8nANoBAO0oYbMPLE28QGOqUB71APrJcAb3u7vB5EB7f1pkH7PkOuCXdzD68CtcQZMIgxuC6tpDWJssGO4c63SpcKVHyBlMvNCebQ7VUXPVVMD1nJwH7oRh68%2F1SmoUOowGanWkzlOrfosCI4Ehxok1L9SotK8gmkKhpwp5NDdbmEJezZHictbCAfIXr4hmrsPP1ceA1qXF7kQAtU4f8eM03jSO7TQbz%2B%2FNZxxSBcAFBAX%2Fr10GTR&X-Amz-Signature=a9455779f666748942f80c92f10aeb4821c45fd0394ce0019c64a4c9ff3ceb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW5OIM4K%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDH%2B%2FLB4Wt4R8XgsqeEjqvcvJU9xsNEZ7wFiZTbZDfOZwIgJva9eFIWRNzkJ3SC8Fau49AFkgIflJnCWYBOQ8kxO1IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9eMpySNPN25%2BGbxyrcA0zydNPU6lNsZG9rA%2Bg9Pq0HDAoVq333yB2zM0RwIP0mEvKeuheB4VxAm9%2FqYw%2B5BnDM%2BU61jjRQElK1wo7KRbXY%2BaMgTuKPkLql5ppwy1zEYjLt9pA4iq71G3eB8WAHK4gk9jYxaoc%2FHmjVHuyUELPRnLuv7cT%2Fc4vqU%2FXD7sTuD2uc3chlHW%2FziOn9yyF4hz58Tjz2J21XGthtPaXHvaeVfxoLyZsCOXQTb6efsumlnGRY2aFJmrfx7qTtszwcOODUyk0ppyqFf1XPmReulF4cEIZXi7sDoZRHe5HbJbXmY3yNSiZArVCuzULXENg9U3yLML890sVy1Zr2J75ndHultVMkR7pcadDhKz2kO%2Bv8emn7tE13iYgVutr%2BhyDGR9G%2Ff%2BUXnFUX%2FRa4uhaOFv1FGJq86FDRJm4wqDwC3SKrQaa3wwOMZMKih1%2BZR3EWaxg3g%2FavpXuu7s92QQNPiee%2FLfEaC3aaV2bNiVI9VZyIx%2BM0O1TQOW%2FhZjJX%2BSNOnypb94MZ52jA9Cw%2FqDkCFTVOTvO80Wria5uWfzUFyKYTkpy81655vH3osHC%2BqxfGhptY%2FjPmZucRKGnhepFVml5NfQM1b1FdWd7g0UM6dz7Eec9BWl%2F5wv1DAv0lMN3E28QGOqUBQhauAqdnA1P3lgF85%2FNOBoQ9IkXmAQqFCqBC2HMZ7xEydZQcKcyQsNnzx6U44ogQDszFGBf6le%2BVHgyhuwjjX9ESKTLk3noirP5oxophp5JhA9O8leoTB%2FvErES8QsR5AAlAe%2B7rnNE7ky2MeLlKMDFZLD2tZRS2kO0TDsYHRDO%2BCPrlz%2FYWfHc8IRocKKOb%2Fsoj%2FxOAYLKs9SNPUzw2ZTcBFRuD&X-Amz-Signature=4f0a6f948c85d80252abb8d913ad4fbd7b6ac6ff3164e37f88936f6d11813349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
