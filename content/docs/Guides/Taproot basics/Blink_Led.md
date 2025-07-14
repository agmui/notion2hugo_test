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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROVPPYWB%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGp%2FUOe9yN9Jb%2BRVphpe2Ek4JlL5dysnOrL6Rz452PnzAiEAwecYI7T%2B7YYRJ%2FfBFaag4jgvSoixFqAUV07avjvguJgq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDF8Mv%2F0BXIgSzp5%2B4CrcA4Vwcpm01ng88R5xx93Up%2FewbWJk8uC6TDN4HOqLEdBqscXZCu%2Fk1m0XV81Z1h%2Fzrt6hoceiabIM9wntLsyb%2BENNeUI44a4A3PqUGaIqO%2Bc3h9OJzYlwS6byN602PYshY1gt4gcVzpbFYjtC0ZTfgxSzoMXzMnlkYyeGr2V%2FipsnLL2LvlRcDRexHliMTlQcx3U4WGcxUHZDKIy4em17%2Fbj0BkK%2FOxfnzOCNhgY9Tpn31fA33Yu5RnNzNNHgZgADkh9iJZCD9ZbJsvTQm6AdMp9mugQA83acUZfHFp2ovBMlMb3x4p9B5CEi5DgoRhhvZ9gAjlO%2Bi8XpAhI8mTOaeO3VSFpGD7pg1GYErkv4bT2GiYtng%2FUkQY3tcqnkhn3DWgFsZ3lkNvtBupCCrzTAEG3nKAJ%2Fpe2tCfGN%2By1nONOGHJAJkqYc5uaeZUKRP2rCeeV%2FbLQAcWgGXRsagneU5mevVu72aWMhrS1KF9bQ8VSaHNWpFI8dPGaA5SHjC7LcDShx8OUluWSjx9okM206aBQ5TYIIALhk5O289WUA7ekJWKePNjLMNLLgnciFLcet07ZZL6tFtXZ5qR7wCA1nl1okAkA2%2F7jJ1g7MN9MNG3V%2FCZNbEzzjoFkAaO%2BRMJDM0cMGOqUBEoEOo%2BiUXlX8bPLsaTMgwTuNAx1x80TRvnm8w92I6Sb85ms9AOzT4JEQdh1CwYpkdyBlURkx%2BKXEdzRkyTdRVUhHGqxjnNWJruFglgm0%2B4OGHZy%2F%2BPpfKqvmp8H3j5KrYv7ZE4LekL82YyKtNGISpqoOluRCPixVNChIgvjCS5BIRSXeKZBZGUTwRCXs%2FmToGz8X0tXAr3BY0D%2F6zjqn%2FChrwP%2BG&X-Amz-Signature=ef48d76e1c488a3afdb36bb216f2e4cb4415147f9f19e4615142eea46a74f358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGC4RHI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDFAdBFoHJbiNEK0p8UREKhsUyt9U5Ly6Dbh7h00yL5LAiEA8PjarZTv3%2FFEBxdqyz6p9tF1q8iTV%2B0I3ve4I4gDO9Yq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGhVEyHti8WOB3FNuyrcA0GvxOETrdEogHvUpzMi2Z8i84r1WlIAcfYTuW9IzZXRYF16aqhETY7mgavmPKkURObEKahqIf2P%2B2gs%2F6f6e10y1HL5jseWKXpfjCRHqacbFb3SFlAXiB1bSSi9EvqUvwN4RqHjEeKGfAHBUO3NC1vG%2FYGHaROz78MgR2rFP4%2Fsg%2FZJ48EKyGT7KBNo9f5%2FGVYfAxWxks3obJG3h8MJfs0j%2FiBtw8dFKNva8AJkYFB1ICvx%2FrpmqfORd86G0Dx6NLLkaXxR5McoftGCjnw%2BQ6j3guURkZCTp8V62y0nIm%2FBrNVYXHyE%2Bynjdpt%2BBlHWa9YgyuQlm4ALaLfh%2BruK4k%2BslkNiL0XfigqCUpmULlxqEM62XMlbFexcWO7VpwS5DjXC%2F7Y4YRq2yYSJACjC5LY02%2FTuZ1q98DvFiqM2%2BtcAxd95mFNfybxtFWfckzddod%2Bvzc6OIIYtLvaxzMo%2BVKlG5lw81Wf1EKog0%2BYxHgjAw%2F6H34DXMtF5PuDd4SNyL9T2fkncW8fnw8tyq26ZPQ%2FatSLgHHspqA06sJQIgJdnxzP9foViLBC8bAacE1GpiNIXNWOF6BoYAjVhzi8CjNM%2BC3smL%2FGP6MUcSYHbXUqF6U%2Bx5cSsSuLkKvgkMI%2FM0cMGOqUBEkdRPWXb4CErrXRRb%2BTHINf1MXIlq4%2BLF2zzeM%2FqDFl8ZMUmkMDXHI3dGYES8SR1U894PJXbb0OpLsAmQ7jAQllKhhK%2B%2BsQQ2vHJavjV%2FQ20YWnwhv%2BfmArhtqOWJBABJC9dhWbojCMzWbo4n%2BeYxDxL3%2BwqY79ee6eWnybW7EtGtAnMz%2FsY1XNQuekLG5g3THgKHah7nVZogASdqzh2U06IXBg5&X-Amz-Signature=14f8853d868e72508ffb7c40d94cdc3b2a8036800c108e93437c0757e070cb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
