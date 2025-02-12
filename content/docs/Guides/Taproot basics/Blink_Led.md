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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW2QLZNL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9eWnRjJC5xUAe3J9MPJvCAjbNtYMVtyaLsIUwJYsPzAiBEKDhXucL%2BPGYRVyQJRpIjKx1QkVO66DebrjXSgml98CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0muHIcMGK4k35%2Bc9KtwDf5W%2BxT22fn6FeSJgvQ%2Fa5kgarvZbcyTJvdcJkpNtelA7Ctnc9MzVhcRuSZ8S30f0IWs8a3RwSZ1iJvxcrURerBpsb6mDpi3dFv4Si9W3NEpOj31Q2MVbi3LQ0Fw1ToKH2HxGvXxVLF%2BXUEIUETno%2B9iY77crWHGGhNo3Y646qKLbzei6yOjXM0kd12RfHVIYClPdYw7BDwOS3dysACuM7qEQcGxZgUnnR%2Br%2B13%2FRxSdf7Ul3j2pV1UPEOxUStCyMpWSvy%2Be2Q%2Bb3IpCqQYJvRfpwRPIGcD5u%2FmanJ91e7YjdEaA%2BXoziOhhSLIICd2aFOAPgUte1JSWxx9YtcXB0n1SYvTUKvg8%2BT6QJNyyBZ0%2BHSsEFB2%2BL%2FcqQLbw8jFWFUFjvitzakDZK%2BrOSDGDbdgfkcf1jtRbWU0anMpmoKZaIdcg4T%2FUgCc4c%2Bo8Nih%2FGt2U5XcvnB95%2Fh2z3GVMHH0qNjclUQP1WTZold5gnSGgVEV1iY3fSOmWsQKIsH1Zl0HFWa7jMnjRKGpxM4D8xgf64NjeD2t0oZvIlt0eTeAOXR4QACq4r5L8gaVJG%2FMJa2sJEUIC9W01GUU6PkvK9thmoN7Nep8Skan6hrxSzGBu%2FBkUbk7xE7JEBIwUwtuivvQY6pgEMo%2BnfD8vfJ%2BI8yzk%2FYKwR%2FmCvn9TC8GmU6jTlcf84f43af4iuMFOfDlr8rfH9ib6FNIJe%2BmQHLmsz0jahtBe%2BAyQFY44681qTOwf6eB5nAkmvvt9KUxgVPhJjHqftUkMLI%2BWAq3QMD7bM3VGhjFJXataPJGEvR5B199Kep0H0IYzRfTwhsl6KOotUI0NMpCd7phf59OAlNjdhfrnZtIV0IXAbeQMX&X-Amz-Signature=5bc0a945d854df9097f003d87d2364510573a276c0c9d64577872b718133518f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLVNBOXB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIRJEPekWExzq4CFsgPV7ivHKVvW%2F1SabrwsZCY3DYbwIgflou6rjXPlxqUE4jUcwt91wcVPOxwmRC2t7USnDiTB8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPcD9bOOxEYzsNIvCrcA2SCZQC4snbxowjtSNKsbgr381Q7uod%2BL1T4mG8A5miIYDf87C49T3O5EE0D84ocU6FQHSdkdflFK2g38dg5brYDTLXAjlU%2Fi7gGuKY17EjIKSJn5eYJ2mM1Kuz%2FJKPAsjKe8TL31o41je4K0HF1ERnLQPYYjfAueijswg0XoAerN1mP8qUKyYfQUe9aCVhall%2FALVKtbKhPvnenpLjmGImxKMGtwUBUHqZL2ISryCjUn7oTb1S0DHaYRat0Es90s%2BRrQ13M0mZLBGIiLVapSWAEjgoUo%2BfBIucFfOStK19Gh3A5zFeWxeGqgLzM1Ql4HjYgCSALORPM%2BwkBsvHK9lfJG19uWFoK%2B8jnT4qBgXE0quTWoV9gxhE3M5IzFl22Ol14uX%2BL6x8dj5AZMFsUGHcwkRmGc6WvLauDxxc%2BK0sSChFZpBB5UvAJVcLf6MWPa2yNuXDLD0B%2FF7k7XxZgGoBApmMP2XX8pzje%2BBb2Pbgm%2BjdiebpX%2Fy9CIg%2FyhewBWW8PaFtC6hpThbnlTETuLDaJwPvoWIxrPo5GZ9USp5jCD9fzDwcENR5rVcwZAgEUere4Gqgrz3I0xCUDOrDhcrjcpE7iMxWTmMDSNIGrdbLjgTwTiaiQ%2FyIwWqVpMNXnr70GOqUBhuEHkdoxyboJlyU1dtySFm9do5Zf7jcw0Dwkaq7tEOKqCmPpbFLS2UJ1tlHvskm6c153%2BAfy7XQia%2Fnyf6WU6OPvJ8E6Pfy3xscD%2FKTF090QblIehsBL4zgVFBpSMDgcZXLLAu%2FU%2FQzW4JxRTZkWvn1Q2g5w2i9q4ortCM8ks98qnMCavnu3y70DSqG2jVwniagjNgRg6V7FYPeY2MzKFoqyF6RP&X-Amz-Signature=7d0cbd2aa6fa2435693e18677c060f01e0b959b57a0d11d1737b35516b25f11b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
