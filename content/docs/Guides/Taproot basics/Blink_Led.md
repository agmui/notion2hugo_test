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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MJIP5EN%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCsPvMnvmNnMEDkKGkvh65gUJq%2FUO9KUhtey1h5roFJ3QIhANhaqLLNn6wswixLovoXz4P7W4gySWT05W%2BscUxi0GGCKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdIQbW2xucFrh6ejoq3AM9dxv%2Bqi7y%2BHemkiOAEsSe3XFSbXbLIidy4M8cXWtsdJ%2Fqxouc6S%2BISx0VCUrzpNVK3REKvcN62iJ5JK1qQKL9QUvMoNEPU7Y9j1LG82WqDBhkP2D9sHjk8ZZToEldbR0aXWKQ4%2Fkr%2B3HhYxX64uLqxkueUFCDvoJdO0dw9oCURVXkWFKCee8EKNukfdnJClQtiPLx2JanKWYneZL2q%2BlhBZsGkAqlBQx1h2x5OICD9dWnNW8NV34bUSslCxjNbv7norH308dscXT1D5G5jhXSngRxatYXTI%2BLjErANCyjWedCPoyB5MLBVbOXKJXjIcKDB3H1itq4GT0tkzBNIPz2js%2BIzXjGYzQ%2BWK2LTEGpdyewGQMVCuWJzjWdaAGhGEuHvHTaZ3aew4ygiEyVZXG3ct4m2LKNeNjsK6alRkyuN8UrX4622q9%2FHLNXjV5abLKWOB6JTDD2O8%2BLteQohQn3Wf28rDgiIFWe1GTCwuI77YnXCwULc6OoJyewYI8NCQJXTekIfhV3oo4CIqwaLbUYEpl4E3ywvaLm1Qu%2F4ZS%2FuG5CZAhyIh8%2BJ2DUEyDfGn7Q6dqWhY%2FpPYfNhIRDXWHS9CtrRpPpH5arrKp%2Bd1CEdOoiwvn1jqMEbido7zCo%2BNy%2FBjqkAZXRFzA%2FGt1jtwi24fIxLx086Vtmne41D3XbV79vBv6TCu3NWdbIKJsA3xSphGe3BTtBdGPntHoYDq7%2BnnI40PKn%2FbH7FSYzKm8RzqGXv%2BcyCFZoB%2FQiEuYOMK7V7DHJP0Dv2qcgBEHgconDqzotkOyXxnPQWvjtzsOebDqazq14hSv781kTPnOjJJaOg018YTelv5ltNCObMEADgHzD2gKgtN7X&X-Amz-Signature=37a299c65c8458f682101f8ef66199f9ebe0b912d196d43d7f90b919edd899be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL7SCG2C%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDf63wuvLRaiXUaO0E1EEVGYuFmqJMSbbGPIA2ZzvQjHAiEAjBKQWQ7WIobaPy01kKC1udVgj%2B0lXU36Elw%2Bsf23cTEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbOyGAMG%2BPCcPYFsCrcAxPVkN3Nuu6eVvWOwA79NHMiovLxIOmkhWHqWQTzwjBUdRRC2BespEHR2hF81hrku3RkqOy0Kg22%2BChjGLceAb5MlQ5WpjclKzzmGRFpk%2FlnFdo9GLO2SI5fZwYAS2%2FCO5QbSmyl3nPZyAbu9jjl6KOCw%2FPy0FgNSgEeC6Ai4OQTB1tu6SSCPrxPyCvumubttDuUYOgEnv7YMok2GKj4ybD%2Bcgn3%2FAb2Xte9aDw0l%2FlNw%2BvvtJkx2OLPDdWRAKmsYUns7V5k3HoqOio%2FSM0M7VvhTdyyhq8rFSJO0xzv06HVZyzOAX6oN2DgnabRFzX7LzoWFt0X9uMygvRizRd6ICdZvnBv27mPyVxGCXBJpM1OsLgdlJMhNRvwlMmnht5MTxEc%2BsP01S1uBo6pUekDXET1%2FGgkc2DGbBh5MT0XBniJr%2BxtxaVsA9GM8anHkOLD98qHuEcHc1WcXTKreB1nbysAp7wWHTTNWF1lCJbWUrv3XnO7gnskC4V3T99rb9ni8kzg8OqSMKWBcLsrKympYS6WiFbf2Ku3%2BZB%2FqqyJQInJfdoNrTHMok46FxyNxQLlU9PmgtgmINKM%2FIoO2crwQL%2FppeQf8XBQ2nI9aO9DqB9gXw8VaaXRxGc7NRM2MNT33L8GOqUBUOYP0eqKL1DSB%2BrZH6LEpKkeNMDwF75K4ZTMl%2F5KAl4uyL%2BrpekOc3BUpFjvuiHhUozXP6r20c6sBffYDNQrwiLZkavReeQrIvwspfvpL5u0xPRFn1uX%2BURiwlf%2B3NccTeB7g9zvqhwfuJbbP2pyxSeKpDOIdeVZYkrdLlgFf7Fqv2v8cWyNIZACi4L6tAbA41bVlEytZmKPsZDj47QxJnzDUaNZ&X-Amz-Signature=a52e6ff2e7786b5142b71c96d3d7e44c1f774402a9725ad7ac18fafdce8364a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
