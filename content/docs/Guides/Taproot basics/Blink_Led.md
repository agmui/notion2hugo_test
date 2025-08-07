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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZACPKHL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCID6sSfkptDNIz7k9iUiGHzXEil6%2BFtMf%2FQeBFhNnFx9ZAiEAzP%2FWNfRjY%2FvlCRCgcj0%2FlpXjkDT5ku%2FyMe8tzgCi7%2B4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGL%2BBruMDqXG0vBzyrcAxPv1%2BxqFgoQURTEfh790o7pISq0Uf5coAeadONsN9CDVF%2BNSA7wCbSl58FOUJi97LM4Sg3hnfj0LbqkWCSKT2YFo8C5cTImylSbWMH%2FfT1dZ6g3yIbJfdxq9CCGreOz97GXkGbifqiKXBAlUN3Dj8eQrkXMADplBQ4ImT1E78QqdRq9nTGtDC%2BwpRQtl4sLAP9nRHskT8E8%2F0wbK2U1xVt%2BnLUiIOD2WX4yD590bYsYrvW4mL2VajBGFarhjw47f%2BGtMZ9CXdviDDNfGbHaaoissUeYoG48TgDuWZcit6CLMVyv9FjDFh%2FEf7TwWv4DJnj7EoHOHal660i8vrVQgWBRpwPCA1OgvVz8JIpR59btIZ868qgYjofQF0vMOrA2SHCJNftvWmhiODfn%2Fhm7kwYq%2B9ddZ3IeyHsHdBWzvEpzYSpoft2Ne2aYAxmVZ5sHJPDROrZ%2F2acP4jXgiOrBE1vvj8n9UR2UasrbrSMaJ9e3xAmTwTxziZUKO4qS%2F9ejBH4ok3zetbaO5wCyWy85VPosjYgDsEBGG9QssRCpEtnBOh2SDl1iBM5KVM3HfNI1CFUp7f4l6%2FYdOQklaRMwPDR2WZnu3UR2WzUmsRZFKFEVE0rkXwtpeX5SPkNGMKLV0sQGOqUB4TgxUbYHX7EyOgcUuU46VypkVg4TxkPZIJm9yEiiyDWJ%2B34wh%2Frr%2B6nQwSlfeLLbWmmvr54Aa4iyiBn7BRo4fQYbdMvIcj1M3UW8S8%2FBbGEsYFwga%2B37gSZkU8tTmoNUCQSuQaKbjWvo%2FmDzZq8i4qin86x4g90kPZC8VUqjrYJVP%2Brb5e3fk%2FkYbOPF7tbTcXbhs0R89O9S30mDPwnvFL2Lpp8i&X-Amz-Signature=7d85c2ceef26a69fe8cf16e08e6f9aa61fed6b3121d45466d7533d898234ea8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6N2A75F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBVO2dzYNOAGlCoWybXB323dDzdmzeOV1opJwjZrQSzuAiEA6sCx6hn5UQdEJ6i2hrGTwNzV%2Bf2wJgiJpt0a%2BAX%2Fge0qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHjNv%2FkY0pigCfosSrcAw8lj6%2F0AXP6dIZTm3y54eDv8fjuOHbtLf%2BQYHFxwcY%2FMTmZ1uAS74w9SW32xtWarZA%2F1ZZ09oWomw4OGB8K737luy%2B1Emc72MuZd%2BEv298f34oZXzGT472T7sMLlqgWXlMKRaj4VlTgOje%2BEVt1%2FGq3BNxsP%2FHZucef5A%2FGgAsYxwd672Ze610V2luAcOtJGZF7O4sGLunFx5HZxBBwveB28mHYzgC3yPseTeXktrrCeAHxYy%2FmJ2yDOhZgs84hLbDIkGuQzvrT7QFyvv3i4WGZDAFQMtzGzzPtcGV7r0i9z9U6iEyAANJxOdFX1AjzzAX2RGsHd3wZO%2FOWVRPOoy3aBG%2BUmBCPEDqfhVpn%2BBEEEjgd2tkkgikKLejRgroU59B%2BBAINrKkP%2Br0dZHDbbPmiwQeEh4lyt3YyvRy1qTyIQlddhkQr5kf%2BoDUXK9JQFocC8MPlzlDTh7GVXB1WdzE3%2FzJnp81qQY%2BM9oaZAnf4SF0OIjV9onRPFqhcYHvuV3xpRRriLUEkexxuAHKM2d93JPp1Gq8PIvLoIeKleHXYKSsnIOUbnmjsBDDVFkNM5Z4tdR%2BGOOCBxu0etwqTLM2pdAXWBjiqhXNR53PYXix0c%2FJpfARlf1NNaICGMM7U0sQGOqUB9xX7KEwO3gUOqOK4o37O%2B8f8m6AO9mzciCXNkvVgo3yZrADNoYsZY7VTWMQF2Ik%2FoeeDylH4VqJGGzrNvwUZFJSo3JCjTEcFsLJ7QPz5WLdrEawBLieiP8dWHrCBl09aZlGohkxaVI7qCDjtVzJWM%2BUrGwgYO7EGF3T4is2Efy8n8iP2KLpWDy08%2FlIwPT5Ns2updRqUaSRlbHdKsRCS%2BRXa4FmC&X-Amz-Signature=8d675dbce459fd4f91f5330106a40d4fdd56c993f130a31c95b545c80e8d38d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
