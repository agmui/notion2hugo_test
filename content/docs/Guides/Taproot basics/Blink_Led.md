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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXWXYHU%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2u2F0F1oSr%2FFYL6LH8OD4X583r8RRaqyup0F2ozoa%2FwIgG7m3Fs%2FhUto6ZagkXWmORsGcAZ%2FCvjfP%2BwyU6jnEI98q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKpdHb2Msq%2BMr%2BnXDyrcA1wt%2BX5XNZO5C91l56Hzqa7KzCotTE4h1nNpgHv5f2UmVYe65HeW1wKy7%2FdcJICD0oLZxh9DcvyICdNcjqAIu8B3IIReb676ZHaX54%2BDj4MJd2xqpV%2BSS4gAMXVdKtLeD%2FDqw4ZybOUptz7jT%2FsGbRHJV53HiClkBge9lqORGVtl%2F3uZKlwmSObvy4jRgBbFlaLwz2aDwgdBb%2BFLHzteJrte3XI6BcU1T%2BaF0aD%2Fkyvz3kMcAU5LYvIRnN9RfIvRSwm9ec%2BGlKL5D8Xvw5Q9CY4NWJy%2B3WaJRzGIQ%2Fdw%2Fkiyy6qCoL9B%2BsSqPvEDpBWdJlCg1Hx0BO%2BBWuVuKdTvYGfcVL6hRDcRY6eTYlJfrbQHMF0F1CwNKtz%2BMGEbf69VbwFr1veu0jVAUeLsIyUDRBIzJf8ZicCr01Ly8mdJiSWkGI16tQobA36aEa0TkI1LgjlwOHHcEgL0y%2F%2FJPh4gw85XIqhXpL%2FkM3RsdOxGxX3DINvhI4H6Twve93gu5l33kEThxNd%2FnN9l9AVn2Clk5SK7zLjAPq6jg4PiZQhrwpFsddkfu5a6HczMEvLGRspiMVPrNQwHR9vpT5o8Z5ryC%2Fg87HDv1m30DNbSlL985WzZPHie4HtjWlm2gh8nMI3w5ccGOqUBtq9KP5zrpKy02Yrcy5jKcb%2BF4UtqA0ePkYUgLYZfGuU3nuFFoE07Cmjr3kKTf9dwH6AI5ej02OWTwds81mg7wyZ8tI37hm75Klq79kfFfC%2Fc5VGGRIo0VMdZK9mv8ZWIgTluDNDFDjIadQxkhWiFeaEYlWalM3ihomKcJsCcEbNUW0aPVn7dXptSmSSz2sj0j9HTyBVwvcQ3dcP2On%2BoLs8JxQ1D&X-Amz-Signature=3a6d781be54596b14b7bd03a0fbd10553c30f645e569e93cae91aab1cbf991f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4FKAOAO%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXwVoV%2FcEjmA0gxej0l37tY%2BtmNwI4Xm6Q7XiGLxL8BwIgbKqBDxshSMe7gYTDOb0uWbME2z657x%2Be7JMRIj6e1zcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPU3S0MMnfNV191OMircA7RV4BjSLYziyvzSo5SPwyc3o7iVnH15MaffTna7glcY0a4Mx%2FVogtxxdvO%2FhgPJe5Vr9Qmg%2BpN0wxDsotUz1nsTGJXJyHrygLS96qPBkDbxAKb8APBKVqlGfFiHAh%2BCDvCsH8TTQ4I5iyiDtaFTCRMQe5KTiOIMay%2F3WV7Q4CvFjp5ivoKFm4UJLeuadLxfuT9Jvhm6ZprOloq9DIJPI4RJyunqUhn0HZpeWebH2aqP2bWJufEgoa8qgsBUE2GlS5rXD%2FRLq6gfb6MZNP8VNelhyaOahCkiu7mtjrI90HJI4rhfa6Qx%2FksRvH9Tx3xLiRV1Ltj7Rh05tTPrzRWLUryQt9jK13NEuz1ZCvBV%2BbXQoUluPP2qTXU4aPOI0ePTnDkxin5IGJIsZZWiOJAKI9PjnEkpp2Q7H%2BTxv1OnhCWFfbTzJvmv1CeUZWeGdNnlaa8vkpNZYuHykSSj%2Fzds8RE4GARGVjnl1Fpz97cddE9CvD2Q0UBCNNijaunvDLuEeZHG3x%2BTFD9VX5r1qpFzHZjPyO2FG45A9S7Omo34Uxtzxs5Sq663w6qwMn1f1mNXrbvZ1moKKxGOiyhnAe0qhAD5fSzUziGnfD%2FWuIsg7mQvAYSq5I9u8sTQO%2BjeMLrv5ccGOqUBklsc1bfRmgQm2lfWjY2fD12spFHlpmDA2eRregKSlqKQm%2B%2BZnk7zT6SL2JOIwolzsk42D1dZ6HTCd1GpFqCYFl2RukbR9Wv9tJ8H9MnugK74vSCYnei1y7%2BQlN3vHh%2BwmVu8SL1BWyKFoJHsKXK5G1P6hQCYm7WYCZWLTe29eU0%2BfDbzRVh4aVMkZS4zlQacai6nb9kdnOoI2iGUfIFn%2F4HXAANE&X-Amz-Signature=2f3275f357a1e0f47df552569fa7f0234d9dff4fd07aab7ab5f4ae332532723c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
