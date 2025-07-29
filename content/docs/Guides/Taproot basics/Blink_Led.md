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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2TK27A%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD6R1xIT18W3glAyGMMotRFWDwmz5H7pQslRSXL2S%2FuUgIhAI48bxHuIoarjaOrAAEhPWhGcnxfSWq23irFo8%2BmfInbKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT9puMQrMFN5sXskYq3AOeRHmBMTdWvs7RlMlrNrxMn6YelzKOD6ntEZb5cektDx4MeLc5xBbF%2Fms61uueVrREFJvg7hWKueKS%2Bmx3YRK3%2FQxkJUY%2Bn4fbKmHvo29FKm9YF8Fi3BRwBMhARMAwogVHg50OpZ6KoHG7za6Yw29ZdyrQ%2FhIZmFACfR%2BEnOtmqvL4VDjEvf9wPtBZ4fd3qBVpg63MdK%2FosqaSq0eXXDWhYuLDxmzUOu0C91klJVYV8jLCsAe57Dqp1FhmzS%2B7aDAgZhYRQug9P4GQy%2BxsCgLEgORfzGJDWu2syjCPK13PREDGbWwMROu1FdZI1pu7%2BsT7VY8O8ZflaM2z2tI4gtcyg6qaoWDbYb1XsdjdTEpgLDWzwlkYdm4%2B0fApMB4%2Fb1mxkJnxrXgjPTsH2PZa2UOOIYtPHviie8XehoHrV7sdHWLqVhYbXR0JAuoadm0ev3iDmMUB%2Bao%2FUPyoev3hngkhlGGfSonD%2BsyZkBpkxmUu%2F1DTPIW2fuXb1cmZxJNmvVy6QQQg4CcUOcurh6RjJ91BclIAVJ1H2VRv7il3qtK0iawNNXFzcXHzDE%2FvDCI0Y68YmRRAY538jU8auMx5N0pTJEql3ZfEcCFR7uGQGRwaVz9cG0briq9nvHqY6TDmsKLEBjqkAbt%2F2WwV4p3HIHNr4udxy0WoUSAsONd%2FTeJGlBtr7xc0436eLbskREpxl7mTNqnHWsJxAIjOAyq4xELKGj8idLG1RvqIbtfp6gyuxwwusITc4Br0cPZ9u3Oi%2Bkq021h6OMmVSDY3Zqpv2G%2Ba24vPMtg%2FNu7NXspqDZf60vv9J8agmaGGAPPEh%2FAHaVreOucmaUY%2BIoMEw1PcvfPmpgB98ccD%2FIrP&X-Amz-Signature=ed10443f6b05c423d364b8c86d7fb274f0d68c6fc5e0ae70954a7786ca065b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CNOJRB4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCNnkoP53hb2Au05uGMfJPyPeYUy644ACEvYZ4z%2FX%2Bh0wIhAJAteMQNArEUb5gYVhFIxzVgF0n10NI7T0%2FHySzCr8RzKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwv8QrkZYVpxmTZcoUq3ANR6xmOpt%2FVvUgZ9iHwa75ZeeR7SFjEKGM0%2FjPQH0Qn%2FsTzy29VzW7j0uZW%2FR9i%2BiadL%2B2Fsz1OPth8u2iXKyZTd%2B1ltUkLS9nUl9U3Euh6c0GuuiUoBYfDgpQBZYx2Std%2BSLvJQNF0Xy5Nx2Rg0v%2BWI28m0MIQ2Lhk8nC5wYK5I7PQw7Ie1MWOUiin%2F4ARFMWZZeZVdilfUdt0%2B5paoKDxElbVc%2FjHkDG2GkNrY7fQTe8Mx05o7P26wwVKPRMiUaDpQC6WQymHre8JYmLm2k0B%2BJjIbj0LUbUksjuD2Z%2FEl5j1LLFHOskzjycjJ5hni4rXTH%2FtgvFFEIPMyW2bJtALYDwLLVP2pSa1wB0RS%2F0vh38iM1tjALvp0lL%2BeU3Ey8N6dEgMWkmTPwuV%2BtIjijPw5nBvbDnU6p33VIy7LIFDq5MA4yyLFz25G%2BEPhMDVxT6wtuslCwZ0%2FR1Tg2IYWy9nOMlpnA8yP0xMcXzVTls3wxtUG7pEiR00NpYUkSaIrgHFs6kkBq49zowFScVYQ3QpeEQmtjmsFxht7R3HVOCIVQHmoE26smxZlQJCzZ22rK39sIjvqnf3Khwwny%2Ffm4ioRG6Ou1iEeWQkxwazCrhkxENVVxzPuGjDcTFRqTDlsaLEBjqkAe71va%2F7q14LmQevLSe8TdoDKBqXhsQ9nXFRfc6OaUZrQAXkto513MqXKhLAqxjr5WfWhuB9%2F4jhN4nO0OWUjq8UGtiZ3F6dmQn9RTHwg3gdyn9qEX52lGh9PiOCylGoN1iFVypGBuIMVd2CMKhEkhEiomxgTfSCtSfCLIBhvb%2BSxoOj9axZ4iWgmrR3CP9kuAvk9m8h5OwYeOj44jaCXHWyUe30&X-Amz-Signature=edc37e136725f25837d67974d144409b9108df80a5332cb54f0c390dfe49ad1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
