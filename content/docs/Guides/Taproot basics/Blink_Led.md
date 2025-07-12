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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QIXEGTQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjcLOCcjKxTLDoIiEpL%2BIcpsC%2Fy%2FO61QPk2lYoCNZT8AiEAjKgAy56xOzIKktpGLbOB3RE9FAate2XipPiPam6fGrsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsJl7hP5mO8ExpJYCrcA01EeMxcU%2F28MPxF3hwKPQXFZUvHAiMYqnL6pLlaTbyZ8fIZafqOtGLuIgz82e251VBenODNuNQ4CajwcfyXKayFBFZ90j9OEBeJRSqKCp1DDEBZN1oX8AvxB7A7bFU3Cq3%2FE6YdFJ89FiVTqfyAuOp9ISQdtv656JsdXzBx6%2F5qfaWnzYBdkRRnfd%2BfA3VHPFchvuAqSPbtAukTIiYZ%2F%2F%2B8lbYm%2FwbkDcMkWBBnC9IcU29fc6O7G8WtNyAfk2zKnggzJs%2FhUaaxeMHG7QZ392CFxWo1YZWtFsz25aymGR39hTqHWKLWpzOiTmjcnyhx8cMkRlRL0%2FQrqn9JXwMMYuq%2ByLg9aDzf1IPKiFccm597on0hmrZh8EUGY7At6NDLjM%2BHKpqk6gh%2F5fx7I6qkyQkUkD5z7I4q7j%2Fql%2Bdulk8CT7dJQYdOzbYZfddO%2B%2BzLPEKO%2BPiuv%2FgLOgygi3KgFNzfmHWwrCWP8mU5Hr9uGLFqh%2BBBlPC5gUpi9tn8nHRgfmR4QzPJiduo9qlyaUBBu%2FU7jcQOlDM1vZxT2bjBLYkNsaIRb78LBRSxE1GDG%2BmOT3snD67hG4UAAdRTRBi44Qb33T9lyIPjS8WEarv58sHQiMcc7K8fCf3gz0INMPqhyMMGOqUBGa%2BnXrTqUWMh2z6BgS3kt7XdDE6FQH3IyK%2F7TVFqow4pniKIeSlbk6tN1XV4xbHqJ6DTxfUy%2F0bSxn%2Bmbw3dGgaMi5ehH%2Bv4J3TINFvRTGqrOI%2FkSU1OFpx7f1ytk4cDy4dXUnXK7bPNIoR43gB2fG%2FHMt3g%2Bl6JRuQSmamc%2BmuHS63wDBDlRlEGRlwhMqzGEkSLc1krg%2FCMc7A2JgPqhoaWzWdO&X-Amz-Signature=a8204732a175888c9ebcb0e19c61abb99316d2bd56be4aa855cc63fe2151b15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMXU24H%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo%2FLSjtSAcftqjr%2FN3DI%2Fmf%2F4CXxTObNa22eLQQD5r4wIgTybh%2F9EVHp3T%2FedcfgeYC4k9yR%2BWD5Rc0L6R8Kvbo3YqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlXkhZ545BR2ikSZCrcA9a2%2Fh6nVh%2BbGvPvNaFgQc5jBa%2Fgkav2AC0vELzkeOOvjKOFmwo%2FwUjQbTW%2FGkXtPcEHfu0QTESub5On3GGPMNmr%2Fbad%2FRSfgacIE8uDiiNH%2FI95ZxPw7mDkpg8tlvTHnbgUcpEiA4yrxPUH6M7HCnidIAo2EEGfkKToPc%2Bhaip7HO%2B1nNu9hcW5P7OVeUuB6hl6ML0LzAinlZbzPSSFhO%2F7WIMx7BBZizSvJy8%2Bg5GvzPIjPom2seYbSSVJS2Gq3aTGFxwwTWYBc4qLkbwjx%2BPdRZMfTfS0E0u2MsTheAxvndQgZ6wWX1nZzMFnOB0vtbGhVfxnIlJ5l%2Bbma4jtb9TkBuXmoxVXVL723eGV1tCV01veuzV0kaTn%2FWB2yg83mxLMF%2BXt9lgAE23Qrn3SdZSarKVMsBFa16jjBJztpJB%2B%2FIIPbCfMixAqIFdoLqbEoh51BBzu8XHM94o2wfOdVPnbR9KXCDaHksi8RXHOMbsO1qIbA88qpQYDctN5QncZYcVmR%2F7ar2bekxrLzcf5gwpq28VomFP8kqdOFRwpPeNl9aR6kHaf%2FzwuXEPWe0Ou6tL4mlOS49UXGX1KRXlMAMSNOOk81ab2izgkdKwqM2spdFK5UJqdSNy%2Fb749MJ6iyMMGOqUBZkV4UkMwlKDqpmuzSkH05lxcCt8VM5gBUjhs9P8HJaajis2VKCSY1P5cn07eRwDfRhGOcaohBmTPsB%2BkiV8gN8b8uJJlU009PpUVOu%2FefgxE77EQRjzHg9ATuDk%2F38NphhEjLUNykEtA5oWI8nnm68nZ3O0qijIHI642dgVOk0OwdF3MfQA2%2FVIi4QR2W143Xm%2FMIKcFzZW2vbrTlS4klk6jIp%2F7&X-Amz-Signature=d8ec5dc7f4ec6f018d1a9a90de2caf5fb41ab778ee86954f6d853a937b8770f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
