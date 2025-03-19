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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBT7OC6Q%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCfbC38RzhgIU1VsH%2Bk8hKAyDt0baVQ1uoEm5WcE92yMgIhAPWTrVkzRz5lbHtQAJ8yyboTntv4xzYh6cll6yqV%2FMSZKv8DCH4QABoMNjM3NDIzMTgzODA1IgwdFYVlxOmG2HY4Cesq3APGx7dyUwOpt8frmsM0gKUTb7KvE%2B95Tj3BCRWoxqgOhnKZdXoZAPztdT4mOb7JXvze69iaaT5jCgpdJIi52b86NuRG1r4RGQvJHhL3bywL1qjQR7VHYNp7kEM6RoQbSC5ZIFV5uzcL9s9gYfgn12xZJdVp85UXbPpXnBHC%2Fe3bXt%2F7sUgHALC1d2g2LWTefZAfZBuDdsXcUaDAQektJgpMqTSzGl0ElEUsgfERhct%2F66izohduMPSPbDQtnUS89Xi6unC0VCxrx0Pj%2Fy1m6UFiHcjZhOpVHQC0VIPROJLMpUyhtaJaKGZsy3x20l4b0BYI9fNRFE%2F3BslVKQK1zpsnmuqvTzu95XNc3hPojjqeHVmiuCz%2FmqimVmuRCrJSBJAlBTbW%2BkTT0xjcVSqH2lEl2M11OtZMuM%2FSs6R9HSmdB3xw2WmupxrgewJGmhEA9UOxCMkARbPni2T5KVaytJ2dDZRtbosr9ZCIRtKiCtJqCe1Y7KER0%2FDy5FWNve7cNCdZc59if57emZ%2FVRZKfFgzNpnY%2FdHBOKM%2FV3aXV%2BHctE3Gj0wz89xDSw%2BM8umz9%2BtnxOeB1gciIDRtQt0HaVk74yZacfRPGSeuzOq2ZYYmmks6f3tfpugsMoLJ9DTDq2Oy%2BBjqkATag%2B3sVXs7to2%2F2LhEpoAJaVkQkjkqGaKrOuSbcibjtKjMkU71Kk1z%2BLPzEsRaFCJWHsFaaMuxHcxn6qq4XIPapuRhWKz1wd9V%2F8wTT68kBAqlKoZRF75RSh%2F3bjOJLFx5Ii0mV35cYi%2FxzWHBLXkyVHhmBIYc%2F8wQc6Z%2FO9uQ4DSdRNLDc%2FUkITRbYiNz2B0xyA4nrdV5BIihpLrfz%2FP%2F82wfs&X-Amz-Signature=2977de95036393d87416249b79bbbf5a0b10c0e26e77e60e4f9ee9918a01bad6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THMY72B%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDh1vfFF4hFfTqa%2BtgpUOKSeXoRNBZrgsPrKAAdPzJQ1QIhANVM11UuG7gOxn2nmLzLLKpT6CJUl6QYQd4KGwT5q3riKv8DCH4QABoMNjM3NDIzMTgzODA1Igxs5x0p3VcnQg3tpFoq3ANYF30Q7NbMqyQoYRxQHNdugvXQSwZ3ZzCc7fvWFmPAlJ1PRXzdXsshO4mcvTdFwjPlYk5aYNiKFvZkNTOoHcqFYGRU71PQxhSxNegFbRJAQ%2Bhc%2FNi45vDe6FqtfII6fwHoJHy%2Fl3KeP%2FrgiRqHwDiXiSNuL24XOd%2BbkXfcQVsGhYgnClynO0N976F9Ke7A5E0%2FpK2xQq%2FDYoPJwYUg5nkGYrq77%2BO%2B818DuB6xUPzzAiOz2gyMWCoufFcm%2FLCjgx%2Fv5o2oMS2OnhMhKtxjK2GjR%2F2vBwvVAXtn6nHcl9JEKRg1MpBUyPvEF%2BYwA%2BqG0%2BY3pqP3zN65sbIhk4UlAKOlJmNkZR8JTJ0N7eqkDTwccUHdGMzBnfJZIc8kFF%2B2timj4uX%2BEHZT4dYpEj8qfiSviHUCFCJz4RBQXU0h8h3RBd5OUPHdQGTycytJ5dKKkhTUIsMXnDxege4TOOVvbGUnI0S4fFubsNUQqBh8sGo02%2BfQwPPLx1wShRLTyZ313nDBF6n%2B%2FOLcoqvJeGL8rH5GvhxTTMItqvoDeC57hWCDNUBvKihK9zm1htuWwBs21LIo6Hc%2Bkkc4PyOYe1vLarWU1wwTMZfTjtc0i0oKocNfiVi0sOWUwqlIK6L5ujDY2Oy%2BBjqkAatqQLmMWv36YRdrfnwnc1UmrcQlxhFdAdJ73HJS8grtH%2Fr0CnHmwJoyQnDfLj5QP6Patp8thF8Dp9eZv5MWpn5bM%2Bgta5kl72lEh6Qel40nnM16kqmUXJdtiYx1umeAo0BLr2viihZHl702aeE60bP29oSYLF3vUcUDBqBuGnu6zty9ZvT72HYGtAMy%2FfJ2bpIZF1rSywd%2Fr9bqj2mJ086s24M2&X-Amz-Signature=2e0b161161a197a7c2af843a632d351cc4fa5927d45762ce1c52a34528c36cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
