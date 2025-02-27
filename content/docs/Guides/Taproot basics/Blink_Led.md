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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWXZBC3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDv5gdzYGKXsBDreO%2BF3sFfDufgP3WAy62GPtGwQGymKQIhAPbO%2BOlA0rmvyMRnR2gNNNrmPq614hMhX7v8Xl4C4J0jKv8DCHAQABoMNjM3NDIzMTgzODA1IgxcvSwGuGoESro7DkIq3AOe3LFGYxkS2Kh%2FwYsYZFSzW9irlpwNKjTo0PHQo2jW4VoLVqUcSzTAkigE3I21V0YFMzlnEgj0bTDt1AA27kkUIyr3YLwlOwzg68kAf0%2FBgWpQh8uTL9USSZEKWUINUL424PBxrhC%2B3qnn7ClL5Po8VS2lVIT507y%2BP3lc%2FXL0%2Bj%2BTZ8WC25%2FGcNrg3oQZPs1Blpj%2FZciaVdMy%2FgXmRlD6K7%2FG1N5rI5ZEkpdXk0iWbIwReZs3GqIzvjK0AjAK%2FBdDzcSde8gpT5uKk4%2FT9PYhLglModa3rkwtaJdvx%2BbgfV4CevQTHsSoV64xbyAtvylCb9ySkNRO5wYjBKQB6ll6wD5LQ9Pn%2BEL56qRqelwRFABGY3GXGWLTJ3CH9Ev2zitZR3j0Mwu%2BFUemYTFlqWFDchwArkaP5vmquXERb%2FRoWSK5XFAaFW9wiZuEdR2FAPEm0DY2w2ab7e5I0ZNcVQBYS8HvDFoQVOciunwE3Hw9ZcG5%2FEu31luU555FUO8TrcNA2IgYx0UoUwEcOcOa8ah1JJ3va83105QvLTvlLxRpX9L%2BHhLRGvMRE7KKAU8xRn19SoMHsKCHRJ2D0WfoBbbDJMJUZ3zqfimaoq5Y11YMIcWBE8%2FFJhW8HunH8zDTi4C%2BBjqkAY3hZVY6x886SdNGtz2G4JHObYmsy8FgfFM%2FSlUX3Cu%2FzbiST40tSNg1ryQDMPLKeH2JX1ni13Rq%2F2WYoVvwKTSt3m2C0ul9K%2BSXFr2KSaAA7N5Rt8pMJMlTgU0toCYAgiYxc1LJt8FIR3%2F3hSeyO7e5r1u4ENkQc6Q2n4E4RRrrsq%2BpgFYmUEGml13z4j5%2BYz%2Bo6LbtNFx%2FS6M23S2Y9MgU%2FFZb&X-Amz-Signature=0ca898c3a7a02053918a8d166ef67db6b8ab952e7cde552868f736ca6ae08dab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7NUINE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBsYARGS7sUpgHODH%2BMZGz6Di8ii65RJmXJoFmYf0d9kAiAvIY3NVKl8Aot%2BCE5VzTazAkxQGN8gJkCAaclWyavVYCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM2u7zfS2mq8o3a%2FMlKtwDyQrKQkNdtxBsDqS83YwHY8XW1M44eWPjb1IAmj4oKrqWnFC%2FkCu69Eefhz7N6IMuU5D0jAhcaUtreBy9Ju74hgAxPMcfOO8Tb9p203kU8Xqt9cyAHcxyl0WzM3iATS9DApFzhOaYvhbj%2B13RraC65jk0sKQjHkEb%2B%2FC%2BJvboGnkyaIYymzOBzgMlo7t4AcVFHdCqTykwKQYVPUBBHaP1yXZ4xoX6NuT1f%2F20zIMMuQ%2FT08alk95gqQfRcZxPoTmiT5m4H2X7%2B9%2FZ6hLbMLP6K6qlHelbVEHcw3oqiPeYG9ikLqVs%2FR3alyQiuJDvlek34gkVwVS4k5Cmidpbr9JBr1OPsE7ADB0ubJJAhxvk0MZoZz5D1dQIbgUQgSgikVcjuE0B7hPIbiUwQUzC7WkcwJXUyDG%2F9mRlEkcLQP73sCHAUKtlns19WkEid%2Bc4Ylr%2FSBWHpuebQ8a7%2FpAeq1t%2Bd8icRgu5%2F%2Fr44CYBnYRlRnykuC71laOIfGniRl9nawDB4FGSEqbTxZtkqQZGNY%2FS2xD9Au%2FNxYetxdP9cGzkY8jCYhXcSRcBMxwropKnEvO8Oyi8NcUu09DxJMgFMpsj0A0UETlTIAeUqkDrFwaOJWtVBPbnJHkOVGitTzQw0YuAvgY6pgFY%2ByyxBtRTLVkN7yskdd4T1iuIF%2FNK7TrSXRSc5nrhriE1BWzJccTu1cdtU6zRUdu9HSCEcZJkBYhfnr0RW%2B%2B1lqzcvQU3fnWTW04Qe1mWBM6dWO1xRxEJOS%2FsCek1fQUIMiwJcIWrnALzijesNlCIGMH%2BS8rcXQOHr4LzJrZt4HmXRSGOFvnrVbiS8bOIU4o74UokCfA96doNCwcQx8OmK22WHs9A&X-Amz-Signature=6b1b407374a202f902a6251538cc585c8f61cd960a0ca8bda3e5f3c5418f2476&X-Amz-SignedHeaders=host&x-id=GetObject)

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
