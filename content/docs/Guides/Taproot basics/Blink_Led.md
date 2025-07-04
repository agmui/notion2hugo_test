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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S6FL2PP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAC4DXXkOQPNVn0Yv6ix2ErvuY0JBrivPiXu2IPbSkv4AiB%2FO0wfwVvveLohJaSqPHa%2B4TOHrOf4fWO0GEfXebHFTSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMoox5F23HuzC2qwK4KtwD%2FG4FsYLoFGsb84%2Fm5Droy4TLxFiJ%2BqhUaPGDWTNqfBs3XKJ7tSBxeSrtDm8alPBOgPCbSwbrDSlvCsctooAU7Flhi%2Bw5K2Hd2wuEuW521yV9HWtgMBlaXBT8%2F2sa1xoq2v%2BeAWR%2BGqnZnSn2l7e2JIFQnE%2F8LN3KazcTQcLzQ7cwzj6eUP9sO%2Bv%2Bk2lxp8L4EHnBC4LgRdCuhSEkoLzJUucv2YcAri4ClBJSwyBrh2xYEB9hnLNe6qzipOfwIvcjrAS1Vm%2BzEMON2hskdY%2Bs7%2B9le2XOu4JyfyobJcngsdv%2BH%2FRoD01FsqgxNMwUW7qH%2B5o85S9s5oxWp4h4KPprDANdWBtpHO%2BUNTHNfSd7%2FBiu75UA1fCBA0HbO7wmJ7fAy39TX1Gd7T6nPsNe1OR0s7%2BSwsaTT%2FEdRzrea3wvE2VI%2FfHwxCv4dClgydL%2BHGJPBK2fesBkw77xTL8y6B6FespHDter6rRGv8ZjOQnMUcUAGyHzO4sEnD5En%2BiH16TIxMgTnW6xSmMnM4yFYXbYmGNwhH5EUkWq9reULO8pCwKp7Q7PVSks4D15nQXQxfNjUmqO8iU0%2FN7x3pRBqdPpss0x4VhSiEb0qK36OMOkMakuPwlaguWHxAmKxbEw8fKewwY6pgHPm0TqB9nsWKp2YbtmHEx8H2ea1tZSO%2FooFrIQmukOrCSoKxgSwEFjXUQIwS2cAY5BAktn%2BLK7bBl24g41syymPrZzPPy8VESx0Nj2diY3tvStfRIzYNbXix9l1BghAdpavHpcFORYFZ61g9e4IAo9VNCSLomA6LPEF4OZWb7Rq7W7RHR%2F%2BblBA7oDFJy9A7NssSmBwIB7Zs3qZa%2BQgMM4ssR%2BlSi4&X-Amz-Signature=88fdd50d6d53b8e1135490119c8a4f530e34e604c07c38be2e896e153d2e46d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSCDDVOD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCeFQK1LLMIQ6YnC4pmCgnqNrk6RB%2FOZ1S2sdkEC%2FToQQIgbrxupxswUgVe%2Bsl8r49C4HlSjQH1MLGk%2BRpBdNfjD2sq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNa93Ou7nVfiFTK2qyrcAxBaRzWdCr0KQVYMDpuMkoVzClLObHiny9U%2BgRN6SHmCGHT%2FkMobizW7ATh6ZyPDiQ57mW621mtj5Yi%2FZrhK2ln%2B2vpK0R%2B9%2Fn4dlWvlF1SgufgFvj6LdmnSgU6W1GQpKIquGQLOY5oQeSdTSzSOKlwp%2BG8rbvNz8T4j7opKw6Vniz4BMf47twowW7QX%2BYPfVRraGVEWuZvTeYHjDSVpOGKL8bxRkHi2TXX2pw1DSjQSb47pGlF8Ppgl2oJ69zVT742g86zhr1pe2jpIQE%2FbU69F2ZkPbah1yUIYM%2FauPcxd%2B%2FgA5KH5JIHn%2FtPs1oY%2Bc5xTyDijWugAKNlUOyb7c3z0keWrJRzhTJKlll1yZel%2FiHXRuLRBrQf21G%2BfvhMjuW0smooHEHp5SwksFnEjdWI1D9nZ5wStXuDve%2F7C%2BDit0HJVgfM8hnve8sUBFakET%2FMJCmGADD0HQSnbQcljI4tJwkhp8pxU7HEGVgW7K1cwpO8H1KxlgoeEPQC2VhtyxqzokPwvU68RW%2FMLG8oU8Me7AH4oYc36%2FKZYWpoWgqGJaB%2BWf%2F7LddSmkRydCIXQeODmOhmvO806WzDDlaKbHdW24wzzfDPbAXSInpKhzJRjlINghFvNJX31cYQcMP7ynsMGOqUBhgRf%2FPt%2BLSWZAqM0p3QPeQfxzglTh%2BukIujVRR1fCxxP9ZrBLZp8G80T5LTPiueoQ8BybgGtEMWLU46vkvejsTTSgjLejLLuwHP66SRuDiw3RIXabh2xKxAwl%2Fo8ZOQjoR1qOFF7I79w6ElPalSGVLv%2BkTC9mUt%2FK%2B2UrhD43tcpCuAZiLXd46GSazsudjw27oBfaVi%2Fme7iFuSqL0Ursciw7YHl&X-Amz-Signature=a9d1a2eb645122680713c2fd7f5d1edd72654cf3c1b4a7715164e9c9629bcf7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
