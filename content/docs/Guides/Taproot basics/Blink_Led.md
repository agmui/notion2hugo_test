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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG4FRWU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8U7iYrOIGjs0bpYWoQPGKigvThcGCq1j4Mw29Gizb5AiEA8fhmAV5Ob9f%2BMD6FacGKfjU%2FX%2Fb23OC23uh4lWW3PJIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARZKFjA%2BleQkeYTkircA1X3%2BbPUMRi44gDU%2BVNV0dT1kJH8BJUVHS9Ew2d7Xe46npUDAnq0lOoEq2Eezmm9phcpKZtQVvkHpg5f%2BmMlelviv9lup5kh5kIBBklcskXXnlYmpwpYzLfienAlxHFcU0ygKXR6nWwssodbdLS6FJf5jbzQbE%2FOqVOhjCou2zl1ReaiNOX6RUJoDL0t%2FWu5Ul8yaiN%2FiyvXq5CzLoxfIYys31kQISuruOu6I6t1z77KvRSVbiIe1n64wv7AfdQGtDC%2FpjeKWK5LiSAUbLH7uinBl49nD%2FyOBLAgvb2XuTKZi9Y3TLrAok7MPAKsLLYYEN9fNM52RR41QuE0cnrBb2W2kc2xaRifDathO0LxpGwFpnIoJLSjkdBFsppA%2BW8fhK6fPNX2wpbK3M%2FOBl33e%2FoG1hOKm9jfgHvQJiNdzNR91g9yILlTuIcz6%2F3APlB5yKT6YIvI3QqbEXKqtF5G%2FFxBr51wD3AXAFeeKo6JSjXjX%2BhK0m8AjdbaRHmCIXSzJZAOpLcbqA78KnS1Fhjy6hztb6ouASj%2FOtmehW4bufkiW7Ic4rQub8tPFnPedvl2tjTyUbbf8MhQ8DRxmwdLyL2khZPC3H99TGQ314alozyZ4sui%2BtoI8f%2FV091pMIG7qcQGOqUBYaUFnw8mJAFWmyWUnUXCdZ3Az3yRYVWCcZ3IzUHveISlJRnixuG%2F%2F4DO9%2B%2FIutoG2FUxwnZYjTW3gIE1KTzBOjsSq%2BpN5Fuca24iY1MpxCTcGvH8du%2FMzf6Ztut13DHgVi7vurOXZlDqbu09B8PMYTAwM1GOBvz%2FPSWH5BIwjoi7Baeo%2BeisvPbd0Ldibf%2FZoHAqxBQJhpCjnLuxsi1E4WSY4kWF&X-Amz-Signature=4b753b570f7a9295971efeb48b2739a1b243731d8da1af434ce18fc991546808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRYSJYK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHn8OG49bUVcj8v2wG9FNSSpR0Wx3RuDuDZVTeGaB6YAAiEAtwf96ZOqwSShmK0u0ymn6eXKkBEmRbtqpxRzSi%2BVK%2BMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPzuiZV3hVLFXRYFCrcA95WlbEk%2BPw1ZsgAwTXyUkol8aW6KjGXieQ3HsL3v%2F2Xf3AgV2N2eZ%2FGIUtnaQou6jm816NgkhrfG6ZDxZ7zSJcTG4sgWufJMoeuer6meEjLHs9Cz1Txmoww2iWddd%2BwYcv6EyC%2FK2zFxRhqgFhoURUlPyZenvB0%2FJjPu%2BHYmbRBYk%2B4fLymS1E3McIQ7kShAj5WDizdU8Q9Zq15WhVgk9GtOO1lGYtyO12GkJuqxSIYEuKxA5yZnzlbsXjquIACaVE%2FuzZDtNUayeCgRCy8bel%2Blhz1pTAV70dsj%2Bc0pPMYCXGmquAumpVrdXZWg787uIe8EC%2B9NaGx7yzhRbPIauIs5zQ0Mjtl6VEO5fYqcTjOxjVP20Pgne0%2B5QcTbUumKtfooT0gT4iqMiCKQ1n3Jzn7iyWu4sE%2BE10Tn0mS8ZaI2Flu8KVwbZyAyDw8pgGnZkHGEqZJngkUz9fM6CflQyAhP0Y6Be7%2B2v9s7s70QMrS7%2BFRIbCPdfeYyM1Cpq4UR8q8OTBaPPSAGN40n3G036g4UZZH9EXIHRrgVM9pChn%2BRMWt%2BqMAu%2BLytSBoSNeyh3Z%2FdVaDZbG74Sb4SXIYpHzNxGnOhjNlPuMDYKHxWOfaS2iRFwNjihrORFw6MKK7qcQGOqUB4QqJw7ZaS5HsxWB2irGiFln0aXSE63TZCHB7NqTaYsDbhMmJo%2FKqV3oyHvDKf6HhS4QDY6q%2F6SUqfoP7t3dHC67AJuhXMtyFUX8hQtJ%2BEUYEzBBltBSKU0khGfpq3QP9Ik%2B2m6D7rmAyFeGCGqMgUtu%2F%2BSJc3ULBJZSQuhOKtzDjueuGHUzSqWpLoqxR01M5CYR7ipMU04mbRfnXVhlVqdB4hwYb&X-Amz-Signature=ada029bce6c1f1ed678eb68d12f6f3e873c9f524dd09a1c36833d09f450d4596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
