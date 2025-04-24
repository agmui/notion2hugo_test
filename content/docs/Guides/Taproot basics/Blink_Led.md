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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MRTSFDY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTrswzeh0V%2FTH86Mq0rc%2B8wrVtl5SPH4%2FUKH8Dw8UUzAiEA4Hw9X8kzCdAIHZS3%2Bb0bMtLufelAi%2FSQ%2FDX1ExHt3XIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDP7e5%2Bw5IcAsBVDZ1ircAzcwuXbv1fAYa%2FvYqxPIPNS6e4Xu1W2tdqVN3eTJh5menuP2mZE7UmBZY16bTl29vcC%2Br7moGVZmSIvcvdcbdEZfATenRKyaTurDVFkMjBJd%2BtpHOYw3EXyjpUGXdieNL%2FSx0dTEb0orBMeNzoVEqZ1j3ZchmtCTRkik49qfkzoSOOTqfuywDHTeS27g%2F0ZkP37HsRhWtAsao3gt8jMuiMXZ1Gu2VT9qveY64u9l%2B%2BJfhom%2B2m3QJj9sAGjAcs8JHwznJhk3KxDXTinpq%2BNXgNI%2BwBXoZQ4cP%2B6CCatWRwSKXjIfA582rj0%2BS62ub4WnGWYr5P3%2FBa22mjt9d6kPMsJQtvUNrtrx%2FxDQ1N%2B%2BNNuN32QOQvwOYhQImV4OqdHACuXZocgDfTJo%2F6Y8IHFDi3OhPQyhdfWiXFKJfXOyJJwKVkmWYfFqMnx%2BGvKTjnpplhMpYF6SCCh3DUAIkaPSxRL0HlcLLt9LaWUuCC9RWaNczrh3N%2Bgglzoi5RL9Y93pH45JUmGGWixPjNP56E9PqmsnSlzmqj1v7mcP4JxzL9xlTfEvN3wjLCAaxG%2FO6fFn%2FF1u9kdkRrB8lDuqOWQdZh4Ava0FRPWQAyIcc4ZyDh2Unm5BvvFUBNcb796%2FMNX0qsAGOqUBl%2B5jqD%2FvawZIRPLgtYyxf3%2BLhUcwFx5dxEtZDCX0ChjbsUzx0Vao7%2FXvzV8w%2FoM4Z2CEMzkY3HDLkuAmfxShOJJxQeV9ubQ1zg2dJKfkNSvffEoi%2FzBScZ59l%2BY7HIGCJkkGC%2B%2FY2%2FmSeW3d1geTmHPtm4mNA6tDeuORQHw1BCmUGHh3JkX5SyNkXak7cFZp%2BSY%2BRGzZarqsOrKbyMgPvmWSAY0n&X-Amz-Signature=242a68dfc409593b7fc2c1a12f176f6f8ab89970c2b6f3cae2a7dd787e32e149&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI444BLC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoUhEIf3VpcpwSnUJja16GvrqMi4fihINcc3cacJHYuAiEAj%2FIq%2BAY735kLSye%2Bz%2FphbLBJtLRbo2i2p%2FE%2FJxJC9DUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBtU0XPKtE3u46hTJSrcAxzzWzPtpKGVHDMG4EwPoEBwpkMbouovy5Jstvv78EOkKhmuCObnGXa8OltuQQw2SDZV3oAZiur4si2%2BLOh62%2B4cSsquFomybvPeyPgsdPY%2BfKfAwmnlpOklL6j4vzf0BSnVObURmuXJrtdjP3g3jbuYUeiML%2FI3ghoQG4NxVObpyV0IVjvM5mv23LJSG5blYijuiD5WFP7ZMwZ2IHsoWmmg5gMNJ9GmS3nAVdedLyWfQyjFqUy%2B2fvxM%2BOqHtOwJw4E9C%2FPmOxMRiXVC8BZep1W%2BKtEmOpfLXBYgj4d%2FzaVtA%2F47V4ZNjG4e9fGxPns2EGF14Aa7cJsjzacZG%2FKxT6vaeueEjuUIZR%2F0eSf8gUei%2B1fGBNMaILwG0psWy0c%2Bqb6AvoHmFkP%2BAH%2BG5bTptXaoZEFFUB4ZVInhGgkMEqgQY68zG9fuNHpAe3FOXp1ci93UIe5g2wPY5scGgPFD2zRnv3C37FiWQmOmhqPg%2FhiUQUNMP2J9tybb0rYXpp5Tsm1%2FLFjwmjUHkd8xVeVbjgPYLi01vLVn%2BTmbdl4DcBt3vRtx2MRuuzEb1bJ0nTgDappPGf397nN7GhPk9zGqssMhSEYLKh7%2F02lwbdwenWz18xrTkBuWJ03MEssMN70qsAGOqUBwofpDI8rR2CLd1BzvQbNFid8SYfbNxvVE4Z8qf2oksha2bYA0C6mpvbLjY6Q953faPMIDFWxYgFOAW61vpiDtdP0XNOMh8dvFEGJ7SqdIgy0xVw8Mw%2BHZGOikqJ7rqGX2BBpba%2FpBahuNNYPotfiDiOK2mYFZEVftqgWummfhCS8TzHODzK25CUN%2F7G3iP2o6k4dKacpVvKiCJH6Iy8xv7IETvGP&X-Amz-Signature=49b3d29286afe63c5639cea7c436b404b7a9799a1abc3914fb61c212c3cab88f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
