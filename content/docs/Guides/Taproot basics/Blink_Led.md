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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4JXGO5Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChiXzdthGVIQJP3%2BA9c9jOmJD1nLMebO0OEeKYjdo0BAiEAkMQxtcSY8F7Ckr7hmVU75oVCkYP%2BIoWrvYoVMs1oLckqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG15b3OFF65MzXNJuyrcA6jQ7MjQG8TFnZNnuafM73CvlBPZDPZ%2BvihZQdTYP%2F1fOT2RKsViTZipj9%2FUGAHzp4t7IKCnQvkxvzeaSbWWNvr%2B6f7Tys4WD%2FEayMr5HmOUovXGtGjyXcbhZlDfsqSd9iIT76vVJ%2B11Dtm1AbHy7mb7byA8acfa8vQgvrpXo3wXVxJ5P0K6GzqdUShE%2FIbM%2Bnt1m%2FGjkdsdnbKvnhCedhXuvwqylAvGRtQDJIFwwBD3%2Bw8GtIYeXg9h2Ku3KS9SZVOCq%2B6%2FcPyDVb58BvolQrrNAWW0JvFcBuzqMHb4f1sJDI2PDlBF0c2766Lu5q%2BDSfkZ9Wz7PVRD7ZD0IrAOl7pBu%2FqAPuBDtw9zEYYtO0RAFeEOrOxTFxIjvW7J3xoq8KYnA2C4OZMNj8QUgS25c8xsJz9SrQok1oIS8bB9RbVsSkX%2BZ%2FwLCXZHKP21w1QURRbBBIph7cbB3O92IrXIKWbNHOxFVcQuqgvXYc7pPZ0w3MNQwBexmK7VSbvCmoXVomZSL6lGIe%2BEtW1eSSJs9lEUezMr5TJ0aEVkP33OsChtWTcE%2B984Pv2YaUNmCReC96GMArRiC3kgmE6IV4cu3Ibk4x7gpZanL5LwnScFyBSBjBXUna%2FWA%2F2YWZruMNLNi8AGOqUB9sV8loscDUbgJmhgk1mc72JN9PouuGVj3xEm6dRAnoCFYW%2FTyyxze%2BwrpmvNzDHloA%2BSvYf2lpMp6iiX0mRHUuJl8NUd6sbkmu272zOQfETx0hT5lkRxCs%2BEoxzDKte3jjTN0v7y6fpqB8kRskJOI1UCz97mouVXvDr6%2FQukEft97BsIX4basLrsuFqsG%2FlexrvYOnew%2FPVHeb4ZQm4%2BpZgX8OsB&X-Amz-Signature=b1125355ec37e1bd721f0c9ba3a48e89e34abb57bccd2b9d2564fb05dc9cc08b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JEZL3DL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FffYjnSj30QOW25C2INeeT3dKkrFq0W4uE7rK9dFOZgIgD5OAHvmj%2FPqUPC4CuwCiSsyeEoCSqAXpjBLAGrUkAhEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIH55i%2BLymmpikXicyrcA%2FGrRYN4y2YmbiA%2B%2Fh1FKF6Hbbdq4TQmUFGFucxlWakYjsSsHJgVpU%2FVbWkeFw1kofweOVA0Q5cvYflfyDEBw5D8PtxIWxIZ19u6gouzws6n74S8tucOVDt6ih1xT13SsRWG%2FCN1jpVRMnKq4MJ%2FyS5BzY8Ahtnofv5SXhkJrSDE3LN%2BOvMRYkZakRrI03Bf6LrQ%2BKwJsnLo6EvnLnRq2805NnxfdXyKWzDFqCYdegGJILf3luE5UJ3WLGts7rT071DPK99pKsj7QZ2JoM4rQvohzERfFSQnbKJ2B27hT1dMgeEBWBQsX1xJmTzIz%2FcwCjMkcn05LaOW61InxmJal5sLSVYQYACyGD%2BguHMZgw9DpxeJ%2B5UYnPgSLGgukIqh10S%2BCLC347jNyHzJqRiT91KTsWWmXMhTcu9Qdvz%2FZoXi83yl7TTNkVMba%2BTwwoKHa9JUeQLyFBzqn1EbsIQWg5QYTVx%2BKWnbpnaKdVsYdMZz0lgZQqr%2F4%2B0NVTZ5YSeasICHL373oEIkr774fnDAKS33mSON67GUwc2Co3IbSv1SRrDvWKLj4wxD2sTfmyq%2BgRUAAGopjErluh6%2F060S5c2MMbwyVZfP4g5548v1%2BxnOBZR884QnyWbgRh%2BcMIDOi8AGOqUBaUtX%2Fa1sD4I8zr1DL%2BI5CPA1gfg480xNYO1%2Bim7s1YIIY9DdKegh8o50bz5J0irRiTvoqzEMSm%2B3JCfC7biO3xSYX4qvBOhCCukpyLdN%2F0OlIgWk77ySAP8zetXEOGNCFHCy%2BA0gTo5K1gbKJsYuguPL5SeSyz3Yds3DW8A02yo8PwefaK8zKpeNaR99gzWTxsHXAody2CCHZuDN44VX6xWJO0oF&X-Amz-Signature=350559082e763b51f1cb250e14f4eef47ba0cb8c1e9afdcf5ea5988649ed966f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
