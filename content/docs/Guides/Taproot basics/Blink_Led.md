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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQMIFJX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBDTTJ6AQV3J2sQlDfEy%2FWp5oT4NqpLno2LniPHPghexAiEAi7JlydfqNkrAzKtIKQzXqQdCsyjBXd5dtiUoiF%2Fzr%2Bkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDx5qqeY2JMFXvqNkircAzVkJy%2B%2B5B9OxzQt4yy88UmSOUODJGyZ2UcjJ03cCYoYQBs%2FBRF3Yt%2BJjQZ7BDVe%2BXKgvC58Gjyz4OwePKbLyITThXCNUb95%2F%2Fldh%2FDdXTaZ9X%2FffvjEH74GqDHpJ%2BvePtjtyUo8lqr7Dg77XTjxRZyh%2BlCnuDxPLzFZy%2B%2FS5keMXbwdYAs2Z%2Bt7BZFzsGcetzrEa5drGsWXuKOme9EbpUBwOx79r30Jyx2n6gybbxVccg3OupoJWaWl1ubsPXBYQp4IL3ZK8BlkqinBF5qboz1F3X7U6iFtij5xCLBS6w%2BXr5N0L8AMyJ9ShhlrFUiW9BOhCoV4EFB%2FhNUJYEszdMwyPc4X3MA9tdKUI4xDerl1tTn0PTdJHAIE%2B24oGs8Me7N0PPiuYk2RlX%2FwxId9%2B6s2kg9NZgOxOr%2B%2FG54HsYizilmkN%2BYHHD8Mi%2Fq67gqEQtavWKUmMmya2GJt1qxz9a9nHy9%2Fn%2BrFQvnbKlQZEjQc7BFnF9rh8vYGzuNVtcs2zLlIgw15PzQRnvQpoNEgsde62tgQLEg27%2BbdDzT3grnC9dPicBCVt6p7GtfO9lduqshyrsJEyG%2BCBz%2BdnP192q2wLrLckOuP%2BN7J76wYr4N9zpRI4vxd0r%2BUwT4UMOjm%2B8EGOqUBUrk8dSYgL9JxzqONv9T%2BG%2FEX1iGu9a5kW28qyyY2jtdarJ7lmNK2V1Dbsc9fmjqOQ3zxGQlZTdpnDgceaHZuxpPu2aBXmUdwbjYBFPp8iY83PBlESKGFsnUsk33Cn0In5Mf9rjd9KuqjV0gmo90bD6O3utHioE8%2BfR9SSsYynlxHSfB6YwCM1Skfd0lvdLUmo5pltRxTFmPzdByPUbFYJhtp%2BrOr&X-Amz-Signature=4d7471bb5faed7f54e42045278c25c0875c77762a57953d1b512838028748f40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RE2M7NB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICozvIbfmlY9gmCHr3pc%2BpEUMNVmijmJbcPCGt4cd4cBAiEAsG8BFZ87B1Otvkw09zOaBpMVu3dDtiBKmphlFVXOSLEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJltliS3hj2dVXq7syrcA8YGdbV2RRvV14Bvldr%2FP1s%2F%2BCP%2Bi5mLSHMNzwYoeyYKT8v0rGSVG40PXHMqawS45uWu9WFDZJrT3qTvkPm9OI%2F1Sr64vA43LDPcydIajmahWqW3OAOPeKeU9FSuBB%2BB3K48ovr3YrAq77HDKgqOEi0GtQmVD7nI3%2FDbonGXV1meWtxlkzDoxwcA0inNk3g%2FJWMXZz%2BWt%2BrF%2FVx%2BmntVrh2nRC0j%2B%2F2qsAdbOJcqAkANqIf9iK%2FPSbuZcXe%2F1CMO1K4t5XZ7l2V%2B%2BSxwszvPO%2Bck4OiA21GbMlu29tq8TQZ3zDp%2BGbLa7r2LjsgIMX9kJPvuT97yIYN9lPxK4w9q6BPjWPnp72TCzyNFuAv0Eo3weDs2VrwRMtGGJHV%2BNH38RhEeVnNFFkY2G8X8TNwP7TYDcTBjOtb3jGlaLTCUG8GgJhGSpr2Hp4g5a1w4uZEZ%2B2hdGTMe6lHeRSXtIXtewXiZmqMGrR%2B6kCrSmCPc%2FSwOjTERcaHholT2%2FlipTvuwZmzjQvq9jfFBaDJMAePZ0ykxObiLW4pnouZxnR9q%2Fu7Pj1KST9WqBMlS%2BbkzWfetXLtgf2SlWC5RDGZgrJyHBi6icY40Cr6K%2FxXsKFAMkgDKrA0osSCx4VhWwdafMOrm%2B8EGOqUBR5VWSWyEx8tzSVn2DlSPfb1Na%2BoI3SrSwky58SymYduZvTA2AX9iQ%2FvUaIy9u8PWfAyP3Si2EOC9Wpu1wR1WORAInOsM2tV0nNqiduS1NgOtVpUfsy8U6JKZFCw6HtXQyCoZUefnsr78KLCoCP0fJGJtsIbjMl6D%2BL13nTs4%2BrwU1e41Ad16siAyfnB6m3Z7vHTcnSp4uwDrxlk3u2uOw2xbejii&X-Amz-Signature=077fae8361d2921ffc2aaf4dc30d84eea903477b1b519d22d064f1f0fa498447&X-Amz-SignedHeaders=host&x-id=GetObject)

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
