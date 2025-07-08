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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDCPFMD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcutYYROn8Thh9LAkrz5mneH3%2FUHx3WMBk1X3BDp%2BGaAiBY%2FxYUyxnQorU3%2FVRLWjRSm3ab5N3kVipNeEl0p%2BQf%2ByqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMN%2FtawRuTDf98sgYKtwDoR5i4dLWF3daAkfADLzqJ%2FNVVaUe0BuKsMmdaVzqc7sEWVrn7dc%2Fymxc4hJlD7b1csbyiLelvc3uWkqTSEJ4bxva0%2Fb%2BjxhwShgIHNThGhzMkXQDyCCEVmv64SWr0B9P42lKI0FJMidTxh05Qz3%2FRLRdgd3mEX5JDRNYC%2BPQYmvM5D%2F0guLbfOZcAj2fCrdPOdFFqaDqcS1JTUzxx6CvlcqsYtEyu5EMA6rHmdfOl%2B8xX%2F9DaJxLHXLi2LLsk07GaxvBznwGxelFbiLBBileuv%2F22WdS7RAOs86JyPgn0xefzvli5Y3Vn%2F6%2BzZOL%2BU8ukHT2CHuPQfQf%2B9DMAnbdF5Bfik8tde2eocNYLA%2BnarL1y0b0BNGmgN%2Benlh569fZpBM4UEg9ESfJkzna2%2B0q9O2dwucRNr2B6%2BGEnx3LTmiTgADYFo%2FdnbExmppaXfbYiQXmIlu4xFPPCPSABuETk2ys2DXVnD8166mnQv%2FlGlT1kuii6khiZJqUCzCQGM9ZV4WWJ%2F%2FqO%2Bq%2F5YewcnI6HtD1%2Bio%2FKFe%2Fo5V42Lxe9J%2B91LwkjSii9RwnxH%2B3JJbl4FDRBpLBBBsdBQnb2UirOdJRu%2BsAlCvxliwpX2ltPvc1nchdcZMIAz8qr7wwpqe0wwY6pgE3Uizv22HgGL5lOF85YTtA68I0ZP8mNk3nYPMGQPhU7gEPAkvg66lkIgbb%2BhPLzlV56U2klUYTFhTI4cS9EOJQwvHxv1pJOC49kV5WvsmxbIFCmKhDyypkgPcS%2FU6d3Z1OoxHlIPEe%2F4rspSeybVqbvBF%2B0u7OWl10Ypyh1%2Fe%2FDnCR0M6qYC1hHjjdieh7gFE70bggHzMKMvPjQg8hhEtAfhR%2B6vk6&X-Amz-Signature=a07a26ee32b30b224d06aeaba81f1757fc63d47fb127162c2c448bc798c5f2f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYCUWJU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3JJB5OHwRpnR7ZVTAEeVdtXnA24FTc0HS%2BWhfaqTXuwIhANxAJJYsJxWsFVsgfcDklbLsv77d28a%2B4EGQ%2Fsmj%2B0zXKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FWZqzzuN75ckFTgkq3AOtQ8MLTu2x%2Bqx%2B1hysjc9hYS9p6Mnb%2B6gn6jCSnvqSFInxc2tipUY%2F2Nfn56NVrwJUFySfAvSjQ%2FPNhGITTSsHe75RYP%2FVqZ2%2FxNCGRAd6%2B1A58rnKDtQ60JmiC0sqjLlfRuxqzT3ABVjc0pQJTvSHxyKHfIwKrOHHceMdOIBE07o2osvirqfxKtmkDxfq5XDoo2VjE%2Ff7A3QYkmsWlN%2B4g33Tzza3Hhkc4%2BOfLqurhBOYipn17h%2F7AB07bZJwex8PVqpR2xDgLVNWW7o7TupZzGFMG4MJgQpBlMKNZwRrCFyQ49arotJyzFObMG9j%2FMEmGB7SrEaEjiY04Y%2BudE2pwtoZGJZveQfM1K9klRTW7xLbP7HIvYZ6Q1B%2BQQ0AjnyD3AOCjAZ1V391TDpwwlzPmtbxbmEJktxDwmgdglTM%2FWWcKB1eacL4XuRBVLtzU6MzqFfKScagvg5TmifOVL1EU470FIxxax6heGOEIUC4SqVPzox%2BmuvRTGxdkNxYyFdQQCpXdXvBn9hTa2wS88IMpcrj2%2BrQYq0sla5CNRiPkP%2FdAqj8rHGx14ey%2BiE9R8F6L4pAyYpEE2Z%2FKO2sLi8JB0bLXSqv9KK%2Br5y0wKZTIFs81jUfhQkABINyvjC%2Bp7TDBjqkARf57rZFEU3lwcSKofLrVIhYH5zu47CPncGaBoXqdMJaNpGiZKj%2Bp2ysBf2oVBDn1be2qxUw5FiDqV3%2Bxv1oTal%2FVOEKpoTMaiVAhrH2vDWhaO%2BYvyk33ckKJa%2BYkuWua3qx%2F7PUJxRIJ5YXszSiIBwHpqwUMcAcLmtlnlaEnklgtVTExJMUbocO0ivhtOiW11vVs9qk3%2F99HwWaoIzLLgP0clwc&X-Amz-Signature=cf87cdfe2c3f1cd7fa88fe4ee02c2742aed517baf549f309aa5679ba2bf8cd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
