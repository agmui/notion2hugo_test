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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECTT2IF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxt5qIQI%2B2CF3fNswnZ3sbzoAoiUfYsyXmQdk4K5qPnAiEAznGT2zGGQDG2ow5YJ3dbQrucZazBhzWMEct0BRJYJsEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAUUdeDjowzjQdAFXCrcAyITIasD7%2ByRWjS9vKhIJ4BmQVlmFo1vCcDKRw92cMID%2FoV2K3QO3FCsCnLYjR%2FkKey%2BhztQpAbjzCgMa%2FVZlfbBZ7%2B2%2BSWLnpgDsxa5S8BKb42Hnb%2FoTcvomA6bfInyO44IMn7A6mbjxY8Lh9oRlNv14a5i0cwfMPjiVw5x9cPCZ2B%2BWEtIzONXgBhGrWsJGPhJifjNpQgo65c%2FFVlDGylBY7QobxBIk%2F%2FaT%2B63ctBTWObgqr92cskZkPKwiWGzf7uTkfPZP5U9LJer%2BSF0R%2BcsROY5QDizsg%2FPCXj0Y1hmHrfP%2Fg3E3SMpMC67xyfCIYf0hoiSXBG85XIcCXymoTYGL9Xp48WKGd3vIPBseOVnkIOVnB5hnBjY3jrtHRwMUGFK%2FCLSye711JDxt6AJrExZWbJKS4ixPO1QM66ovYZMaEQlutjkVuntxTACzeHREBSCm35zhG%2BqoWrySjm8WCeqyqiSij6s4tQkPuKjyXRnKnSHbV0GFy0%2FoGIIQMJGxZD77FDpJFC%2FsR5B8oH8U8HxuTCDeytcB5M7hb8aoehe%2FvTDEG%2Bw2d6axS%2BD%2BqWMKbmEdEBk1p%2BpDCtSwgUzhL1sZVnsIjwRHOoS5HtoYbuE9AW2gBvp1OxV%2Bjl7MOPTksIGOqUBe%2B%2BjFLJPxzoBWSz7%2FENrXEP3TrotANniRvqPMSbKRKRPEWMyVZWYDyi4dX3jHXlO1msnUvrmLzsiz%2BzwaGmK854EhpIJzMZJyf4%2BXgieuPbyYzCp%2BlotzSR0IbPbmooGVcFkxExgLWOkk%2FY9M5tcUHIlAWyIT6G4d%2FLSbPSdcyqjoCJuHzjjvzbaSfX%2B54%2F4vkl28eL1QCuwgG12h7LdJrMpKlsL&X-Amz-Signature=938f6bbaf3e1e4f08294b933a8e8da245e987ac1bf18e5b7cd83b2587b0759e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BB2SF6D%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9wCWBE0MZJ0YFmCoiKiyH%2B3UL9VV4K2rqZHvt2sAQsAiEAuVbIdBrwkHQV6Y13HbEYIHAqrxXon%2FqalseBj84gyUgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDcHjZt1rmPRxqP2TCrcA49652wAibMG1GftvJQZWXYQIyMTVA2tekcsxmOx1jV4TJ%2Bi0uBH3tC1ORLBF3JeA7yRjz0Hob6hyQ5YJf0J7%2BJP%2BzE%2FO7ITyLD4Ww1iLIpjzT5QgIUnYRqtnUPIx9GEVCBzgIUvhPoG4CVjluNBe4NXBA%2ByZQ6swrbsd1hlHpAp19Ymfktr6MRVcZsuRYjwmzY24GY6VhzDea2Ozu6ttz1T00Zidsj6NMrADVgbWw9NvW38J40eaFqpAoeBbuVvCjyQXwvxDfMp4otoWQV8dJW7qv2PuqcbtdeQExVNfJPnX9%2BK0ChGoRH5Uy9QGpv6ehbj0njjd0evVu391mX3Au8lYuejifaCGX435tclWpsV2adW3a4FMQ9LS249vL%2FhDNaSILrAaVXONFML7wOIDuSeVhUcw5zsr1z6KCR%2BrwPORS1KKZeo62GR5oUHWFv%2B10gD7PLhGiAe6iI63ArVILw8ZzHlCbuP3ch%2BIshkcbhP5OQ6D7BKZMI5pPkjFyfUT%2FJFVeFG3%2FFhAVb1IrQwo%2B9vBdb%2B3BB%2BB6ExQAc93501KmU6PvFrlalkZVABWA%2FQcawJPEF25NeKr2K78mIGqU230LhS2dDaa1%2FUV%2FfQK8Zgvw%2BqML2mbmZxUaHwMLbTksIGOqUBqBFlMz%2FPLUwlBb4vj5oVQL1%2BmEvWfyxHHMsKNQv2Y%2B5wzM%2Bdhc7dX1OQiP7wvgzjLArMyKvUBw8I60GGNmK8zWUq2j5Af8bzMR744nCwGSuMu3Qbv6MNaLnpzsxJEPdgVyJg3Cc%2FqTd2FnEAQYBgsw1nLiqVFAbaSbZCzXLLgHRte7aKcqMM6WBCuBf1Sj%2FyE3EozcFlhfLHwnYUiA5T1jF4oHMJ&X-Amz-Signature=99b5de6038b3a67bdfbbeeaa7e2b5c7dc3c3283f8f31af98a22196d7a27572a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
