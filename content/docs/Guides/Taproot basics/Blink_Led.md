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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTHVFFP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDP64RE1gJrS7NFl3inweYjx0VivuMOvYLx2iIwIr0uWwIhAPm8eS%2FffYTflyTFt1rNTiHx3rr49qIPUq6EuLZmo56VKv8DCE0QABoMNjM3NDIzMTgzODA1IgxU2pBASr5qhQpexAUq3AOIAFRAQiI8QlRrABUYtMHg8ZYdyiZxUMMK2gDmthywgBwRQ%2B7W0OCcxE2wS6dFhsm8LP%2BggeGQh4HhOP6HBX7A2VVA%2BWCtvKg3vGMAigZ08v3UDrg10JusQHKhlYGQlnZCwSyXobs5Wd5K37Cklr%2Ba8PkmcLegbiQYg5Q4djrp%2B9cypAMpZcVb%2F3rzdFoNVUU3h%2BECbVo4wR4TC1s6P2pno9LkcCkDMRiI%2BnJ3EOcZyvKIxuSAqBP77fPEvz7VALRbRzL%2FKYLUzg0Y0oKagqDDbNRI67LW%2FSPEmiJ1YV12fwBkenYaRtLZh8ri9lQHRNiGsz7pi1B4I%2FOPUdqbDXQFYMH8HoWv1FyTuEcStyWKEDeh5uvpHEQU25h3r6k0%2F62I7fxZq1rn8umtGDaQsg42LFAqmV10c2NROzrVArOW4GpCnUIADychxgB8IlRLjEDE8D%2FpH9TjLEjyX0EssghkeI61VyHde8OGSUQrDvGtnWgEkGJjH9c3hNGnrQcv3mTtG%2BLd4w7Vizx886sHGYNhSf%2B7WviH%2BHS4O6qiwrK7zgOUrpqgnIh2t30bOMbiXW72L3ndK3PnTzXyV1tYzW0gysevvbhAPpnBLgCNhT%2B3UvJmh4uQ9zjRo8IzITD8nMTEBjqkAaKOBnK1WA2EdaP2Z4JyXTzfR6xHnrnN8bTWUpdKvRHH3BFf%2BrD%2B8lIVxYTi66LkvU10gCwkCzKIisUjniFByYdJHxnhdqha8dReiFD0IbYbUzZB0hLotmbmSfoCaQtw5a%2FShiYhp6auzTA8FOdxnHLq34aORCWN3fD0EJSpQjOmhsqGDkczciHXVHMx8sXwgZve90cco0nEs4GCgUIy8dREkiBY&X-Amz-Signature=cd86c5c3a0edb2f96c611489a1a6d75df30e3f0a415eec038cd2d148584f19b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJMAJ7KE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG19CTO2aEi6WFtF3az3btiJrLCcVlEWw%2BdsWIT6LzgZAiEAs22WcxuKkDAf9a7uX1RRbyToJXNSxwyV7mS5oAuBMI4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDOhUcfVVhvGK95xPUCrcAzB97gP2eqNRybiCUdHeD0cb6UmosRzxZHIGwtcK%2Bo2jM47iUaN7tFODo641srZ3Anfvv8taiLl0adjun%2BlYG0w4T0nsJropKD%2FkI1TAnYAmLUHbit0uvKOh8RzIfWY1J9s%2BlpJrq2H48VAqjHmHMxIlczG3runn3BvZJXoCReGk2TJdgyXeC3Tpv1N0NauvdbBEQtLiUeoimAO4UkuVyscUW5GwiLBR3Kfn2TQm616MixVzOBVWJcaHE0NJ4R4pum8mKd43l9dDmxm%2FHTd2giGisFmV3wXIooabRluffHfyezAIm41Ly90NqLHqAR85FwgNXxOjKU5sEntD1mOFQ53MKnxP5ObjFmm3ChVqJdFPBy%2BM0TjQr21CZgdtpklueH2yKpjNykZZG5OVxnQ3NnLYczQSH8liJqz7RnpcW6VME%2B2yBXa10qRmUefRfUnk3rZqJ3k2xKRLiCzsA2uUztLWYupzmIDZWsZWBIRJfkuAZVC2y1t6RrlwGRX8YvIqDRMkhdvZF2HNCgaVlZ5kmKCKVrbo%2B4GmuA2Tyk10EkebvxYVU0wiDeCU5Q%2BbRahHsdicj5Nnb1UrrCTPZbKE1cz2f%2BDSeYcxPODzlu9R2ZkXWj%2BUJNyOuV%2Bc%2BvNUMJ2dxMQGOqUBSrjemLgkU5TBeaA54G1LNP%2F%2Fxah2%2BGdp4eUYPjHdwefu4w1NhjK1c8gdRfLvVh7PaIV0DHmy8bFih2vwfrcXQ6vKuJzUek8axhPzO6WJVsuuhhrrFVSiWwzXXC%2BJD2umJebQsPKrRpHaXO2lSec%2BSt9OaJgoCVGC1k9M%2F6vODp%2BFvyGcV9vzK9TNsw3AgYeKqTMjDcriz24vAKuQMIXVmKV5dmTa&X-Amz-Signature=788cf08d196229e5150b0b53607036449af607f62d0fa0f2d7f2e50bac37d37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
