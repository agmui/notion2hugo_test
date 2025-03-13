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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2LYO6EM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBFZ0LbUw82PAHlnMbK43KGIBarvJU5R9ZirrtJ0QrKAiBQs7PKrdzQ%2By0HvjEsK14VP7c%2F3BmUU1CKACW1Zq7vSSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtrfrOuz17m1LaSedKtwDjCRTAgdo%2Fhqx3d%2FE9fBpmkEICYZZde6%2B3UU1I%2BY2RH8P%2BrYdxn3bcdjJxb0aoyeinPE08uPrIAuKhrueobQcPM6urjxA5CSBGgfNUyZ%2FPIqYp8OLV1Y9rP9mQ9vaPYldfy2ILZEVzQqqDcqXYj5bvdtpA%2FQ8drs3H4TDePszgd9ls0CfCE9b5vWUnzTocCSAQzwZJBTB964Muf1Ymdg8BIn5WxlEl7lBBGtzo5Ng8w%2F8535xjl65XDGz%2Fz%2BTeWot3OMOTrkIxcSKzrMb3wXU%2BvTrI7pkkJkHqlzyjU7EMTN%2FCTBTy1SQlSpKIKovuSlqhl6iQmBYt2sN9HTN%2BQpiQVcxzgwi6Zoke3XJOs00pKyfYvEK9iREj1zGr%2BQob6qLv0cSkYmPCcnZSz1OP41VnV53nZLyZz5hM1RxHbgcpjFR7waO98saHYOtDXBKlYp9%2FHDlfFQeOfaPrXPQR7rO3Cnn%2BmGDxY%2FzHFVMCI45C5n5lr47MGf0qk3YFzHpiKBRjJiQdE3AYnKyz04P%2BoNT9Qj8ItcZqTQeLcl8uAgDOFu2eR0OvDi%2BjBHN%2FrDU0Lq%2FAb17NC513WnnJcnPSrp3N73dJNg%2FYSCE2Uh3Jox3OOUNBARuMDgQSYqXzTEwwODIvgY6pgEzzCEzQhSfp2j0VCk5mcYhGzvMG28bw2xbNl7gDVxoVRjrWW1UT893xId0i5fVxCjSjKJwvxFSI8mTVeMLt2DiV7nDRi9FDw8ep%2BiPonUNIuyvEvdcZeZmzd3i2vRUkb1ZT8XZOC0AG6qaTU%2Bt8zpbzLxERyaefXcWnlAtbSoWGlnRWDAGVELEz1JKXt5RIlRcnfh8gYg5s%2Bg3OmRj9WynNZSLZean&X-Amz-Signature=4719f1c76f1101f7b32f3eaa40dd1a37c49bb04f198d686b41a7e5fc73f8c347&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCIU75J%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeKdpK382UctjWzHAbyiBgRBpYBNKPf9d849%2FcPQvlSgIhAPeBCTWY6WdJWuSyziROKsUYs01k1DRdbTJA4%2FwTsWsoKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuGez%2Bpp7dI1lg%2F6Eq3APOj89Rteun%2BoGZAZzaIYwKSJHCmtjgmfo6hXrY88sr8x5n1dNH3f6BRBF2NWbSq7e2QoHym%2FF6wl4uswAxQtEBNlScFnhiy1oy18huCNEt59P57krhN0lg6AS%2BEt9P90wJIekTPjMp55Q4Mi1O1osIL%2F4Az9dlr3cLYvuUauHY0SWDFzW5urHSSX7rfckOFRNlayTA0mXeH8t5YMnSiLU4%2F0nhr2JEPAjWiUUBgR6PtySeY%2BqbOTvTxV6ZmCxfw4mvm1mgupPT2sHrQ8d4AnBK5Bj9Q4lYxRvOBEgHex6Kt9Uo8YaydhmIgZjf4KVwTKema1zu%2BhJ%2FjigVx4yi0rJhF9n6th3levZjYRM6yQg2x4j76QwXTPYweWdJd%2Fx2Omr6kqvmQRRnwyc%2F5sA4W1ywASl3Ck%2F5zDU5krtNeu8DASTI%2Bdk%2FFgWj%2BcTJ64GvcelVizqAH991KHNX7IRBd%2BIS9iFZdvsOHe%2BZBnAql9L1qlokJ5Sy3rrK35PQlnshFgi%2FS9dYPyknYUFx%2BaoS%2BHN1uEGHzNz32flv0p5icPo7fg1YO2nMEg%2FUjpXwW9FeGyIzQtMOjetilsJOHATCRIDztXZYaKr4nXShdgIVUfRK2mpdxfPNfgRGrDCOnTC24Mi%2BBjqkAT9CIZlR1GTYHYovT7JukmGP696u9FUD2TWJCa1%2BuOMcBIrDjGSgqVTesiS9Od%2BhS%2BEsg39nmI5Hm637mewQNA9njvciYBe2Vrq2nNnZZLlsSWyeYSuiySYSIpGqRq1D%2B8Uz6oMCm%2Fuo548HFl0%2BQ3wj1j2U3euFcL768bwu%2Fw4DcGdZkjP96JmwKJ3tY2jeL4eCqyt4x4EzHP2zpSTtgzXhjO9Z&X-Amz-Signature=df2a68486e54b73d3e2590aa170ffb60c26b2ada8fa84f05350f707b1e628266&X-Amz-SignedHeaders=host&x-id=GetObject)

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
