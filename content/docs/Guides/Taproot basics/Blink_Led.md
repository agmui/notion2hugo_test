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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RIUHQN%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDTWdfUcJT28LiC1z6Ul8TtYlOIWioyyHkDLlxbGOb8%2FQIhAPF0bP2vH6H9Jox8MqLJOzHEmoiRI%2BdwHCT0NwI6S6DMKv8DCD8QABoMNjM3NDIzMTgzODA1IgwMgf%2BXDBbPMdQznqoq3AOwPOgp6LZ7fl%2BTreYOBdJ0doTqdW7%2BmzmBqnPv2Ae1gP9FE8NKGxlLwLLDFM7keGDAZ17MwPJmmq1AEqI6dSvP9aOd6VO05gWSaBixnufWAIQGzjSybiohzEoM5jCM%2Bp%2FtMGk7S%2F0cBvwMo7R%2FPiddp16lMJOXevcCgNNo3x8q1tHEhJH6sII%2BdWXuKAkVDnFhamRMo2YrzjFTXNeHdY%2FfIl1W66HzkSJs1IYX2KFTwbmhsrlAMavvnaNOsGBwkJEcpJJ1q7QWK5qSQctxkP%2Fp1YuQkJJanA798auw%2Bdynwk4mnI%2Fv2eHpQtvvON6Sj%2FllcyRBJ0omSGEFBtwlRrSda0Y7vbC%2BTd0ML0%2FlyD3yt1U78t9p2uQ1sO9OSbiedT2AyMh5Vk66vqt5TgMO6i0mYzIbq%2Fs5pwLBvmlX9vVlbR%2F1ZzywaCgZBItrrv4%2FgWxeaf5voCoILZO7%2B5rkzYfjdKYNBr4252sBphNBnvZbtIB8djYFEPanNkmvZUBdYQgIHos0SGN6bY%2FapSIZG5i9JEKTPdiqyfocdx5LGu94EwE4jKP%2FnpEHf5YHYEIm8dSHf9Lk2tAqFzvKKI3LVbs5NznvI%2F1yoJqIISw4Ujr%2FpHAA0Wzq7S2HILnrOTDQ2vzJBjqkAVdDHPoL4mtlQB%2FtxOVtc89EVrJn8yzW8ZyDLXa9KsozO6JVQkfvoCOjn%2B9CS98qBWX92peUTEyEIGOfH5NlSeTb5mLGmQjh1FGoPKkzHXsuhbTL94nu%2FeT6YI9y2kSquBAL1s5BFl4Stm9kHGfUy%2BrTNSyzF82NriZxE1Q1PMoJWdhxy%2B6jtT%2BVGQvj9bYVEu955wTSHuEyykHYmEsQM%2FiUv1WA&X-Amz-Signature=c772e83cd0a872b202a88366a4583db0956a238fec6cd5a35a45273f84106407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J47FLW4%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJFMEMCIHBFh9MMoTxqItdHesbTlJODc%2F9eSSsiykeMxEtF7P9mAh9IjXDDssVwWLb9d2g0JLLq9e1q5XoiqP6itFvkjlMbKv8DCD8QABoMNjM3NDIzMTgzODA1IgzVPhKcNs%2B3e0K%2FMWAq3AMF2n9jVsKurAqnxTdUUkgVn1QHYBdUwPQkl00XA4DcuqVyBHcqYnJ%2BdkFULOx9NRaVAaGjssG2vKg%2BBOeHOmEQaEDDfuP6o32UEsrRXym8JTZ6HfQkoNKcDX0IyHW4MrHXZt7ES9%2FG1dYzG0HngVrWvII%2FTr47yIbze5ZgVh61qSfCVRmsfmgfUnz6cR4LgR6Qw1pmL9ykCQq0%2FPm5v%2Be%2Fj4xbD1INxaZvObl82C4KuSdWUX9NFKwWv1aejHjc92w8TrzyJUqA%2BDqQkTamFQhRuY1QeVrNtpWJlbsOB%2BMVY%2FGqfwVwML%2FMJIAW3yAwLpIeE9bvlUUoVCerBSxltSc1yUoy1hSmwsTaOukHwuBXzYI37wqi%2BIMcjiRyBXhvdIAGWP3730ozaZSKApjKApCkFMtfOLDIuelOFifUDzVejgmiOYJQKd%2BcMPRz2jRluzn6HyDBXoUU3TRI%2Fd1MhrOBbDAwJRYpFh9%2FW4Y2B4Vwupbp1SPQRzKlxXINGgBrteorVZpxh6IsRAsctEFYWDUBNb2L1g9nITUz8nzgxNPDE7ewBc7a6R7nsHiLmmrB0kPKgUAUtDBx%2F%2BqljUvdGb2ALDY%2BzUjEMYjFvc7K6TbhHcQDpwrC2HBomfX8yDCN2%2FzJBjqnAVu4fyoZ5e6ZTXGV9WfUamCG%2By0A6mkCrEjXvEHoDLlPyYNxS79bgPFhdxnC%2B%2B6WxJyFAfl0nNOkrtuqtLLKbejl1e1v5EslWxY%2B2qPSKNrkcGLaa%2BQdmYbqspafGJVznNj%2BmU5RHY1YXbG7vwTfwo88mq40qm8%2Fz%2B5duyS9NOZAQGsdOvD1z8hMM7gCgKtsvE8abMqaSu%2FsDPrR4BYcV9VM19thQ6UX&X-Amz-Signature=d180fd8bba3c40ff01d1f12d5d7adcf066650c0c68e550d35d0d882cb91ce2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
