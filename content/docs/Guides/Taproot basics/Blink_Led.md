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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDUWM5E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM6AkWvLOpgvNhNeN3Sv57iOiTquLjDIj2FAv%2B88e6FwIhAKRfLLP%2FbD9HnHtiulzmyb2rO69ovaMvrUkVDprlMUHNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFx4Ez9w8kEY7bVVgq3APYca%2FfNsJDHY94LIgY5gy7OFq35SA7ws2IXESENluhmILXw8gGnLRjwz73KxvQUu7GMZtngWw4mLKzmKwGASZ7kLrFxATmi0DgFsB50YyUCFnF4V%2BdvUT%2BKfVYX%2BGFOFeIkJcEE7oV3BI5QXDKKcZGpQIQ%2FmBmxwaxT90FTSUzb3JAx6a4hADVxlDGAIkK5jlV45L51yuDzJ4gr5Ez8nAuNtl%2FCgNkgQBnH6ja8ZGmnlMsQTHPR5TMJS4V2C1be%2ByPEBrbyfuWYQOPzB1bXEEtK7RHKG%2FM88sFZS2x7e%2BsbSccRaCCG7d0%2FQjDK83tcyaSL7NaD9mpvco1A6pER55aNmjLcSYyTGrHxypVR49szST%2BN4fiU2HFeP3nPYyItaOEqmDBXu5xt2MYP0dPoHg%2FYNc8cMcQ1vBviD4g%2BlCY9h3p5J1la1YRpNX4S6wJspTmYZqmJeEVo0cZ%2BStxeFpdid1UzmsxtxiuEaOULuj2%2BwHbPDYmxfHF9WI%2BDN%2FnPu6ZRCSEn4GZXz4JcGKxg7KPWaRPWpz6%2F%2F8FPidImpkdQ4cfGeGsN%2Fu0UmQ9SLAPJiXUoPVdDyDqbJ0EKRTyJB78LEGr0sdKlAeNSOfiV6HyrfQiVXWzfjcSmUmJLTDHuuPEBjqkAeEgSGtM1646feC%2BSY854y7Rymwyyh7j1jpz16%2Baj1zav1H0Y3So6PMqCSJ5jkUl5vv4Ar1jIEAX%2FDcd43qzqQX3%2FxUwKRkIrRXOdrB8UJ0WgwjXv5tdL0%2BaofMq9sZYbshTNxXpT3LiAUARkPIsAM4VmpYdWRhEw5cc8NXcvHexabqRAjdUvUdPUBjTHojaPaIU7qBseK3BHWz5%2FXMAukWyLRZR&X-Amz-Signature=9c1daef7f933a1a2b8bdc93da5d060e1c77e99cb1c3125c9b2dce502ecb50098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLMN4A7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAcrfBzFfzGXf9c9DSI7XgCPQuRJXsBay9P%2BU95ERT5AiEAx4tHeN3Jc8BrIKyBxOKyx%2BG5H8kUBnUfwH3yrKlGqwEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOILIz2YpgyY6czLLyrcAz29HR4S9XllmdXrT7QUbRFkQ0K9EPxe8JYegFuga9qBUbeu9r1wGTspaT6PnFrkpxTkdEm4D2lqKwhJv91mEK%2FRxeQ0LzNqbtABCO3MRrhiz1Ipu9up6VqTqYPsXHoxvAvwP69jqB5HciDt0cXBh%2Frb2FO7EshM8HhV%2Fwl5btwqji87MTjaFlkd344y1pQumRssx6MqpGrflXxUptsNWMJeJp%2FJmc6seuY1mXTQ9af%2BNaS%2BmI5uttdnlz2XkEeUxU2O5WexVSOrV8jlxxhcgVHpdK1fFOHiKJPzvIXSaUXwHBybu6J8j6Ai9XcRSroOYmqsEiYw8CT9peF64IDKpBXBp72Tnxq4PxNWhVZ7SjzvuBNXzsvGAkYdUtGiiu6TkPR1jtvz6d4ZR4Vm%2BuYruMdLONC3Y3ZrVuzK909ljpkTsO06dHMLnDQI8uy4SL1webS0jsR3FHzCFZKjGQyEsEIVUV0%2BLqrnXnpbpZ2oJmvEQm9MV%2F26dPRIp6bmI%2BmMepoIQCxSqoL3DmbfVQmfl04qJxPw0%2Fi8f753rBjxppR%2BVsvTJVH7iQeG6wJE%2FX7DAOwoqfyDaBOkCxDctsVM46w1YVTFonl5qhDkiqcHPBDvYRtN817B0H8MlTNaMKK748QGOqUB2P8m%2BdlnSBlO7W%2F3eYjpyo4IFOFP2Wcqpx8TiDMid6kxOVZGPI2CM2Z%2FpwBfpYWw4jDTANSMSP1hnaU05wQk4Iz7vtB2c5%2ByVlm8rL92JfMpxXrwZUto2a%2BGEHX%2FhonlWGfX50LYdmm%2BXETZNlNZk0kIQ0dJqedIZ11px4Yn9%2B3zYHVQOUE23e2TXkyZtofPcgiHsno7YZFMrlZDagMuPeK%2BQ92o&X-Amz-Signature=231c3cef5b01cb14a3990b44cd690cb8858870f9697dcb1b8157e2e01573f820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
