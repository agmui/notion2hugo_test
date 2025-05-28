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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LNDLEDF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHx6cCIHfYQ8LcgW1ISL4QvM1IGlX9jNV337EZiek3%2FQIgT8bhv6j%2Bs%2FyGGT7wBL7jQBXFChnMYQE13gGLF5GlY00q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAlpcNDlpZfqVNufwyrcA1kJTWWHF794Zr5wNv8KR%2BHtk%2F%2FE18hkw7YKPTNxgRs2eqQh5kRAbtSb%2BXtGvsqhUoJpx70iUPnJxDUR2XoDUAGWzTuCIPhbPLGhifJggTYZLsHyRL%2F5ysGQLIQbmbZmmkIKOY8Tl61izx0PeFbPEmBPYK%2BRxEy5qmDN5mcm0mwSDdi%2BrSCFyKjolcZYnZG%2F4fix639Npug00h4f2jP%2FJn9iCAuyehLDtvyTty%2FJKXo92FlJh%2BPNoEJ26i5qHF%2BhC6HfAavafFTr0yn80iL6HZoZgweTLhYBoWbXdWkYPdcdJCh%2B2aIj2U7Gi7nlrY7Tv49ILGYDEY3%2BfeWTExkZ57NJe8FuS%2FugoPd0pHNz0qdIneXxdFD7LffMH4Jfn4W09w%2FsSBBsfKm5d8w%2BOCMMS3ng3S3zmtdSu3nAP%2FdWNS9%2BeJFhMhgn2t3z%2BGRN%2BIVlfC%2B2LXagWDgegGP%2BG86ZbJ1QWzF%2Bpj8w0L6A8HL8%2B1XzN%2BNOENRkmyc3SbE9fGE1QgbQ%2FltBwaOMl5ahBlGAACdurHDaK6MbXS65LW5wOuAyXDXdF6Sooc9i7GK194sDbvMwT7Tpgu0ARnPCIhLS5kGzvehyObO%2ByZ5I9Z2wFHpHEAFiSWyr9hwuK3AIMP%2FF3MEGOqUBIaLtVUK2yg8NgD4fjGaHkHkV8EQcuXDc4tYQYaIZxKXLEkE5mKIVRZMQDZL3l19FrP5%2BfQlBFN3K3d%2F04TYdQqcit%2BHGKbz9uneqCu%2FGp1pzMBkMhfyukLDnn%2BMaYr8t%2FhoYjoGx34yYsqbfzwdpTRwiqdOfL6%2BM2Vom0rlJSccwKagezoDhxuZwvdIUQv%2Bgx9l0T7FSpe6A5uakBIbaOp6I86U4&X-Amz-Signature=5d064451e91d51ac01b8b9376abbdd0dc4ee70f55ae1321f4e37c10699fb7a69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F2FZXXK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzWUpKWhkyHnVi7yu1vVVxrlaJCj%2F14GziVifKf5ad1AiBbieW%2F9dw74xy9QMawRe9rQJou8KQVt%2BP%2BuU9iot8Amir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMXYg1fi8%2B3Nk61t%2BLKtwD43b1oBmfzQ3Zox3FwDfaSGtGGE0eLmwapQHUTzU7eCGa0DkF%2FTUppiSu7OGiAn3RXIi%2BeHAY7y0uWC0AfexP0PnRFun6JqAXtYC7q7DwwQknmU1LU0gqR5GmzvH0jbiGH0NuE4IxgHc1rXwy1FKeXmVQjzsTO2nmvsxvESIbu3l5Wpp%2F9jQmjWux5P5krQdcjm2TiLetHOaQ3NgS8OTDp1q%2BPHf5KGS7Pa1Ka0GsLcA8fjOhKYTWbJwR6bJgX08gT3u5NB1wytiaq1CIhgz%2FUGqsaj8m8mipitZND8asHu3bXudoe3a3LN3kD2xFYfjaPeMQZXHNRkt%2F6aXTR%2BMV%2FsaNETJRvSCerm3dxW6jT9MIkTUWFAJOlMv4ta7hsiMkHF3ijpjc50vZ3PRjIoE2P5hTWU77tNPQx68DvSSCdGDiJOOFlYQY4pV%2BxcvCTrAtXJKb%2BzS5A%2FEI8S33rrCl4%2BU3WiptGRCUTdRaUk%2FYo4vEj%2ByzgJE%2BMpUmqsdC57qlM0tZ8TjBsSVm2YuG1u3xEG%2FwDbC3C4ajXnLAcSTReBW9yo540%2BpyeYPiNl7Lg9OEvz2pJCCododullL0BOGzQaL57WcxdKwjvZOOvbq8bVpDnMOoKUBKRyWrKNcwkMbcwQY6pgGlojMpvT4c6DnVwrWma6hE0to2C%2B2oKK%2BJVZTqOWaRDaIX%2FETsSGEgVNOq%2FzzEaEi9e7JohPHkfX4WZQmZWPpTYhkZkJM6EoMabcu6C1hGNqXmhr54MDbvmowewjzSyA5XCcRLbyLgLDgs1VCugAqxaJXjRcwSymA08PtY%2Be3i8LEPcrP9wvqPGseXJSN5lpsKyJ%2BqY%2BSNKKhYAzPGBHWIFyWJjVZT&X-Amz-Signature=cbbb50b7930b891e75e4e75f16447f05568b2ba86982d12fce7a47021fac3cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
