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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJOVELK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC5wvPnJ7t%2F%2FHkVUjgA5nNacfkImxOiMvFiC8rFOMpyPQIhAJELsH3S0CDpOy%2Bj1ApjposXgk2r7%2BtyMPK7cXGW376YKv8DCDkQABoMNjM3NDIzMTgzODA1IgyoCeg79ricljoCnzMq3AOU5xvmjKtMKnvb8n%2ByWIGudSqJOuOaATYAF1SOC58qvrGyAhnmgrQZUzBmR5HbJduu6oRX%2BpumLtX2GNwL2yhE6EBi4LrXx10BQOhhoWlf3C0u0SHm6DrvQaxC%2BXJ6EtQX1d6J8ZP0uDzXdIqcmqHvQfOt7r%2BuumwyNpqJWq5CyqI%2FOKazsp2VpfjiJMFlBc4jVtn2FbayKVz2gowSxbB%2BwqyWvqvKSwmHzFS8nuzMD2ktSxahlljQH%2FGExKZ6WaR9PBFQKNauZVUhjbSFZO0awIvnJAMKGwhBAQ3PwRjbOtSarzy7bfDL0%2B2kG7g%2FZDcm%2BBhQf8Gt13%2BP5DVxtRkPhZvlNqCQgzalcQtlrQvRlwc4IN4MwR5sHbMwF2fNkerb1Kj2%2FxPRxpoN2DxTs7moW%2B2lkCiJ%2FM113iQkhH6TQd1YiWPg9qowvhrza2%2FmY6Xhy2wlf%2FMIxz%2B%2FuFg7jJoLxGSaQMX2eru6sTBlEdibFnPBb6xoLhUEFyXbztUo%2BVvY5CFlqPXjRqmbPZgSuSv5W%2FgDqGr11ptf74iVkIOQP5Kmh8r58GFfK5LnKKNsP2ZTGhl2fuFt0opKSQcSZTTMLN42QNoud%2Fg80b4nqwRnLVoAh8y7ApN1hsPKiTCViovEBjqkAeScuanz5w5ObLvtB7r5U1sPUbgsv4e4P1lcQhQtsyqsrRKX1wBRvcJgN9DhYZpliDo%2FGifLZO%2B9%2B1pOYNHrCa1W8fzcDhChahYgXLf9dJNhgft3ZzgcCIHy6Nj5dZ0xtJfrCL1RBjTw8zmcGj1Q004%2Fy3cMeIOfReOge7XWgjfv%2FED5S%2FyUCZl54v2QnDNpNU%2FrKzzvMKPZGBkSSfDzAAbBukcA&X-Amz-Signature=e96df4c0f9747b8b56fb5b1ed2f9a82d97c1589db7aff5168263a8d157878e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6AR4EL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BMTcLmaLAho2Wwv86XHmRRdlcbsL2KZBe8cg5sM7KBgIhALU3jFBUDHz69tad83lCqEHh%2F5RgGdJ4lyuj0Og5S48fKv8DCDkQABoMNjM3NDIzMTgzODA1IgwkKPGo%2FVJhzGOV9ZAq3AMBaSI3R61nFG0sskbh4ehIuQ%2BEMLW900QV%2Brr62JEKR2mhaRCEv9eoJHOydPDUgDvotlkyZovfUHJNV1vtSDKBu3QbZk%2BunQyyQuTCvM71nNXueVw9knNcbqovaQtr%2FKnxiqyQN6EPE7XzU1OlBw7W46opjq7uUyEZIpt%2B2VM1uGWXsNnV8sKYnJtLLH3m3khNidrButKe2Jz8bs8A1UPF0Lmvb4pL4XX%2BKAtnZKnaUABWDfq9vqHPuQV0ftLhZiuVSC0jCbTjx6qPbZaLz394d1EmxlMZfOFRF%2BMAeFGZFCmFG%2FrZtxb09%2F2wYrTlKjlOj7Foi3d3sU%2FKyG%2FV4w7nQ2RrGSvR%2FU6A93yIpbGzyigbDufzT8zQbx68pFv6KaTjokll966T2tvCGhSXgltobNhUma1g4rOAqm%2FQnYHIDLl%2FDNtpbdP6dYW61V9FuQH4a6hBNsVBR0AWSSIXv1Qrmnsf5Y%2BDycMKgJx89pvkBQJrQySE30mmKeLErSgK%2BcKlVmXIOD44LH2N9Kr0b3joXqAPmkOM%2F37SH3vruPM1KunlR4jtyAm0R6wzkH5JCCC%2FX8Q6kcG1HAuI5Y3mMzzyDMPjcGHakzge0VVrsFUDlBCWOEi9DBWTEAUaNDD2iYvEBjqkATWb2Q5j4B20XHA0ikJqFRfkH5qIGB6z%2FOqurFpg7ZRNhJqdghOPkWdetvbNqcG5OHjen0RlfZsxIeWpvFE4%2F8kcu254gWXcyT0f%2BE7xxTGushu3CxdqhRVh%2FUhuxPoi%2ByPn0TZTBigLkysRtUBxUuSDegJGUbUPnfGv8RsMba4034PeBx16odNaAi2H9W5c9ZvXkYDD4BjrMNpNh8zBnPZm5Yzf&X-Amz-Signature=2f3b8b483e419d82d35058dce0fb914e5278a88b6444a5d462cbff1c51a952d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
