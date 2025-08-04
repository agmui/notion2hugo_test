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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVRSNTT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCuEd%2BgdLaqMFmaS9FuF8YibvuiACdz69uPZWQkeex1pAIgQ1FY3%2FGkUYuwgRF%2FMHiQtJjCxjlgsFKzzYQgFt1Sz%2B0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKp9vfZJKM6%2FEpOc0CrcA4Np0GklL%2BZ%2FDluzm7YP8JZFZH57o1oCRg6bkgztoEzZ%2FK6%2Bsx4kGqCKXevTN02J%2BLaNbWVQfy2f2aiFyfGdzyES%2Bh5aQkssL0A2lilShbiSCFGUXRQTCpdNeeC3WqqbV8vVAvtyoGK2pFS1CNCY3UMtPoUwRrEMqtBCoqNUAYV7TpR6S%2FdzxzcL30lwq%2FtbhZWU5heGzTMqkeSPEXtRgwLmGWHkUeSMFuWUCxOCScGfur2qnfU%2B%2BnLa9GFNphN0hUmskcU1qQ36Slz%2BhZqsCDctHciCWXNE1G5JGNVrg%2FyTQmXFgMe3FKN8OJAZDfgAwfwZMhJL6ZY3fq12CZZnqNWwt36aqvHYrejwLAdTjPRWdnAp5GxozcrnEfdvIu4Y7OzbKc5rhuK6Qq%2Fa72UhhgRavk18WfPig7s5sAcjIQufX8zPSzkf5uB1YFy9eCqNDGr1BLyb7ziciJS%2F2yoHrJFK7KNtrdtI%2Ff056%2BP7qGuCm1DeTqtruqSyxZIm9hMi9cEsmGoFvtgL%2BRFmAlqnL62cW3KRsLhxqdqghWUsLGCeO8rehFF40H9FNk1zm%2F5fRg9ycyy4sc%2BywKnMQ0ZQirTjMHqgQ1iGkobn2VHkTg0rb7uPRGyjQOpAW7lnMKvAxMQGOqUBtNkSZqiB2bpj6%2FU%2BzLbUshoJdUzuGxjImxXPziix%2Bpc9SbyWyfP7MSlWdNoe4uPEy0QISvWM6RcQWRwadsxMiK%2BrdoXglBe%2BhpPi4bzK%2BBwXoTrZyS6xvJxrsedYsQi7VQ67K%2FCtpNCrWvVVsgpLwR5C4gAfS1rDOXg4EOS2QgeGg%2FJmdPPVxKhaaC9iJ4hpvRXsGD4lElOh3eaPAk85zH9r29Fc&X-Amz-Signature=13b528548f4e91edf17e00cf736342e04b285c1100789cd6f822e9bb3451c622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ITTAR44%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIC78%2BV%2BQabJ5f9zmjuo8zkWjK26JXZHyrfwdKHKe%2Fj7iAiEAwI2j2Iltv9REVZwFBwiGRJL8RkOU9pIoSUfsUErGOQAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDK8NzPmXhZdTRmo49SrcA2fmemsJmWeg%2FlFu7VMp%2FoOYRpoY7xCKJBF%2FFJEJnRCCi1Bk0sGw%2F4pp%2BRCzMI4lNmupp5CTavTz3I8YlLefra2aNdaPP4MxLY3GCXryNRu097ePLurKU1Mhz8FtMCP8QQ%2B9f9PMSYaYI%2FLphJmzy3XCg1Zl2N9%2BsAYgI0dwogL0n17Y%2FmcLIVM%2F8V0Dd9qa0FUO%2BDxgY1pvUJzcxloKPd1jE%2FXRXmMeQUsU%2BsGwvpqe1TixP2sb8yJZ9eWcVTa5yFQV3Kvu3nTHnPkY79LIV%2BuFetuelHfmUls%2FtU0Ko%2B0uwDzEcMLKXFAt2HoTA9jQn6KkWDKWOSRSpnAMW9ScT9W7L1HPz%2Frd2L1igOHUSEcFW%2B75xnIqZtzPT0ZX7rOveO2OWRo4gX36X6hCwVkYEX5qomhndiGP%2Beracg9lBodatU5pDVq4QpllnVN3acEHCaguN9ld5qm9%2B7HhEo1Dy7ZQ%2B7AMljVSprPqgFJyqvd97Go8jt%2B7%2FDex94eRaxjgpxu3125485MCwM6x5nLNvaKzBFryxkuF3V4aPrMAS%2F9X9QqGbPu2CX8T9j82uHcY23GJ0SWxCNmZkBzjm89axOksrZxlB%2FjZCqzvNUuwHXKJPw43sgL6NiPWDmb6MKvAxMQGOqUBkn3uVMhXa3iIyaOoa72CTTuqAajDXVK91MU8k1WHn3qBtD1reuM49Pww2NARwGSw6wkMYh8xPL1t3eOcyFI2ibovKRzhJ8xioQiHdM2Au6HCt06PheYdVhNq373Nv3ruO6S2i3tLP1EzcmhIyN2vivJnFFlK7%2FoR8sd00syhL%2Fcu7kQhr6sfGADMgARKdd4WwpblL87ZVHD5gy733KyV1%2BWJ8xS4&X-Amz-Signature=65422edb4f056212976b9d1b4cd1697b22a7dc65bc5251cdab2c41022a4617ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
