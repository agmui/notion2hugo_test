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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RGNQ63A%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDQmunRZJgzT7xDVYTjdOh1Zn%2BDAfqfK%2BHl5QgWM1OqiQIgHcrpcrTqaBtZle8wpxyXosjPXgUmXHB%2FSv25XeQWUdkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBTiFkXgUGBBKe7WhCrcA8WTWOXCFDHFZEWVIOHI6xaYzgrfUwg0hemfVklT7vKJ3cl7KlCDQBA9ZzU1R05LGxo1TfVAjnyWfMZb5MkYMP3kVCVqI3pwoJVeE6pHB29Jbecd5covqWwGSaARIEqhFuZVjcgrxNyEBEoaxwr252pt4CefQg%2F2ufNt0MaLb6brOw3%2BWJ%2BsRTeom9y9ujgtqyc1gQdA13Xa6VjTpM%2FcoNfYiWItDONy9hStQfb9pLH1m5bVI9RtMzYj%2FmEhVSC8tk2eCLHA3iT9qhdGmRW4ukc%2FI8Y%2FA2oc4AR5CVkBxxYq5ScCYMRsfEJlPEyL3VKpcV7nWvVtGM3jG3QYc5EzocR7tZ3NTltrFgK7epx4CE4xK63yRZT1zsxuyqqZP15UFTPnxYDeJzqaPMckR%2BHhE2cLiMF3e9awAVAcC%2BaMnrBUm38T8MWW1N2Y2J9Xzrt7tNi3pLHoBKcsZKyLbNW3ew5u2G4UC6GdDuX0%2FeqYK7htDRxBELGdBPJ94EPdmN9XgeewNXYFAj98cvzssOnRUr5%2BZoc%2FrrhEqDTSY6xzuFYwtLZBlnGSYzxMdTV%2BoXJNTfnLRweJ8yA7orMySeH356Nu%2BNslr19y8eGFwQ89RNFsoFNYSP3Nl51dhEfwMIG9rr4GOqUBeeCOLVh1Y%2BKoQ3cMIXQ4V8Ca8N0kNS3zYIVAD74plGsJXLa1GHB0VA8Md0PmpFqHMExE%2BzqoKWJiSMk0%2FRcbLL1XjafUEx2p7IdiuaAbEsTdCOSn2IhcAEvBOTqg91P0HQD%2BxRBkJ1DpAWiNWNwA0ivbUuGIDEieMZO5jLGO44PGxWzTMTqFiCXuAnKX4iMp4UHXuBzISEoqpVCGP8sT3p3EzbwH&X-Amz-Signature=66d391238dfdfdd676efa622ed40031ea5ae51ab8a8869616b78edcd1c072650&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4W3NSS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCNhLrQUlSGGWrqfoKlzZvBhvtNiR7G57fuaqQbVOC%2B%2BQIhAO5YyggZaghHxovSVmRb86nv%2FP96LHnLmaXCr1oWQ2s3Kv8DCFMQABoMNjM3NDIzMTgzODA1IgwNprCMG27Zmbh5tKUq3APqKsmDmQIuWwD4Z%2FalsE7zgZyiaT%2FhCkpgrSNmXlAPcDu92GNI1U4raCyX3NbLP9TQ%2BXEgzgQR%2FVgIFc0ZY5hSqsePIYvEnySykxEh2l3QxCTATqeL7kNNFOYZ%2FEMyfcm01q7mlDWMZELiz63cCvxyUFd6nhO65kbFra%2ByBepiW8iWRnOd4eAW%2Bg56YrxB%2Fj3PDef2THqrwS33lxK%2FvP0bWqbSNLRW60%2F4fCxru6yCDrRj2cVvvE2APudOhZAWLlQCxMFvjPwN4iTnWnxfkIUsVL%2B7BMHlMNGyx%2Bpvy2jT%2Bn1Nfn7uYXElIVIXyordnu3Fu%2BO9IAAWWyy6OVVhpK3zVjEKr5TAYxgME17kmPShOjHvkZkpJJTq7hSFjCH%2FvUn7fEyMbb8cpRhMZbEYwvzc4U82ZV9DZ4fbOToXHbnNMlaxKMeHccK6fe9IbPnTWS8HtfiPfVWrz7Vw%2FixKJYdClBgOFzi2DJM6kE%2FqzPeXc53H1N8faam5MspIlpZVAxy35L9rfiygD0Z%2F%2Fn12v7m7R3cgiXDk1W8Dg02VbfW%2FmAi0zZ5%2FK%2FXCl%2FCRP3uZAtfZiO0Rg19hdtKEe4DiZmRTACkD9BmnB04ZmHZCVP%2Fa%2BJSDvIApG4QV5XYHwTDFva6%2BBjqkAXjPpIZQSrtdkDeJU%2FJ3xhJVGWj9tKlaIsqDW44y3o1lwz2jMT%2BVb8tjZwXUV3%2B2Rl1j8mqRL13dp%2FE2%2F2ryBgIenqoBOVRg0hUpB6I1nyBYtdY5kjmd9MNcSXGfUUgxePfK3Ib0VubO2ADafS%2FbjPHlzSdDu8QKiJfCsqD77ZuUdSC7iUsVXEeFAqidix6h4Rm1sVu%2ButvFqMYWKOkaPraC16Au&X-Amz-Signature=3a098ffb3454047da18feaca46a6991b9c6cd5f789ed41161af262d041e0e25a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
