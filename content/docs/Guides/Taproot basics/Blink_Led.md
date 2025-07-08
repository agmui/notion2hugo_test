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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4KY22FE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3ZXIYdo%2Fb0aSxE6oxheqNGGhoANwIKO1zwd1YcPUHpgIhAPcYMbjSpsua%2Bo4fefJaRccLEvkKW6AIeSfQikCq4rlsKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8zpVNPGEPE8tUgrkq3AP707EsmyXJ7l3Bg9IMItN2NVH4KRyKi0IBc1iGjxRn5ljFUP0%2FPLWhj1ipAffSmDtHN%2BoFnej2zQM62L%2FbjxH%2FFGD5CGLsMqAxBD10TpeBDv6YOXYjOclThx3F85yHDPokrD6ICOqb6xrR5OVJsTHiQrbNR8Djpq2UXNuMeTfdC93bkHDucm9LThXjvf6sgAu3dUlovQ2vQoedKKkXx9Pb95lBnV2KuUTj891XOLtGd2OXdmknOooSyoYvzu4E1uM6crB0rfcrwPxdJX%2FrpqP311b8RJQ6HaULQD3AcxAFUSknM47kAE0j1cog9EHi3QMEOef1vDp4E6JhRTrF1Gecglw6yb2ER5ieViB%2FrHyx3RJxcMsnktUWWVZJDAE3%2Fs4hx96mL0Bfki6%2FyqXwnDiQLCw4NtTEQ4UhDYB3PYYk2OTrTRo1N8vHm71lkXKpZAEp6lsqjljwC9RmrnBrqPQ7HBDmamUTzqJkOBMXlHhdV%2BLOXgEpZ6SuyejjDDpiP1bGnoI50LtNpcUp55ORqWN61AhdosKO3NrV7rc44Renm0vFTxxaVGtbOqjlmMShDWVoNroR6xK7QFSAlcEZIdtdmq4TzYleV%2BAo7T%2BurxszFtJFNWDy9iWNPb0zvzC62LXDBjqkARyYe%2FmKTVYncKAM6b0ha9qK%2BST9taXioTgy5vH0ChkbB5QylzSRy2lpl2LOoKBx%2FFZ1AlEtP88KqF%2BVYZrdp%2BqvPo1uevjO5J8eKblysbd41modvTmgw7CpaNP5MV%2BlzgKIEJQ%2BBQmtgrlaxMc%2B19CSdKCNWXvz%2Bue58tTfes2RBPAI9crUlt%2FWaWuKa7bJa%2BX9ucw0VFq%2BsasXbPecA1JuQnSt&X-Amz-Signature=efe8f1890a1cf0306970b2af606333700ba9969c973aab339b98f04afcdef9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFJ5YKR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjuhGzzjnKfiyXWXI4EX4f02bbHukZeBN8R%2FmR%2FM5k%2BAiEAmWGn5JbbTiZW2HZYGwlKAAW4bXWvsh6M9PxyMjtXqPAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNs7Jvp6OW5FmHGjCrcAwYmfxYwYeZhb5IoGxIMBa81css4u7EAm7JBu8mLqMpdU2EfKThtDdSIbL%2FSxuGsEnKwI0PRQr94gSpm6hvc5hVfOQaRlqOXrOVEOd3Su1amHej47LTx6dk06U8wEACgwjsAFQMZ6FeRpoY06qMMAkT8vOLxo2HwqnY3aqxoQMkuBbbZ7SzEjvmiUtyoETXCxmIZ6RkrWeQltG2oqF0v%2FJk4FStLJVVRtYao49%2B0kil%2FFzhEMhTA0y5NQ%2Bpz2vsg0yS8I2vDECaeKyGkn1xAxB69JHS2m4J%2B%2FmPlfNw97Ap0SvOA%2FFxl8IMuU2VjoHSoPdt10nUYMG1t5aMbjOvdj1rCjR%2Fgh3MzqZ%2FeCYp7RaKD2qZ%2BHtEuPIJ%2FhGk9338OYg%2FXIynO1ubpcVFHjVx0grRKM3WWIXHZHtE2T1dZmsR1UA9uCYBvIk96nUBgVEmdFz%2FgYfRDG%2BRU7l4jQdMjHOAsTN%2F8A39ZhNujhzCwymg7CqMT9rBFz%2FKW%2B8UJDsSHUZ4T2ENvHwN%2BoVlG8ieFF%2BQ5rwLCQ1epRpcvHUwoa5%2BMbKrpH4GuaKC3JOcsvTVd%2Fsq1hQbtL7wMFVJMZFDwdtSGFCSTlOcsG9iFhIxO2GJ9wU03OvwDCSGoPi3qMPvXtcMGOqUBuqPXXdx0g3jup1QD3EmwCaZauHlpLKBVpOoJyr5Zgbs3kkny6xZw6Pk3Ox3Ew3zmlbw4lDcHuoRsZ2tGtvVE1dhULLOGlpCsokfEDMFo3q%2BCcW%2F%2BJg6t%2FB4ICJtAt7bJlQSi7tU5UICMSxXIVFc5q0KJzwpA1nvl3prHUiVvE2M1fZiUuuvuKvfk6sgGAd%2BdiAN8shFql4%2FPkXD66vuJHr8zNdAQ&X-Amz-Signature=4ca7daf18f7710ec806749615efac6b8403a80c60f102f96aaeaafbbe9aabd23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
