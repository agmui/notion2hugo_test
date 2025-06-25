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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMNXLYM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICPeR89tAFIjzI9Z07cFzhDCzv%2FhPu5UNVUVLnXQ5un%2BAiEAy6hFEBJt0yq0AeNAFFIUm1eZRoM0Q9Euzx9GCNqQkQYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNXvsS%2BZE0t2%2FmksPSrcA82ekXDPQ1VKKiTm1Ycsnje5kHmsXhEw7t5t2f66YkhNsRLsRMyPFAMQPKHDrayFLgM55xZIEwb1mcpeM7IeOqLDkNdAJiHu5KhQIGuB3Wc6QtenuHIuwirDo1Mc%2Bi%2F%2BPqgKWBSZVvKtEDNxL3iED%2BjSlqEvBix3DAlVm%2Bqfda0t3zzTIm73gwlsc5x7a1tVZ%2Fai3u5d%2Bzf5D9VMg8%2FtgpnaKE7RKWNiO%2FWEmAUKhjtuevuuNul0IFaGUJruG6Ei2CvL9ptfOCrBi%2BjOrGZGtGU83KUg53p%2FtFnTG%2FUCUOCrStm0TEcnKHQq9dhu2nU3zHg97aP8yrtGUk1D09V4Kn8nHNLV4NMqCFGt8fMtxwn7lANpwSKnXr3nbeR39rThKoe6%2FtynKRgakVyb0m%2Fh9loK3%2FAekPxmCQfwhN4aDhfeagVXMR0FConyJZa3EKesi8J43mG4cfc%2Fd%2F%2BePd4euZFuClAf%2BPfnmhxLwe4zMou8xD1xZcSs4ezFjGhejBp0kAAKMqIsfeWu6C6sevxD%2FFqwxKnuAin2ThO9TZtFwOL7MtHb77t84JBEQ95jKJ5Xg56iiyjtJN3UzTgZoMs98WkN%2FE9kS8p0rHcPvHjCY246NhpsPyLyE8qNsVxtMLDv78IGOqUBymbgcucqkxP3Pf%2B3hXpz7TVE0BBJmGlBso8qm3jrzzCu6l%2BclIqWtzhLzbTqeRbjFos00HP9l%2FrWcRbKq1fHdV1koJVEfNqEXCEm%2B7w%2Bq9SNFH8kX9lpa9kdcWZBe3Rh0z6XPYB5aAHjDFdYRvx4dIIk8W%2B8yJjJPcAj%2BQjgsX%2BwhV%2FtG3JCBBgujWl2wiJbZPisVRi830irDeGMBaG%2FXmhoIwXk&X-Amz-Signature=e00d5162e93a9f319539e967e607a567312dcbef942a5ce15d803bba9d6be702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7DJXQUQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCryJ9aenNp5o9qttIvNnoEZSmfI8P4yjzsrc7tLtGVIQIgHjhxMpITeZnJsT8F7HAZKhVEjwnw4x0cyrobstb%2Foe4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEXT81RuABU2tx0VTircAx%2F1STUBqIm23CsldnS3E%2BvZbAIW2v0aMMK%2BODHRHmsUEns6Ph8FdQaAjT5CS%2FjahGqDsk3cIaiZabEZFGYLwVHNuzw47Gam7542HEYQjyaoUOXYai7bnLRk6rBfxciSAFpQ2f8bVdqwb1plhkIt7SGihxARXclJ3q8INb3QdIaSScQrpWg6Jp7EkTaMSRTDb4aYuAGQWz6zsVjw4JRrKKTCWFIFK8ljRE2bT7cxaA9xixojWEEWNk6UgNhm2wy2pl8cm5hebMNmUTHxnQXMMDtoZnQcyNP0uFtGmBZXJzMJDASEt6nKHJcwHj5sEePDG2O3tplghHG%2BxBRoTC0BzyYuaSfRzPjhVDjRYbxjEpjlZsB1DoEJYcBd7lNcWK9qBn97O3lFDtv8dXr9RxoaeCABnihw2cM%2FmHjb%2FaOOW%2F02aQRbyA%2FuDg1lbJJATikaAo4qS7VCxmgfrLQ5oYuqAs4W%2BL2FeZWN%2BVf6tYndSEhjLCSx7sLTCSj%2B%2F4ArS8HNKmdhR5NWKIQFXdXQQBoD9Enen6Q404czsZsgwC3bTG5MV0XSEaWwAodtcWMGxE3SylQ1I5dZmy3xE68qma%2B%2BfiqCXRIjZ9kxLD9bkLyuo8qs3gV9i4mxc9cXcD82MO%2Fu78IGOqUBzIwI2%2FR9vioCCzPqbJ%2FGeDFUAofTAw2Axv1eUn6E356yd03yJsb1EHvySJtZpa7S09sc6bS1gL5yLKY0m9RGfMi7q9Xx%2BSkl9dPZqj8hgLdsaGleE86nWG%2BJxLEZQS7JJlKt91eaEJn2z8OqTRP4QZvgzrv7FyT5y1Efvn32KpMrQhCHvS9tcs1DKsCH%2FvjYsSL%2FJqdDQvJhhHO5JDr0ua0OH9O%2F&X-Amz-Signature=ce032c2e2e9d3c0c849469b18a0ce95fab1f80766cb381ff8f12cabb0c4a5d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
