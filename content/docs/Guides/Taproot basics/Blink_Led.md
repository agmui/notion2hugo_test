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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TSEG7TW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDn6zM6Zg%2FNy8qIGmbKKF10N0nOPHzyaGd0ljbUMnQDAiADbqpB4X04D6C40Sfc63kTuLrvCPOWqdZaf5UBQu9B6ir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2B%2B5z0fZrOcdkb8JDKtwDDi91H7ufgELzPUkRz9zDZ3wt4bLRWVZK7qrEpo2paQ9BqIEVWxP9NZF0jiwqUkjA520VKmu%2FjrAXTOX4Z66eoB1XiIesDUPBc%2FLwV%2FwH1URUkKIaIYp9qnxkmQhfC7aUuHlVR6vku25fw%2FKgXbZKMYZvVy3WaKoosFX9AXbE2Yx0%2FhhBM7Bta2ePK01dRKmYINR2VGew9kOGVH8LLYbVG8lg0ieIShrwzsqpnTAsQA9mJeAg6x193e3T6CLuhYssBJoehCKOy7FC3BzSORwRdLrsXMtbGaYexAVRSqddC1lfFpCdGyB8CEi7QOhT8ImZfKmpmPdmiQXZGBVF74iXdxU4CxaSWOQs1wsvd7ZzfG95OQ7%2FTyOctBk4LHi04F48rERsbIwuqUA%2FcUZaUfw%2BB6t7OxkZbN8LVxtaF7xDDW3T3HRi4n1AR%2BEf%2FxY6eE2BfzKfkf75y13tT8wK47uxXbKtAAc4BdYMan4hHgPbj%2Fx8ZjbTy6a3a0p10laBxM%2BSLu8GtAywloIMJEbGOHzG7BqkQ5Fq0kcPLdSSPQlsAJQd%2B7T0SpsXft%2FMcJ8ZdcLf7jmf3N1xWsfm9GGef77f7c6NAq2n9MozvUbWbpiCbxtPQEf4I%2Brv8u%2FCdVswp7CNwgY6pgHWKeQotf%2FEokhPElQT35wjWEvDlRc8REBxBj54JtWLimpvGFrm%2BozXgAvnu9v7RScoe1nq9%2BHfwFrcaFUZf9yDv3R7DSyIbCbVMWQJNowus1CXnhCDhlxMEC3YB4W1SvNXi29%2BmG0pnaTXH9p6Ah8pbdXDavvCPIutRsdzDz2ccA8E9HhEgA%2B1tkasBz3s438b8GMHgYEwiV85WOMj4SQu8ExfTWHs&X-Amz-Signature=e53e1927dd3d6b219603258b1b419a33a8508ef1f1f5b7c18d50b1cc702c14fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBNOLEC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrJwOsQuw47hmpR25UM4jIijSMnOUmJc4eQPRZEbuVZAiAxx%2Fh%2FNFLF4%2FrCU4PcmVeYuSY6719UYhAc7hxTCyg5ZCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIME%2FaoPN5ngICX%2Bp7AKtwD82Xcz2cDcYTqZG78RzsHlCw7c2Ba%2FU9Vy5B%2By8Sc86nKQLp418QNdthqr2JxX7l2t%2F8SmThaKZTYs9By5onSjdGITlZaDes3yA%2BHytA7w96tlOLYNBp6VaqjaqhkTf5hVo4E2O5FkRBr8HwPupLwS8GXUVg7J5ySOwRCjmDdYClLyrptfsf4bL8hesPjPSr9nDTT8CyNYNta0lfzBJHAJanHmOmMG3bjE0%2B1b3VdASUNDUAacAelHHMUfr4aTteidW9VNcv9V8ZNx7YuH7RkmG7k7XeM0zkvNI8n9RxH0QWcgX9ZkD2YxL%2Bp9E1cSp%2FTGIFOIodE5vju9w1iIRZvCt1DBOOG81IvuTL75m2dmXTOrSQIs4Kq0A2c6JALI7%2BJUswaBoPZncsRIQX9a%2Fys2rIiZuGu%2BUFthr3r23zqB%2B674SUzNWsNIrZlUl0e1viB15jakQZUP7qhKzR3BZo6D8pcn%2B7tDrnytpTwT5xjoC4EOpPcZYckxI4%2B6elaj%2F2oD5ZcEfXFAnyBwLcBx3njleAUesql5L2BxTzgvfJKoLAy9RkPuGPeM7Fh1JamgoC1tegelLADzKSNixb%2BhdIksh0Jq7KOAzkvlN8fVQXnRk2qJw33Gh6T5K7Au%2BkwupGNwgY6pgEdCDWGOEQlrFX5cVUirke5oYaEPWO%2FSHJa90H3%2B6HSEvveeKgTFgtagnzeEz6eRwrJ%2FpPG1faI939kBxNk%2BUljGUDLNztiYgWO62w8IBTHwHI6lyH%2B3MO%2FaODjTg5ZcCoqMPDsEzBKt4yyX4wfygwWflqkiP2ssegAnMx3MflkhZQ%2FYElzak54mJoIyKLgFfQECFz1ubmEnthwUouVgmKKObtGWl3b&X-Amz-Signature=e269b113631e70360210e8aebf8ec4b9c0fd955d479fad3bc0df4a5a6cd89119&X-Amz-SignedHeaders=host&x-id=GetObject)

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
