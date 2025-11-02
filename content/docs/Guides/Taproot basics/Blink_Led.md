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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVZDQYI%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCy0R1rubIbEdJxaduQGu0BPVVesIBTcBJfbAFSsq4vgQIgWv9uHhRD8FXEuFtrxhYQFrlAR5o7olBVyexqJoRZoCQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPn149ESuhMQGZlV4yrcAwobhuPZxt7KCRC0QmRwqDWX2DUq54ttnLY7FXtssPznp8NL3mUVK2bEGOjLvVEdlE5YtRGcAcUKbB%2FIoBi0K5wuc%2BeAiSEkaEr%2FdlM22LlE4e4Oa6iqntYSD%2BklzpmWXPbLzj4hsL3M3Aeyd4JsyqvR8Yre6G0Dkx2BnwQ7ZuAn%2BXffzLcUwAkMB65drZsLgzdXODJa0InKXNm5l8yRPqZDDpLHwibfuCmVWHA8WpygE472XaOWcnfZzhYDDWQQry29YAuflKA9Mdnft3bTd%2FmeIpgCY4qYmru092SX57k50okc8G%2BCQ2BV4HThTG2IS9rR0QIH8GDiJbo0xT%2FHduKYy4NLohZBbpXEm6VOSErNarZUMjgZOfZMLcJmXSqS1E5oY%2FKmMT6Ht9EsGJvPCIbQBAInP6FlVW3p0fSkeXzQVa3a2g8wlWEdqkSK7MY1oSI7DUb5BmLa1f6vRA8%2FYr%2FYREc4mnHU3%2F%2FxizRVM85rSxFbyqn%2FOiLARctypulU8pP0lpbHt04UBhoMKmc2zo08pU%2FcsyJ%2BBitZanda7%2BgDPjzayenWeHxy%2Fv0%2BhpavRhpFqs8DAmGdxEAJ6IT8xoxPVpRGwTv7mILp2XSD6vAx9UD0vLRYoOwck4SuMLLomsgGOqUBIpINamy3Sm7FgOURZax6Ca12GpOMgnMldUf%2FLJ%2FbsWbHUplT0dMReiH0OmRDqUUHy9aq7YAN1Zfr6%2Bw9me7iQjbAEsFE1aeEMrURe2VHVNun2lwjX6ywpMKObWSImdOCUmyUfVGhSmaIANRiStHIxjsi4tIauuidHRoTLJPl3kulXqK6Q3EKs2vJl%2FTOm2g2XrOFKRaV6xK2G%2FeawVrFbDEJ0M2A&X-Amz-Signature=640435003550d18815f4c7fc9d6a531db3d678275d5a29f6b3141c7522221c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQK24RL%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBBGkdLfb2LxHKckyPuU%2BS5Y7VcvSNN9E%2FfnQuybDFGxAiBl9lt9Nu%2Fc3d2Z4gKaQrn14r80cs%2BFfbG83rug3C39DSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM3X5Vg9sQxvC5i0OCKtwDyAF2bY4NV8BT1pPaXbxYOeF9H9YeyouEhJYVTXXWAdxxEz%2BwRwEDctdp4eFnLYqnZrDZ11FYJ13UZ0Z4xLdXzsgmVlhNK9zyCW4SBi0zGY%2FwZuVRZBOoaCp8a4E%2BVLAYSxUnf0djDFnsZhIyOYpWAC5cNYRJSU6%2BiCVJ0hn9wQ2iPrXscaL1dzuuZ5YLBjHg3nEWepdQwcR0FSGpKrhCnX5YFSBYYNQAfzhc2u05RxH2lWn%2Bs3UxFv4JTAEd9JIJ6JzRvVNqQ538LkIx1%2FsAQxxyT%2FPg1zLYu3smgxsFad%2F9ccN4%2FcQxcX%2BxoKCwTHCaRhpKMw%2B1O66LPsyk9HA%2BMpnPgSR7Z48N756APbSbicAumEt6XyXcXrzlKhr3V4ktM00hN1G34cox%2FUoiXJWZJvfG2ltK%2FHdcdRO9yG3B5WkdmezeYFpYYdXpE3A3jf7YghQAovLE6UU9jBtw98FYkkcjeKTP%2B4xRIJ%2BeTGXiUOLXZSamXSjT%2F0HCuo%2FMWzEoA3iczp29OJbLRK76f%2BnzDCmuNKSFANlMMJLMU53xbR5OIsL%2F1%2BccMMYVjCnWVjYbFLslmRel9KF0yQ7FmL2OgrfQl4QR6RGUn%2BMFCKo9VGANaBgyOymCxeILFJEwsuiayAY6pgGArJL2uZ%2FpTOnn%2F4rRGKBTLwSw6EHVX55WCKfePAhJoazWtvGIkMxjxd5PpzfzdmQHav9i%2BWH5y9HYOgEPuaGugI6ml7ja0otZhl1RZiz5%2F095cYadBrOek3GX5DQ7oR3yaasRM3JovcVcdtGUalgi0h6HsOtFa%2FuJ683ifRy6zkujJe3EwoYNnBTOOxf0LAxZzqAE2D%2Bt8Cm%2BP5UQGxmxwRdDwcDG&X-Amz-Signature=504fad1ffb6cb282b27a62bb67730b192a580ce8324abb3c4e3c96293f5147d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
