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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4IH2TXJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAHndQOyaiODluMBXPRO7u41hTF8bXpB7cHIJB5GfI01AiEA7afFUL69U8XHrO1t%2FGKurhGeWRJxAhKek4i9IPCEb%2BkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPAD6PyfVlQTqDM0yrcA62lrCdMVjvAOsrbcpxcFYk8MymFEPZWMJBHuXDpNh%2FJEcHBEUBkjFB05lid4hKhBTaju50BtOnZ6LucwJEqXoPi5lbVcTrI5DU%2FR4f1qS%2B9QF7f6da0qN5wC8hnOO95LRijUXSSdOZpxBxEu0tYNfxq3TvLf9HSoFAshmFFeYrqhNvn8gqwHEBJ35o9UKXQGQdUdGzf1yvk2q2pMA6IrRssGU3WwlPvP8dBbsiSS5uVNcjGFxtSnwzpsHYMoSNP8fvSiFMybPKF2c9anqVBny2AgPEqiigce%2FWk9pe5%2FmQK88sOwBgOmiyHX45mUgbzySr213Du8yGj3qM6q%2FuhKf7720r4qvQ4uKuMTCGOCdR8QGk9eySEbqYpPc4UkNjt8gz4DYoXuWgT6smPmXxjr%2FbBFCnoX96gwbbvDs7KF9Ly8YIFA2OVgV2kkHhf2ND%2BVnnSF0urjvIJYMcSOxz0GUW90iN8U%2BlA%2FNtJ1pMx%2FQRxLrkvXTmatksWtCtXuthd8JYMa20sE2IqG%2BGb7jRfbMFme3tbWrXmnznVCVKGa%2BBSBvhSxnY0fPBVdr06CxMyp5o40RJGRZ1tPgfc4B1oRQDOhGT7cA1kgYHIAzvgen7TTm%2FprVC6Jurf7%2BBQMJ7LvL4GOqUB%2B4KlTy4bm9v8dDPOWSVvsnK5X9MGokjGR8qk8Jsl7kauXglMXANEZuwLkhD1lhgqYf%2FjCJVCmt2BcM2zW%2B2R%2FXjkuvLLSEtANuqQNAXm4lJiBa%2FW7Hp9FiOSJJWDA5GWxkl0gHHlREN%2FB1c3du5%2BVf6XLQsiJGVJaSjxNzGytwLMNiJL05X37suc%2BndQ%2B3fXYI3ybSbAYZz2BwiDDiIeI1qwxRcX&X-Amz-Signature=b241be866a075ca404128a2789218e97c7080c019d3d7ed0f2e6870e1d11abaa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOFQEEF%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFXPy2RYF9oC7t5RxqmF%2BWRE4cXMwLeea2%2Fbs627W5%2B7AiEA0Cv%2FyzQeTQj0efnDmqT9BHU7%2FBSBKx7IZJl7m1R7dDcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx5cmrWZiRYoxAk9yrcAzmLGQsAwoUz7Uj3FqEw6rvWZGVyh%2FEl9tiSnc%2B0lcNp2zXmFEXv1lO4n2sMDrehmOHm4eiQ3Pr6M8zm98VsfyNkoeGJZizab77r6SaN7IL4EEvPcQ3%2BCt7LfMLf%2BH%2BPruw8ZIbeaZUbS%2FKOV2%2FwQlT63ITJm38O9ppo2nnmOAbQWY4g%2Bx8Hbe6HISI2usFFXxOfZ77XSc9KwKoqSiiGXmB%2B%2FrAcsJuzyUv8TGwmEmEPchkvbAItKoJmA4YqGhHQL7au6LbmUktxqzeodWe52QzuP9A2KdDgqa4OVmLQ9%2F22Lt2vntBVJ8s0GX%2F05OSxYo%2BJcDXCdEHM2t40%2FcsytVeH08xXeSKQWUvKlwjB7TInPuhBYeAVWJ4E57OanqErZdcpIVa%2BcffJ8uoLuixf%2B74LngGG%2FFs%2FgLfiUMyPI9oJF4loXjiqWMdRjV8fM%2FcMkjRh3plfEL5A9PXtrH92udtaBScM%2FwBMb%2Bwwk%2FJA7WfIdZ5tBdmsW%2BQowqDV2R1N2IJgsfin762qAhfdrKd7OCW4zYbI1EQXC2tv6GnKtD8DSNfePvyUVT4vPgXurETiALKXJMSN4j2DjTU28lWsgFJ3W1EvGy6Ia4bgCZ3Y8jW%2Fx9SMQIm4MnUVNN0kMInMvL4GOqUBsCsAFOqJpetOgdiPXjAAe4e4lUqk5smeNJCwMURKqbCkOvZvQlFCsT5%2Bhhs1tB4fldZdDB6Z3KNHqXEk4Jt4GAley2x%2FW4feC2Qbj41JQaFZlihl75BiEQKt7L%2BeYAIChx2vKeW95K%2BZFntVryuZHMFtSHgTSHKF%2FocKflqBEBRwy1l1V7FwcseLy7Ys3ruLosejQNRbdXHnEi580kLnOXnkpPhc&X-Amz-Signature=07b991cdd440b628b8cc6cd88f45b1ae9401bf44786fefababd89b91c84f0ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
