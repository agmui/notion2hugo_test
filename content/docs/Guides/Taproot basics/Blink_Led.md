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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRLFO2R%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIAxStmkh6Gnxf1poBmuIoS6etMgEdVfI%2BF6zMUneLjjiAiEA59Gq3jWHy4P9wDLAUX8330BVrqndK4aGiY3YTlHnebQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6mHekw1ZeL7OwaWCrcA2y85gJU%2BEctZKffnZMdFS1oUU%2Bc6hUZazhp7FYZKzmI%2F9YX68hqCXwB85ErnwxA%2B1yVH0GKBRGQUKx91j3umGKjZLtFHiWDipiDyC%2FDIuwSXaypKGHPuOWqNMS%2BOfolvL4CrCWhNbMH9sGuml75uFApeUcAid6WOBSBg%2BLn1j8L%2FIFYuLO6PshnKh1BKZb%2B5DUtKdARViLE3Ef6gpiipoTIUTkeBTxCIWaPdBoqfF33Ditb0v8sc0IY5lWTh1oKYQMcTjw7k1%2FBZ%2FQNjmawguMDtlm9vGFlRHnIKCJf0NOza7evR%2BaD5J8NattFTXtvNshXxKfwnL44ZoUIvrPbvMRwD1rKfLLtToi13HOJQnBwxZmLrDSY89TvSX9opB2Qm1kgvAwRJhd3wt%2FoX8r9FBy49hpPogcFNNQuoBlt%2F7DWDQ2qtJUpKdkaN0iHXAlYrcSlyG2of4xDij1CQmNwMxUPQUmntsB6fYfoGPEfpDDyHrgPusL74c%2BuiyXtgXFdzIigLbN%2FHIUN%2FQAUpzr9P9W%2FvDE6mWpyknztaZLdPMOGiW%2BVngzDUQLow3q%2FnlrMHvjH6vwrbrpx0OvimVz22LGyt6igNNCXZAy5Lzp1jZaAWAsDEjE8fvzjot4%2FMIXXuMEGOqUBE9PqBRvkUl%2FrYI348YJaVSbo8EY9hJh1yFLXo0XPZmFeByHUKH%2BQM2QCAMSvqEPomdXK8lhBnsbCkwFOww1xDT7qwkkElyOOopx36qk6pE9Fq4v6UL6feJmlGCN4sbrF5M64Jiat0nchpsJBoQ8MrPHzgO%2F3wl34OQUXwY1u7JVxAwrKfScm%2FJeqvm3xSKrNb4a5690fxLqGQZ3qBF0SmUaV%2B1ei&X-Amz-Signature=886056ba16617340e271d9b0861342fed9ed1c7f8e25605ff5b2f7b1bde52e95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QDLXNPH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDZuFeJOpictjJNq4J6tWBDNPGswid6HayXzh%2FyxrW4mAiEAqauZqGfdxgBe61Aoi2CEvgdX5J%2FbVQOoS7b6m%2BZ9v%2FwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhcryuFSHBk4fXYuyrcAzPU67I0gGxihIHnpc7%2BrM60CtD138MuOGENtqVQ6BN7XYtBk3QYwJu0bqLcGh3JbBcC4%2Bvfzbbi770%2BVYB4nY6wtIAvjxL01soeQFW7XP2ph6nQasKh5E7l1IsTjKXLL1XUWNxVtU2BqDbtXMQFG31VM6ZpJerpW0upcZJpxNmM9Jf3aFnUQztx7xlLfP3mh%2BL1QJOcV3nabrVOwqHwl1x3cL61SmiOB%2FDNTWb68HYIYTimZa9BGMihZxidd%2B8fEDxsFzKa3vTfJ9otvBhA%2BGCXgpcxL7BO8%2B%2BDFObpzKwUD8kQEnNSzXoPVamMCCgSVpZ47OtzjB3UcKnehyA0ddLmD8njIYsqg6QZAPi7tNCwbrPi%2Fi1ym8RE5EkoEI1fCCyfav3W0x9y6PDQPsB%2FA6r7JiLOil00kGNbyZjtv1TBE1D1qaPka8pXFm%2FaCZzhY8fdFTwmbSEIHPoRPQTAY2aouprxu2rocd%2FTuMMj8%2Bp6BYXXVmuQg184K3XdUhctUDCOjSKk1JvE5yh98KCa%2BT6t7BDQnzy3tiO9O268pi9AV4XNTc4muGxn21467XdfHHnc4lmEyoWeItNy4fvQE5%2FU1cVQVeL%2BLmAxUJtsTf9WeVmRg8fLOQCb5r%2BIMIfXuMEGOqUBuXAlNhXje9pnvsGHg1EaRZQdhpM73uo3CdY9lurOvRCAQKsbu4wG5ncCNSj3%2FBKyngpAsYG1yoU1QIUjhasdP3WVmXZiLIrtcGk%2FRJnsfQEm1MtPVTXjkOMz5QYwxI18765HHP00OKFGeyX173jyqfR0kcFAul%2FHWH7a3jUyAMm4T5SX%2Bx%2FtDy14Lmt6ld26ANR8DafstRuWJ1MgmAZ%2BJsCqLxtZ&X-Amz-Signature=353ade2cd7c1cc576afc5881d16c1969c907718e073080bdf70c24196f42db84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
