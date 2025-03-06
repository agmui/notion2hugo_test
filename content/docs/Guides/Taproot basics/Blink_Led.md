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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OUIWBD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4LSavlQ9eCJiDfSOouaaKY6UGUF8UYjPm0Qq0JJrr9AiA%2Bio0efZAsrUsHKdxFhNuuCCAEGJiQhLVOSY%2B%2Fx9b9myr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMb9W47ONmWvi6yNicKtwDBOvxtuInsvuTOhAXgnmEv%2Fkd8D%2FMcOrlRwA4AArfmnT241qtl2rXaA%2FD0R30q7KNC7%2F4MZnYqWejLxfDuk9THqxl5UR47KaTxsTab5giB0lD6NYHacXum1gmcZPe1myppexMEPNhActMnfAOoYh%2FYrEvbwdyZoHOedli6HikkO%2B3N8oMVOnW5Ju6Hv9c2I7Xy41vQSC9i7O8v8zPXQZ%2F5ceD7xVn89JE16FOKqFh15r63128n4k734Pcq%2B406WNAVMfSxhlLpqc3urEQk4MFKPPhElTszurJpIX0AGrEX8lb%2FaKeKI77xQGIieNjwIK5S2FAA4VuivrWiYOuAkPlyCINMNWA%2FugocJiHvyUkKO3z9G1CFVzCcfSjyUwy%2FwMGWEzOEuECzipxTWE2dqZmUMr2XVzC06b8fIgGLiAjnAAoHr0Wo7ngTaX%2BYD4DcS92qycEiHUx%2FXxiqLTAsiEg2Gaok6qqU1lPq%2Bk2YMHe0wmBqw5YWpDCq8sSq%2BZGPkWDv2vWA%2FzU25vi5i8yJVywlHKT5%2BY8n9tbPrxTmVc1b3ezERLzd3bOVYyamxQ74MMfEzbTfBK4f%2BdTnuMkYNVo0pdLtLSjBNXUzTp1MAKXJs7vxtFEgSOVxWrGVMMwqJGmvgY6pgGRURGQcDi7tCpGB%2FgghCIqQ6qC6BaUXQgVXcuWMJEW2DaXBE%2FTcZF30RpapE8znV%2F5L12Yx%2Ftsj71imf%2FxiJ9Q1PnoH83MaPSUi7qCGTM%2BZ5HWJSJXnAMY3wATw1FOxyQojP0tasFamKanMvLrsazNVXgIhbD4koqU2wWWJL0DVTYEqZtd8GVG7cEpBtiPAOrH5s8LoB9Ru5AFsmg6nZyUbs6Z9XeZ&X-Amz-Signature=e6be1c9dab16dfd73cc7c26c5d977cb31d5b38d1f982c5a86196198ab04c1719&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJAUXDN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FaO2pDKqHC5hoFASrfZqwSPjn9BkMW8OtqnhE57xq1AiAFegPLuSQ4VPG2ueA12knSK6yB3uyXUSUK7l054TEOlCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMjDGF0r7xHdapiQegKtwDseh4sdfXUbJCbwg8OC%2FVUz5vjH6fsuJkuowRv5FhQFLv5N81A4B5iRKcoi%2FDgSpC3OItARLDqXiqc42zt0jwgSIQSpLeeUi5LYFiqZTCkFqnI2kPDKHxAYbnh36cgP5OBYyNQNqqtZlOm9zaO1Yng6xBx6fSAQxaGsjFVHP1coi9cdcZEAI7tQaHD4WOnJ4nmT6e1JBM7cvB0%2BnDbHuOdC1JFNNO5AbHbpB2iGgxYP5jdJvyBskX1roNnN3gEcec7scGTps4j2ifs2kY4WJa4%2BzW1%2FfPgxXak0DiH0Sn5X88hZH%2FeRo%2B0EUCbVPRmIkdr%2BTAh5ZRzZvQc3%2BvWGV7s28dngmJc5zE%2BPLFPgTYYOSV%2BXxk%2F6Q3d0D0Q5iFlhJhMcijJUGBiRfT47nTbe0ZwTBcnYlK7CiMP70%2FSfBT%2B3F%2FV7cePFUn2Q%2FkT43mfl6m6AxVDpzPYwXkP8yhzqce3nWTjaCxwxSkMhxEsFlWlgfc0yPHwWcRUTQTTRXON4CDm%2FYzzb4xv9m24dP4hEFbgZKS01uUp4b4uVN%2FUFhaQhjbjQEFHnV94RpnIDEzCDxxFa61pMLaA2zBT2ppsqG25AAubxyesiwTcVzFV81uqYtnAd6oDREGvmNaFnwwu5GmvgY6pgEegtuWJtTdR6%2FgYrRuSa1ia4z%2FgK8Nmpqo%2FcH0biGeWj52Ztqub5BPC1pdix10tgMLybxloBHGFo7ZzAn4mzxTymQn5E1oFYKS9eyhStQp0vhdO%2FXBF3fmhToFs1gjx9xpaOptRJ6j9A06fuuO543i7E8DMeH0GndBqa3PSxilIPp8c5iJHgNBz4AwfTy3Oo11jThRP%2BwyrLF%2FadClCJqUP7XBsFg6&X-Amz-Signature=4ae3ad183a201f151f88213f72a78ee0ebd74151d2ab3ebe2c8f26bb5971c23f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
