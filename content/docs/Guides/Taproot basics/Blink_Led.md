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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEREJ3B2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClQy5cMpiShEe%2F856QlyBT0%2B3ejdOTDXOGraaM0DV6NAiA9qaMt5D2LPx7kdYzUjD809c5N68OVPsCzgsEGF2PIcCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMw4bxdXlyUdPK%2BGMIKtwDAzWAtkV%2BQvyhjS12V%2BiAxzLWSaLr%2BKa9ZAy4bl5Qy47cjaAaqioOPNlFOzx5Wyv4rL3n4FsSBfzmE%2FHDqFpIVDxn5IUNFj0PEjgTJ7YMe2i0YZ1%2FBScafBsDg7b1TPB%2BER%2BfIdmXYYJLIH%2BCbrPqdcHzRPVELqRIrgDOoptfz1H3jQs%2FQQVan2YxSEKneiO4cR09kRixXNyIKQViNk0mNAC2mXiuOy1d1vwrptRJMV2KQr0diFnRwcW2vu4VPDoTsyP61bpgHse8aF8bmCVP8u3u5bDVEPJ99oytX7olNCcVa0J0%2BCxNx4hDlwNK9ui7M1TKlVCMni0%2FQy7IhALtVKk12U5b6V%2FjZT8F5BBjoPoO%2FSvQRfxeGFLUQeq4vypMkrGHB1zsv2aWEu%2BQYFg1pvhmbY%2BsGXkE5bXc35m0GEjduWUndaDvQKmCPd2jgjJS%2BqmeAPUuVvJIFR1NwoY%2F9EfVOXnMCeub5nX%2FzmzraIWYPti%2FimpSEYw3Pv3AWMKuD1i1vsyv9kACRzCCvzZJmhLPtNpNtf%2FnsnRZRcFN5tkUKPa7qbxsEodc1mhDkQedClSP9999Jtg7ko%2FuW84BelosNFOhN5ZhPzZqNi4TeZX4bvBhJxTBIZfDauQwoYS%2BwAY6pgGER5%2Bhsqmu0541%2BxRsrYW%2FMhcj8ImUqafMTl1TjXHuVqM%2BOphxYCjJLrG6Rm%2BLKkkFF9hAGK%2Fh9gdFgWMvDfJko9x%2FrJz%2BfSBg8Tf7ahOBbeS1Vx3hXLtsEJa4ylh%2Fg8H%2FfUuvmXl6N%2BudXbJ%2FTz4jfCelwVXq%2B%2Bk79JDFYinEEaAKdpwPFoRNx17LFwEXbDDUNEeH9ndd5JX5gFVIYXP70Eawmck2&X-Amz-Signature=79a8d9eceff1ae9a67bc3125d41a2027240798050ae941972b3025e24dbf957b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXIBUPD4%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdJv8oflqbX6uSHwtJJrCw5HwfcpwuyutqvOz6DPodeAiATzrtq4Kwwka6dU7BoAvOv%2FbryruNRUOnSjZCsWBgaSyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMWv9iq%2FIn7j%2BRRJBEKtwDKiljIzfZVktDOdp%2FGU2ro0U6PQXN4igh5PSBC5RUmNyGw1OrlzzJ%2B0C8wkabiKgHU76L%2Bfui5ML8IuMspBISdggZYy8rcF3oQC3Kqc63rjZvapU1HzuP1oKSli9pmyiw4eA3Nw%2B8DWQqXUsxRC2AR7i5vGQ72drK5jvtPRXqWdYrE4m%2B2NKZmGKm3%2B6vngJGoWTJDdTBbybDToufUjK8a2fHJ05P5FNtbXAiEybgT5hYSe4DWgekEAdBVnpqNfgCBeQecnRB%2B2fl0KKDb6QgAkZXoIsPAMN2m4NBJQS%2FwDza6IOO1PWHF2%2FN0gbpXWLZ7JF%2BOpJUb6AdGGPz%2FB%2Bot7LoS7sivyfEQqAhQivaKxXTVRTfjjsAmEynjcmm6JqJxST%2FuHb67asDNSHLDiD%2BpRT%2BBwUlwkS1P0roEVue4LmbxPe0L0pmPRIotXeEAwLI%2F%2F%2FekbPKU9ofyD8kXJTbDtI3a4TQbtWe9RdZDnRSkZ6RLpNNnX62FmTpQdu%2BsZu2jGFsr0Aot3KQXgb%2FVcFzX89e1qF4FqFzx26d3s8rwh30qM66Bonp9ydNjHeCH1ZMRnrUyQd48RdgfGsE5lKCrk6bk6sdYDMBsBo7YTqS%2BBHSrgR0we9PAVuPvnIw7oO%2BwAY6pgF%2BDYFpfTwT%2B%2BTerLHxmG%2BiBTUFGqQnthXJLJdRNeXNYntWmIkmp0xWtjKSDsC2yWWkFI2Cu8QwegbYSXhin3tp2f3pcVIxmXCWYuZ4p9Ako78lCz7cgNh7UavI6J27zaBffOCzlknPuAx4abpZ0HmJLB%2F0r2AL5BiEbiYI8z0JKQQQrCwEAUsGW3T1r0IiEKSBYACSw3st0ABX8hAPBC0P9UlBKFa8&X-Amz-Signature=df0040ef16b5dbe6bbd7c24aefb8d2e4e767cae76e468298ff7ba9a1951d6c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
