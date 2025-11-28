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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJBGI3DD%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F5QeyjEs8KUmbKKvRQKcXgEJ3rFw899D8mlmYdxefwwIhAI02eFGSzZEB0%2FHhTQ9XiXdJug%2F21p0DKvZbmWmPlgCfKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAzHB6FoQ0gT3eFG4q3AOLDuNvmCLx5ykkN51AbBCvdkVGDuSifZAOANMqfXZbvganVbdGjty0AL1S3E6bUKQq5U%2BvD6pOvJpyzE8ih%2BDlvSL0PeWSYBXFhitHamPkDY9O29loQ%2B4BZQsWvL%2BBRs0dDrV0sXZOpsJmdfeFJuu%2B3FwKA%2BcpGdNffSv6NPum%2Bm8UbHkNihLDLcNqwlfzicsOnnRk2YBAWuWnjl2ToJgS%2Bp%2FJ3GeS3fYP8VabaMFWk1stS4JhwGb7HPHLgqkmOhT6tTF%2F6X2WbSd6%2BhAkVANndurny7SlEdRs9e8QLzIop9eit%2Fz4l171MrKXCjRZ6n5RDEKnyfAlbtQErU%2Fjo3PtBrKmpEceaB4ccVYpnGXGLa0%2Bec5CBRbf3O8pw9pjT1EpGCEGV5MKC4n2Qn6SeT9CpPeU3HltRH8ClckUZ1qq5vm030%2FQsdfa73Pk%2Bvo6DHfyuPfy5rUylSLOeg7A97P1Xdv%2B96wIfnR3Eaw%2BX3AvjFXcssNd3MV3AFZMhWZOHrQh%2BgyTy8z%2BdOFKnTW98bkST%2FstNdaciin0YLRVyKM7yS2j2Rmw1ofDyzyeZIUxWQQSfwKFTCnM4Byi111BO56jwf0tfRoVE4t7igv5agMWTcHUAMh2IQ9IFor2KzCr1aLJBjqkAUQlFBhrMoTSxnGnesynQWau8vIF5Qpn70pPrFUSja0YeYD8WiXIgmsVkVvdfhsV2UlabOuI%2Fd%2BFkVHiFjNsSyZWTCfGRpdW4ci3%2Bx1jgN0V0WXI5MR0ZgbTvSBlOMBrGfV%2F5G2fnNW8ZCDiI1XNMhj3iFoMg7QcpRynIKt%2BSNfSnMx8ohHkfNuA9eUV7wM%2BcQtELw0I3NG6ikGFPs%2BgoXeMLBfT&X-Amz-Signature=687ea52ae4d64e92a88281cc0a6c8331950b366d011cee822f8859b2249f65a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ED3XCFX%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeFXQGmi10qQjkyVfG1bLkNKAvRxhZunmOPA6ROYQc5AiBBXOjY1hCzIuM%2Fij%2F3OfpsDSzvDNJFIzpQv9MD9COKbCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHfm0JmHbjbqroVTKtwDWDyK%2FRnAu1r8ZEKNBIsneroMizoUTHFrJiY1etjpwFfmgVoV6lGHVhALJzYWXRXmyffsOi%2F6qs2YKiL0oapm8B3tIoalPIkTgdd6L6WIzsFDhX1j1IF%2F5X1lB7Sx4vPoMlUk8ynt%2Fvj4KAd7nxJxMCH33E%2FO%2Fsn%2FByhQ9ViU03KG4aj0Lkbvsq0dWy9I1prfjl5tx1OViyenlO5D0K5gip7nWFneEZofW44tmS2u1nCzGEO999rm%2BSUxjtNfPyAmxVCZBFcr%2ByrCMs1PH05w3hZlD4QG05b%2FBwZ3OzC4nPfj4molVKH6vO8B22lKHjEf0pWuaOjV%2BAts4b6WKaMbTDjNP3WTBAlZNicvoyO1L1TH8Fn6oxOnzp%2FwhVBXm%2FWr%2Fz51GzXOtt7tLBijTzFXjcpuk%2FVJTwxkkZcGTJnaxRJMFFsnfw%2BbIUO9267yMdAL55KDq88c%2BugmfXT%2BmUanbEW1KAyuur18EO6WpP4TCZU3xb1fVSIvAXz9NSyRGNejteMZb%2BgNewrahEHhqGCir2pSCRO7Cyyqrodp3u7uWPT9x5qWaNKtfwv7%2Fmr2iqZCQOrIypNNtl%2FQBooy3fv0Soo6IEOIhqB%2BqFkdybPB5hOqDMyG%2Big%2B3LOh%2FWIw8NWiyQY6pgEykEdsO%2BTEu2RsHuLmAdrUK8ilFkS6JrgFDPfQ2CUQ8mpf%2BBQ%2By3%2B%2BMJvpismuDUbHWcnfxdAdjA5vPTx29VR%2FVmrFJ0WPkhYAJgNn2T%2BD62pNTfPsBd4jfT%2BPhGF8TyiICjpyGP6vRdZkuWMWeURdSG8wvkauwP3P%2BevlfV4tkKXzEjBHDcCpfr%2BUllBYDSR4YV7nHczgvtsSdNVsPxc%2F6%2FjPm2sf&X-Amz-Signature=017ce20c65ec43a138647b60544c5969cda123281d9707b050ead6e491a5a3e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
