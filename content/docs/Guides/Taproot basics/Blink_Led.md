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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF7CHG3K%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEuDpIfYo%2F3GVyuDMszcDsJSyvE25Vu512AjMC27K%2BS9AiEAgaU8tzeiCHvzaKWg7GE5RtS1J4p9vaK8ZpAvebUrsqYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGNv9ToUXeGg3LfX9yrcAy%2BdYsbXR3%2BaqXg7mLPB7eiVb8Dx1aA%2FNyuna4TBcJwrekpP5ENXziiyjNVCxv3lLBe%2BpcodHi%2F4tl7wXrtj67d6yns1SZxr2%2FkUbUtslEx594b%2FaIfLB6Xon8fGpSI4YS9xpI7QT0lKFGgS99gN1yPZc9Wx1msO%2FEZFHAU93dnYH16%2FD62tXmIOE8OuZttYH9462wCZd3H%2FT1Cz9iHB6jFr6TnT%2Bg94vHE%2BTOo1k140ogP9ZQj%2Fyc3cAwfQ0dRMJEv7RGQvn9s3dTpdpSkFpp4%2F%2FfRkU77OLxb0gduUmOsuZ6ljzD98Ym8DFXCblXLNE9eVq5HKQBb0UnWL%2FKsFsiaEiZem%2FX1E0WTZLvNO%2FyX08EZLIeSx3dZoLCBY6eZ96jcK9RvQRL6M9kyQJt6sthm3im2UEuezs%2Bh53fn%2FPoZiX%2FSDSmGye8w%2BnsSGWNi0foYLWd4%2BRAzU5EzXWth5JXNwiPp%2Fay4ES4G3mvbOYJGfe1amVufdNROYxQX0jd9bimvhL6WLgdrdR9r7ASaDW%2Br4QPc0L7oXvRFMQsRFsfUYorPjDCbdAx0w2hl%2F2SchWozY%2BxWnzCZ9qcFCJtD125SllooYajQE6obcjTi7JMweuuiemYdI0bRfGronMJzR4MAGOqUBj849h%2FrVOKooaoOSXqfop%2BJssExP6X3Z8G1ym%2B2apbKCKzWevGabtleiK0lhyf6jNC%2FUU5YPtaZvEo8uMZrbg%2Frdn2IeihwsX9540Ei50ln8sHjSN7kBxi5c7Qbc4fZEprplbuuZg5vy26g1sDx80nsLg7DvgkmyhF5LX63QtOYufH9wDHfIQfiBEPJJMXYk6qIlN9d%2FCjIKyuYwvRnR8ZhBnkJO&X-Amz-Signature=9bec462224454dfa2a70611cbe750665c1f7428fe7f9c5af8c65494b6bdc5d43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYSUKGW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDncXjjD47eUnXOZMrTnUZj%2BGGjZwUEYv%2BMFCAs2untlQIgVPgJJY1oVnTEn7meWQbmxecAu9vaib%2BRq8GF5Y7YVPsq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJC%2Baua0HqiEyCKKIircA3lh6yhRcHmk%2BMZgwjF3vR%2FG1zNALf2Zgfh0bO8J0RN9BJedK8qFdRpmP7YGAazto2E8emiekUf0AX7Y0KDqdahceZOOaMQ7PnQR44jQlWGmQ3XiYQkAK3vdgihzVJZf40TUBXdBjKqLszTjZCtcaenArr6JpFYrVv5fwGr6njC%2BSaKHIjR2ApwoSvWMPglWFGjXqiQAFcPgNJQx2uEkfjNXQDSu%2BURjHbRodcdtUlGOhauHxAENTQ4EcX92NnxqBvRS3l7moP8CySUaD2HvnSFDyK%2BLBSyIoW3JXiWGGbFB0USdz4qlaVGnaipFuvvc9T1isy0NPIffVUe%2FjN%2B7EruqDb7qZGq4p%2FqrcVo3AeJSpylOPwD55vyNE4SoY8h6OT1O0CGyDyFLqFhf4XfwKePi1GXnZ0vh2uZnPlyJ1IHCt9sEPy%2Bjy76pM1YfhIJWVpVeGfFFHY%2FibQiqyH%2B2Y5Ixl2ViVk4pUQWWWRQbBXAY6n%2BkI7jcjdNZZogZISkNHGBM0UBF9fflFGLXNQdtDjpZV0uEtcFLzN212ri7n8zIJdWIM%2FoAy%2F%2B6WENv4G7qr5itdXLIC5gdxTzzqeHXJfUDOzMfguHrQhvhOb%2BQfwzAU1NGAI4i9BKVC9VNMMPL4MAGOqUBdSxEvCqxwAaLmtMih%2BGk4ybOkzI208%2FD0ZiBrmBdvEfTp%2BLvzCysnJdVDXT%2BvosSioR%2BeR1RHBfhuO%2BrTqKN0tVr1tjAWmwKBoXvKFzQOnoeuAlKm6Su%2Bh1GsRA1M6Az6PHCLp5U2HJXA994XNLL6X8nWYikwnPsJaD7Q3lZie3bQtBox6DsF8izwW4N5REDW72Txembn49jf8rI5lfPIHI8wz69&X-Amz-Signature=b6e7d0dd2deccec4914a43aef34ab0971c2026bdc128d240c381d7238b0ddc70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
