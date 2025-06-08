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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XU4K22C%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFI6ACgqcUCE05ybvXhd9ozYjF4jRc5RDWZHsaJveOrAiEAwgUQKNNEDoqJtiq4rGQqh%2FTccXPlafMPB%2BhNI3Vj8vIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXkFrxGTubfhiq%2BnSrcAxK6mwUYJSkEHk5KTXad52OABfsrOIeeV7hRFEZkB2wIYQISzJcNQt1g3Ui2FEjW5Oh13E2LjUUzmj9z3qBHqV4Y0JBFt%2FvoG9eIue3%2Bxhr4AaYMP6%2FrWxYU6R3Z5%2FZUyW3mXDbuWCH7tYNDZPOtl4msmMEuRib%2FPLIjjIl%2BGhP%2B4NtHMtrHkr4OzhZ8QVaYysyf6hr7Etu3zqr781Aj7CpS0DBAXp8RL0CWMfbqMN6YcmA3LXHtdfGvrDT8DAJ4Wl%2FCBsTvcRISomSNLuiDjWSc%2F%2BHWkiTf0Cyzt%2Bms6g6e2zIFZ44QJG9lCV5EZHIFCt3V%2FrVRRNpxb%2FdTc5pwSlCj1BQV6AseueudPjvIDAtwy2NWlNqg8vF2ddz49p9PnseCd0Ax9zhaBo%2BBH6Cm5QiA4bspMAckBRNJMWKmvaOddBbBSibLo2iWxGEhUmqRnzZbLCgQ3w5pj3Sk%2Bv1d68JCjZrzjiugHOG3LqpnM0B8sxPOwLk%2F1jsQFNoaPDSyIHFi1ykWEqLLJp5zsFYzTuQCmqMgjX5goCEEZwKacpPBlTGBWGketffEawXdKjbMpdeOD%2BD1f1LQ1kjgiFr46m191U328M%2BP3gOxCalY8PYqik1LMPwJxTahd%2F4%2FMOewlMIGOqUBbMgGO0zHFCWyBgheondC5LoM6O%2BDGvkoTGvQtKhVyj2xFkQfR3dUACCmKCsPFGjl7WLcbxLHm0usaX72rzscbmSx%2FZ1Akar03yZ%2BhTDEiQ70JgAvVHr8qNV1GcpNnnXknJi9qlGcXOMoB%2BWTpxM%2BcrzrZ9BlsQPR65i11zQrHeXeVp4d1aVIXNx9bJ2JvCdl8XnuK57B1D9J9y8kOoZVk7LKUUbw&X-Amz-Signature=b150750bbec44924559c2e381629f6062fd8dfbf1e022e2560afc3a8ee49c1e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA43WCSE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG84bGfkZVKkvkp4PkTP59OAhNbZAOD9mfpd9%2BMygSgwIgVOqdoT%2BUsur8nYo%2FQJDH70Gf7bQ0nR2zTvhIU8EhXNUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNSUM3xrWpFrEgvKSrcA4lgbtO6lulchQ08PjG7mI%2FkkGBH%2FzlJfZnCJkFMxgawjWnPAFqB%2BZkb9Ga%2Fz1KNXMZljvyJIs24RCiwdFzjykXCKxIgZjvjxfpo2dyWjXMHhpJd2fvA5vveomFizQECVntr%2B6dnQKuwDk9XB4r%2Br5lWH4VFx5TgAFyzqTBRlyRGN4ekKn699msjTgN5eVr8a4R1qmZtYc9e0mtbfrxiohWDn23zWjzAp9SjZGcSNZ1733zFYev29qNNbtg3CT7RKFARvpxruHuJpdCLv0a%2BX3kKOSu%2FQbO5zL79lIlWRi5XHFfK5kHZv350mHTbSiSpGegZPDF4V3EEPeW78U3%2F24yPNyRCwdNmosY%2FgtbirB7qRrdcu4POK%2B86KlxCidBHa2fhEIvh7lkMVhpGM4U0VhypfqCYHHHCDp7%2Beed7bmBgP9U5NcWc7bCn4U8TJySTbFi3FsJypfjW64qoYPmvOsjzxrSO50h5HMi9triK%2BAblfVEDESPUgxzPbjMapPd2d0rhRK6FU9P2wwm6rSKThZQ61DwkzEbBV81xYclfJcIKMJdI7SCIc%2BvKbJ8Seb3eijmFdO00RNQkPISktYoH9g2roZT8qRw9DDUZSRZyf3wOqnXYO7Mb5rcGfYWjMPywlMIGOqUB%2BrBtProRYSlynOcAsqFZoLP5yWqM8SPEgg6f3MApnSnqF0vE3O4hsqrXpwYwmB4wdzj4lLOb7RGY6biiMkrOkbwpJlM9KsTwdxo3lQzoPB3BsAaM%2Bd6opSQONObBCJszKB%2FXl%2FeQPQjiNR9b9uUicDkUERk3selG8eK5Bzzfy8c0w4KjlUlODYw5MEL6hr0eQNyEHGCCqQOwJtdkkMHO0EZeZmZk&X-Amz-Signature=aabc3acb7a691c1d5bca7876e6452cf561971e937e7d742794eba641da74cad4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
