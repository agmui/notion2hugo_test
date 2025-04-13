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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJ6IQC3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEYO5JlGyPSW2pl26ZeZaYMDOvqhoJhTgJUoCYZHTfqeAiEAruiZI7y%2B8KWrgrC36jB2ffB1vrjCXm6fD921frYQn6cqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7%2BcDtf6vjpRLjYeCrcA04K4wT4kEUmG8xtj%2Fy9PWyVEanGkBtHyl0%2FvT6BmVR6Yq9i%2FJNcNIzNzrdbI7ubgIOBMnDEXRQZBkOzVOixMHMDOaFrnod3NuaKSabzc8vrL9hQzrV73vO43RNy3%2BbntiKvnmYtrya29cTMH0q9ekYN%2B6bCsIdI4CUCc3Mq8ETit9Nt1Y%2BtZRdrW4ZA5mJ8XmvBUsAcOAAyHdPWb7MTju0GPU61S%2BxD0g%2Fdpsv4BLT8OEHudRlaPdD6ftnvTQj4feWmSSOB9SD0dmxjFqB%2F%2BkRvCcmmMqOhM2oUYcBxcMvwvDKh6PvlXv6u4q6W574AkoHKMGF%2Bbuk8Q2OgoIMdNNG%2FJx502Lz5bEqS33Z4OaVFmQYWF7Zi5je3HqOAnoIRDfquEb1B1c%2FiouQGhBZDaAYRK1hKup%2BkbDmwF%2BnCgLy%2FJ6FjKoXZr9En8lmVto%2FeT1XNzjhq70VctpSw8krLvILR2svE6klo00T7FB7GaMUDHZvBm0zfjAzz1yBtPIxiXUQnfkYMQrtxT3OdfZyvetDTBXZOHmr8c8RhMO86ehfvZ3bTJFSKLLt10p6iz%2BRcpW2UstoPXFhzvP87DeO0psdVmjey1v58ZuFEdDpUEsZTJeA2Fkuy0Z6ueGnbMPuN7b8GOqUBfnsYwNzLd%2BpxXuYACdreGXY4tWLEclKrX8eiWhoqLfi4kt151EcQeeBzjfp1GrHTUke5PKgPNccaLgo6RGxBF%2FQtpfPP6EGf%2FjzoL1pC%2Ba%2FWWdS%2B3NmwqMwK6nUB6KVeNaRBVOwVQcQcUbQ5LDRGJkKf%2BttOVpQmgPwggXthi%2BOdsM1vjbtkM%2FPNZR7YNegDwjdxzOUCbqg%2FYERPjoysfi6UAVz0&X-Amz-Signature=094243d78494700ad5b54a95536813a1f7e35f573ae0db37e1841d0bb06820a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5ENRVZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDmre8E7j2MEWA7g7SCEN0SYNeP6Xo53MNe%2BlWCzGuA7gIhAM5F11B1Y%2BiA2vPu1xafR5zy76s4E9tQwaAZb3XtQvOgKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEy7nSa%2BLvjBatQLkq3AN7rO6nXnzpKlPuY4yOFnJJMzyxb5nU%2BkPIyZ1Bjh3IwHLuL%2FhW7PPE7jXxEFkT%2BkJeaGzxYLwBGUcp1%2FQdTmyFwbFINHxRikx5An7CPp7F9fOJnVdiIL%2B54FQC1OvsxqXUExv6GOzWR1MR8yXemGtdXDfaNemTeI90JdP3%2BQFSp1Z7mkMrdavz7lEdPGPw36m66l9HtHuAk3T5QjkZABm3YC%2F49mfMy2GXEI7%2FBVtBcIvsnWq67qobJjyY1rEctZJN%2B8TiEfGGUR%2BAeZQvfleBRy4RShzQNhq27HRMvMUXkQmYHC4C5LWRznwvEHEhJ3kYfSGxm%2B%2Br1RBFeaj0dlA2t4%2BzyAxXv%2B8ll47w3Rnvsj5Irglb5xVlNtTPnr79HWQNi3mjdtRfgyCumNXCG3NDWdQjhhR0IzvROJAZgqaZOVtGeSX1LLoj%2BBBHn2JKNDI5d0zkFrbcOKNfSRQaE8I5psWwQQAG6mto7jr7rGcw2Oh26K6zVKXAfOVWj5E%2Focc3FwHEN%2Fv7JGbHVCZr%2BrxS9BWmMxPHtH0xbzDnrlaHa%2FMxDtKPrRFdSXJjiMig8gbxNSuqsfdF9Afb4CODSQ%2BkH%2FCZjvYs40ySF3pi2d3vibdUdrRIQXnLMVHc5zD8je2%2FBjqkAU%2FRculdJ%2BkOH8Pl%2F5sNL80vJ1Zkao%2F%2Bpq8pm6K%2BOmPOilXakgcsJnR4NS7PCcHWlTKw3z4RdYPJThbc8QjRBgAnX7ZBw5hNdOw3t1i%2Fs1jQItPFtjaH0zsSJdEeyrPm6lLWoMzN2Xg8%2FLzxkRu463qKAXuce6GMJ%2Fbrb%2B7g0refwxniG2dr0%2FFsVflsf4jlw%2F6RQc7yrVxDFtNsDwtfpS%2BuMoqv&X-Amz-Signature=0fe905b3ee29024138d3eb2e8bd284e0552abef93ca108ba5998861f607b2e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
