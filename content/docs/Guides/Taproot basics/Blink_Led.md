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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMQQFZ6M%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDStD2Xxw5j85sB9nnPgNMyPR8GybtVLESH1CORpSoUhAIhAO6xCeIS%2FhXU4vpxqAcmIIdQ2zr9x9PkG%2FEZ%2BhU8e7hLKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIDvDFLpurl2YJW9oq3ANr9eklXHeDh10rEraP5okTG%2FI0C6U5%2B3O0p5i48YABlQEiqoqkDKJVEib0vo5L2ob3a1GX9Fm0lOrnlaj3QJsE6mFxzvaHLUJ7WKtne8%2Bis%2FeYu%2B%2FhYwCq3fZcY04T5%2B3YJTuoxEH5EYAYXzIwe0XmG%2FiZRoJ32bUKxTIbP2vBW%2FU1sK2OmYfT8fzCXggoDh%2BBPyKQQ2dPpsQCVI5w3a66Z%2FVqC4wZBbymSBHOBl1Tmu%2B4Cy%2FJL6FN0KK%2FAe5zEL0Hoq2yLPLecUnWEzccjvcPz%2BgzYCT7OVcKglrrqG0R1%2Ft7y0VG7tTr7s8yvP0d1HMNSAsLm7l2sbx2SIwKyd0OTE4xXMMtI8upuf1S%2B6ky74LSsPE4izuiWhcIDHFc8UN%2B1z01BNvc55DzwaLkeshuuuSXSh4PxbqnM7FEJgwIq94BTfpOyh0V%2B6mGUupsLp%2FpKThMy5uwAVIYjvNLBCSW14Wuaf%2FfOyp5ZVg3XHMPOXh2fXJYp7TxDnBBkDUZkFudngVvPtrNV9yJAVJPCZKO18cY7hLrby%2FToB6PjCa4hYA2i3%2Fz8ocJjTr16J2ZPIvoy4ghsmlebipeWgbTC2OGfteIUwQL04TF%2FBDNwD8Ukcz0S89%2BhOGMB9rCLDD4w7S%2FBjqkAYm%2F617%2FD0uYv8uAcHIkogOfdoHKPHhKuAdpRuukCEvgzVTAg943wQFj7oYQ0MRPl7sowjh%2BlLq8gkuQnyhRurlz7CruWeBhmzcnfS93JfGSE6BkFyVDyFkaIkJS8%2B7iONvPrqIXjDVSXODFiogJfGJWXCrMLbW%2FFPFyhDpwTVpVzThdCqpWwKkt1emr%2BTJ8MtIuu7l2BlK4og8t4zn9bKHzWmMH&X-Amz-Signature=afcf2f72c62c63a023250ee6c0ae2b56bdf713102352f7ec555475cf5e11c2d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4HBNH5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGurvFCYeTWz3uIVUfz9%2BGVINkfevs3O%2Fsd9Pf2TS0XhAiAwitPjzwdc3pmPfVgkjqaPQEWVsBrlqwfCFslh1eukYiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSHdstsjEqM9LzISRKtwD07gIMfObsld446Y7FDkIb%2Bd47kwqECDQ%2FlekwKTgyoqrojn2RoNe7xRGg3JasDvHPKOrfnfiENYnWcDhme2Xdi8NUAGVIPhHlSBo5Q5RpwmY4z8mMGfEYHbj91jntualHk3%2Fvf2T1l6k2yOv4pehljPRPlOjTvVq3B%2BqEr%2BnHA3Vz1WGg3RARX6%2Bf4%2F2nf4ag6tmLt0CiKMk%2F919nk2jp1Skv0fqRD350%2BiruGFJT4wcLgnWQ0XNO1AOtQMB3f9cySqPOZaVrJF9P8zy0RDKm2nMAEfA16Ae5kEQB75lfGDSOnNSPq7BHMYlDfYvdMqV7WoA%2B02SMFPqLVYF07ipuXpm8zlBbkZxaJoydY7N3OFowbSlGJDxq6hhcgijzk8MOzmj80wBsYkDvZDcPG54uQhFGbYbl06ZbL2lo%2BlflSAsuVUPkYhwLJIm8Gwp8vnPsPwWXWvL%2FS1aHbCvzxdJ7Ra8S5hczgWxWMDHmn91MxbUx3kbegtgGAG%2FdpbpY%2FgBzBbHhhVxXthqvyUauzaGIqnKrT2ZsOzeYwZM1805Inqgjprnf00MutJaMb%2Ft5sHDfZmSrUxI3CDtLM9Qr54kbyKPEG3aNFM9QkxqO4CptnPOy4ZJPLYE1FC5BW8wkMS0vwY6pgES7hqacuzluEHIVqydYPHE65wLpQkZuO2AKKwYujac61fSq%2F6xCrncWuXadDqT6dolMEw82xxAUb1M%2FSj1dB1CbBrJ40cl62I7dt7Dv1V2oBQ6QpbcdZGCZJ140gH6R9L%2FSwpGagBjdhL23OdHC2X%2BlfjgC67pqhqh6kBaeuTGaUfE1RWNzvdgxXG%2BZOK1SSMfc4mHBGeaxjJk5RgXduNbDLlVGUo8&X-Amz-Signature=ef53b296349acdeefe81af4b26ae18a781e524dedbbaf845bfedc3fbee4f7483&X-Amz-SignedHeaders=host&x-id=GetObject)

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
