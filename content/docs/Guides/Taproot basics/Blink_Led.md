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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q625TGD5%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAnbnM6XTq%2BBIO3f9%2BGZMA5CnoR4aWGdOUEifttWcKHwIhAKg5pS%2Bf8KgkHCZpIBvE9Cd%2F3aJ4tFHgUsAwCld1U6XRKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy90R%2FUOgJv40%2FV9ygq3AMF8%2FN%2FSJmpXjzyKYAXnwrSz4kDEOARk0TFriZyQOSGO%2BFE7LIT23C4uBH5UKfU9Ay3uYquR3aEcPH6WPZ3itiZneWgXE%2FMLof%2BqCzkEsoW9OzPEd1r%2BjRyoSaJXShDqhbcQuCN4oRdS8YMk2hTpNVOXTUmpsYG9tl2lYyG6Vv25Gtcy1jeMyTQkeX2kIA6m0%2BQ16EhDIgUh6O8XyrlrY%2B7LF0x%2Bq%2FcCi5ZxHkVOK0aRLY1nBfnLP6QDfRzZCES%2BnuUGE5ftsjhp78QsgSqjZ4EdLSULYO9mccri9qfP9yHJriKVncS5vXeBkuh9I0CwbK4k5akGxxGg6%2FitjII4JyQAKeLL9YVNOCIvSejUD%2BRG1vETEWHQEBEjMBZM9rM16Gff51oiHEEfDUuN4v9a4B54gXlL4595QwOY5VAC1y6h8KQ%2BbHsTUYFaf9C1V66rQg4rx0gXYKuXWd0BGolFs9M%2B3xQwJec9cRdlSnVZWBWb80kYaYu13N3nyQpeZ9EYC1M4A8bFIYYs5kfitE64jF6q3HH%2FiFkBH8UrPqG%2B7xIhXTbbPtNgBWT1BMBGj3Wj9a9a5qnTSKv5fW5G%2BthcuMdf1dTY%2FoCjdL%2FaJfhFweOZpCAYali38IfpO%2B3YTC3167CBjqkAR%2BULZlHcSe5GSBG7vgUZ4lpYiVjh58gJcYcjMMsGNXwkbTeODl7fEI2dkxqRgD9ESQR4J96WLFql07u6n9HkHW4S2c%2BAuK6S%2B0NBy4r1hdckOprehpCc2pGdSaZR%2B7g556dbz9uF4NkK3oKCascahL3R%2F8DRqYAQYN3MrSXxQUzRN%2B8DbmT9U1gx8KQm4ye9T5VPCWkOGtIRumXOSG1%2F33L07J2&X-Amz-Signature=8540f40c993d51d00e02b7a4803a095f810912f6aed6ca4913602a85ae872854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGC23DM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEx%2FZbJ2g9qqBja56JdgpaNnVjit%2FSNID29Ofb8Nr28dAiEAhRO2Al7A5BsWRlv%2FxTgMkLAty7NoTegKvcfhFL4E438q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNCyJYaunBwQEDi1dyrcA%2FqVfI7SCDLyWpl4wyq38Kw8BxqKtdBVNY1pixmp02FPkcWM%2BtETz0tyCKW31IuvCREtif%2BsruAZkDTAX16d0eBo8wiSbdZVSlwHvBVCC0AWDLU6DCLxbvgpj0Qo6L1j4fkm18X2eVemUesAbXNmxpYPBI3ypGqiWCl3W37nNXTXtwhmrk2mPW9KmcD7JSgBoaBPtPUB8dZotHSAFT3QlPKc8PSmGye%2Ba415t00BRKzuXv1y2N%2B%2BQKEoy9wHMT3NXKwjILQOIlk44HhFlpuZvPLMUYKBOzhnkE6ovFE50TNMri4IDxABFkmLwOMOJ5E2kpSa4ENY%2Bq85m9wYrZ9yvM%2B6SQiZk%2FOV334g3XRemk94ZOTh05NIDNvscO36qjSkyvAudakqOw9QDy3D5PYJ64wNeKZRxtw2ERqMxKeBQqO4jqQqG%2FYb0pvW34ySVcOe2l43bHmZsz2hcXtdhq16i%2F9fXygFRPqJmzKjoWwNfHFbt3VQxEByKcSIchJFNHPr%2BFo3DMFwdVpHyHIctJ36OT6jcdb2YJv928Cu%2B8xe1J2XSyhrJoQxkuIFk6bhYF4xLUsPaTPl3bbXPHi35sHxUwKDW7mUhhL5fOfUScJKrskqfbYOZE%2BPcYXDgr4EMOfLr8IGOqUB3J66v33Qsl8rNKFZ4xr6XZs3t57V%2FRhu5xYFuel1jxv9lRvXE4XB7dyPoiIkwyMqdJlcJkUSwIvfFmssmJBicjbuiM%2BnA20kyopAsqb%2BHd8ZYvbXpi8ZDyprCvMfYAAQcgUHyTmgdYFsHOI45SD3kgO1duazoSmTDRmTab6KeM0KO7NXhGwbV56QXFivstl7gBs1RfkXPBJksU0qvUw%2BojqsXBpj&X-Amz-Signature=6c1c5c9f9470574619aad05bd2b6c42739dee0aa4a4b1677865f59f92c106a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
