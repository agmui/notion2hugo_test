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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKZZ3U2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHa%2F5zeUmn4WHNueKA6hyDuQ1A2MkuG%2F%2Bx6XQmwkWbqxAiBDzwIQ%2BLDERk%2Fq8zf7X8xPx2AOHUz9Xt2QL4bm%2F3a0TSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNukARZM8uhYKKJRKtwDAJlGM2GuZ3116Uj3bWaFGgYtOaHwum%2B3kz0UJ0n85kkbgvv83%2BNo2Q%2B0e4f70sUncBJmD4DzaE47JYsV2TmI94wDNXf7%2FA6s%2B5RXy2JxWkuAkeBVxtaCFVa62snxwLqe8NyV9L5QAyyRG54P3%2BVIdOiMzv6jPHaUp%2Bgv8np0glgqhSA6aLq76i2fKPCrQ7zWS8tT26sHX9OjRFY3gYBvVsg3xpjeqBk81wKWxsSVvp5F2xOIGm33l86nrBIpYUCRtE2mmOrfCib3Tak5Q%2BYxWT1nnlXoRPKk0bmJwEuwiOYG1dpK6nI0Q%2BqH9ncrHEW8wp8BxUuZ4pWzU93735d0QT0OLUS0U1Wy0sSL9unW3X7O%2FURvgkMvp4njrqmGCleFigTfsYeXXmMeDjQPhktdzkU8CbJhubdJUt9PCL4%2FOOMpGGlwNxC9e7PMbIWRFyl0m2IyimQkDX9nRkl8QeY9zha4tSNcPLQ3SxJvDsTX3%2FgUNlW%2BT9h0MhB3sk%2Br0ZnONGPyZtbhYgzB38qPY7vNo%2Bi%2FSYdHusTH6DiFy%2B%2F3enNDGYvHOokbqxenQg49AQeSg28YdOzNDNTpwIdNfdkVlXkm6B2ElCaaFxN%2Bxw7oo1ztpc7K0ZeHFA%2FmIuIwza%2FjwgY6pgFIE10P9Zek1aeLriWvIvRUuimZlUjcMQW%2BrOtjXM%2FxOqzweE%2BWseYxOHrNHSUooD5nm5dM5r3pdlux4OK%2Fv0w16NPwoRUmoZlUrXL41%2BMwhBeUYD%2BL34VGJauisxOu6a4wJAfI1ZYDNCVdQqiqd67TGrwq9L60efJEvV4LZVaCBvx1GQOfuEeCXrFtAgjKqwPBt2P%2Fs3AaJdIk1YeYk%2F8yi7gfhY7K&X-Amz-Signature=265beb975904ffbe07b788f017f6fbb5ed9e0e7f080c25c96906fd9a19724fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPNH5QR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDxceqtje%2BhPgxPStzjtS93KeU2Yp6Y4sR0gHy1TTYZrgIgHFdZ%2FcxoQuU9FaYDJdgiPkuMLKIkMl7K2mgXKeL3F30qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5t2MHljdKaP%2FujnSrcA4lPa8daothfk6w4Qe%2Fae4phMpEO%2BVWW9SCs8BlvcNaxedMaNHbDC5MsMTsoJwHdJBE35LcupnUchJeBKsWFmtYcJ9QYXdwvDIgCSgjwS%2BgfdxDWa68zbSyUfc1BFHF4CTeSgjsdRfnY4Os6Vvr6nTRs%2BA7InA0pBizPsGfdcgJItI2B783gGLXEI%2FlWQNbesbTstGhbGy8yD1pKOaevO13kvqKCBgQPeQVy7rCiMZAYUS2NvnCpvcDNEayZU2D1s5gXLdWmWJZ9OMPCbsHdpYwdoZuSVKH3snFpa4nyjNYfXPzeMHCCoZiQDTohN7l5TISgKgpEcIo6mkizkJh92wlqm2UIpHbHJubYojJs6YorbO4Xo0KAXFwLBVbMsdskLl9mbbyjkwDzqd%2BgbzJICGe%2BweLernK3TF01u%2FR9eqacPHfTpL2P%2FrDnBAh%2F%2BuLv74nlVBf8QnITk783tgHS4V4UqluBZ8J0khj9l7VGvsialztoWT3crLgfuXeBrXHsAfJk0G7I8c%2FgcGZ09cRmr84yYAqRTw2D7Sx83yYqNUr72o6A55oCGeD3XqjtThXBE6guU8BAPr5GMkVKxNr7L57EZAAwo%2F4%2Fj5WVA5AfSRzDnG%2BdPdohNx0ihj6jMOmw48IGOqUBjAZ8xvbIDrdmPYAbbCmHc5vyC0SzDROcHmbKjo25oKVpixsOKct1fRRgdMRaqZvFERdOdgoaUwgZWIwbTxQURFqC9%2FCYd5MdILZlP7Cf9p4aWoNO3wvr%2FDl8IjfOllwibF%2F7uTwusOmOPEwHWFb4I9tmtr6E10TRb01A10vmLDgR7cT7dHOke8qPMFORhxga4UVOzDeo1YPiT%2F%2BUd7EI5qpjWKCI&X-Amz-Signature=691db9b518c053de5da2299be808a28e82a421947aa5a4c395743280b2bb7e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
