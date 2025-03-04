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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XJ4QNV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsiKF2wjVB06%2F8VRyG3QJbhzfSlGnkFylSL3GVpBv20wIgUVA3sWOj%2B4tZyKOp%2BwKiCpATIGfAi7WogxkF1XvHsI8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHs7h47DU%2Fk%2BGwhm8SrcA4DAl6ujsS6Ke6kbfl4RisvRhnZ%2Fwcgd0UQp4l7H2XZtl5x4TvSfT66zmGV%2FQ6juLB5pyIOcq1y%2BUlw8UzBdcePDWwGPd3%2FnQs0bm78ElUrq74gtF5NeKXHLH5Kbisuv7bBwccG2%2FOOPnNrk7oN09mDqqEJZFzLS4rl7wMaSFU5YhOdTHMwpWAqoUuos4XEQGTsevU1zARiaWPWSp5fqf%2BPAWlXi%2FpJEQieMGtUDMY33VH5n136z8b%2BIA%2FwrPCvTg9FI4pxN95onTMBL0Sg%2Fqp7aYpI7ILzatgNQwgqzjiM8E%2Fn8IlG%2FpRZ6eVSnj2Jq8iuD2TMcozSjVxFdD2aa3tJUwF4yhyR2gtxT8jY7I%2FbaG9lZMCFAxUCNP5bG8UGzIHDOC7NAHsNyNS6ivv8C6y9RUH01TGPXg7G5XUopNxIkYdkmDIA5te7yjwH8KaEAaGKN5ETWCefawX1%2FNqrP9TZuznTaLEv%2F%2BJmYew1nzOsE97FhHm%2F692xJ1w1Q2iwdItEcweQPpFLdHnX0lFsTRijDcRTYePJf7lCnYlyHqAuMzaWvG9ULKn4fPZW3cLSTI9D8WP8mJyuluI0YcbGpxY752uepdau8SZuZHr4DM1M1noOFnH3z60uldU2%2BMMjFm74GOqUBOLLtcwylVLQwmBPtVMJgk6zIqC%2FogtNkXHEdnPKsE4zXjUB0aNa6t6IkntRGpyjthfShewbZOhjD5Pc6%2BQi6tgrEVBICPO4xwDnvN3jsU79cgAvbbc%2BzALunKBC3OvVIUakjU8effQS1jZaG1xb95mG8w5V8l5GiY3lz%2BKS%2BwEPG0o2A6w94ihVkwGRShrPJBy9vx6evtUF3044j5f6j%2FMHZDBo2&X-Amz-Signature=6cba8a742effdd8418a4af275b1c9808a4bbd987ecacb9d639049e0d81b28738&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ6PPJ6A%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFC21%2FXs%2Fu2Tx%2BRTbKayDqIeRPU3gr7oHuXh4zJVldV7AiEA8trZcpbRz2LrQoNgINXpxPa%2FR3OqXQ6JcvSwax8zwQgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPauXppADjrs0PYj2ircAw9scEcR8ADd%2BAuSTD6mybswwpMAqWFn%2FsMiZ1ce08meC0%2B0EVfWC2ICSJl%2B8zxWfOHG97VYZiklexMB1KEGx66t7Sd3n%2BRfGSRfFsfozl8bmuuVZFbN7IiIb61tESjKEFjsjVyMyrvOXVPm8Eo2nCpZbKURh819ZghUCUahcKZ6IbZqUxGLBzp12lQS8Vd67tx76IrQWbrdR61gS05YP7AOiiPx94IDMLjiprzgXVS9R7mxrkEG5hEdcnn99%2F9JfcwFw5uz5HAfUzOXTf6QvcS91cBUavOh5CgOYxfM6MGv3CsOTx0yRRK1Z4LjD1GFDXB16wWP2wFUbrRpJyGn%2BU%2BAV7ll8qMeIjRmthLX3eKKpFTPeIClKqF8w5Jn3CrmJMtrXsAQDNf5VHenOCA9Wo8OWGTWnR5wxKfUvQkSio79QsDrF2XWAC1uIYrxZR8YrY5HOrwMi1nga4Ru%2FG9rc7UxR%2Bb1vMx5wuAlpuw3v%2FKBcMIsHifQYOjsMkstAeQc2X2Vh4VozNngiFJ02IWRqQfp%2FZOJSQIN%2BiwHo6Vpu5ikLdoGcD2nQQwp%2FcIV6MlTu%2FraY%2BK9L2KobC8WRtVyf6VhMBxyzBd%2BgSdjqwV5cOkJmk5X6HKdBiLNwfBgMI%2FGm74GOqUBfkTECZM5VJFoL%2BJdoEe9o4xvMf4k9IIyeMtkiGnNhkmVEMH0dnJfFd%2BYNRYukhntYvOcA7IfJ%2BiLw4ZKjrOrueN3xkWZlLwYXHymSoqE8%2FlNUSLua5F8ZISPd5NDPY%2BPMxbx%2FvWe6YV7ErQTq2tkPen3V2daw2XPUgYV5%2BS%2Ff3he1B514XZ8mIu%2FvZObYcn5zx3OiN5STr1glPTrJr6hwWRlRspZ&X-Amz-Signature=50a91d913aa36f3d756996f4e0a38e8247e5ca9c39b860c3dea216a222bada03&X-Amz-SignedHeaders=host&x-id=GetObject)

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
