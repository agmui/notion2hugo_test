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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GFODE6A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAT9fafzATAkh2d3XQ3xqPByZ7GxAgEI9aHQ%2BtgjktISAiEAsjaTFWe39KjJr4BhQFW63wb5UDSEt5kVbEzIHKQhOlUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCADWdMeAP%2FrJIHeESrcA6OFTZsw05haOElozHBSQna23wlb7tGTLLePhyxrKo%2FVHI%2BL7m%2BAezJQ3jKc6cv%2FZ3AI66d%2FemnNcOav6N73CyML4ETETW%2FwNdrSPGw7hCOsDjviwhc1Lk13F1ueWJ4%2FRhimVTRH701glW2Ywtcvvnb0iambnizA0UeaAWRAZRsgx3WbVgMJhnwL2QqKiRJGD4G4zu5bP8M1SxnTNcxYuOmPzD2z7U%2Bf4EovqnPsTgtFpoLbVh7XLKOnXZraZHJ1osLf2AkNgVTg%2FEFmAzo7tYoQBZWbmo%2Fg7so%2BuHev9OE1toJmQVQlxJnieU0TF%2BzXciKuoq%2FT1bkttTy41VyIkA73yGGCd3I7Egdu4fKvXSw1ZYW9%2BNKsI7Iryplnz3L%2B85ETXYanYEhPwAPgLHK1C3YbGOKhfD6cq92dE9N0k296oS%2BsWdy%2Bj4NvkG1XFJVu7k4Wm5%2BpksZu%2Bzpr1bzOLwlrrY8Rdhxw68CBUbUCEMKenj0QawWlmGrGgOzSXQ33QxCZd6XQ3tUeak8XhXAifr2mMLinkYYlvrB97vy%2BEXDloBhODYjmnjyVN94gpT3DuE7lUIsf1HC70cFaNHALNCxq5JvjuUjoQyjBf%2BEnLGkt9p%2F1Am8NeTuqhu6LMJWC8b8GOqUB14EX6TpQjjh2nqtboJndAPxo80H9Cn763%2Bb%2Fmey6dpzs1heJxpDtVzlP02cCpjpxBTFmj%2FANNzeNPwaVTPGYBV80Q9PcMaX1Dw8NOQofl1VogqeTFPOhVy8NTCef3EvzzrslgBZ8I1qcWTHJminw2xAqYCK8Or4Yn0r6QVMWAFTfQmLVrCx8P9VwJ2V93d2IwaD1m4Ql50dGUO6S4jnYSkTdbVcN&X-Amz-Signature=388b669b12efb6881e0d387f127577476238b873808232b952ca1a2b8ce94b44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLRW6PD3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCLGboXqDAilBok7ikstfNVWr0s97ZY89Bf8iiVzIcJAAIhAOC2QdomXcz%2BQ7Y5fqN3NhcDKENI0BagulhukTBAviYiKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNZo51mPsY0JWtZDQq3APukfNstc6wwVVnkXLfKJAvqymuLFkNLP%2FI9zgNheZYBnEUJxewRP7XMbqCAHPbnp4b4mt5sr%2BFZpICwUn4EwfK2FYIjEBFX2m1RnzDL%2BZLxXV969%2BG%2B%2FQ0BlCuUs8PzTkcos2nKSX1rSTTukwpYu%2BQbBOY9929Am0qgFlwwWRL6j2ipBJVzWR9%2FwvPfuMWVoDsoF1IV8OyxIj5upiO85tWShbUK7gSMrHvTAx00OHhz7j6A%2Bl0GAmt22TBdbj0DGebBF%2FWgSgI5JiKRx%2FBNCHYKcK2ZPIA2FDvYbjgkAhlxNJI%2BaZ33LSRZQpZS5VjwrUYa32%2FmbNOzrNvPeO9ou2IN5MLW6yog2ySSxnHMgWcIvC0Fr9NXl7IQZFfJdpBVEZTjTiyNJLHQYPb%2BpD8JOvZCtrkiw2i10F%2BdqOdhKkLs9RE4aF2ZH2UexDdBcedSUqKFTrxRPVsYKvNT7NSyKOur2apLfjNhwT4QsmlWQrG2V0IGWNxPil4DoQHSaOI576RqwFE8Th9Ts3nAe7erVK25uSx1HIVLMdIIKMDDOiDyNwtuKxsY8b0cdnmvoAU44ixTfwvt%2BnhKmx7qfZFk%2FnmWJfynS1JIwRxVA5SAhqHFytQFJvKHVlwDWJ7JzCggvG%2FBjqkAQhTtp1n6zxC%2FRx2nikgxZeqJoeMwKef67G%2Fo56vU8pnb5Wu5n9vaKDh%2FtlIxHYlnxldwcduBEw0gpstb1IaDmuKVKBfdvYwZw5O%2F47yQgm38vVCr9AJCSUYb7DeXnkEJ4xnxs6BrdM66KxmnIW%2Bj85%2BHGNz7nDBXL63DtcAL6dtGw9wqxgUXGk5fOtE%2BEIcr%2BClkOf1daiTWaeAc2zyjrp6Hpwe&X-Amz-Signature=61223a5851e7ce72265492fcccaa40749d55ab900dc42931e0d88f0c1426bb3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
