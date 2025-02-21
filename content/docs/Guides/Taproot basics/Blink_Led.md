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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC4H4YDH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXVI36I%2BBiiVlP%2BGhVt5h7B7EgELrtvkbmYwQIM3qqsAiEAqlgOGN8aPmQHtWlU26Gd0rfZsEpdMHDclFvBIva3CtQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlR1zpuIGLmKbFAyCrcA6tws7IsWdxhsbt2H2R56346zIakOmDyhfw0jeV0bqfiUZPP7fX2vNtSYmISl9CnkRmYiVjcYplYT81uxj3b5UxP%2FumLU%2Bo4ye6EOQ8r2JLfn1peCm3oSsXHOIyATNebds2%2B7qLgScgGPlngZRbaJW2lZ%2B9x7J2PcBdvsahWANknugVLeEmSGfbs9xk%2BazAeUx%2FBt1cx6CEWmZUWRe0t7ClErR1ZuAmcjbCMeXnxEe0fKMGDQIf2aYfU78YDE9ly%2FNsgheU43Fsg%2BrQzH3nW0ry4GMdZ%2BFgi1PDig8PfOigzN9UBdorXpDPGJafXuTPTPCdyqye8LDxqnnLbMDzclyh28rmn7ZfUjAFO8oVKg%2FxRNzYwttD7K5iIpWSN0xPeTU%2BMsZHroC0oyVxTNG3I8qYpbmTSyJJN8TpdIUddqQq5LGRkY0537GQvHglW8BBDNx6xXYarz%2BhcIcFOwEeqWCAMdG0uA4jx6ByjlM1wIGk9NrX5FwDKZ%2FeTEYqJ13lv8Rrml%2F4DhQ9prLUuoXez0cnIvlG2uW36BXsNTrKI3Ee3wp%2B8sIwJsqlaropL3mD0Jv8Xf6Vi%2BdI2b8DdBWlO9VZ92wVb4xPYeM%2FN%2B4Ub9%2BU9tPewkeUO6tDZcblwMKD74L0GOqUBzjzIqH4lEkcF2TI6nKWzlRfMrgWqplJMa0daOrRIOJj8wUCuOgfJXaBy5XLLdyF5Df%2FfavcNLPdT4BSilvzUO7ArOBhXhpSfI8frlgjlE%2F8aB1%2FUwf3M7N3eHt37PNWe3xFAr8zSCIuY5qSS5osaVgZO%2FpW2jk6N8lrzTObkwGxRMQmEMCWehzQ3qnyQRM3CMueg5HmDl4qPp43aFMbfee%2FVOTaL&X-Amz-Signature=b5fb9b2be70a383f578b10b3d89c562f010fd2354f6ef086f4a971b653ea1396&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DGOQTFH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2SpBNTvf1xcQitORVqQuxz9ORbChths5x%2FB5ALLVQ3QIgM4YAUUK9GbymkVmQiEpACL6WLp8S%2Br8N9fnPgbIeUPgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpAnomoLUahRbg7zCrcAxH4hsGqRyw67cB2KGcm0e14%2BdlLtp7Xgs1LrKigFO8YF3pGvT2m%2FojmIdktlDgjY2QkovcQhVk62VefYi%2BOOLMcjBZTiO8ZD1skrmlKGk%2FtRyELBHy0rE4E4A8fHwSXIr%2BZDji3NQ2QUS62ZIvmpJgIAy3m1NyYEktopJxGGVWWYeaYwtciovEknZjSVP6EoqxUPtZFwbX1pBbtO4fu%2Fn2zSptTPLfAZENI1r84zExBcIo5C0SwInDF0b3Rh9m84RQeMwWlZILYFVUyIFHXkx78qGQAUzx0%2BM096EQ0%2Bqq0pdFvoxdko4FayTYfbzF%2Fo3mL%2FxfTyIXm14LkE%2FinXJsHe3Zhjt4RLQddQlohxwXzEIDKpVq%2BMdaV2oED%2BC17S5Wi1xNw8aBQUEl%2Bk1BjqgNBjiv8E9QptXmAf%2Fgru3PXI5Ir7vtvz0xCXZsFfzFHu9SIkDThKFrZaR8hqMTdax849O%2BT%2F7jbhF1yGh5FXZkvE0H426F2dM2cloe7d5TK%2BRf3xkCkvxmyn4nV3T7akp4ForrdjB4ktIAM0TtHv7XEwX%2B5%2FK9GfTMT90%2B1FoqDM111p4DZFKFUEXfnFeExQxWqNYhCVLdhJg%2Fg%2FDfS9U%2FThCwjptDJHlWxq9CCMMD74L0GOqUBg6e5v8q5npsGEF8ShRAVt4BPat02vsJgl%2FpVpKxd7TnIKV3Zslf5ff3zRWq4o9AbzmiB3wX53hjUzH7wp8YpyXfVMpaVQajA198cLEgEvRAarl8A%2Ff%2BzDw3DYT2kJ927A411L4SxVRrECZ1RvCcZgMvWIUT67gfIkYxvSXJLvswS7BmrTixubccbc%2BvqX1%2FyDBB9VPmdjsbEOwUoRPTyYeQ6DIUr&X-Amz-Signature=c22258d975ad4c95b8f632b8ce7f2005396cea965163a71440fce125f573b96c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
