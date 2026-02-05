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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZVPQYU%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDpRaoIdM9O1X7BM52IdpAAZrpRTvMpJm1LOYf%2BLZ6vpgIgX1eQHyjW2C4X15lM6T0ehrh2Cl8S%2BWs%2B6i1z1FJ4PIAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFwk7qMK%2BK3Iac6AuircA2fc5GIhQHiZadsp8A28c%2BaQxLxmRuOUFrmChsegbP952MBIu98Tgk0gDamHAD01m42mbhnUkFgN4%2BXPGDKSXIfjys1X3PQTWwSx6ti82KxFmZ7SX2vOvq2HPd8YVrbYQgZaaI51A56CNu2Uf%2FdHPlBLkMfzjFeqlOzwQgTL%2Bm4s0qWXJcdbslO4RHg3lhA190bhjce1YtD0sGviHqs0RhhWmGg%2BVvWi%2BzP3vwljgxvvD34KPMhHjNkYG%2BK74wn371vdoFCVE74ahf8fS1mDImyedPPxlRykJJ5kQzbx2S4SJkY9n8SfMATNGCSvtp%2FIFOlVVe05BkQcVORrWqpkXrKsdMXBtxHQyZg3wGnEEnZShwUTLlhXlaV62XupDRfhiZf98xEb8ovOinen%2BbY%2BhpTp4tKhOgcqKomLwcXZ2q%2Fj20stBTfZ5NrRPCp1zlybF7YM0aaZb6yhAc2U7i6yWbjPAkobHb3xXohmKPuDjsvrwn%2BzAu1Sxqxlr0oc0IPZ6eIr8GcjI%2BQXbuX8GLfjsc97MmXm7%2Fwc%2FQSCFvqY9VBbkBtnDzKiKIT%2FpYKEnHf0oqanlKu%2BGpcQle%2FFQgs7N7o7j0uzA6ZOroV1dy0WqQ4enCqyytHTM6HWqP5GMP7Nj8wGOqUBzVV0deP0wrKSe%2BcvIW7fydCoVqUHW0w8i%2FGVOsIeXL76CMt91FzvOARym9WsRfClq3%2FHzVJrP3dDBLR67l6jm%2FDy5%2BOkaHyLkSReElXNVSnc2YKiw%2BjS5C73%2FM7sOMgzJdvAbcC6D%2FJJ5q56PKnIrXWJH9S4tqOBbJk5cIxdETU4FbhfASulhwcXrnxRfJw6kz%2FLvch3OYy5Q85Ii2VdywF2bggU&X-Amz-Signature=0e209bc4cb204f675268ae43524917a832c2f9abe42f57a8ae79ad3a6cc25805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHJXHOO%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIE9T7wObmHslzHUpihMeYcNM28vIRx5qvgo4bP5r7SB5AiAXiigHld4Jq%2FmRv00ppPq9CNHWjdyl8Z4qC9RLoTA3xSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtlDbBszvSsFiL0tEKtwDk9oO3%2Frjq3sVu2CkHhPcOHGkpRaPjHSjjsCz0x82H%2FF9FVUd8llMzO6S24pgb4NTinRxyqOR6%2BvXqROaH4umW9b1C59qphBHmR24%2BigVW4SGsZasLzQVKD1Wbr5q%2B0Fpszy6QkTMfoHyejDQN3AcQ5O8Px5HOr1vSiJ4f%2BGKdbbo9f3nHwZdpiIR6aWRasEYYqnvuJ5A49Dm5xVkZ8TMc0FAFH6dV7AdDg4jmCe9xQ%2BILtkO7AJ3DJqngU3wyBr2W%2B%2BDbzj7Z06hza3%2FkxiGx66LDvr%2Fr7uvFuxOrzh%2FcQGrNP%2FBz288yC504kQgoXcctJ2QGAIlBWXQljQEkvQLPfM70Kt38UgLTOC5uPNMTa2jZEVOoCNy2yCoklkQg0mQIt9g5WAYd%2BNLbLziteMACDnpsn1wfaSjHtK%2BmN7lBKl3WJV9JJUcm62wIDdnOGNsztyNd8SzJp%2Fdyj8PZg2CTBRV4U9gVbiWALiCB7YG42OB7TuIyQVJo3t5b2%2BfK17vPzuvN1GbE6uQVMhHaA3idB1wunbDcLO5yyHaoZ7e5pKrpyhgMXcELh20%2Bnmpy5MBMYBERmuKIm61JzEgEpMY7ZSN6wVRwsFzdKDyH8GCQKUZdHiSl6av65rw8Ykw982PzAY6pgFGHJ4RNByahZiR2gz8aZpOCeeyHzmOpJICsu9F1w3FOWa%2BRotI9VfRs17omfxJIDjv1zEv059bT9g%2Fu%2Fv8kO5lgKGg%2BZPNWxBpOOb32wJGFCxpm0AONs0G7PL8F7QTOShlPiM9UFG%2BlwKn5T1aaI7nxOyqpeuxWWxy5V3bu5iMHHm%2FNqShOgPGDVwZCVrRFPqJWHtvxfE%2BdVSozzcrepP1uGGcCsT2&X-Amz-Signature=c0fefb6eef390eb91764abbe402b59b1fca681f13fb130101d3be15982999dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
