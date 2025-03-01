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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623G3XDZ2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCekXGy3xoL65HiAdhYQStuh976wk8iGbXZnuWVcLjgagIhAKJOymFBepiRPyw%2F2AANa%2B8EFzVrNUV5b%2B6f38%2B4fPxKKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUIDX8QFG5G%2Fymo5Yq3APuXpz4OtX4xU2tXAHIz2MeAb3j1W%2FkdoBoDQyfmXcjEc9%2B4XqfCLGwAFStQJiMcQo25Vj2mox%2BXnV%2FmMlmhjc174nyO8wcFGhvAfrK1D9VEa1yl5%2FsH6cKt4HI7T7MCr1sTGLeam2g8f0V28e6k8%2B7eDyW%2FlCyWEhQ%2FQ2l1LsvWNeNlOFAzEwWFYh2p7bA82BEPBTeRXlI51hP5qtrZNtwmwDeuYBYfl4tsyWlhEB9yMu%2B%2FcKLiqOr%2F271ToCmRPJgOpa0OEWX4xvlZ3SKaGg%2Fkg2f1qzS816urbWSo%2BHaQoXdtpwrW5VTmpAFWqn91MZcIOoLgT7YotJ5b0M%2BEunTqlV%2B3v%2Fy6dyMSDoDeUsNlDdhL6gaa6Gt0Ef371l6aEIUMtDCjVcvlAansJCNVuCRzlkadrT4UOB2CotXey4PotqJTyw%2FXOygbSgPKlZiIaUsHcKRxDfcWBMXhZk7xP2w2kDagmFG1uVeGSgNjwU2YZUdVE3wN2rRMdr3t9lBjTuPWOlSlXH%2BrrvjtOt1pKWrbzxPlHpJ924gpwVe1%2BAAE%2FrUkNGHCiROzy38rOEC7JAnFBV9Mo7I5w01MPbWx5wMrq3%2B1DBdBOtFF3WzE2Qso4pHIFvPSLZdnhEcRTDUlYy%2BBjqkAa2j5iDh2P43ShIN0v%2BA6bjUYHaKGhFJ4ROC%2Fi%2FMBp7L4GNWBh8JHxn%2BC2bLJJZCUaaMyDC6OoNXeqBjfoFoKVDHSQ3zDwjgxfc8EIsrxgaMmDqk9xSrKRS5PHqSd9mH4MFhI4MWCKfrPUL3W0g6oG4l%2BROm4gKPKhcXZ46KOowF0qzrEjlg8W4aEB26R6Z15xR9nhDzY1YQBd%2F3CIJmsCTzV0bK&X-Amz-Signature=68f03a9d01b9181237b16d6fff8e3a9391b908b2dcc755176b3b6f47e6669eea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634USX2ON%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDsaH3ufHR3tkYmpFu%2BkPrFV7cRwiYzxOHVlOK7CZ1wdgIhAJeNXnjgyEDOCU1MVSoTRj1gKW2P3chCkgXeTFAhVMoVKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgmxcbKbswn0m%2BjXMq3ANjr5okVY3LiTNrB4SUradOwgMf6mWdG1sATCEkOtqkes0WckCG%2Bji4Li05lmenhYcKWoBi36sEz8%2BCNbkEccrH5pIwOunftWZz7T8mZ0v%2BuVmTpdktzenuNSIz2Ap%2F1e%2BaE%2B2NrJ2Nub2LM3PT2OIy7KJHf9ghKxbrnm9nsOt%2BVZAeD11fWIilyN6lGRkZhqoZGc7ZVHkLCeQgyUIPs2f62NlQD9WQTPqnWwFlcFs1Io9f8p46NiQi0vvKPbyvX%2BcBy9ZX%2FQy2zO%2F8WQQUJMDicii4B7SfFb0PyG68jzeF%2FNoICmXO1osOm7BdLTw4zYtQCuuLxUZwXd6b3%2FhzrhWTp0DJCIWzkKBYzQQXn27qPYqgklgpjCYCL%2FOh5bhiDXtOnpaGyqdQq7tqWn1dXxK7ekfrgWg3qt%2BzIYFbk8aUrsFPk8Tm%2FCZ8%2BopGNVAhhq65WEIYblNX%2BTswsg2YqUZj7yGEPB8ZjUJsKo%2BrpUxcuceNwq5y5SDqZmVPcVmgLtQsdHFwIGuQEhU3dz08Kvxxfrcf6EOlFPApWyv1pUqWqC8ARQE28QlvpGWiI0B%2FeugSRnrTxcY2XqArgl%2FzBeU9lLBUlzlnQpecx%2B4JDaYjtv5St3UnRBCGw0oSxDColYy%2BBjqkATcBTqYydLHwMU8TvDKkV%2Fq3QgaPXfKJOTRh3U9YoWBk6ykBOSxFnAuuvbU8ZwYS9LMiolcggH6qIfCWSiP9oM8R6nrvQkiV5H5kSUIqbKLgrlfLbk87%2B8FuGrkt2F9G4M9d5zChbTObygmEhihZpfcrdxwIjIh%2BC6FTDHApALaw8CiboDG9%2F37ojxSL%2FzUZTtPfqE490%2BchU53INFTk3on3aVm2&X-Amz-Signature=c2f53b1f2d716beecaa6e1f57b25f0c8a5ef3e41f782776a4c09130031bae041&X-Amz-SignedHeaders=host&x-id=GetObject)

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
