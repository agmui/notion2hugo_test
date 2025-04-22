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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSEQLDOP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC2EvQ3zLCULaj9fsfZtRPfdneOKnupsowAkG%2Fs%2BLqEwgIhAPQwp3K1EqKJBSkSCuippKHsLRMjLuhS1EY8WH%2BbyTOUKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWsyfHtGQhKFHCk8Aq3ANE8TXjZpf7wJLZ73Foi7l5tsEyhvrTB%2FPAoekqNQxulQqg8uC7Nkhc8HPAKE4z00N5YP4Ow6RYrYMR%2B1xRh%2BOsslYKwwSpKMSLqdy598XF4DJZ1xO5t9%2BBaJAnKTaoq40Zrcj0vePoL2QuEvlehkKd8JSUM82QDFhE53VZ5A1poL1IZitNdMVvGIa8EhzBLN4ACcv37j9krl5tv805lHsPzkxbr5zwBmJM%2FPxr8jN1Ne0SqiqrJMzb5EkGfwr%2BgLhf98gOFkdGmlURLjn%2Bzm6Rlg6DKOGrsiFE7PuvkLKrsd6PJo%2BkugIF2qv0P1JwX0A7CCQZ2ICwCwMMjTNTws85VvAZtSXKP%2FmtAhMoH7p6CpDr6q%2FyhvDQo%2FJvD4y2fJbaASEYwQ%2FaA9HpESESb02xbwM8BdxYrVHIx%2FgbgV7HXKl%2B%2B3CJdgf37IQqeK0wqzrIwPePsMU9agtDT0E1yhh5i4Iyx0DW2sKuNa8%2FMMwBe7VSf8ZdYMgV%2FOxK0%2FSkwTw%2B7YgnoZU%2FBqoSjdvdw62jeBb64VL80H%2FifqJj8UZKMENnwiNemda9Lhh%2FYClkmm3G82X9QIybA9RzIQeMOQeh5mFEDNcJ4c6hai1AH%2BS17tqsW0%2FKpMcpBZXWdjCN8ZvABjqkAeMMJEC9%2FLRkwgKDeDF1DLmDZ8C3wv1jlod4gNDSkFyEsnUKINKWWMTuM3k1IcO4ksGg%2FT7ta%2F1fiM%2BsSGrPnzqShZnTjw6fy2Kc7upv0aLHfBZz6OngONIjV23SR3E2wHczsyGOWgezPPwMUp7d1%2FCBGgQ9Q3c95PSLDTHqbE169qzM%2FGKn3u0KbuOeVpT%2B4HcC0weDuNOoim32CJZDxFubBClM&X-Amz-Signature=9da158a7280d22c9f5e68c5d33c347e06d6b3a98943f2c5a2e957e09512fcdd6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSFAZBTN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCFZFR%2FCDycxWGonB734O3frPAmT8ixzAVfbxZ%2BaJSd%2FgIhAMvXBnmCrQ3rRi6PQHzdMWeb0MwgVxoz2F3ZC6QnPd2dKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytDKsPVsN8nTRUfxIq3APyc%2BlJkDSRjGqM%2BQ6e5C9LrNzvShYJo1ODUHX%2F4A7UtgLEBQ1cFEVRPECyXRRwDZOK%2FuTWhlKhNj16EAXmMyx%2FpdOt7VJkxds3AQk1F7AVPsDd%2FwPPtuoUkP%2BhkHVbChrbUZJE6w1G7EJZuYdHX4neTvTHpfVl6%2BZl1%2F5BMoFhfM4DwYocI%2Buc%2Bz%2FN9pYqsxjun8g2rdYkanAD96bLL1Cmb1%2FgBHstn6MTirssTzIGiMIIgl4DRo01npiIEejLcTMcnt%2FUYCSNLPXtX5kohSnoUSDCDx1lnKitUtCh412cnvT9Sh9KjmWpZ7YZsNIig8qONn5KS9ma3Tv9Trl87ULz%2F6EntjVWeymZx7HfysPDvW06V20N9rny8tYs8dWKeZPZWGQXXcsPgi4Dcf4ZL0VPMIjuhoNZaYBQyBkRZ0VHox%2F5EKMtetMg1tqEuoa%2BwpPAH481G57HQQcovK8OhH7kLUQvvZsODd6Xo50VNWz%2BGSfnsN%2BhX6w1Jl0Ll8nVReEqQUm7K4PM%2FDY9FP%2B%2BS3Zut2YUGsffbkQWyRGiV%2BbgPnCLJKPqVxnle%2FkTBJ3swxPCQBFZoI2hr%2FBhe92%2BwjHaq04ebJf7SGrgLvA5G5r3ynAsTL1kQ0LWhJ1xUjDU8ZvABjqkAU8y%2FbZqWpdzH57t6eHr%2FliVxdz%2BFe36WLsz8AnhqHdoKIP3q2FRtSmo7XJYA0aOmvFjs%2FmERaM1xu7iuiU587%2F5sk%2BhxJwhcD%2FDu8iFb5kt5bQOUC%2Bzmos3P2xszTa5zuObx97jC1F%2FBdcHDCsGKgSOKu6rTTiXNqyw55gtUp6zc6d%2F6Q7TuSaGRcuOcmf%2B5KdBPCRVSsVZNbSQFxuV%2F64wa9RG&X-Amz-Signature=4b933452ba7623bb245348d3f9fe983d29caa1d9f48565b7ced95af8e355e806&X-Amz-SignedHeaders=host&x-id=GetObject)

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
