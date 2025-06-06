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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXZHKXVE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDh%2FM7lrSsLb5ph8lYrtNZ7Zf0Rdw7tV5BkY0lEHzndvQIgNQjtB6q53svltvwGHkfUgDPaw37eVGJ2O5z4REDSRIAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLp2dpK6tzsCKHcUYyrcA%2F%2BQa6wSU86FU1MKWsuU%2Bo1lVtCUt3eBTQ7JmogefjlaYDpsBNPRHHi8NbjA3R9gMHKY6GnhEPGoBGdB%2BIkUKcprfjTCEkv5w8uSyI9XD4y%2BzyoOJo50Ni0sjpKd0T2BOsQOz%2BCATzRi2aLmm3UsAXDkXNW0lhBh8jhNsYU87L6q5%2BIn%2BdaKSfgO3IHPHzewxnfvcKelN4VNRmBfaRyH4kHpC2rCzG00fn1PWRSuUCSnSSsxf0DOoe%2FBRfE2kC2IFW5lYNtMi4KIm8OEaizi9E4pMK1V%2FtRR%2BDxO%2F7ERNgs6fsW0RCxHifhfUGBZOvj7itBzv9bQn2UexThZleX4fvhhDqZHltBB9E8sLTCiWDnkBD8TsPtvJwzoANwvvti8bHGTSIj1s988OTpJix%2BROuFuukyur4CN%2BZKjyLthA2BjsluUowQiIrMDPDBwLETW4BIzEh3%2FznzKKJZPBXpXZEfAtbehnYVs%2F9ZSW7U%2B%2BBPmG10rVoRv9wivfACLMDu%2BWZHWb6byMZ6wHxfcGH28so4CbuhdNnmbhpVGl8E%2F9Kajp8p3a%2B6LFAsjdYjT8%2Bu8XiQ8DNVgMdMScd%2FHinjO17Pq5beerVjKkbliNSPmG%2FFwdbFPlWC%2FDjUNQEWUMPrgicIGOqUBiP4uQefW2xQ1RGRozibPxjFnf91K1I8AHoYUgxU5niVTlx%2FNpH669eTYmS7K9Gd77Zqwwe%2FUgAiyw7HfvPBbLNGzL94YC7%2Bsk7Hn7vp6t3kCO4YO7eixlIdfzn8tdYTraym3wsHFXXJOP4KEcw2mOBSd2%2Fkynd1PuXqQagEZeqC%2BGor%2FU4zHh76aUhMYLVxdbX0QztHUX0rjAoPZ2na%2BbQ3j8kCg&X-Amz-Signature=c13c3b9ffd84eefd5fd89b0d2a5c5f869023e55bf1f6cd72d0387a0b9b61d8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZWWO5P%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCID7nVxYPibiGXe14H1RLCkj8RoKBlaWv2NZDjhTRxmjvAiBbNF4CqciC3bkjyc130hQGaL0gfiywPOAAfnTGILLJ2Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMBjqfROzZZ9CAM%2B6eKtwDHsUlFMJDj7uuT8MdgiBrymMdergBs%2FWvXTYu15S%2BtX3EgHgskGFqdicIY7Cb4b2tTr5CEnF6bogEN3TzWeHYo6XHnFfLYAxs0iJ96aSRI91Rqgx8Zhp8nXFQYpCI3QumEugD9XpVEHKzz%2Fwlggj%2FImumAVkZuKwEzjinQda%2FtReOylljOwp2iEX%2FHrdJ3evbiBJ58j4a8WGZIkBozCLxtTH4wz274Hi%2Fzeslf8fGUhSVfknReLxZojnIc0PWWhYS62MdmNKoBe0S2yLyH%2Ftk0aHcLO96Y8LnYddgXdJL8j%2F5wrFWCQpvBhiwl4bm4eGfdiR5QgZPg5eqCDwIiA0XZ%2FjISwY22gmM6Wkt%2FERT04T24krM69R1V4ALbQRsfbhvnfI5sRWzzZHeVeb7tPui%2F6E%2FI9loNwZoqKralzk4YoT93hUzU0%2BuYkoYxyzCBN4J43SUVjqJU63R3V1%2FYJtpkiJpJTOm0EOCrwP8XWiSW6Dtwqrf0XmzRc9i6crTUPjjjQQAaEA6%2BfU%2BZ1c32v0THZaLFLCtle8phqmQj7M65zFsB4dHYKrs75figvq%2F1wnt7PBVZrriWWvCQVFZTyBWaP9W%2BLaawsET2BhdFakax7C%2FoHQJ%2By%2FobZ8QXkIw%2BNWJwgY6pgE49nHca%2B1uYpbrWUzjbe4CThH5bxEuoybB5dZs%2BjUC%2FZXv3eiKXkMVwPqq40pYCniU8lA3MoOrKuXr%2F9Y0gLstvMaDfJUK%2B0L%2BOPPu46loF3OkChfU%2FqZeckRIMhlgJv%2FAw1BsGfB5cLal6s%2FuRy9gPfUXMK5fuNBvmFi1GC0o9giBSadWJ6JGjWmLFThpimh3l3mjLAzBpaRtW4YkXX50UBbwVm5C&X-Amz-Signature=a03422f72dace32aaf1f295c9d146bed33b4ca7f5a88ac50d70b9af3a5786351&X-Amz-SignedHeaders=host&x-id=GetObject)

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
