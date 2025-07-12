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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNHGIZD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf%2FiKnAW%2Fe8h8ycJqbfH%2ByVyeJbQWVm7SVAOf%2BJAnHnAiEA%2FvbYDPM5d54d4oJGYyssXnac4xIl3j5B1XcYimS7%2B%2FMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOr%2FaA1akYLZ3l51LSrcAzgJQCQiqKjy1Nrjs50ZSYvLfC86mkpsjUGZHFSzNCT35eRZIF%2BJo2Pq3FqTE5t3o2nxc7KJZJPoI59GqsZkASbHq1IhCU7NCP7m%2F%2F4u5nk3HY%2BW4vqEh6ZrMWNO49N%2FrTM2vJbHc0KSDh5UHVAsgSfzuI%2B%2FKIsxXxgeQrHebJg4Nj%2BOGSslP51x5p%2BrNHlaNIPGbmF0jlz%2Bnf%2BKcXJsM9s%2B0ZR147prXt78Qldgtn5uUsJbDTnrY2Pz9FxRsDbyaHhoO1aR%2B4G79xpPoMpzs4vYSzXexpyzYlT7bljhCLMLXIMO%2FyXFK%2FD1Tr7gtBOaEtjnaZ8AtO6LRf41jPL26Qe962X64FlAB6ZdcGSqe9OBkxMNJO58PiNm7oAMsun%2Bza3X8meqjz3Ylza8o3N%2B%2BXf96N%2FJy1TR2H%2BiUMV%2BxYFanHWmr4uzJM4x9T664wgF2RPrHfnsWFeFpXG3XNPQRJfh1TuDf9P2farbn8Zymd545s%2BaEdTDK9MlzkGFoD78TMFIPB%2F%2B%2F%2B2rMF8IrA50O5pydD62nGqu84n4vya8BVozHzcXBwhTke4iXVGzit81HYgZi39jD869Zp0Ga19N1QHh68YJWUgV%2BQZRrtM0CR4gRiEF38zwFYSnoz0uMKvQx8MGOqUBwwu7gH99CNu0VGefCq%2FfIWQDvYNAuwCulSMocygOQkT8fFHEwzfYbASMsgdbNtobgEEYhFnMu8%2FGHK36H1i%2FY83SBWWnZHn8Cdi3OIfsSZHadvqQqrt%2FltEu%2BfSGcNShKLuhRNvlkPfxfj7gIIhKtQ3XdRX0jvGgq5K723yXzX%2Fi5sjLr6Yz%2Bgqi13XzZBPL%2Beel3HB6012I%2BdRVrs9VpH5Dt1lz&X-Amz-Signature=a87b4733bd20181b6f3a5f5e37dae9dd8f0b98832a1b3c5ace430554be577def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKI2WAU6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFk4jzyjlrGEBH8iT5hmkCmNuz%2FvoeclrPPATFwtkFBwAiEAhqSZBGd7JiuefG7eGTVcTQN9PzLoj0Wvbl9GzJz7FpwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYbeCHf9YQML4DGuCrcA6Z2RVdwGlgCWbITZAjXf%2BpGvPsVkM%2B1sA0Y4AhYOdG8oLqX5%2FADC3ma%2FPgdPCE7byddzHkXsvR4QGAwJq4rjJvIgGWNIdaVKITPLeIXbFUzvsubZPr1J%2BR7o311dJb6Z%2BVjfLKWsSDFRdicRPAL2ZbpoSJFTVH015Hu0rCiQ3O90EeAvxGN36q6CqHIezisNIVN%2Fr4rDLi0syHswBJD8rrqF3a4A0p%2FpzbCzIwz%2FugbyzEIvb8MTN5yYWRRBygz06j1lUz4Kv5V8AnibHyCHGj7DfFB%2FsfbizwPm0A%2FQfNl0oHOjZfpu1XeErmLE1F9hAJrzcI%2BSNwEAMa%2FdE3EAhHq24cByG728rRMNvFnURZbtLb88DlDCi5XUyJHLeeZl6mwAbs91fVWiNT4tC1BLGLbwzDW4xII%2F8GV4LnCS08c0CC3kyDcSyKK9LzdWpo7DZZjk3UGq%2F1%2FIAx53IbOuTjB7wMZqS%2Bxcal3Nh28iFjahDUj7kS%2FSFZ22v7gOQL6jsVTaxa3N%2BHxpTo7yIKv3OqVxnW8IDfPTPag8hNGnRGEiI5qgneMrutCladZvH1DxAdfEOO46uPXNmxccF0NjGHzuUZOci8gLtoq5VNL%2F73bdos%2FT85bpukLkXoVMJzQx8MGOqUBR9CVYnCGyf9MsHaTdnvl0Ysu0Qcj0uEC7No0E62YwwQxerYoVQ66SHm2Zz9xkXC8mVAGyqhEmZwA%2BM2pjS8IFTJjEGQ8APa4f9uheQVOgHs9kf4LBJVz%2BF1j465u1TleIwh1cy373Jrvl7db6zV4MBd8GIGPqm8ZXDTH%2FSdNIJLNpRA%2FSepeepXCwVs7Usn3KUWr1r4F3URSKhuiDyDYoQ%2BJ4b4E&X-Amz-Signature=521b7ca3df702dc451177aebeafb44118ea6a9952f7601cb4de670cb01d2337a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
