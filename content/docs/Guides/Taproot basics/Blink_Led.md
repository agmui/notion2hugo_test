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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YXJP4UJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDekIxBasxQAvyxfuk3sQVzgDklP8cxnr3MzDihD1Gk2wIgd7RXKpyS4hIClZt6r6azK3StHXSHbMLhuXvHcCh3%2FcsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHugYeQKj7bmmIDKUyrcAyPP9vdiHKhwLpeMm7c3c2ZDur%2FvL%2BzT%2Bv%2FiisVEdLjZidF3tZkhve62CckAbeHHKW8KnqokM5eYJ5R9X4TKKdAkmF%2BtXJNbSntC75DOAnxg9znJRbEawiP49M9UkpgwbDbkbmQc0qe4Zx3ZftcNTtHDfYz%2BYzrr61%2FX8mou4UYpFjW2xUk8hv%2B%2BynpbFKLZ%2Fjr%2FSEaK%2F0wuGXym9ymPS6s5u6qNeb6PtrIJn%2BS%2B52PQILAjckhQNEIA0NomYXlDNW1FWkhdP8xcNLxcxcVYjBykqsMq1L%2BsxvSB7IBGJQsymUUAGi7wO%2ByvoFcATPSmNuTQPyKWV2u08WU5LBvFK3xhyske%2B4%2BjWGwcN9bGpb8EF0Qij%2FtvOlguY52EYBgN4FByuhOB%2BwBPa%2FbBp1Xolr11OYC4PeTaKBoDC3oSMOedFEpsUad%2FtWNLqRWO%2FsWQOwPIZ8YZPFJZnAH2Z3dcxHQ5vs8L2mocfIDqy7ur%2F%2B70815YtkrPAak1FQSWwlPJs6lzdj0wE2CTcqVq7EVw5tK%2F%2F5Q%2FIQTZE6CKoAi4h0f2cPcAZ3elBk6TDyv0P%2FQ%2BFBITBdyJLCOKOGqpsx85jc4J6XyTgq%2BN6F7jhrsFlz%2FUco3vPb9bLJZKBBnEMOG47sMGOqUBOIO3jAp2eDaKNmDsbOlDCN6rCL%2BfIwSEgK4RFXXO8kmnXqjTTigDOlTII9OOxv0APlnSppeLgfYvf1RHBwNy2ziHQS2hYsLU4JM8jYIOPaNkvdk2TaIUVmvjuqhQtvrtX3ZcPgjTftxDLUPS1ciDdIi%2FDL%2FvJkKVh0CFI1OL2KSdf9FnzQZsjluV7PAVVtQM0XLlwn2em10va9AagFcS2MxSB0ny&X-Amz-Signature=4c2bdf82cdaad9e0070e512007c8f959bced586de1d8883f4e5f05ed39cd3252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWA7QACD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2ti4eUmHVtm5BHLtHWElcSWJSchB713QtNy6Wo8IXzQIgZof6E%2FBoO74pJoTtte4kWfLdwJ8pnNQ%2FTk6g0MD3iOAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVHQHRSwZRdWVH3oCrcA8JyOZaRZ7dz9G7JuqdCKdqYM%2FC9SYqBfLN2FEopMLtK0D1pLfPWXn%2Bu4LbXReNr0fzKDoCVROzq0WrUSJ%2BCdCyVtspCLLnmjxGvm4U9v450rmtvhIyfEacL8ME2IM5dOZXlWEPtW7vdFnIev3d7BDuk7xuYof3Y%2BgUJ59T6mz0TWlMrYEznUG%2FhCIpkMdlcXHFgGwiYmWYy5krp2zJPtJn2bKG6kZYcqp5%2FRQXvZio5Yiwa%2FP3exsrrF%2BSlsmSF%2BcuKRI%2FdZga%2BO5%2BqJl7BDf%2Fq3OqovtwqC706OGfuGBuQyv6bfL4EOAkQ2uFrxgNL6ZqN0AgxydBYG%2FzwFeq%2F6OhHjxteT7BNx51eS%2Fh%2Bum5rtqNfZI%2BLAat1LJS%2F5MJMDwnNUW5LjNatFngcPyiVGGlTR8eNsht5nkXEvhuVsqbP0b%2BtREEXN0PG6QAIzKIoOYP3HS94qfBgXbIDzywzbci8Oex9%2Bw2d%2FhTly4koziW5pxP9GFCKdJ4f3i1A8b2PdsClFKC1r9ezK2zh6cAD%2B8PeiSRnq9yKe2%2BIVT7JsQyiHQfW7LNx9%2BDtLGyL3MRbi64CT5kUVIBdza%2F9bG20AX%2Fw1avFFDl9Cv8N80nvBcdWwXJzkw%2FfrDz9AKkBMIW47sMGOqUBvwQ0MZmCVRdt1vCyWFvzBvXwS7CP1mKt4%2BZKpLD1o2Ma2%2Fism5m8VVjKUBkJCdyiyGt676kAo%2B0tcgvnT88lxAn40macbtKMpxqTDk7EGNvopo3TH9ZuG1HOG2t21foROMridJhAOVvM97ZRNEb2Do%2BIwPhjlvjz6UhjNCYK6xhHX519%2Fa5L3L5EJrmWvKBOnplqIHYkEkYSsaFFR0Ftwft0CcUi&X-Amz-Signature=33b4704e5f9e000f58af25a50f24a3b0d005289a864eba8ca35684f899610b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
