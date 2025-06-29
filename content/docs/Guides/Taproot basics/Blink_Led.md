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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RFU5UBL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICE2CbHHDaiMzcLICZiSx6gf%2F%2FNq%2F1bSqGz0gcrTbjfxAiEAyqr93d9QyQPpCkgFn%2FSaYbMkeFzbVbkOtC1sktm7z3AqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbSOQ6MitCJPqrtBSrcA4PrWuLqq31Xao1ABGtSAioxO%2FXzjNGqhuYDGZvueVL6HDf8zzpd9bzhP5COAorRHQUUoBmaU2JUxmSAxcD6EDovPqVzhegXGvo8dMgBhdc4nPjl4d1udMbrMUZ0QCwduZSsG52A3bOTfj8W8tQfYbKeEE11s7%2FDzhgVpnWdsTV9GfoNX5gbAqCx9ydNZahFj1dEt96H3y3d06L88JtlYpC3nKA%2BYHnkMU9Td7igKn2TWT79Lvh7XncKF1FdFOhlCEM5MMwL2tbcd8WyRn%2FaMtBQ7TJF7Scbial4vH85gAIATzmCsSpn827B7YWY9iorLJEle695Z8xQHVih%2B8XZxCugInsSH%2Bkk%2BXUbMlygexwTgZb0dlXA9UMheBik3wwKGbZ2vwdXPb737K2rzpOF8fIl%2B0ooeWY5Wbbu4iN1AP2HKL2bF3moheg6bGizsZqLoRvnYI%2FyA4dkNgpqnGB2T3IVqblahARf2ENgapVjKhbPHqpfGU13hNqJXiFEG5jTCzNsOyC8ybyqxO0kA8qot9wUuooSMubdZ77A4CVqS%2Bp07ti%2BvKEu%2B7VbyZxWPjiDG%2FMOw97vu02tQdtnR9PE4TDMlJveJmZHCf8rG05upMInjWnrdxX7V7SzAE1RMNWOgsMGOqUBlCvbhYDBYFKoNQ6%2FRj7NI9DtPACGgO1kn6l3VIxMOi6og7IsxM1MgFoWiko4eWEiF2peEIBvysbqtRJsfz9RiGW2Yvh4jVgBQp02FeXHvkFTH6NV%2Fou2Ss18m3E%2FMIqN92jwc6Ob5qYf2k931pbxicajgVFj3Xd9msTdAA6LZZANIS6P0nGwZ9Gg6upIWLL0oLdmyBVuqWpoaNlxvrq%2FOr6ZCjdD&X-Amz-Signature=30849c587097387dab145cae132797d0134ff6999a39cfaed677bc3a023a84d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JYQVFKN%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi%2BSvYAYsodDxzGddD8TO1quYJ6nJPMJDIi2zoRZ%2B4xAiEAlFQHxMUM9zoCk0qft%2FsMHFT8veYBOSJJK2i5GA2GqpEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPU9fHC13RQKSrNJQSrcA1AG6yTIjA5oL9lZCY5isIA5VvMlYYW9ErWztS4Zyhaldurg%2F8eDWaBO0%2B%2F9D5RCvi5pqOJWI7tsWdgFpCRjax5t5VKGtPVsEU6Cv68HbEsRdGpoQ0APNWffgRY0jJoETe9AfwMs74BQHOXJZINgwy2c0JjeBFt%2FZ4%2BIijr6f9jTAcBYPkltdEr4zpqzD5vj9vwEMQuNfqB%2BV%2F7a404qj5d7%2F937UBWTbw%2FjLo5G%2BSF9OQ08Fa0Bj7PYeMEOE%2Fs0r%2F4mWNAMdeGIf5QB996oaOD3OgKm5%2Fe57HvfK25Of0uXoL%2FxY6xHFollPtUd8AIwIYoTao1hFroL0Wcrgox2dfLtcD8tT559cSpbjuzJCrscIAoJ59CWlwMERxI%2FcPccG6cZD%2B0fODvbeDyOTKZ30w%2FRSCgtkg%2FCGIMEC9zUMI4MDwqHP18jgoK6qGOP8sZ9dii9RRFny5Qcpv2qbf4P%2FpgPgDysoRZEECL%2BW1BB6BBvdo1V0dRm5hDLAzDoEKvKOxJa4u5UOxcRRPXx8FCdGFT3clfbAU5lVCC1CoZC0DiXXAaaKFu8ByQBLzP4MIyJCslYAIl%2FfkSq9AIZbCDVnOVQL5gN9zz3qMQmnU9sDf5lPDyueGIO4KFmuLXPMLqYgsMGOqUBJGPd2nJtiYZjjdDRFRjlbHMtTjY2Uj3VZTF0BXJ6qMDsc5%2Fn8WACpX0gKQvDVknjUWkMFXH%2F7JbVAf2EkLXONBi3j0Im6QXNTDSd%2BdQH20dbiZbzpP6f47k%2BZbpoym9bmV94QV9jJskcVBi95ZfOxXNUIFsxOaOWVWqlPBywHEr2W2HUd7RhDNMpzY4QOrWfMfFi1SWvG5GIRqEltzLvzzJcLgNy&X-Amz-Signature=dc6d3140d17aa8724b99b99f0aafd1cf327f872d6df10778982bee5082750ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
