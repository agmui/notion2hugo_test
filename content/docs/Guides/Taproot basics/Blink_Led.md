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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LG5UEEF%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFT5xNdKFmEdxLI1sjrPcsCf08WoBV0mjHX7qX%2BzG7OTAiB%2F3Y51QgKTlJDxncoY%2BsKa6UO%2BlpEgCmj1WT5Q8NCwziqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpra1DhLlbN5LwoCcKtwDiKOpMiqLX2podf%2FbWIi3OrjXW1FObGZBtPsywCNeTDbYUHXMdfY6wrYpgx6tEHuRgypIvvSJhDATWLCR0Jls5ui7E71izZvazPtADUk6hhZZ5Y%2BrYLr%2BYZbCiT1%2F7612rULCx2t2sp2Ufx1CP8yg172gPp%2BK7bNEY5%2BhwVf9ae%2FQIbiVESqZaPEDpfVCLe6EvkNXEqgg5Eqc35zbHdFsTphrVw4tTU1BobO%2B8zEiCkgPaTKek3adJhppZ44Fg9DUHeleCQ1%2F4YecoCWfDd5WdPrnGkQK7iTFD%2Bhtv727vP2niYZFKvXtubshOX7V%2F0f3N0H%2FCVbhci6PNryohQxE%2BO5e4GTBu5b0%2FfnZ11O99ms8YxY9AJ6Yv34FwEQRrFmTZe8rtG8Q0skTTYTcyPp6ej7uWEtowh2h%2BslJTVmebh1o7pnVN1RIihgJx9ygtKZpdlLumdGldLKcQRwr%2FR%2FJ3AzJonabANcMn1JBKPwMSf0DmdSuM8ojyjGMr3%2FuiITLgjxqtkWKAA1Ed4kb43OLDsSUGtRG%2F%2BMEAcZBDFV0FRoX9%2B7nU6IrCtfP0O8IQMzEGN9qwcZSX%2FQf%2F%2BGfnazeS4lgAN27X7vsxVl9f5fqUQj3QIAQIhGkSpQLDLcw9vDRygY6pgE2cQOatVWXes%2B0tscMVcLvjYtRrDKWNj06u9N%2BxiQmaZBF8smev06LUFoyw3oniCHq1YvVfYqJgQwnL9HIA3wt3tC4ynpzw%2FAYA9k%2FinLnsO7IeWUWJZmFi5l7MBded%2F2nLkkJi1P3z%2BEH80JEAtjeKCSjpWY2uw5ID2zjKKm8xt%2FOby73pd6Q86AFq3GzyRNa1kqmqhFBbqENlCQ4yyQZ1Qh4KaaP&X-Amz-Signature=bcb773351c6d765024c023cd855f06c8ea6b81132823d53e8947aecd5ed95f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBCAQOJ%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTNCfmjTRqGt5okrPvmAoktjlVMiZSWbbyPFu3WyN7NAiAR5rK9jSAIK9Eejha32SLFmVQWkbHZwkwdqMO01avU1iqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcnQSVGbyFCIsWcUqKtwDGKIVAeEk1ShSI5rZ6szOPcwHQA1XQA7PmrJO8v8mhnXFI%2FnjU6DXPqTA2BQsDbY4Qk6xxdxX9pP4chi6vDM8SHYxUYka4CLXFG7MxJO%2FgSbaBjxtMlo9tBb14qFRDOHHISJlovKKs%2Bqh38OdPmPyia1%2FutDk21ZkC9MY0B0aJsRpAtRmapEwLz5rHUoOEruWlt5ChHFWOX5Bmi4lAYis%2FH3gmj8KsoP3oNGv5jY77tDUHKBKh0HQ168wh19bSljLniS%2FeNcFVlTTbU356nWUTWZbxVn8w%2BTwEJtIAIIcbeMsQu3M5kjWisMy6wOqgGkccF0PY2tVvu5b3lyCdE2Cv75f2Pk8RaxBIOYoQdRm6nJ0dOhBqaQar0aSUfZeF1t37zcjag%2B6UpPFeo7A%2BIfQBQBAM%2BYIPnOvg3iC86LJ5v9U2hjpytuDmaY6eHsln9azsSgNF7spoG3Z1yrd80lA6b5VsXoXxqA2C1fyGxv%2FZIK%2FItv5TS0xgJTO0FxRCwvJ67RCfODg69ra7lbY4qVG%2FIpBvT0tjAeICVNIIt2gURTYNryzTZgeF73TAOaWaFwIzbp1NxyJccklSrkLdS5bXc73CjJLMn%2FbUdGu3T5t34JlPjYoBlmVJiyNkYswpfbRygY6pgGKUNVW85up7rrQODcqduF2Yn%2B5Qy9Vm5uWjGvCP3D9nGoqimJuzQ4ZQqU8Wt5Dxed%2F3U43al%2FJRaUOUNC0c81b%2BAaCVk2x%2FiNm4IrzJTBYTpI4P%2Bk1%2FgLvX42Mf33Iaaa6lyToCfH01qu5i6VDnSBnCsBrWa3mXJjPmkWT6yjnANGrky4Wbgc1QxLq6moHnUIwWaf3r%2BF8igusbcOjk%2BTgLCZWXfgf&X-Amz-Signature=c408280042f3e4ef137df84436bb91c7872268ecd292a6b3436712e9780ed58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
