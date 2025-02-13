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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664MRUNLQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAlRdE9iMDKMy99WVQMmdaHdkgZEivLRK3ZFNSZQDfOAiEAyanrpNgRp2VlVN%2BbFpY4h%2Fe%2F7Qmmwi6cdI9F3UukDgMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPNp7HtCJf%2Fg6qVzNyrcA1vczjhP4lWYz3bKVD1ogeTh9M5wc52OLdpt9S5qkmdYWUBBI1Zh9wHTzK7BQTLOPgexavSFc9wt0vxogsnyBwPTYayUc1TFlZwhsYXgyOwXp%2FIylUavCFINQbpLJ4BGbqYRa49dSFb9Wb8nQq2R8PNmdzOrfc9k5guExf%2B8yT4kJvy9UK3t3wkp6UJ5cTUL%2BPKk7OpHZbqEX0Y07%2FoEDDhqwWTP0yjlJkNcbeTl4dCp7cYFNvSd1hIc5O1jScVHDZo6OKSEer3UVtTTpqTSM36gJ5kFbMYib0yI1r1FUMrGJ%2BBlxkx%2F6KTUqxQc4p04FGMobC6Hi%2BOEFujtUzsW1FmyHaRGak5%2FqV%2FGucF2K0q7bcHR%2BByh6gDVZe4o25VmOhVZqBTWOjfI1qQpCV%2Fgv744Pi3fZ4gRNVaAm562KtaeTBFwGPwzJW8u1EBcqccKnkws8AgEooMgcpyWwuGD%2BepfWQ8iMse%2FWS8jEgKxssAaaGEfTiZ0AndWhqpktgxUXzv1IUg%2BpkhyFDrrIyMm92FLnCwskUf3MMhd%2FdnC%2B3cczY1kjlXhLYtL0MMNL0Wkksgm3cOJia34GWeLKxwk6QcEUgD98CndggNpR8aOHLtRei0IhrwMx8BmVMDbMK7dt70GOqUBKYsqyFtX8Q%2FIK9U9WBcKXep50L4A4wk96hcIeIUnJPidkdQYMy8v%2FDmoX0xVwvYDKlEMgEovbBA%2B%2B8ijLFNrI%2FffAuFkiBCHBY%2F22C0tD53fihEkoCaMwpWCZYiQVWS%2FcGlaBxQVfCb4CLYhFzJ4BHrqexiYbPi3fKB768fVqlUL5N%2F%2BKNzXgyrCLXPZ8k6lhVthhJL1gkDI0t%2BkqHwotevkByZB&X-Amz-Signature=994e80bdf542f7ea0ff37a2df9d97d2e49225b519991502e4f4e452d94f691e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RF5BFAD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzcW2ss5NzM5wl3hQu39vJY4%2FjneMO2Mmj6C2hEquqiAiEAjzB1HMlRUkK7YANcp0Cx0%2FeBxGrjICfmJo0bdEklpDsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHrAA%2FQ0GKKp2N%2Bi1CrcA%2BBKIYFzxIBmyetVVVlT58zg4LDjgsHkX89XHtwiOeT6Ik5j%2FrDfg9UgzyqfG%2FqY6weLKlpUEfV82ECt%2Bi8vmLVu5ZlMRWZtAuY4bdpc6773uaUsPQMvSS0qxG8uHA9ossKxvg1m6l%2Bdu3Q9sLVBigN%2B9RzDcF9AJD6XGTk4CZ4RnJVqgJCEY11aG61wB9bF%2BOWgYUYZInzRf2VsJYGHIIr9J%2BXCKornlWzsKUfsW1%2FsqxHgKmM5SuoEhoPCfTnnRzmOXnazcbOF3vZ%2BsliVGnEWMjx%2FTaiinWx%2F%2FvJI06jOODVzzeezW1sBkyMNhQM2FLhWDr42K%2FEXU2TiPCTrUU63F%2FPqQpXLfQ4K6YQwuwW4gHCgrJLa%2BjnVQHFchzYAqrxNwr%2FEUhozctWah%2FxXCuT%2FXGYFKbWfmDbdTX%2Bo%2BkCS%2BC47xu5pC9voyXsNdU41bKWhtEpJVX1ZebVyrB72%2FzUNfDc75eLHkfUPUHO3LNFzAxDzkTs%2B7d4M26TFV3ntM0qhzZTjPPKTsFbzvGsgIEG1CVY0g8FusM48yOZOj%2Bff%2FwELWi2Wxd8yXX4iGRKwgPvdwZXci4D%2F1wT3bbBLihQzYdcc46tlyYxYVgQBgqPLn40yutem%2FlH0A42vMKnet70GOqUBanEs%2FNVhyy%2BqzIRkE3ava%2FOOf4Bl3erEI6LBNbcbZC4BDSnkersPrMZLDDQHiXC2J2y9oue5PiAbujoQ3SwzQ34baeni%2F6dVit2JN80UCQpuqCd5kzddyarGjc9uuSXkZUBUrXsr9AuD8HLJTufP%2BnJEzC9c13WdFUbvPmSR6Dv7FGxEapS6fbh20DCBwCrpvRphD9f%2Fbo1Gc7SKerOEiS9weioI&X-Amz-Signature=971daeaa0ea5f7324598add3f89a4aae6aba52959ef5cc871908f736bc0925e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
