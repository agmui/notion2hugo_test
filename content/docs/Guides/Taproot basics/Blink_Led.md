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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WMHN3FP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXeSwxdZXq2Wg%2F3kzqnvFEOx9yjlMY%2BXi%2Bqi3MPwngBgIgaF1ruTtCL6w0KqwejCVIOn5l0GK6CT84UjgJKzcOMNUq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDNgp%2Fb3RxiNzK5S1LSrcA0cQD7uFb4kD%2BFRex9BEbxYEblqR3omTvNF5hlhJQN261sh6%2F4tWU14THHuya2HVOB%2BSYpX62ol9CQF26gR6vMwwAeLvjWZZsNhFsHqaQqyxKP4T20Eg2e2gpMtYxndc6M2JBpfn1S3qMS2Mfw%2FHfJUJH7I0JTNcffBQVRj255Y28qBNRTl%2B4G%2FTxpT0CZIGp2KDxq3UABt4HTUrKrkfe7XUkpdJeLNsJ3T8DmZCIQNjjz38rcIyUsJSuLNmkhYW6xRzlmUtCo02gJkmvnj9cjHGlWd5B3rGpXTQAcHX%2FlaQZQpfc1rpdXiVWz8deVmSNnbUsQHSqMB6YBgCwvvgJcOK5PMHVkd9sidBhxjRota53sjADdXnFAcyewMTQeM8gZXXhvzpttmITbkoxEjNCZFbehUzkq4sv9hIHdhnqyS4GXJAEH6tXaeGxk0R0ZxMI2LU5VE1KRRtFZAIRrv66lAIRPXIPPNFTc6702YNrzcevnXduQ4Ys4OHuKTI1hlCC%2Bt%2FAMuD%2BVsZBkwurcKZXyKCtBHq6KxiFYk7ydIzhjQChTQZzJeecNEnuXe5tN%2B8tjq1dnAYqYj3dAsIyzRL11fiZQJMgWBShiYxGyMsVQBXIxHIUT2kYlECv%2ByMML%2F%2ByL8GOqUBcLXf4HdaFfZ4mAczzyAsRANIA8NRSRKIXFESNTtXKPs9sip0Lh%2BMH4yQe7l6nDcvjCcJw9W7KtV669B%2FISvwC5c0n2GQoO5bmjbS8OHzqnV5%2F3%2FQrK%2B6Wn3ZhXKgD%2F8qVg0Ssy7HUQ4eL4Rg%2B5spLBmZ0%2F%2Bah5CSSs%2BBPFmIArAzcLyMK50XQRJppPA9YN3zwIEiexh6I9pIMV5CLHBrg9fYJqcM&X-Amz-Signature=2536e2d03fcf9459d982efc7c2e37e10694f7392bd1988dd1d7c0acd2c678799&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FAYEM3G%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC90EBTjIIPo3GIBgYJIZ5Kx1Y45tcdR%2Fs0a0GwTBbAZwIgXeicelcEEG7VqnTIHRr9fhGpJg9OhPGgGMQiMk6ZpCsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMVT1v3gGGJgGi7o7CrcA8mdLYdfTIt6ZnT1JTjFEykkWqA00PWw6nakhSLwSwgk%2Fh7Kjh7ikswZRgjNbp0JbTliPvEmP9DLNi%2BrJu3o5Tid6iVj7emwneEk2VC4gOqCfkEMIpbje%2FmUrhGeU4BelGOkViXfwN%2F3QwtWewA%2FR%2BfLYX3tLhUjdWX8%2F%2BOyMttX8SyqUcw16dnwm7jnobCG3jpH%2Fo%2F%2FkQRiAOvPy6eNem%2BFrAoIfJyl8zares3Po50O5CNwdWJUPj4Fbv8Nke1EHuk87BW8AFng9Or1qiAondfVSYlA43KqJ7RAXSaKmxP10PM2I4mPMiTQfQLHiD4ghqY4DBTseX3MUvEzVnh5yeSTavWHqB4npzVVvrUJaSUhRhgqcPUysHrZfOzZ0Yd9e86txlJWlvbJBZp10umnXqYXvr3QCM3x1663tPZ89KNenAHQde59HuAuON42wX%2BC%2BCgFPkOpxiZIMUp5dbcMnZnxYIv28VwNcjrXuqf6h3cb%2BMDU1bfzh9dCUUsgYxgSBiNKxmwTu1KPVaB%2BEq8GRgstCXrvHv9mBzEzvBD6ADyzdNb3vvvq4ZmmrgoWWhjEVVLP5O8D5jAY0T%2Bxda4ved3YLsQ9hAm8VTUpfcB9juUBMyyet7NvypFTFfRfMOj%2FyL8GOqUBHYd65EwoncqF9tUKFp4T%2FSTfEa7U%2Fx6glujBNqeswq9FF0Wq9n8%2BENtqrNGZmDBGroogULYicPkn8Js9vu5N32B%2BACPf%2BriUyviLeuovPB0ytiUn1WQsAychoACmw9ovKULy8oXKSJWHsNOouGB6h0x0A7%2BATB1X6mibt46CpSPKAGcsZkov1HZz0RQSr3ROcWdkS7KvvdDliA4hiDpblKgL6jiK&X-Amz-Signature=bb68506c245e5e75d17dfc3a1cb9a83652e40315a1bae024f5caaf3372ac790e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
