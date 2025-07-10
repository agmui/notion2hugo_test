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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQT6EYB%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR%2BxRYeCCXl0CaJ8jPEMjKDHKSKd1HzN3qwbCmWDMIeQIgCrDC2%2BCoioqJm%2B62n9PClwOFwXrIKE4PoJhWM3qhsnsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyLdnUg8bGe2HJJ5yrcA8QCV%2BL8jMT4cfgdL2yUnOaTMHGDIptSx98JkvSWqHs25cUZWgSE6m1ZP6oIsagLDeSLVXP3ya2QO4lhMHaLK28UdChzXMHkTWlXxpxoszukWnjE0eMEaEWKOqo5C045lSAfKIJWnm1BeV2yUvOcUagkGwo4HOWkMBPz7jkARk5HYRxT5M2tTW10qMBgvLMg8DlFlBYKqAC8L9l6xm4PGaxhAE0F8xKdKjARtGfxWTbyRw2i7QqPDcZlIfioBmw8pHgUB1siY%2FfOlujHL%2By1DOfBRGOQM%2Be7mylDwGGGzlv2aEC7fNEvVUvqhYah2xoQaRiRHMXF5L42pas2whNMHxM4Ckd3jnR%2BhvpTQoRWUmIVSzaB1082eGF6G3hfbn2QshdsJ2oqIJ5n7s4bRrCwux8c7uTOHgf23RASPOPqgVVxzskUK1qbiMInv1dQwMHadAD2u%2FtoscpuHjUMrM6gNEenQJeSjOdfdzzmHU88QOkvzGcHtHVi0EGfTVdQqjMwRu9S8X%2FqTgfvJoB2%2BjAChs3DZJdzhd%2FNXEWj4ds8Gsh5jVWGjYidm3JGiSFoU8%2BUFMaiS3AswEpl0rynlZASMqx1M2unkNKogrHfhzgI75vmXf1m5zvZl%2FO6A1LTMMb%2FvMMGOqUBPHl8jACsHn%2BKFFC6QEHdwHZkgDZ56iBgxB2kdudxAZvdHRZENV%2B05e9HXMBQSDZJPxEsHhFYxLSd6yHN1KnsSzOQGqUL04xZ7mmqL6wDtYMXpVwI0d9dmV9pKbvm1mkqY1bQNzYnrsGnSO1iy84f8vfoh%2BfNF2KzuLzlnMUCyKtnN36jsoFathOaNOpuH6pRWZ1EP2BIKz2MaxXWdEIyh%2BdtW1T7&X-Amz-Signature=f24b08e3bce993ac45ab3bfdf0367d068ace3181e456d88cf7135b86448ad35c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPWNCJHV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfI1v3TqqhN8GBPefJsTWiJV%2Baflw0V4zUrcV51qYQhAIhAPT7Xlmv0s%2Fy2lo1s%2Bv5ngamEjxk9Bub6E1wyXGDjXrrKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3rRTEAXenqVICUY0q3AO0KH5mvqsGs%2FPUZefPEZts4cN5TXB5I5Xrf%2FswydxQ4KniYwi7kUyrYM5b2PyiqBI9f6hY%2F0S57gWsyau7wwpLn2rMym6l%2B9Lq43DrHwfsA15EtOakOvrLLR2HWOKWPBkRXqxTEnxrAVvDJTTt9yRxWoTzLEtHvpZeWDgf7Etd3qrwK5zxudN41idCYr1z2UHVmyt6hKmO6%2FMHzFCfUKK97vCJpXMyCdQyRKG3Yl%2B4WBlYg2xvzHGJUz%2FhSrPvda40KwTOhpL1fGJJB3x9Zb2jvIJmOPugtHdTtnk706gRDrs1quaM11Q3YFx%2F8PqjYiluaDphwSEzHSh6%2Bg1LogEzLPFRk7LT2zxXsp%2FtIBj4FpKaZUgv8XP6zsFQ3ZnnUfNf5oYYICMsrtlGM%2FN7YPrpUhJB4aaQ1cjf2myMNXQwEPGbkUcvi7FqTtzPEsjACQw0iuIW7OeiZlP4JsTDI5vSHbqob7azEco%2FRmEqJ5lMdtFks5mcd8Wu4qzKBMF5iGm8YS4Y1QhngAxntfbMU6Wi%2FTkViZjtlcLIp9GyUdMeaEyv1Kap8unlB4H8xFGoI8A3gfIVWhNNOYTVtPdeebL5MRI9MEcDfNVqCx%2BJnc1pGZJ77OEYL10EFLEkIDCg%2F7zDBjqkAbcXoW7hPCjq5FlwOaElCo4IPo314CBH8EJyudGNPK6Zc4YF9N6bWHUxYSud28dTA%2FlAdOixbKGGCgTp%2FlLB46B%2BZiUMiCLmjI8M8MpIlOhL%2Bbm5J92q%2BcQdlMFVgnBEqRtvcjphMtxY%2FuQnatcinpjBfy6lN5OnHKQKgrEOdrnGEUjH7hg6aGYPUqo4IhLn6jMS5gSgjMOgLmq49YUJtMatvmqC&X-Amz-Signature=f594dca1159ee01d30b38418b70f76117cafcf64fde32f4fe5bb8a80bf856b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
