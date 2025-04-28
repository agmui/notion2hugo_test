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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZXMC7M%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0DQ3rvH5pfwHKS2hImLQHS793pjh3oV%2Fcl2MrIiJPRAIhAM8L%2FaRPwSvmtHrp8MH8dGsj7mVkv%2FQr0uVwDL3DppOqKv8DCHQQABoMNjM3NDIzMTgzODA1IgzROVLahQFu07i7BnEq3AP5wrDyZlaFykQ8%2B2Pmv03MtEtwgCyFFQwIvHHEFL9QJ3%2BdlmrV8XH81Z2WyH31lhCqvwhjsN6DCaeInUH501%2BLy4DYbJX9S3i%2Fz3jR05jhLik%2B71rzkX%2FX%2FMN3dC6UZneQ9KobvD0D2zAdTXNP0eHhEibGITXJL%2FN203RDImaR0aFGQ6fWtEtD%2F5p0B1heRXUFAJ8LDeU0x1cyxmSrTynJAqPXdBsj%2BMOuRKHtDbNvY04bZy72qOUEPngF2oIsHGTcCD3BWA%2Buo1BOvXVgf0L94KdsM26u%2F5xhPnVEnWehFNOw7kWO4Qq5YXLFVsXHE7%2F%2BmleILuAbskldHghafUC3%2FP6C6uQfPUV7JsxZOVWQgdx2C5zjUqsmmFNdF0w6YXDHGGsUUE526MKp5iLwSN3fdCyE%2B2grh0ShLLpH5N9aBG%2F2MKcCXZQue60OzdZhOFDTuTuE8P31m4NyKYQl%2F%2FDJaQfFO2d6Qj5PSD2L0cZ%2BC30Rb4OWP9KYiIZGmsi7tlnZd94PRJ3xSDw7BbgIVlWaL0VA9%2Fe9m1AsyRB2oaIU%2FIMKNCgW6%2B%2BY%2FY8MwZdtFWr4U9lglgAIT3RZQNK7s580ec%2B4Q64Iu3lqCda453qMf5iib2SsxEh4JX9tjTDryL3ABjqkAUPqP%2BvPtABK3%2FbD%2BnQaMYw1lmgkzibi7ODNR%2B3kROxu%2BkpFXEsw2PfohnJ2qIl68J11XCTakcNGYErNTouxwr5ID147jn9GMgECxnkATWYWEibSgiNUAVpLX9IaN1Tml1CoI8EaxS1g%2BnrYoSOJ%2FJ5ZcwYyQAuSF5MdDB9uWhDsPG1Ftqgj2jDeD4A9GCaQxdF9J6gbPoblgduuDOGIZqRwUc%2BF&X-Amz-Signature=7877b6ce5ea4f0413b0efef1003446b946226add2e1a0996b50799b89421aa4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33BLUME%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5SSBX%2FLK6ZUYkqv50CeMBKBzMTOoJWBCHLAq8VOTqHAiEA2mb%2BppMFxGbiEe9Y9RzEfuD8QF%2FYD83fVIuiXk70ucQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJD5rdu7CtdCH349pCrcAw2a5uhlSr8GKJP1yQ%2FV6C%2BTZM2d2NFEn0AZ0e4zQvAy%2FqTrjBCDH4WphzMG%2BxrBCMa%2FmAvmjDS2T5J8l5C8dBGGs9RtxqmJYTmJvN%2FRG4AfVv4b717q3hl25dI7WMn0hiTDIWZFooPGcqXWCsS4Azv9cNYHY1c6KTgYM5AhO2SzrrngXQXgbgLdKqbtOoyFDuJaJn8QM7L24b8UQcgoi5uoXtfBXV5C1HH%2Fo1tJ4osDGbKJnUHuWYYRAj5LkqZ5sNZY9y0c7Nu5eJjjqbxv1WEWXfCNexvrVZnbyFsquCM2YJcLuoMqxSgU0%2F%2BipbKGNHY8tYHSffUHC4F9denfSY7C8%2F8Lq4cMnXGjVvf6b4UyLFdEhXyFy555O%2F4j9NU2YsZn7jwM73Rn7FpvagufdjxMCLBbUCns5lFx1puCOI0xsdFHclf8ZkGBx94UxZsDMmlFlCEZxbBbnMB7Wg88KKgyKQo85OchTP3me%2B%2B1bp4wrsoDNa%2F8yjX8JY9pygZPMZfSEk8Hah2qyDU%2F8d9rAyK8RWEGhK0tStSs%2FyHn948oGOlb2SFfqeLxJcMEVXiHY2jUwXTBbJUE9eSlkr7laoldQD%2F8FA%2BcQNM0PisfG4SwTQ8UqbEshymw2EqoMNzIvcAGOqUB2qXmUaeWUbzoArz8TUpX6Z9RWPSlXTZW8q2zfjvobR2BU7gCxee%2BN2h4Dhg2iMQeOLgpUHuAjWEAaUoELSa4nlQn9wJRCwFqhxUlko51cZLtY9qMS5qjSbB9JdZ1mUkDDiQWVGPuvhjDH9CLMEbk3XrJdGpw5o39qxknx%2Bn7HWwoPIXlezuaP8%2FWlqiXjB18ikjtzp8RF%2Fz3OwuBX06klbtrRjQy&X-Amz-Signature=4a2408e47ba4dce01b5915d91f742c0d1a86005fb5b76394dba954cf17cd320f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
