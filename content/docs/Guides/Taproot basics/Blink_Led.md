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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2GRQTSS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCICaHoA7ABe%2BJ0IyZgBXon4wwKESyQw4iAFkxsR7NKs2CAiBIGloxLhITdyVI0LztvT7XgSfrF6xZiufnUxtcUS2ZPCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMhC622Aoqq9t6rymdKtwDsZ6Co0CkRkn9rNFIEDE3Nwg5WDZYpGspYzfxWAAfgigRK%2B6SkKPXid8fwNFsBLOXp47T3eZW8G1ed0La5UYs3%2BZirzRtrPH3MT73AO6tG%2BSzIp7FP8DzJ9FkSJE77rR%2F6Vws7DNL29P1Qfd0LpsuzS8zksd6nmKl8MPDWr5dI8t270FRlUd8YESLk68VRR2ZnlHlDiyZX%2FO9y2TCN64f05ZUBLQiMxWwyKnoDCRGvJrkzVCnnZ0OCoXFfhzuplkykYsemgsRl02BBYE5qtlu%2B6KFPfTxDiXtsqweH%2FbtqOwQoBHj9Y2TvF7nsjb8cm5jIHdnHfKIJszbrbK8XkozqS0O3waB7nzxGWHF0nRsq9SGlYGrPO%2BEAq1fFHN2GqNY537QfkAsPkBJtBHR4FBeiV66G%2BsN0hGTqwdT3aHDzR%2FVhtbv3aybmDlDBrnCeznK%2FOfGv0eERAKtk%2BOukZkiM4eEplyn6uD5IWhEVYZEWORK%2B%2Fgq2r0cy%2BCp3mE5p%2FS%2BDSeFav9m4SH0VAYfPmL4ABrKyGNl1CZOj5zipyTU%2FOF1eRLZ3G5IGbmNZUWxrB48%2FfH26n6kR7soOy3GBDZQjGtauJRSBDTvfRY6pCzwUPa4Y7JIin7GGUN9aiAwnfuIwgY6pgEqcWEoBBcdHQ6pjt495C7E5u%2Bp4xe2uUCEts0pl0cYdcyc9wrzhS3l47uso%2FHLJad6LqH%2F9YlF%2BH95Dn%2FzQy4hdoqrpUzeehhRt6mKPvoBSfVYIi0oXuiOirmMVwFYSZzkycuYGZwRQTPW1JhzO4G2Ap40MneQi6MuFPcv%2BfD9GfQz1FPS1rDqz%2BkBhBdjzHWY0SenbdAk%2FMnNbjZVf6TvbyeXmIwE&X-Amz-Signature=931b32323dbe9b364be1ade55d4898c4e55064aa5a4e2f97ea0034bc0e28908b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB32GJW3%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCO5E2N0xWaHaplyspea4%2BOZH3yuuwvs1nTHoWobcraJgIgPDsN77XPuOXj6zJ1C56pmkA8hOqwkdNWzRJt5VNWFPcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKFtfWvdbsO5nX7RYCrcAxqWh36xweLUBquVsPOZh8%2F2TxD0N7sdCB%2B9ETv3Vk3o3u3zr6hjjSHykMQaw1B1%2F36jmpb2uDxUzLA2N7q%2B5%2FsfXlu%2BNJMPQpa4jiyZv%2FvmXCcZ3zINc%2FxCO8m9L9N%2FGF%2BxPYzqfdK6dIMLft0K7w8gCV%2Byr0SzI1w57BffYsUDtdCTQxn7l0IztJ62qSRBkpJj3FAohz9T383%2FqKZNg7hknu%2FTrV7W28R%2BXyIeshndbTOe728rZqolyrPng09VoTkOYqx%2BOaHJSZpRnVeR%2Bn%2BiLin8oRxWJwt4kZrLm4JddCghHlm4mSJ2AS7CpbpNokTXYHo1KQKE035dQIZ6KURbLAgABcgbyAdgp%2F1bL9qICyeTVadaumiGIG3k2wqVxhIGMZHyDeHywNk%2FLydkiyEi2ZTkhc%2BORFg90uRkLv5i%2BuVWTCgEzntPzYD3ZLTlImkf%2BvJxNiuepReVpcHYz2nBgYGAIFmo3xzoHRWJtmDbHy9tsFS0YyC76vTTOv7tRdb0%2FgOThcXRDQeWinYyvc3w3DPPZFY8IQWHIM%2B9upxLSHHtVwWFFD5xbqOEstIqDUNHaqCHCCW%2F3bVBQarQ7VWuo16xqYFlpeBrkTItsVtufGoKuGZnJO6U4vg8MIGAisIGOqUBSSk0VvxD1VrNDWgYPu1yAobwpn4Ok87rtG4GJ2ykp0FOP%2BjMXEcHZk7fjRL50nH7huEbvSbtCGzTb8tXmnQQ35to7Dmo%2BpTdKnIVIn0msMyJTmpG52hxHFrgPDYmp5GMGHRHJdvOVRIXMvlkAtj8iVbnZmCWRaxoqzCkn%2FKkTerHS28llPLSu795TG8tPtxcPJkjQldJe1gXiB8xtjxtAahQ%2FWD0&X-Amz-Signature=48163019ae3de2810f0f5bee4d30ab3d3f9254765645a1d63702ba80fc55e2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
