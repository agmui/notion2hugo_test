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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVXF53X%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIC6YSDbAjWcEp56GU2XdV57fw%2FX3T4KwGjbzYSIDqBZjAiBLS0%2B3wwxdgyX8AjUhokzR30nslF3IcZBm2wo6bgKkGSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLrvqFPPw5Iqh1wWoKtwDhleDoOpUUdwOOOqpiyLASb1YPUcDYOyC2ny1rqR7tynZcRTbMLMnva1lWe9V%2FPqNKwZL11KhePSJyCV%2BAMngFoKnhCunITLsQYxLdve2mssD7NrthZ4J18bd3Vs4x90GfQrfvo9CbGeBXpWWUToJEnR1m%2FuLBIsBK3uOdh%2Fkk0csG1jC0EOb%2FWp6sgEf1wNVVcKSBOSq%2Fz0TGcCU6XuvEyng5y5SeGzP3Dy%2BqLw8ZlZoX18yBDqn0NzLWVUjL9IzoAlwJrhBINoWoYmL1os%2BubLWwabDpa%2BmfOpBg392RPr3YvJ9HrJjuYZZB6mIjQZpBc6rGEtj7oZ7%2B51pxBv0XWMLRgj01bGmTsooWqSAD0mZBhXr0oy7ioG47nW1BK0oQJikiBZ0rhV5EEdhXeczFuWZ0pF6uwxTReypYUEIXmG1CnljVA7RtIN4oC3T3KeB93GZxTZO0kqlDJ6jnLEkApzQgT5oQsHRW1w09DrtbPeOMmFaqkdbzVfGPYDszSYjKWu91CQ2O9Y2relUQhbV6%2FHeOgoIwIUyZD7SbfbYNaRAYqInicH%2FjOKun9h7%2BPHA%2Fhc%2BVklvUlw9nqxO7vHrZzQQcqt%2BWN1ejIIUmVh%2BNuuq4U4TjeHjAxpdZbAwq%2BWuvwY6pgHKFuUUJZH60PbdRkXnz6a8MXuNcoXlP8RWkVghJT0413QB43SDNaddE%2BFTfBWJv2%2BrcPo9hgzOcSNAGkSLCUptPTNM4W90uuVB%2FqAYv74VJcHadQL0KpT5EolUU3TqgbOxk%2Bhqs38a7OC8CWSy5QVkjQt0DCUfR32Yt1bVMmpuOp1qvXY9wT6jzK7y7bOsQdmg3awnssYeMuS8vQg5lb9UUHFhsxRD&X-Amz-Signature=69e44498167869d45dd920a271268e9d45ea2120490ed17bc94b235b08d5cc31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYC5Y3QF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID7UHIC4nwh1MG%2Bq1mkB%2FOVPYZajx1u%2Bnt5EefUUQxbQAiEAgPz%2FPltjPigX2O82XJK0G78o%2B5lkR5Mp10ByPbfRm1sqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzTavOozToiaYtXoyrcA0QG4h8lHbMlpm22R8sG8aEd80jrNLwDsjeWFlvjoOv7sai5%2Fwc0skUQAG5jagF0Wl4gHxpPSqK068PIUOH4kjCYkaXiguD44tp7TxBTwJHoDsVp%2F3fneiq6UgiI%2FAcW6nn0ECV%2F2j9PQkBYuhdi158Fe3AAmKef9EeVNP7FBJl1dmSsY%2B2xxvt9ezuKUSQuUZdZ%2F7Ii%2FrRmzBx79gMYNWcnHVJziiZYRnIt%2F0h3Y3VXfODJvziViaBoO4nkFBBUgy9IsIxZl17fxnS7sQGNXzadUOqQA%2FsA11okPjMOH2jCe8TCjFnZsCMV9nripBDgpsw0WHFGWf7YLJFzUN63GUVB8wlLy7lw%2FJj4gY3dnpwbnHz9oNe%2FQDF0n3B9JmhrvyLrYZSXo%2BV7xSSKjq1SVy3sAEaBUa2Qa4clU0FcLT6W3CzKoMUVZPIUhbxI24YY6NK6duGaJM49n2FQ8Ny3WCCpgIydnOUMC5lu73HUXmBeIIuwQBYfpByehAOc2%2BP1vtBEHCMpBTuSBM6iv4cdJEwv%2BNirRfwLRViN7Ly76NeGdK%2FYOt%2Bq3eGcbYyILrM433ut0SYOtWpr4N5nYL7UMxA3GLRUTaizESUm84wenbB7Dndzg88fHH%2BbavkAMKXlrr8GOqUBo3sm2ogLX75GyvpqbMi6F4zz2HGQgn%2F1SUpISn8Jcn9JxFda2D8YtsGnFWhztxOfiHO3PT6d%2F838f%2B1r2WG006IlahWlt%2FbiNZyttUoFOQjHa1RKFeJqNCRf81W6YrmqyOoa3kjophu7TNipczNrbp97WyqGuTa4MdzNiHaIMIX5y9aSioUbe2s9403JzT5XqJo1dbYqLfJvLdRJNFiuqRxCaR0L&X-Amz-Signature=17966008e056dc34a19cc56764006ac78b93bb6edb68534547563b8a5a361b12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
