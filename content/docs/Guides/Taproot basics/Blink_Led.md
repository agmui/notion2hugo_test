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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665FCIM3B%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIG29RoeHdvT5%2Ft6Eq9q5JtzQFBKufbwastrKmrJvC65oAiAF4mjgPxtqdOEhcKEiyE3rQ1KeiixTwVxUYr0Xf67scSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMgSmpjNObck6lbltqKtwDjSfUapa5ZPRfE%2B1B%2F3KYXIdcX2Pf8xWr7wKyFlpplQHlnYw4kDddhU5CunCG5lAzy9zUnmKGNBsGZsjN6fEq8KZBYOXW7qt1pgQ1RA9iDg%2BM10wwhsP651pYtnXQu60JSHXvkbSDl87dbLAPeFDlqQWBjcNHVJCfZC%2B8Yy12AgmX%2FDmkaFKV5YUt6K4Z7EE%2FXHCsOuXtDzhe2IkMvgAoy8NxDOEvsf1ImmmQ6CtTUmxkJIp87TohQHTsFXJxtPjSTYnUEmzMwCT9JClIynU9f7kode4KK%2Fpq0mp8gxbNgP%2BjG%2BDUWVNW6toZf2dCBHqpnZ4dGB2Csy5NBbb348GxFLRZ3blzid7jlw410xjvViz8gPmtK5R7xYwe0U%2BhYF01zdP51kaki%2FPpdxMn8S%2BiRnnGFEd51DhkdLU5I32fmLNR39JoWx6cqN%2FIzNLIeDkbY8j9%2FJcWTiKcmN9lL7kGW%2FCVXFDcS%2F0dzjQ9htO59FX8m46MCV8eMDE%2FEBmQuotDFNZZ%2BBJfS7VPriAgsVMST5AATlEtJyyGbCuCZn8d5Jg%2BkByoaZKzYKNHQdFWPdvCcDWkgzY7IIFKxU2d4FaoR%2B9bFOao6baLrDlJUzo876sEzy7XrfMsoKPFbd0w38SfwwY6pgEXUetlhaO85RXUo8pBop3lxMuMqjsT5Umf2hwf0NW9pwLPTxuFUNwBCD2e9d3OEUkd4AZFLIzyisTfUkMti6qyTswYeSVW%2FVOy2zhLTTtmZ5atWnQXOJpeagi7lhlRt%2Bl%2BJAIr9z7bBOBOJgNWEqRMkUgmtAuf4rRssbot2VqYcSugB%2F4riUrwJJMFDVZfmbnVr2euogyaXM2G1TSgBFgWXZPx9D%2FB&X-Amz-Signature=3396f60ae1eeefef10411d150d03973b98a4ff10428420b2d4ff44826530bbc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YDUNJEM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHqAhNzzlvbjPUtkX4wSmvA27sAD2KXwLs6WyXSaoDbnAiEA6D81S%2BEQqi0prM1EocS7L%2FATG1QN5aA8XwynHCmDKvEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMBvEGdF2rtIFbZEnircA1IO%2FxwT7IR3nhHwrrz%2BYVomk9jybuSZdi8na2AG1fuTH4TuWihbbQhP3ZgmO1cLyiGPEYK9v5v%2F2n1j1u0z9EJb16DAteZGIhHoplyamUwBefsvfAsADal3ERgMSuEgF5DNP8N0%2BRbP%2BqpzrHfRIuIAM6sbt4YOh%2FvtTE1jxbMHRouzD1KELpplPo920HVTJSf%2FuPeDqlAGbW%2Fw2vWwM72YTZrlSGUJwr5SpbsmUuT7pfkPxLgzOHAND7GnOjR%2BWH9soXKEnWMCOL3HYiZmWuw%2FxJYcKvhYHYycFTvNRVRUzvPq77laEhJM0VFzN99qH%2B%2BtYIldahdmMmtOjzpjLWgCqhQw348gw1lPtvDSPA4pYG%2FjkOmVaQBCa3WY4iL%2BlYSYOoCigiC6CR%2BR29s6aQelAzYYah2lojnio2mJdIBMwSE9Pth9hdnyAJWbdjjhHJUy7qfqAYzQL%2FSUteYQ3X9mU6nFklc8gJEoyFgEVtHGZF13gHma7awC%2B2AJnD9U8NEBrxEWyQsfpg0pN2ymYxhHBxrIkGMf7scd8B1hp8ihAvjuM5i3dY9SlxmAjlcQBZR8kgDNM7bYKwMo9ox2cSHg5DJSCGOprJDWnHCsTZlTxCyDFSLFokgsf1FKMIzEn8MGOqUBx33roAKBwL%2FJfHb%2FX8ZBpoXDomb1swf8s1D7qWlbF0vj4Zr4ATS8AlKfH7A90EB9fPi9q4StLtsmRDoRs%2FoydmBmdsl3YmMTOd%2FQPp91dwRy5oG%2FnNV2mifq0bFQZthazvVbjlwdMya61nS7PCwBLF9Vi%2FVdZMp4Ze%2FxH%2Bxz6JfQgaC8RJRclBTNeyOqCbnI8C6TutXGqdpFxtvgnvbXBhlDsyzu&X-Amz-Signature=ac4c59375884b33465db60dd2af5ed51699665fde1594c8e11275c5365c19984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
