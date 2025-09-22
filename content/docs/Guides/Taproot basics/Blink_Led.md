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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZC75OU%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHj6ztJ3meW1ZNLPn8I%2FqzCs8fFtB0lOElrkxCRBHK%2FfAiEAmaTp4sq4Aa4lHQ200GpTjnXNObqhpRqr3ciD6LQTd9cq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHjoqgq4VF4bhUMViircA%2F9diJIK5LwPQ8XjQ7VNPg2Xm1QBRVUloDvhLY0UBgwb8sW6%2BswfHWoUkqRq95NIWF86KGCTqVlasHojB1sU440H%2BTd2KI%2FhpDg8NUoSLrtBTz1LN%2BWNTi4G9pQnzDUs8xEIVmi%2BcFdfIwYN2lWAGbmR9NhwlSt6iKHHw1vXz1V7XC8A0LtEoYDwXTw%2FxYqgXnde1Fkt7to91KRHiUlv6HNLxigVpmuYVLlxvSOad0g7tG1ZykFUdH4HqkuzfL7BbVOjcXusD6rlVN7RvU4yczg%2BcMQcdGRCXcA0PZZlApLIAWfAV8PNjhfz8iRC8V5HmfG%2Bz4navpK%2BDDmp%2FwVfDY%2Bbv61eCGhHnJ7AIsyjqgjYFxo%2BeqlHP9A2Z7%2BrjygoZcKizAr2i%2FETSAyOPWll6iQfCtnY1YtbfCXT%2BQyU2pJxqeP2du8wVZvkFnMZ5cLtaNEGDVN4RbsX%2BFD2VNvRXjG7W2UcEEjyFd%2FxTWzpblPru6DkGRsbHl7cNPWg9bLZdqrqATjzHsboorsoclh9HCcuVinCZxww2sDbEMet9wgMCIPqelxbjhwzrFWbRXsR9HxXQCrNvITx%2F%2BJJrDuL4MrwplCpnFUkbk75REFjbY0wg82Zeg4GdV3Q6n1BMN%2FEwsYGOqUBkI2APGtqY2yl4e%2FK%2BpydAMhWhF39ZddBSs3aF5jO%2BNEvJd9A7LLVVVFLKiVSP8gEUdhIKmx2DbvDoNxyzqwwGEyMIuWXNwgMYpMcYGltGScJ4yEL7hcINB1Vw5ESHaFzFGmr64TmQ44pLxP1Yog7scDgDScaHyN5y%2Bs9qfLqwPqJhEC%2Ffr8sfxF8DuFEpuvfDP20zTNmGjqt2igMTxXaGIoJ6%2BFZ&X-Amz-Signature=2a0fed0dfbea379c5a2233fa9ce842b23ed75fbf2ff501af77f8ca5bc7825700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645QCL2X2%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9piKQTsRA4O3WuFjHN4Jmz0FSW14WXPgisq37bTaT0AiBKyXzyfLlIWVWDRcdKK10qf29rnEmvLtAOIG4Ghn1vHCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMquIifFh1j3EqVWHYKtwDLUOGtoAr92Bj4%2FZfqgavvd2t8UktAnZgXoY0Hpaz0rrKQsEBPrOsNYpoJr3kwKVyzrDhw59zrIdWBf%2F7r0FmLrNn9FwqAo%2BeoLPh3IOVHlDp3HhM9agbwYI5dM6jO9U5i7jmh77C022e4y3Vxyk55WHqRIKkduQcFATF7nh6ajmDSGi62nl7DePz5uFhVwGkKlX5YPd8Dtc30ixrSBTHQaZFFJtBre2fJ3G2zyJhqDhexS7ruFtbs13NWgF%2FSg%2B4ezMdWdX7iG48DG1gEBFKBiUc%2BvNFunqvO%2BoxvwSpXJ8Mhl94lrg9O49Jt8KWtsXk39lOXS4dLuFf%2BEn515SXIUxMIsRFwzimsB3XPRITU%2ByEkJOfVJi8AKApfyyYlnmRLPkAPIksdmvs7yxevSbH9dIXinanO2OjDtD66%2Bv0IFJDUVdFN6rL65vvtfRvfUm1v%2FfPz71Yo%2BDdAsNeyUz36rdFGIwwdf0P1gnKhlY8CUiPp6Et68WqZkDkDYBhvAcV6YLqlCB5zZLfBPQzLJ6h1qeVuqR0NbCve%2BE3ogTCAATkLoQPlE0nkUsu2NuwZy1CZEx16bAD0i6KGvkXCJDHfiA1MCjOCEY02cJHVezQUxzSSCnd0JpbiLanpBgwqcbCxgY6pgH4vlBuIe4aKFfFCwD4e%2B0hWh0yvdVSrrsu0W9hQNobtWcJlOf265dqHxNbQlnBvbPVSXZrKAb01clnEDpQ3RH6cR5l983VXiU65Uon%2FxsFC4uTw431SNByGGtgSKjZKGJO8FECFgxsgX06fo2n8ZHr17xl1McpYXYouuh%2F2k2xO6mNXQ6QrGABI8LNWCu0VWJOOOv9DZFv7aG4RGigx1B67wqyVDId&X-Amz-Signature=8786b8fa2c37e43d8400066d1ba1a817c8845076f1f2def3191ab80961683ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
