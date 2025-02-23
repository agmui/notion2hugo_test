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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWV3SW2S%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp5Je6GN4ERqLmRVbxreHDpRE%2FW%2BhM1WIgG7pl%2BGViiAiEAj7mgNBlayqkXLMCMg%2FCeG%2F3pKZHixRhfBiYo3Hh3Z3wq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDOwLwoS7%2FUdvsuvzDCrcA4k7cCIVXkaGagzcAGbT2som7z2yzHLSj8uOREL8GhTw5TF3GsZLdQC4Sm%2BvY6sVD%2BBzv%2B7x%2BGJhnMbnac%2BXp50p25EvXWBV3RyZz%2BDsVRPQ7nEyZeXzfWDOorThZX1hbbJdXW3zpbHcBed6Z5NHm4Iqdb6pGVMr3njal3ngckjUXRxpPeEyX1kaz%2FQ%2BGiVscE3%2BPe1Kz%2BQgOpijXWtVA1%2Be6u0ltGBJhYOMAJKbYEmBhjfD6pX0XjHHc1zEY31wj64%2FHWgYAFAT2%2BT1o6qKZDqzkqVWydLlJ%2BvFOL9I4wjsFD520P3sXqf%2Fqs2J2Fw9pDH%2BcQPxvxtbOY%2BHz6ljiqOhlAPgcdh8Z8ug5DbEofTF0HFuBoqaMxvc0RKDlEv35cyTYGNVEiEbyieDHEHfEC41pnRrsTkCtzgYXKAA000FYn8k9xKaRbBxsiXr2XPEKwTXUe9ghWeTMFgSWmnYMON9QQcZ6y2xIlp3I445I8eQZigp7gxnL19SaiH7sOYDImIdChLBFg3RFoDHyI1rA%2Bg4bbUqSAiXnDr%2FAYQkN0vYjuzTUtzQUxbCw0R%2B3h3Yc966cSY8EdLXK7wdCrv6Fbn0CLZrx7bu9C1pRnkB7dFYMRSThJDr6SPWFrtEMIHn670GOqUBkgaOtJ0wn2DPINXkUemh%2FaPTFl%2Bjp4ZK2uJuJ3zyZWNJFGTHdDvjvDI0aLiCOkpzNaLjItZBSF%2BxJlM1U%2BWkyRRSI2ffK93J%2BaPP98XWOR42p4Cq%2BlutibND%2FTQ74onxdyMTWw7W%2BDS6VP5GtMBmgoevLtwti4af%2FzHji6OhJiBUSK7QjTrMUHDz8rVaSyhkoHl9vNdg0Ybnv33NAIwObJvE0wdg&X-Amz-Signature=a4e6b5a88abc0878528fca796915ec24331b721fe1a2d575695dd1dac35abb1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BG5H4TL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHmmJl5mawPU1X3XiYctVZFNCVaHsyPO99eBo8U51VZgIgGoy%2F72OIOvriq%2FpQNFs%2F3TnWY6I%2BjXGZPSUSSkUJo44q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDCN9PnvW4ptOeACuVyrcA8%2BY5FPoo3Crcy28jOd%2B8ywaR0owK7QsCPV%2FzTHgJ9FPzlSGuygsY7i7rGZrU3r8UBIAkJJFlNuDzt6z4cMhrxoI8RHhOLypBnZ6nDamFNeqVl%2BV9XxK3SsH%2BHEsGznJknKMMpVYhxkivXHgAllm90Fg2O5FoDJ%2FTB9CUzn1Ka%2Fnx8JoOqyzezUW%2BfbTy%2B%2F12x8%2B84sGkyOsHIKdd27p3X9D%2BNaHHUNGXZLgfg6FB63ofOjq4uLy%2Fxzrm6bfYcmBjt0I%2Fh%2FMjeKUciNi6ptfN7lA9THgC%2B1DBqctkmH8hvE3qdcykZdtQz5XzSa4fCaJ%2BKZo%2FZ%2BkuTO%2BJ3uMeFWw3iT7x56AHie9rGwhpgzXmUdRMpOBEGH4HoUdr3uDgY3gQ1sj4WKDK9TMtLNwu7r0AoO0Q5uD6XSTXBluFQrubmgWSFjBYCfCUp%2FrlJQB552pqMXWaC1cuTlhtwsKDFguKcpzEpgjDkwtn3BETcqM7OZo0nP6STuZNztO6hpt9%2B%2BD1P5IZok4IJK71rjPW28hwZ3VhdTcyFXEXv5z%2Bpnxk14lk8C7jGA5LhhITnwepZfqugfjgP6Oduq2BMLxaZhBEAd5lMs2DyF7cvXGK5y03Iiw39%2FFlkpHMpE4N673MP3j670GOqUBbEHaswlhsqMQGXacYGcMwOozpuLE1y3o3Z%2F9yQxn%2FRB%2FmQceuEr1ZtEapTI3QfWiAxiEjDarxyw4Bl1Jp9XwGjPVTlxCL%2FWcEjDJ23FSU3TlApRo2JxJOtn0N98OJW4yz9QzKWt2gUbvIDYAmFgn0VwU%2BAxeeVf4a%2Bwr99jQgvE0NwZDuYCu7W5TMDeeuyEFm4vY5zRcxZ%2FcS91tBBUCRZoKf1D%2F&X-Amz-Signature=ba7410d4016b8c29983ef2e529e0b940a9eb8cccc242d62ea8b1a74e1147f091&X-Amz-SignedHeaders=host&x-id=GetObject)

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
