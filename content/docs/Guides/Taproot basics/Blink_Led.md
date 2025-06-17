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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYEJZXMZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcvdxX3jXZgIgnvhZ%2FbVidClzxy1sGR9ffNOM9E8qQ9AiEA3pZL7T8az91EmC3YMl8YMgidf9ml26tfX33S3p8YiYoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDO%2FY09WLUHvPJz67VSrcA906KcuV30yIxYvFeC%2FV%2BBy58MK43ykJ3jI2RybxD2BJAuV0yfpHWgpOD6Lu7oS1e3AIhC%2BXqJkL4qUGvzCOnI3bDqrjvOW6pzx3CS%2FFgT6KEwyvHBVO2I1n4gKwvAviPkOGUK77RHbJRUUKMOAOs8ezKL56mUhpg5RmYNtlo0XcWjMurjJ8JTRq9lJFt7SA0VtV1NzJnq%2FJMqFE8VLJ1ik02mBVTbCWLzd6vLZ99DxFThNk7IiwtOL53xVluRw58wfdsBkgpTQ3agl1uPwg6HT8WT1sa%2B5YfN7pDYRveQTlvWMYXZ4NJRzKEgXYU75H1yO%2F5yL%2BkNuAeEueJCEXUElO69kNxrMlzjjYRMD2aCWgmz2%2BxhYs7yuPyV17fdAnobSlbn3dvOtm%2B0l3Er%2FsXE9axr%2FzLjW38nBwekQbUw7iNQVU0WPoDlOp1mOGuKYwyudHp%2B6jyguDZYH9CXsSH%2BP3YLZq0o4Jk%2BEE0r5owsFO3FBqhAA2KqgqTSnN55u8aXoTPbEOknTH357tfPPcOD6qzPH1NC7C7rb7UA8f2VeqnnvvW2ORFM4UAfRqH%2FE11vLsn%2BjqoWV3r%2BAc%2FloxrI%2F3qNFY8UNCo6YfI3csye7Bp%2Bu4xHXxvDmqeIzuMJrBw8IGOqUBsi9o%2Fvbaf%2BnKlVscq56oKOO8Ca2GtR49Qup0GOSc%2BoCRMRAC1QWCvj%2FTU4UIsrLjAiopyavgzbujXlJR%2BdCwmKaGuPodgrGqEblJi0ZTMMVkHs8f4t3U1%2Bxc3RKSdKCRxSdR41XHb6SHqf6CjvMR5UK7Umd0WaJ4BY9vYPgNsHLIwxLMcH%2BokqFL3fjOxsYYrtNzJMe6wFQ0Cx8vEiQLmdp2YbpM&X-Amz-Signature=c1e62b5719f86519a4649e96f6bf6c5d653d6f24b533b71f4ba54d1c11a1c823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G4KWYOU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYL7gCHSSkK3PYSbDBpxYB5yPO4%2BbTSuXFleaV8DBsBQIgZVUmmH%2FVw61wYwIrrkQS7rYe1zsml%2BaKsQcZSfPIBUwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJUE7KzO%2FSSH%2FjH09ircA7Tb%2FoOZEvrEDXrzsSVxYAErAkWuAabaVP2ZEp7DpH2rfrNm3gCWcRcaVb58Vcy99We23iH1j8Z26bRHfqOXgF%2Fc7Zu8YpW37ey92LetwQ%2FCZHZ0HNwEcCGylyviCCdo9zjoZ2mm%2Btj83ewdjMEY0TZg6Gq6wtmB56XBYcoGEM5aJ19Wzr54Nfuw0WkDX0%2Fb%2BV5%2BYDxhoByhCJ5A83so0Q6RSkLL2uGLTgbM3Gu3wNDpJxiHCZyEdUdssLU5rsKId3RD6o13FqOUoBdKOkdCFhu7uH4uBRGNAPl0CnG4cFrVwyz5sysVujDDabBJozt9ciCpXdyk761J%2FljdyMie8rP3x9oz%2FCkLt%2FsgTOfIvOY7XeGQHvKVl72imfTML3Wb3yIraqsyDBBMYZeV3egTBhlXsIkfdog2Bm9THY0oqy8x%2B4yeAsCNUrao0pAuK5zaCheGigz8RgtbLr9LROjRJfOq0Bxk5zJEqk%2B1lHf%2BXOIlhivX4Hes%2BOiYBfpYSepLHOvihg7YuEnOkY5IKWD8yFifOpkgHua5hD1G3uXX45j4axdQaua8UMFOk8GC5cn1BQwFE8WQEiXi9UI9OYwZQX2ocC6aWqvT0KN6js4YvjJXQytueunQVSSsTxHiMJDBw8IGOqUBJXYb4QNDaeJPYg51cF29UNbK7j1UqBXSb7TfI2dcUres9L1AgJz4CH07w42kyxEJxq%2FratKMGL1OJsxwhp8P44ZTSQp8AbsOid5o4KSs%2BsltWQgXsNeKR2OBo0ENTAvc7wxNbCCIwWmqMogaYERjCy1maREbVPlMts3nlZaAlSPqnnM%2BQ%2Fv1yW%2BONu24Jt%2B0U9BIzpFug20qAD559hKB0mYX6kUT&X-Amz-Signature=0048c30d09c1c8227f485b5224aeec50d6ecc35f6731a4189d765a2229730cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
