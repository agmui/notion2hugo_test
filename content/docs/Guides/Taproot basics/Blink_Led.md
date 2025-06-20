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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XVYEPS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOgfhOBunB9A5vAVtuDsFX8dEdLSW00QpCGDv3LkM%2B%2FAiEAuAi3IfpRF3VClfCa5GHeokAkoTYOA4aaxl2Rp9gp6gQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOs%2Bx64Lp60g38JvbCrcAzwvjFzoTUIVasGh9voEzJpeD3byhFkY1aMRZnE%2FsQcfUCNgA72VdswiGxgTj%2FLOSYnqg4wEZprRnbHuznPosQGu5JgN9szibgw3uylyrl8r3Knt7H4BBqVWUZsGl%2FOgzrmiMLze%2B79lJsLDzu3UrpCsSnLO6Z%2Bw4nus2EHbU1Fl%2Bpia8pJ9pH2VmlHYYb6sTTu2Xghcsb0i3rv%2FhU0p5%2Bb3M7EwI3xioW2m0RyowUlk%2FQ0M%2B9BXEenpbHrluqF2xgLHQRAuNlXFKElffh6R8HAYuRRc3U9Kx%2FaNF42L168dpbMJD%2FiWT8V3lQuxy7hjWF7k2ictVchgfBSYYk322uVkiX%2BSLOsgqltsPDoHngVsintEaAhY8%2BWtBZQs%2FfaqYC0eSE40vOzye6hZ7KOTNvvzIpd4BIcql%2BzfYEyoMBg4eixOOzX2QyufMntTw100KGRIXUB4r7mr392kkvb6cjxB%2BesxGLef5A0YQqtp1LYuoO3X8MVtUJSiLVoD4R2aupgMTBZ%2BvXjgtXTdPXoWhHdj5aaiUrUM9zDEjFvfuCTPMOOPyvIkHxeC567CMg%2FG0UxwXwfDU4BtGCPdMp6qqEQjEHCmOl9KQeyy%2BiNdoZPWLH%2B4WioI6jb8xuInMIOz1sIGOqUBoOEB4E7o9nDD2Zl9pxwUHPAq%2F4kkQLogIbOezssZkbv%2BglnDb6UGipBgziVv5bBgQpZ4DBB1veb6Q2TeYDrmPZOGG1GoMNUdqFZG9hZtzKm3fbE1JoHM9KhAZOJ4I7uZ7gKHP7Fjh96LyFDpvh0kxigdrM%2FIgweXHGsNlxtCb0uNjb3jT9f3XNh5iWVUd3dhuqZlHwaH08oduiECdajKtPu7t2bT&X-Amz-Signature=36a6c0ab3b7ca3d7bd8e946be643fac07b3038f7fb1ce29dc6e74c08fc8e59bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV7GCWD7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe2QfeEMvqjKFZ5j3fCrga%2BNONTyhiLx1Q2v2HDpz4yQIgRO0CMHp8KB8tG0RjNH7vOJH2voyFv0g6lnNttlHRrLcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzLg7Aho81fs8lWXircA9MFJZL0OztE60V01NdULdRaWlDXI0KH1Qz4LVLn0AXs4xvtuMphMDtjAXyK03oe%2BAzd5g1ryU5YVZN3XSfq3Azn%2FmrXsVpTfSomYaSzA9bwNZlpqslFL6OAU0Vq2sLdB%2B6jqHwMXW0rl4VMXMYTzOMTAWjas5pxwdJC7Y7Ne73717uMw4Bzl4QxjVj983UqYGRSI7lWIcssxyLtT%2B8d6MeTADaAQ92diz5WNWNwKSStwnqA8SvBfT68J%2FcWpeRs3Sffi%2BkICkc7gnljF0L9oQHg%2B0hFqfBcqA8vGvT1xgTJjm2lntgz0%2FXG0KgywL%2FJ%2FS%2BOnSCXTqUgb%2FANbrC%2B5k4hxxe5fAD0u%2FxFlT6n5OEqu8hDU1NwZM6kG34zgTLj%2FNwPbdY3u4Luyfg%2FofcoB9vYuvZg11PFpYB4%2Ffe9VVgAcROgTZAmWKop5jPGViDB%2F%2FnrStCchRFtuhxzTS6ZX8kkUhcsoBqQ%2B%2BJmJWr3v%2FDB32W0pzgeagNpqYIWPvHn%2FWW%2BJsFNETaTzc6YChM725jnOBpGiG80nWf2vUGOeBZ8%2Fh%2B5%2F810wrBS7c1LjFOSXydi9uKwvD2oPh4DosZhsyJtvwvOng1D%2Fz%2FCMrwK9J3XlioGsu6F%2Ftwy5bCrMI6y18IGOqUBWDdW1Nj88voHFf1XaSeyDZ2UK3ar%2Fyj0z%2ByNVXGmrs9nIjTDVrGL3KZyxOT8PeGIAo7U6UPBfvHKSYM01wV0t8kmMFozNK8hORE8EEzahxWhuq8Bcwb4QR9Zr%2F%2BsenJWBJi3hNE%2F2g%2BtZl6ZIYD63BLlqwAzLw1jQDQOTs7kP5agEGU%2FQyKS70QQjmiJ0t%2B1oQetOo3G411QYZhhCLuuW97T0DeI&X-Amz-Signature=55281b43c2c2e3d072317d5d630b25d62ed2163bdd4235816be06d3bcfeca5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
