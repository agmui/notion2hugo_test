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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRTW2FMF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdU0jQk3PvixUAvR1OcBLG0bQxLUuWv1XF1ITiqwfCgAiEAu3NiV8H6UeaMoAyou%2FBgTJb4QD%2BNXfuIML9kz5Cewcwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAW1U3SZIsL3Qw9HUyrcAyS0S71UkLj8NMDYxfU%2B01MHNSrjTLUA1ZG4E2RgHq0jLXQ67mtDIwrf85Xo%2FQKedNKZtzHK1Yo8cb3xmWBDE8%2Fw48jeCUJa2%2FJJ1SHlhaoaYWfI4s7%2B0HiH%2BByRaQX%2FhQOIQG5mdG5%2B6Dr8tUgvuI1NOYfUFlGQJc2mxecivXiAT43y8QXMoFcgWIFgo6wFFM0mQBI5x%2BhQZdqORM1CNV17PjwkjliRoJMuJxHscXrK0swOSNmxHLoxcPFj5c5rDYVb2YvfC5UN7InyNayQ0A2i5V68%2FmllSmsC3GaNPdb9FtjwjFa%2B6Jp5rZCDurbkewRpCL5YmMzsFJM0PtMEshmYgnheuCx1pRnb9FOA6u2ZjaLFAwd2%2F076BT74AeS5IDREIerNETAgurv3NUm50nqq35797zt22ESPpauUQp0%2FkMEszLOQ7SxacK58AGMmhDJB8GNXOFvrHEx03pAWz2Y3roKj2uBUOyLki0bkPhKF6qhKT6R7Sm5wPFgDZ%2BYqsfQy5bpd47308CQDW57gcl4pE4acMJs7n7RP%2BUZaoBLayIx0m1Ox1x9mpvzrubtYZ2h9hmOwjcCkTRXW9s%2BCbW4lhyIAS1ObyIODXarptuXJj6OHGQvOVHAnv2kRMNfG78AGOqUBapmZR%2FNlbqtpy5PEIYbpFfLW9Pz6pYi8VfHCnCprhpXwx4IJvp0cMdgGOWVmJVkIJiEXeW4%2FEMNzCvHRuOLg2m1fY%2Br7DvyBNlWdw1acJTiRG6CTU2k3iZoP5%2FvdGSuVIl953I%2FXqiOsxLrH4%2FGF00M1iIZq0U3IP7Ts7cfYt8L%2BoDUzPIBq5jaRrPfjCZiFIFNHhvgFn8q35JbxnO%2F1DAmAI%2B13&X-Amz-Signature=ff46c6f6139fc80e74d61fc41c55ce236cb66a1ff7dd44718f2e9bc3580a6906&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBTMXAK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYn3zrX3z%2Fgw5EdxdG5yXxXsw4%2BK7HO9cwKCwmzfhaEgIhAO0hoBSq4cAjr4qogcg0hC89PJCE%2FL0RJjkO0qfKIyeYKv8DCGgQABoMNjM3NDIzMTgzODA1IgyTOF10NqVCGdoyh6wq3AOQD%2B1Mmf90JY%2BTIrh2MmSXyY8pEKrJsHJS8nhD4nYu2IpZkymoMUYeCUNeMRV5SiMJP7huJkbissGglqAliNold6vCGtuDP4zsJxGLTq6QfEJVdhO96StOic%2FS2mXeJS%2FvwDRz8zkAyIowOunt%2BGZhlwBPts%2FVuwJHR0tRVQwP%2F7wKMVMIdKH62d0hWl558C2Yu3ys9IfhLdazktXGlJQN2Qd%2FFuELUHadcsonSPvlxGoP3yjQnjj2c3rujdkZC%2FkEgAQKcargULbsbX4MEOUJ7feDut%2FAJQaJngmEuWU4vBficIymruWvDa34u7uB3ePVGmGXTgzoiqVIw80R5Op06%2FCb5QYiPblND441B1COUNbqiqnI%2BgZUAiaBQXF%2FglGQB3yYui48aTxTf6JWV6dpBQKH2bZoblsCLMwFyia8muNuxsO5OQQMEmjDwe5J1AaZfspGNvmUZD1K4u4ztv%2B5P1BF101IhxGC8YQJiNcTZnHgyOjUkLIQ%2Bg0xJCCXfujDoYbvH3olHpBTb7cGvIAvfe%2FOuzx4E1OO9LBbXEUDpDPV3btqzP7SPhWiAOoiSRtxwBYpSWxQFGS0ia6j7pFuXHKfi3BxVJs%2FE2O9Y50S8uhJwvOcd4HwIprTNDDNxu%2FABjqkAQlTWXteWdXuMKDZLFfG8RnjVkgnjmN90YqwAY1l56WbpBdp1EezqIb787cBffKj37APy%2FEJBJ3ZSCeoCzl3yoftsW4BdTsvR2%2F9C0wj3l%2FovuIMhLCl15glcp0GQa6C8SW1C%2BlX3BBc%2BSxV4Hw59K%2FWkNsAOH20Nf9xy62efSDJMWlUz%2BZyz15HXX%2B2AqxyraGDAGqym0qlya75rUnpwD7lfGS5&X-Amz-Signature=a919c73f92783df91b48e3f7dd46819fbc9514f70b6ce2bdbe6e7e8a16a1a1d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
