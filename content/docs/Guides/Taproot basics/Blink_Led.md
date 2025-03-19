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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATD4JLI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHrPq2vIEsQ%2Fs393KqDJSSmAKyLA3P6S7Vdk874p11HHAiACfIkNFpCwEJcLxaDHTptiYPOlDeFzQjpt3f4yF4LVrSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMX02spiMfpbG9rFK%2BKtwDkd5K1n4io9CEcFWHSjJFIFpPxhRyIR0nCXJuSGPBOk5OEytjZ2%2BowaimVXZr64l6Bn50oMrxNJaXoqequsYhXN0MKhjAIgB7k%2BIv8H45cJ3O3K%2BPss9mvmcXttx7KknmA7qOzTD2IU1t3kH1uc%2BKldsWlTTn25%2FYQKlrWfPnPhufqrcj67Ownhx%2B2f%2BvcOOXjTxh%2BNpQ0KXZiU767wC%2B3DPMabETFtWx%2FUJfur7s%2FE4oLMqDRhDPQLBuEuByYgwRpLmsIT38rTnQc2hKRoUVYDcc40Ontq9Q75HIEhBX%2BEiObFhc8S0JjIeVS6Tx%2BLw4Ex0qBvPDvLUCE27Y1y9bclTJ8mTzFta0D34dIwFVnGNqYiGggF3S8BssR%2F7fP8xeCIr8KQLOTkJp%2BJYCiYrNl3KMTZwLPqPFjiKzJcXqRogZfPAK8UT04zrxzKqsCIO%2Fs6kJOa%2B%2Bzu%2BAZDFzz9gpeLMYnjRnV9HiGOUh0l%2Fd9pzm1bfIaIkBOxjx1WsDjfuUrD12l3DHU%2BxM5iCteTGdPvstXZeeUyoxJpl0akkei3C9kMXx0m3UKvxt0btAtLCl9v%2FOnr9A2EulnPHUDb%2FrgUjEh7BFLHuh8TVHBrxKz%2BU078bU%2FIifsZ2wQGcwzN3ovgY6pgFpNjW6ZU7kPpsvYhdhrLuA2bjSL1IqsueXw%2BHbUNJdv6SqlGUVsq78njoCe2DgewodvapLb4oooGaaakaRQEL007fyEKX7cnvWJiX6bwbbwh1kICiJBi7HApkUrepNprt5EVqJlO7pHqcyl%2FAGUsGkfYYoDsabYYWuILfMw%2FI0bqnWADRYNfR0VqZOVB7Zgocj1HfM1obHuVGYtmIP4EP2HH%2BAbbB8&X-Amz-Signature=ec96d7a6cdcfbb71677b63160efa5dcc415ffe831e38834360352f8462cb7829&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYWMLEL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAFerRbT0JyELZCPh9WwJor1NYVg0Yq9LY19yNRHva5fAiEAv%2B%2BiY7HATJJ%2BVS7PgJDFuQgmXyW%2BAgEpMOqvGDWsQVwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDL%2FV1zfLrZ%2FeKmtLfCrcA%2B0ilkHf8lnJbZ4cZkjFk4XkrG4L%2BI2S%2BR2Y98LrnyB4cYKkPSAjAPVWn4dgCRHSdWzBhtE9h6RSjaFyOjoIl252oUYKNlzRri3Sy4azNQJrMjDum5uMF1r8dPvnWRWys7eTj5XrkHp5mLJVA637ha1pCgLLWtNEeDXbDO5%2Bedqk3S8kJRaUmWikAE8jVXJ8GIQJW%2BhUZ%2BTchzT8HavvSYmROmI4CSnTUebNfPQ1TRDf%2Bu7K8q%2Foqd5l60xFHtjxU64tSrsnRNZB%2BZiAsoo0urtSZa53%2FD0xr3Ia%2BtQyNJ98CvKC%2FaDZ9H2HZ%2FF0I2ZoVvNFtw6hBCRp0ex%2BzObPwtuWozGWJVdIr8WOYuenmHBEYn3cXeegBeMhlnKL7R7FBMB16OFUfZCYUQagmLECB6hSpuW1%2BHld6CfFYiolQpmXTBXnFRA65EjbVDB3MF8PigZ0tNTATfPZDt6y1V2UdegNySrzR2ScCt4I9gRZR8vJlrn%2F3U7u3IQro%2BN0jbt2TTnzv%2BfcWNSTFGEEwmSfcsR4GpCIS5QyAiY1CFSFVeiakSRqSHcz%2F7PzQfOeRpa0HtnR4nT%2Fzpcb2l0Q8qjrkQAZUBnF1rorEJCrPz6VvHsKaoOd1BcUT3NPX1bOMLnd6L4GOqUBrBkrZZeuJLwznpA7WD%2Bb3Pk2s2wts6o%2BiPvvpZGxHW43U7QI34dfDpncnB9MRb0bn4VOY0YRA2K%2FgQABv1hanU%2F5szEwbYZwSjMzqDd6Pm9AEbcxqRNAI71T4dnrRUoAUGhTtLBhxoXPZMbpiL98pFmW7NbYU%2BQUNZQZWe7471aDdgR%2BTZB39LynS6SMoWQ56CmL7gbOIfk7t8vlJPn4R0hFDIcX&X-Amz-Signature=f2216eb8fee075bb2685e723c755c07862ca20d3e4ca3fe0fd86b1b0bb107066&X-Amz-SignedHeaders=host&x-id=GetObject)

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
