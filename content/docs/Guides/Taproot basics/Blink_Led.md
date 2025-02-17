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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS2SQHB2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC51gRJnbkZQ1oXT%2FZYzoBb1YG0a6fvvuMI9aMTSp0WqQIhAPVvhgiYYPdvxLUGCjRrFdtubfgK4KVwQ9Gg1%2BaZExclKv8DCHgQABoMNjM3NDIzMTgzODA1IgzeimPXolBDgbCtsl0q3AN21Nodtz%2Bnw7Db4jezj47ynGiYFqU2nNSEv46qZ2yuOYani6zdGMzjCNRqakNIP0qoDRMK5HQcmiFh0mGuEOPEa4btAYqckOZ5JvecKPCm9dbmCeoOS8cuLJ7j%2BTv7qD2NrVTisybZjKl1uxSuyhcSs%2BjkUVJ0ia3ZpaP1%2BL8BNTXKHMro%2FPY5Y2ftHWnVyqCjxV9VsS6wmYrhsjAJrf6WSLKrz0%2Fs3h8Hne%2FoN6k8QXC5KaHONcn1Crb5hkUZR7MIYQNWdJeeU7TJkJ4TOatjIJ%2FLEHVHWVljZGxrrjGcjt0%2BpbrszlZbXzip2GHmIM2ynHNsQ1zcy5LumD12btdLRvOlHiqz0h5sNlV6p%2Bbps%2BzFRtR7ZkoLwHEwUOA6xnf4EYpBluUj62lgq%2BNPTcy%2BlOPB9pR9HxnkeEoFLszDWcm5eQJxT8n7ZYdRKG6i9D2GVNGD3v3w41G8HXN8v4h7h3M%2F0jtD2v4ZVw0oAEilmdqoz4rQp%2Bfohu1yI22Q1FeOn%2B%2B12TRpoe6PkLuHdRhqJ9%2BBV9bpxFduzAN4kh%2B%2B%2B4YGU020VFg4j9zCX5F1E%2FtzsMk7UJlu2fTXm49GgaNLu75tWFdvZgiRBTylh%2FF%2F0bXZEOsEcBnJW8fVSTCMls29BjqkAayLNEvgLbSK0FJ6JLQW0%2BA6mDA6OaFlEQRGDXC31XxpfHUoeiJ%2BC4MBF2RCNNGQN1dHx4Yl9TmClclRxnuU2vCodUtJPA1YXLqTzj%2BO4MPqnjzvEx6w5BAr9zJs5NGSlK6MWH4kpX0ibY0PYW4cL4gPc6TgMz5lScLIYfH7fCivUUHGnEMwTtUY0ky0gccByKr234WDYvz%2FNj9lh7WAmXaxoV0H&X-Amz-Signature=27d37e375f4d211ddd54413faf207ca5a7fe70288d376e1cf9fa2feb4f667f76&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YRJ5QHY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFyTp7FaK0hYffhy2WofzzZBPOYFbj%2F6E6S32%2F5gosu%2FAiAHDRWYAwSXA3dtPWxRCuyY8zpWieiAqxlaFzuwKDDdXCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMQW6zeiwOm3SforVhKtwDCOqR%2Bi4aZM3WxR2LuMRSC6V%2BvkZQoP65tyx7mZEVnhjNs3dxf1fy2dsU3hkxILW9PBGsqbXZX1hl7zajy3tlLS336imNyu8uPvcO9SOcJ5T2LKoXIujl6PsD2oRUbHxVIfSd8l0diJLn0o8EB3jB6Iu76jJ9d3Tz1r8SPuP%2FzyGdxXYkFm9C9h3GXAnnAr2X7kW%2BI%2FnQba8QU5Erk8O5feJbpsdLAswfEB9utqsPPy6h8v9EwRh2xI0jMwBF14N0Usl7Q39MUqAt%2Bruy55CPzpevmgTXoFZeSxu9oRkuGzgya5l%2FSZZmwN%2F7w6g85iDbw3eTzmZKG1rT3yk6yhcG9whLI6d2H%2BSziFHTcO0Clrvep0nFNj7%2B0hYnRi4RZ8T1%2B3XE0r%2FdDnMnKoerqvB3qoIvwQ%2FWBaM45%2BlIvSjNN8DYg7KwmSw3tTB4NHNw822twnY9nhdf8RotLVjU0L5a4d9OfmtQoEQ9pLsgA7YI%2FbYRhf0zvdxRufGhKeMLOZW%2FviC%2FZwPFpEEzkqeaPcWM1oCwUfJxLjNPSefOp7PwGEtiQnE7aVh%2BulhlYowkD%2B7AX0SicASgsECLqJfgZpYslCsctITEqxNPuD9VbLlo0PJanRfJW5Qr8PKsPrYwqJbNvQY6pgH671SMcRAB2%2BSowI3Lukj8533fHb49kp6Ij4uCgWnkx8XykDuetYdn38eFaEBP1OQFdblD%2FJ5PqcDpsasfMZ1Gx001VGHp4g7PWWPDCdRtd1fvEA7mGIKu3mswC57%2BEO50ouEuQBw0n6K7RVzmnxDzS9LPwKzLIBmYkCxEDu46pXj5GZPZ8J010PlH9ZhHDdibVT6%2F3yTURE5De%2BUYLQ%2Fq2tT8bKZx&X-Amz-Signature=ab5b9f010f54376626cf66ae0041e4eb21367f39459becca0479313ad4cf68b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
