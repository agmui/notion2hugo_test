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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6IPJN5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOJQNKybnyl0ghcCeoUoPmG6vuhrs4exlOWE4XndbP5QIgexqloHlXqEIf4KIKBBSAEIHdh2hS%2BnWxeH0dxg3S%2BgEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmVhWFICXZl%2FCbLTSrcA8mDdUnuA7sw5ZwFiY4Fd83utXzhZ%2F0wv%2FpPjzM5bB%2B2AoiQ%2F%2FhHRfnmRxkBKBxm8U9m1I3nY5b80GX%2BWdpLwb727bX4bcMPL1621EydZoYL3H5F4%2ByjRqQzNVwdo%2BP1c9g3HKsjFLlUvMNAMGFW7d2cPXJ6rh%2BEvRWFTkUTPr5VBlI0ce3U8WjsYUM1wv98HSeZYTEmI0GaTUGXJXuov1mmbceD2eN1iIRtJfV39VnNFMFNwoWZQAkW4igwQWwnw6WzrqZ22CoFU%2Fp6144GQkNCMFQm4S50umufLGnrMqxlvaDRip1LPejRx7QvDLDKzobl1hdgzOxHT527yiPnV8qxboY58E2lobYc4g2InDpJ9Ol1ZGqaJBzutT5wMiobinzlcYse726B%2BmxZI0AsgwJxRJV2EHHbf%2FFvpoJT4in5sN19JrLsbZ3MHxreP9SC%2Bvk2jMak3JQnPDV3SlUIiIHNgUjYbXwaXzK2e0rw6gz221vCKHfD7qPxU05n7ybNbesP6jZsSvjPvrhkJ9i4HBo4f58T0dB3UBykd0BI5P%2BTL9mCzrmOIVatfc22UuOv5qFditNiZEG9g158mKUPbLXzchA%2B7GYbZO42Thif%2FKDJzL0UfNsoQfWOvdzNMLmj%2BMAGOqUBcVkhSQgrF05Xyqdn1%2BSyC1Gy44JVywHG5T1CHLgGG5WEGQpcRL8WLNgIJVDNoqf3lCtAb91o3TLiFIMqSiVgSe110PnRaozaDfvVBamXL4bRK5ERiGIavigZqicY8kf%2FD8r0GzI5ph0A5%2FPG3IuN5YLlCyBcq0PZN5%2FsP0CsYQRsIrFd8czapRkwClSOipeSZG4X2ZhF%2FEH%2BltsQYA5kYYtAVYfy&X-Amz-Signature=773ebcb3f9649ba8b8d72ce3bb97a5f0def2dcecd3e3502400b368ca1d15e3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLL7PKRO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNul8%2FRP2Wi94%2BZ1XRyR%2FLWghXIbihlYraVqFO1wbZOAIhAKEXjaHBaYV2rcSKhIYCYDxpIIbjCD8jPQg2crc1Ce%2B%2FKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWSMyGCV78oYaAUKEq3APzaNNY%2FR6%2Bx5UzpmI08u9N56VEVsCYjDbUD%2BgNa2tQrDyHx9GfF7ClwonJhSTCCK9vAIMOQrl3g4XCvjkg2Zqk%2FZX8A3vlCUn2LYMQuUJE9uWSuSxXA4SN8HIprqseNVYlWfxQLg5AW9Itm1grKJ%2FAqS8r23%2BzPWqKyUP4omO%2F0IUGfkIrfrJ2BsuSHGCaJy1Iy8ggOIeBUV6HS9e7yz5gs0rU0AUd7CjXRhP%2FLoDl9ndQyFtlaW5rgjrGsos%2FDi75yrlPhN2kZNOW7XcGXTVMnhW0mK28G%2F%2Be4cKJ62OzOt%2FJnDJsNwmpf%2FOUuM%2FeHVik%2Bb3DCy0GRDnWwaqYh2pki7YLE6I8KH37Ijx463EwU0ekD42Lrf8DhWBTrfQ15sCkXAJyPQFGyY3ai368IauR%2BmlGEa9FXcOPIqojHV%2BW2okIaPu6BdgS1EoBcVQH0Z%2FaLUetEWLorfY6j8SnSLVKC3OdU4kAWINVzDcoZQv1ozQ%2BknguxHs%2FQhCcS%2FAPWqtjEJKLoRPKskDDX3A9SNTOrzX4nuT4QLQb%2BYNmy5EYpFApm%2BAwEZdWt1sAx2IdbtkbDh8NVHKKMIGx78IQYfypUQjfIbuvcJlsS7gFUJvyQlbLx2OegxFiyBSWpTCgo%2FjABjqkAVsXBIEuuqm9pjBe2oxCUOivzTFpPtKiIkrKyhUzNuxXR%2BScIC%2BTUSGCqArFqK1IOT8wZnn89H%2BSEIl8GZY6IQ274dG6ACSSyngUEBnlGLYRo5yCoH823eRe%2BWy5yIrd7nfE7IhO69pa%2FGhOoqJPu%2B5PDXZKHYlGudw1CWFxqs7KOPiOXXJ5k1qb%2Bw0mCw98dLwJq2VPAtz7YhCdGtl0l5k%2B6Yyq&X-Amz-Signature=7c8d0c77f5cafd9210c3b0ff2b7f900d7fabc1e3811f32eae18bc637c4fba33a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
