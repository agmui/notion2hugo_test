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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XET6AYBS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIECaIC%2F2%2B5yTAQD%2BW87rZqqxoxNGQ%2BmRe%2Fj3NLW%2Fcc2wAiEAyCLHeV7N6i2DuPOR2M8xrF%2BB0q2ELp%2Bwn4AfBA%2FqanwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTadCvUM0krCURFGCrcA5VARkWoDdQyYxVBr20fi6PrnvOdAVhTqHQWfPRRIb8N3%2FDDw6iVQaw%2BUfe4rHl85no8X%2FJtdNPIu5lEcXsMdfb0Hyq7zBcZSscZJKm0iGa2qQIVHMrTo3yp7iQ%2BsLmpRaongNhkQx72bdzUQr2jqaHm2EjVcmBhB7s5%2FNTfipWuG%2F%2Br%2B3WplU9hDGEPgP05oqOjXZ%2BKPKD%2Bav75xEs9HMq%2BfuqdePixyDi0yGU38X8Pht5xR5nTuIh53AArQODTuEe13y4NO8S3yUpNc7ErrB0sS51ROGalmYRhwtoTaGmPFudjw69hYp0vMs6N%2BpN1JZKWEaKbm1GL0%2B%2F2wtxPxblQKEhngib2S3EBrfHDuv%2BeBd1MGSUIKEQNQYaZWu%2FKita3%2FhQV2UdhdnxP5nepxv10tEfACgYm0FZ6PfmqXLpTy%2Bl6QTyYFfRqgXBs4SUTJ8vEvdL%2B1T7gI4bQlYv8zaqzdBHeMtpzHlxNKZmszEW94CkupnXN1h4Bh2vQYrapxzB3QBqh1P5L0b8BFUdtk0VVG7J6aE0K7CnI2gWV4s5zn8iWx6yoSVqoQD68%2BgPj%2BRMHVh0NGIrmILTm9zDAJn70VBr43M0Eg5Qqv9vEUkso12l%2BEAapbY%2B6W2gYMNmltr8GOqUB3mzPfx%2FL8fAg0w7P4dH9vhj0RSd0ahdMlTZ9YOmcKP9C55LBWNG%2BUi%2B0E%2FH8jCO5sJosNupulotK3X9JQh7mvoAA4dlGHLYsvcsTeKF6hZoB%2BlmGqOBBrbagJNaYjo9l5PndXgGWUEVMm9fqFz%2B%2Fj3Y4%2ByQzDbkMAp%2F7lxGecIDTPK3GKAZpqGg3q0%2F6XN4e1qbS0pcM1kpdXkKh7mF2QhVN8dDU&X-Amz-Signature=e3e8ce693daf7bd1f4110cbfaaea014aaa02148975c69234f7aa44dad22e6255&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RDSVOP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCqv6o2M9zHAaTzLDNqoC3NGxr%2BBQV10D494wWYa3c7GwIgCaqKzLl1S9b1aF0sXD%2FfFXFXvEAOA9NWHTXnwyYaoD8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2Uw2AbZTNn8H64cCrcAyPZBpCzgwejaABuOJD8nUanKm9TP%2B3GUycEVMMnZiqBzZ%2BOd1%2BgPY%2BXHhbhTedt%2F6jVEPVbmtWMbp%2BTLudywIC4Kk%2FXgzanGCj1UNgP0t5%2Btwvc82%2BBaRnDaVFPsbeMns2f2Km8AEzrY0uOqtRN2Aw6tygXE%2F9Yl6%2Fe4Fg4XPn2uqe%2BXQY%2FvYFzO%2B3UYoGuPYp%2FrETVHyszJg0uQsZi0IgcmwGjHrIE%2BfIbMVN4E4tiVJ03mjCBSU2w000TN%2FPTEaJCLMu53jHxKvpzsPBhjHNraR1HFv%2BOX2wzvKFIS5I%2ByOK%2FjB4FrvBWTEvBs1Gm8RQoRed9EhzXyv2ZdDsu0Jzk%2FNslFB7v1LRa5RXGaNJWzUuIyfD12PLa%2F236VTDFdsY00KpdJDeG%2F6ZucHPiZmoJCuhOL%2FrPWvaQHP5Ope0PUCa0lDEmf5Ho63TqZ%2BrwtfOd1Cw6ayXVXdUacT9dazrMd1nUJcFlKkiDIDHTv%2FFlHTxL1st4UYs%2Bm4zehDYkuYWh0HycSZFI2TX9dCdkETQtbPPjsjFrN5gqT32bK5LIrUHqEQIVb7OmBEbxXprXojujMzolgg903zPrb0UXbdx5qey4XX1qFeIjcrJYC%2BPqAtoqMDE6aLeakvrZMNultr8GOqUBg5NXjRzHshKPI2pnVeqpYmT73selIJI%2F4axxTbwYiI%2BqLfpHVHjfopli4rDyV5wVS8wN9r8MZEIkR4bOPKDqQadS0zxOU3GRBGQ1vLcNSTII9CvMDX%2BIzfGydC8TyG4sYgX8TAsUHtjaH0L3vBVyoOsZTLnKtBPL42VaL2%2B4Xk7G%2Bs1Y1bSQme58NmowUAPp7UyHkh4LTZzhQ7sjSlQQHv02ocpz&X-Amz-Signature=8d8f7c20510c22932213e8194b596a6725e7d0c8ec59f8d46ba4f3465aabba97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
