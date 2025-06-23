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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUJPMNN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDmsZjTAwbDif3jKJK6uOxaXcfwsxa6KivZwHvKvu6%2BxgIgWPvyccTpks3TaaFdaCXhmpOyf7MyfEHXvcCfnxBnk5cqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FlWd6MvN3WlLBX2ircAxxsj8L8Q2LcqaAKinzlyMpsMtFpIeiSU6UKcHh7Fr2DXrb%2F1qLMWcTuG4ceyzb4MoXxqgSuUzX3YjC%2F33JPU0fv%2F0yvUN7BqKrD5nD95IN4Uy66DMtvm9H6iEZPpegA6Hp9rqffC%2BEPvjTW7aiwWvdn4pM5TamriTPbsj72J%2Fxlb4EdCSpnEThOj%2Bsdpm15SajIrPNTXVb8KKZczp6Fuj1O088ClpBAHBqkYerwmivT%2FzLpJBuCQr4nf%2BEy97ykLu66tU4t8%2Be2s69hwGO7zxqGweyjZaQTUixy41G%2FIB6TLXfM4QaOv68miyUecoanM22LUHCgnnn3DnDzVdkHGp1qea3lz0u%2Fxqf5lqyQ3gnMd%2FWN2w835kycMKU3k1wrFfI%2F1xddd7lEpJ3ioKmYoyxgfyNnebi3m2ROLMOX%2FmiZ30GNiUPt1OfuRHX8C9nY7MYaXHx3lSYRhWXwtjhc4H%2BHWErkoSG93IlMNng2wzCE%2BuKM4LpGPh6Lt7qog%2B6oOtrrV%2FWnxxqFVwzokeKsTk5C%2FpEoNPjvMSvUPDLwqph6Yi8cZoy5Ch%2F3OoKf9UEqh9eZLNhw4nurc84L4rVq7Ge28E8m8xCgcLfMyT5FogiQIJHuEDpnhA3uHwKUMKen4sIGOqUBlLs2DimBje3XSJ5HscqW1xyZSTVNoVzSgYhM1daQkaqYDQ73BWdg%2FcZgLQqtdh6xGrvi2riveF%2B6xkTPFG7%2BYwBGi4iVbzk%2Bx0O7%2Fv93hL%2FoaDgb5A4XDxKiFOoXclBBw7hwqHLGDKA2KY9XqyMEs1Yxys3d9%2BAIPY5626HSHBZk8gHkNpLIV43DCcHEb92Jau5YFo682yC1OyXmO6iCGCmL7PmE&X-Amz-Signature=30a735a66a8f162d137bf431bc6ec2d4f0e4798ebbec5aa00d8a2a8b15bf9211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF3QTTSY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDrsWF3taaPp52jIKFK5rX5tGh6w3tj7f%2BT6ouaJCMy%2BwIhAIyqMgg%2BM1dS53u9Q3lSYpHQMb%2BWyxBo37FFZiHcYZxbKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FOFbO0rfdK%2FSSHjQq3ANcojSxlnHAHZbkUtrxiEETCq2FvR2KujGwCou91AyHrPf4UQxqLCOAeJPBo7XAl%2Fp1UGGjzIkXeh3knpQhnsTFNH9rHYIXq1IAwv03Et1F7BEJV4R72WcRAIo6vuGYoE0yqSsE3597nFZRF2GnMTahb5vGSknP6AfS79P3mJr%2BjzNPjlWpZ7CmTOchKgpTh%2Fr0rFZttLB6cc8XJxMIYSyjbdopNUNmrmx9f2CSq1O1uEhxGfJm%2FHCU8lQmzz0jUiEqh8z%2Fo2a4%2F8QR3XptsuAu%2F%2FPZQH%2BuMqcElActnRvdbgtghCmNaVDD1g7EzdVS%2BtU3NR5keRyLrHWi%2FnLu2LpDK5vWKlukJUwY0p1GgUnlbi3HXz1fcRcdC1tjR7ceAiiGxzUY%2FOGjOjD32obGK5w9RrR1hvBtPaNdtu%2Bv8VC1k35CPhsEefpBExcFSRuDQhMVKlgH5Wk3z6f6w%2BcSVnrNstg2iWzVSLwKw9NtKtgU7h8eWuwi%2BaZjW6AI2ZVKnF9xe0NgJMtnDQ%2BdhG3KIrDWgo3HLajrwkRkPfW6vpArBgN8KCsJy6BXez5UgZfGJ6T7HcZELNv64eO0jwf9oDYVObO5GpWaGlBV8PR4gHc0CQHKpFGQFsoGWDPepDDzpuLCBjqkAYM8EsgHA0zoC7D24seanKo16YB%2F1h6n9gwyaEzG2JJU%2Brd%2FD4pFxL%2BgJ1QQbavUv5TFC3xyH3me%2Fh8riXXfyymatQiNzMTKiNZweqysNfjUZavkxaCKz8sDyPp48eX6Ci5sMuA8fVZI4poJ1C8UzezJn%2FU9kWHZQ4YXpNlKg5XGyIgzOp%2FPv6h8g3oynrHn%2F6ISVCdqmS0Fcy9zWI8cKSmGQBVX&X-Amz-Signature=7f637638f72a87c78880a2414dcd3aa0143219e06cf0df92ef20fa6549ec9991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
