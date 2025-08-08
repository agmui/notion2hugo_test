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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I332GFW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDu8QaSnMg25fd9BKdxrkGjGSFLu%2Fh4b%2FAORMe77c9bQAIgGSLRD3M%2F4NwTFfPwuKSqacrGOK4AE0eH0x7y3kAYMwcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk8gnW%2F90nuoyZmwCrcA4uluQDhbgH07euqF3kteblMMaGFP0PRCeKWeuby191hCaFDdQMngYU6J75v6%2FTxpbFitV5sOeA5t0Jq470fOxsIfxwvmbmLYBzAjbVduoA8qJ1RuXMozp5pB%2FoJ8N2ZlE1TrT%2Byw8NqaD3ulvq8l7s%2F5XFnQaK9dL2gBa0gFVeYvIU0uZAbKf%2BPax3OZbHMklvT8zKziTsHhrGvu%2FyJZ3iEoKn2QkZB1HRh%2FdUI1z%2FmDYvprfqKyKbEgfkneUPrQ0edhOZt8GjOCTvT5326bKF6Cxl7XBtyg4rADR6erBj5ObZuuyuTGhwA6KyPuWO5UpVH7ryUGdNz8l2hRFiN0sY6yUuTaJh7wRqONHsobwhwRXUhzQqo94iHxAJpmwY8FPMGxZ2MxHXq5aydJZ4xvtH9KbKDBWrRjXaCQYTCzRB3DMV7scaRm2WlFYykD0GsJZK6EuGu5gecuMT%2FwBfmTZ%2BPtOoxOFeN52Q6fEJ6Z%2FqoiaEZPWZLieac0lJt29hlxWPk9sDj70kWfDelhCWcgAyItxJbghSlkenHgLuJ2Ba8a1WSK%2FEPACXPnnsCeSFb%2B%2BMg8%2FMa0sL7eT6ZcgAaKormnEz1BmcvUM74GM%2BhhtPPRUHqbpV3ZLB4gscUMIS318QGOqUBXwgr6XI2oYR3WsbmsxtC2dFs44fSsM7UKhzZYOfgLNWTV1iHxMzRVwD8BpYbceFNMaHYmZYF2wa21YsHLy%2FkXJJtgT%2F3GhVYjbHIg6MIhr%2Bw61jATEbrolB2ku3LBzXnTkZfUVKHvhZyVFgIazWYGTt%2Bn6PUcgugLX4aDdJCieoPeYh%2Fbk3WO1bVuVfup%2BBd42WSecaaBxZgnr%2FN2E7F7hSCcbnT&X-Amz-Signature=aa719a494f45a832e1a5cb8e3d9bff014dea08d73dd634e6a215d1194581d937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTZSKRAY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC99sx9YaDnwKCSK0Exd9YOrtnSKdEswjCYSUQXIXzutQIgKXfWLT5Dp9U%2BYFWewt%2FgJ1OtNo5D764yQORXwYoKmIoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGn2pox5bJfC8fg6HircA1xhXYIEO48bByMlGEyI5%2BNAuZoE4btBJccYzkP6X9p1aO7atug%2FlkCuOcS4sYZxZiGiQ7p17dQJP8D8rJNWJnavSz7xW1VVurZfUOMysfyxBqkB5FcmO9zGlGQv2J%2B%2BE56cfiVy97RRMyfr8%2BvVUKNUto86JwYrzwM%2B5fyZAtKH7CzIdJp75XFU%2B0a%2FYmO0Jm%2FBdJVa74BJLEaIzwZXUyuf8zbBpLPMYaaVkQ2BrUKFah79obR2BHMGjwpV4GTeMDOfRcQJG0X6FymEmSwHTujizqwFGo%2Bx4TMo2cCcEPY6IZ4%2BOlZvER92w3IXclyEiKBqYbcv%2FQE2ovZZzm3bZV9I3qm76LyR9XBZBArZZMZ3r6fluJUvLzyZlVTxnL9tcYdpHkxvVM1cj%2FnVlZkH3VWuKOhzQvpRHorqeK5HAUeVj2BPy3jIlLukNJbtddOU4olsbySBD%2FCg6X4bEtqpY89McCYsE8v%2FV%2BTK2JELHqUhN05G6728iBDu07RZ92HDYdGU3nWxaf0l%2FlfaVat%2Fz069Cp0fUqmiGnZxa2qAv%2BWNKEQshUa2kSMmkGsLRa7busY5%2Fy4wd4f9qSdLQ4yO6edl6IRPVZrvJ%2F7yS6vMIHPmOZg0oVMnQjb7%2Fje1MJa318QGOqUB2lC02Xk9L3a1zpnq4pPMJ%2FOzo1jb7HkuT0GrM%2FDG6qSfQ7qKNla7bXyp26w7TVkr5%2Fyk%2FpVqW0mQXUyrJrKUy3kb9PG%2F%2FOTI8t5ipQvt59Dpd6Qj6wm%2Br29KEd3vwy04B2ZFgnkwnaMUkkpg2ePpFVSrINbzx541QY%2BzAKyPgmjuldbetF7IuTiF1Q7U%2FC%2BMdXw0ZHo5pC%2FFKnGearZaIG8vq6Lu&X-Amz-Signature=aaa9b402c8fd9dc61b5da5ee65998836f19858990fa6642e50d59287287cfb93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
