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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABBIZM4%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClSKaSAmYQF4r0ykVAqhLzdpE%2BG1X7PfGUslty7mX08gIgMyJaIjlZvdJvBRwqrfPTGXjlud2E9ofXIiM1%2BQSfeHEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxqMLuZsmJU5W%2F8BCrcA3AYPhVnwbek1hDZIXBNo4t%2BHmA2go8DY6qLMCEHbT2Vb9gZR%2FJr1zXNtgfE9JCKurCR07pgFkL5g9%2FjeN9r73V4FVpwglnNjgC5J1ISyTmzXb%2F8qjiuGbb9Z5CZcVYwjj38gFoYGgojEMss9NSS3KcwVR21LiJj%2Blk4rqnMQZ4QwqBe8hqClcWt4UPCVcpPDL8u4qRqNKmUozJ2Drdp1ZOT1y%2FsoC93YZpnJj9c6C8WzSUgH5EZ5CvSdYTuG6hgFNs4RG2PeulZuJlguGAzMDAD9IizVHyVjfMyq1H9CBBuogZ5VbmHasSgNAzfXmpbxUot4Btzkdmr3UqEiXLSSEAnYDjP4zXdGvvcOMhKXHvPecXAz%2BCKEUpIW07A8NQHocPhUltrWKgThvbUnjZziYAc2YjK8VhkyLsUGPGWVW%2FN7tcit8Vr3V%2FG64ntQ3IzVoGrk2OMyidJrTUlJ0ER5gqz0H9nYExg0Z2vaoh0rs%2BMigU1hJC18I%2BAO7iHxVWs%2BYHNxFtyKNmOCINd8IQufg14zDu%2FQXSIVOAFGLeC9ZDOCYzraPlmWJuwtjmi3%2F5R%2FVbt1LwRevFpF2LVATfy8uLUInnonq%2F6X5tOts3Eypw%2BNq9E0Rre6LFy6ZvlMLvcw8AGOqUB2Puk5oAlZ%2BgckHAUd1WAjwfUaQ8fd4E6oN2qDWUb9mR1NU2fAQX37Rgz6oee8TX2I97e558jKoXz3KSmUlCtL5no%2BzEF4DKUZZ4Ey5TqRIEurHKs0sUgOkdoIP93WgMakx9gKQ3Qaichsz3%2FZPmOPfES25iUS7nrQpwVf4Fx9jr6480P0I6nlmk0APG74XaiZYz0yYbunU%2BEgqoSulz5Xa07jmES&X-Amz-Signature=a3d1090ca0a7c8abbc6e71e70bed9cd9255506dff8f20da1d479944922f4fb30&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRNHN37%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfMsjB7Kc3T6YfoUpyyPNp5X5U2z8RQKxgrPBx6FMGHAiBp32x7EIrtNdEiUk4zFrUVuedA6xiSfkmqQ%2Fgew%2F2OpSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3GzC9lF49useNCSfKtwDFzZrOmRGJXAEznxGUSonZONnZEd3kUjfcBMgxHIpvRM4B5UBfRpfHkoWcOR52G3lzwD9AdNqUmHWOS0aP0%2BsXPomG05u9vadR657UIt497RNh%2FWeyGlLeT2RxTNvRfWyTh7HQ4leiGdXLtoeewlhXc2ZFAUZCkjHoltHgnoDr0D0gEd2lzTBoZr48yM0nauVrJbkYNIJW5aRsI8Qixoe82POZw9D0lZmY%2BR3MWClwS687eT6zjbF9%2FcZhlAKAR3Z5FJs5P3R5aNRz3ngzkmUOc8XD4ZLb07Kwr7iijEg6ZcYreXw5DUKHFIeNPB4wHdsCQm94e4dXZx3lzy1vpzTI7oc1%2FIbLe%2Fjnd%2BuaN2HjEKMUiQ2fm3DloBPpQstEplcKRxXNG%2Fex9da%2BVB3pbNIeVzkNHpEGa72cG0Vh5blVNO1VezwgEW0DaqkBSJMC7z5fmiO5I940%2F6cl7X2jN7XS53veOFWCt5CZ9ObKmRZK4depizuwuPqZu1xprTZE2LYx3t6J2XUgnbXlu3%2Fjm%2Fjgg4D2ZXAO2VHR39NnKHzYC6GbTpoHZfFP1U79ItDusWj%2BR5Vv1V%2BNGm5U01SAxag47gmgHe2NJUaSyjVjaLdrNjEpYVwL0IPvfrLAZEw6drDwAY6pgFhQPOlSXKx%2BbmeFrIFc74bfxVvp%2B5n2sfm31fi0kylAdsUgMJA%2BwJPF9sSvdT4ck57ftXVlsfqPbGa5QHTN8N13uHs6Mg0zAJ%2Bj0UdAB493VybPeUnLdn3lDWoZZLBQ3sW44QEQ7UoWDqAsi8OP30fpBc4e2dP%2B3WciA9Bc6SZw6YqlAq7JYCq%2BaDp8pGkLRZEHSEUzAe6hCCazRONXVFlUQpIz1Vg&X-Amz-Signature=9cd829337c26e408df893abf4e6272c35bda5ff03de67819b9e83636f3881b30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
