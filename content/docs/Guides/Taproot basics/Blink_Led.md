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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIRMU4A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh2xigZh7wQAie7U6R1Zw1LY2B80sY2IdVnc14h2Yt2QIga6tErUFvKED7lGGsz%2BJz7TRk5Nz31TnMQkSMm%2BOGgW8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGY1%2F0ca2phvDgDcvyrcA4G1%2BkxrDJYh0j%2FMjWqRYP3aXCPscCfmvcJRoLZfx%2BjLucN42DKMTtpltfIgETRU7Ga4CjcOMx45hNkkvFSJclhTB%2FDxoplAGtyyqj9BJOS7ncK1im4bRK4wzYvfBPLOyACDBmQCy9%2Fe6wEycXk6O2caBFYhb8RcADUrk8FmP3WVazCf2MfMVMdJmrKPd6ir2DX1K8Z29AHxHkxIIyCKNeS4l%2FSOk46YkzGKerv0yYsiWO0XtVXTm4K0Q14D%2FJ6u%2FxPdFHq0oCVl7xGMcUAwwjKZUMFA%2FmPZlV5M9VZB9exL9QuNPtgxjur4Pg5PiHQCfTgp3IGHi%2BqEeTgzaoAmAUyv3o4ktyumyauhxrSAHgQW4SZOFWiXenHQz%2F3pshxFI6YDKnR2a1zqIQn3glfaqf11w83wTuKUjhoOgn3wZpTAEzYPztzLSWOvjasRjtIRWsKCPGCQInyrQQhmkRtIsG6NvjaRSQJ8XpS5xNkEDd1IM7bb2ZYi0irKj6531ObkUT8xCp9L8dIoLB6QW52JFGT3iVybVKID7g4NcyxKRg4mEOv8Vvb%2Btk7B2fxj5kFb2vrCBol3Ep62%2BbmWvykgK2DYnRlg%2BDWe7viBXoO4ddfE5gja1pjUza74TnioMNLq978GOqUBolyUz41T2Pi7W1fGruo5aVlfhrETW65PPRaJTodhEjD9zxWz5x%2B5hL%2F3r0%2FjuhtMHogEDY%2B%2B9UpFRKAM%2B9g2DONSM45QruBxy04WRQ6%2Ffvs5Pw0Wf3LL%2BfolMKyJ6rGO6PN%2BBBunRR02drSLN44eIAvQxhdIHq4VZS6ENBvNzeFEaIxTOetiUYv5YQW7a5xm2HePolpnp1Oxu%2Bu7yPFPoJJtg0G2&X-Amz-Signature=5be07aa0028a7087f6f43d0ae132136af0f9618861985290cc276eeb76e06c92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RMY3C7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8CRbuRlMyGFilIEMthCDKijlK0E3C%2BzlgwB5C2pxhAAiAqhei0e65Si98%2F8%2FHrdKNVNjhMTU%2BPZL%2Bngot5B7RzIyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMn6ttGryR0F8CvO75KtwDSq%2FktuPqnHRcYIUbO0oPPLVVdEub5JNY1ki8DAnF26fl7XqxPkQabhW3pLHbhRIPJmgkjQe0qDqcWvI9q%2B1s0jDHM2CcqJQIBYSUSz4%2FpjyXpzNP%2FyeswewqrLykAeVJpseTLbhkgEGCzpFX6tXEBdPQ9bshbvgixyDTrf17GVEJwiw%2BxSXcMGwh7SjfVpy1niGpNaJJyIkeAtS8xcBaBa%2FF87TmZeM%2F7I%2FmsR9f17smUGK%2FCeO3yieVyxZvcseT%2B2hfd%2BpeEM7J%2BnNOQIxvwI9Ig4MxBtL91b9Dyx5FDkqGejJDBPMeI8KOxiRQbX47kY0b53e4wwfbNZNjhsI1r4Iw3xigagM2B9P9b1fx8GHTqeUL6QUJ5qxrLM7JG%2FJYD1645lzcuj6Nw03k5dgLRifzESrZMRBlHwxi30LyvuKLsxerWSFJ%2FBfNdxla812QqA2E8C5%2F%2BUoE6BjKqHwmCC1cja82YkQSpQZ4ZRi01Fkq%2BFv8r3RGqs1clpELze8On75%2FgLEK710qTEebaOYxDhwkJoaKxzxkXc6uSQ4xFhh%2BKGquxFAmFDidDQkO02e6SSheEXzPikgKbWpLi3sTC8VttfPXk3fTG1sHxisWprmMx41i%2Bk37nKdfDdcw5er3vwY6pgFTNiahcBUwes23KXORqergWGQZfHQiZJRKqmH8IQEWy%2BC1wE1KAZCn%2BTpGQoIFlBBVs9GtEdLbeTCkHR9EdHRd9gH2biUlrKp%2FcXtnNGZuOFP6SGLFsrQStChX6HGfvK%2FV0wHw99lTB%2FSkdHNaa%2BfQjpsh3OAKbiUboht3vjz2eX1fwYemXxKP3pd6BnALpPUjTtGTR9oVbKxD46KBeuD0TKTSBeMk&X-Amz-Signature=ba0b14c7547ffb3fe4cc2afab972df3c8b3ed19792dfa7d24500d2865e7847ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
